#!/usr/bin/env node
/**
 * audit-build.mjs — Post-build correctness gate.
 *
 * Run after `npm run build`. Catches the class of bugs that shipped silently
 * before July 2026: dead internal links, missing OG/social images, duplicate
 * <h1>s, JSON-LD emitted outside the document, FAQPage on pages with no visible
 * FAQ, and apex/www domain drift in structured data.
 *
 *   node scripts/audit-build.mjs
 *
 * Exits non-zero if any check fails, so it can gate a deploy.
 */

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const PUBLIC = 'public';
const CANONICAL_HOST = 'https://www.gregkowalczyk.com';

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

/** Every .html file in dist. */
function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(full));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

/**
 * Search-engine ownership-verification files are bare tokens, not pages —
 * they legitimately have no <h1>, canonical, or meta tags.
 */
const VERIFICATION_FILE = /^google[0-9a-f]+\.html$|^BingSiteAuth/;

const pages = htmlFiles(DIST).filter((f) => !VERIFICATION_FILE.test(f.split('/').pop()));
const routes = new Set(
  pages.map((f) => {
    const r = '/' + relative(DIST, f).replace(/index\.html$/, '').replace(/\\/g, '/');
    return r.endsWith('/') ? r : r + '/';
  })
);

const failures = [];
const fail = (check, detail) => failures.push({ check, detail });

/** Does an internal path resolve to a built route or a real static asset? */
function resolves(path) {
  const clean = path.split('#')[0].split('?')[0];
  if (clean === '' || clean === '/') return true;
  const withSlash = clean.endsWith('/') ? clean : clean + '/';
  if (routes.has(withSlash)) return true;
  // static asset in public/ or emitted into dist/
  for (const base of [PUBLIC, DIST]) {
    const candidate = join(base, clean);
    if (existsSync(candidate) && statSync(candidate).isFile()) return true;
  }
  return false;
}

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(DIST, file).replace(/\\/g, '/');

  // 1. Dead internal links
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (!resolves(m[1])) fail('dead-link', `${page} → ${m[1]}`);
  }

  // 2. Social images must exist and be absolute on the canonical host
  for (const m of html.matchAll(/<meta (?:property|name)="(og:image|twitter:image)" content="([^"]*)"/g)) {
    const [, prop, url] = m;
    if (!url.startsWith('http')) {
      fail('relative-social-image', `${page} ${prop}="${url}"`);
      continue;
    }
    if (!url.startsWith(CANONICAL_HOST)) {
      fail('social-image-wrong-host', `${page} ${prop}="${url}"`);
      continue;
    }
    const rel = url.slice(CANONICAL_HOST.length);
    if (!resolves(rel)) fail('missing-social-image', `${page} ${prop} → ${rel}`);
  }

  // 3. Exactly one <h1> per page
  const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
  if (h1s !== 1) fail('h1-count', `${page} has ${h1s} <h1> (expected 1)`);

  // 4. Nothing may follow </html>
  const tail = html.split('</html>')[1] ?? '';
  if (tail.trim()) fail('content-after-html', `${page} — ${tail.trim().slice(0, 90)}…`);

  // 5. FAQPage only where the questions are actually visible on the page.
  //    Checks the real requirement — that each question text appears in the
  //    rendered body — rather than looking for a specific component's markup.
  const visibleText = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  for (const block of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let parsed;
    try { parsed = JSON.parse(block[1]); } catch { continue; }
    const nodes = parsed['@graph'] ?? [parsed];
    for (const node of nodes) {
      if (node?.['@type'] !== 'FAQPage') continue;
      for (const q of node.mainEntity ?? []) {
        // Compare on collapsed whitespace and normalised apostrophes.
        const norm = (s) => s.replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();
        if (!norm(visibleText).includes(norm(q.name))) {
          fail('faq-schema-not-visible', `${page} — "${q.name.slice(0, 60)}…"`);
        }
      }
    }
  }

  // 6. Structured data must not reference the apex host (splits the entity)
  for (const m of html.matchAll(/"(?:@id|url)":"(https:\/\/gregkowalczyk\.com[^"]*)"/g)) {
    fail('apex-in-schema', `${page} → ${m[1]}`);
  }

  // 7. Canonical present and on the canonical host
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/);
  if (!canonical) fail('missing-canonical', page);
  else if (!canonical[1].startsWith(CANONICAL_HOST)) fail('canonical-wrong-host', `${page} → ${canonical[1]}`);

  // 8. Every JSON-LD block must be parseable
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (err) {
      fail('invalid-json-ld', `${page} — ${err.message}`);
    }
  }
}

// 9. Sitemap must carry lastmod (the freshness signal Google was missing)
const sitemaps = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f));
if (!sitemaps.length) fail('no-sitemap', 'no sitemap-N.xml emitted into dist/');
for (const sm of sitemaps) {
  const xml = readFileSync(join(DIST, sm), 'utf8');
  const urls = [...xml.matchAll(/<url>/g)].length;
  const mods = [...xml.matchAll(/<lastmod>/g)].length;
  if (mods < urls) fail('sitemap-missing-lastmod', `${sm}: ${mods}/${urls} URLs have <lastmod>`);
}

// --- Report ---
const grouped = failures.reduce((acc, f) => {
  (acc[f.check] ??= []).push(f.detail);
  return acc;
}, {});

console.log(`\nAudited ${pages.length} pages.\n`);
if (!failures.length) {
  console.log('✅ All checks passed.\n');
  process.exit(0);
}
for (const [check, details] of Object.entries(grouped)) {
  console.log(`❌ ${check} (${details.length})`);
  for (const d of details) console.log(`     ${d}`);
  console.log();
}
console.log(`${failures.length} problem(s) found.\n`);
process.exit(1);
