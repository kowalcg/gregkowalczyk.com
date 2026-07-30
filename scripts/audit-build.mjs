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

/**
 * No revenue figures in public content.
 *
 * Deliberately narrow. All of these are fine and must NOT trip:
 *   tool pricing        "Shopify starts at $39/month"
 *   cost replacement    "replaced $75K in annual agency costs"
 *   budget managed      "$2M+ in ad spend managed"
 *   project pricing     "builds run $5,000–$25,000"
 *   incremental result  "+$115K annual revenue from margin adjustments"
 *
 * What's banned is stating what a business *earns* — Greg's brands or a
 * client's. A bare "$X/month" carries no signal on its own, so every pattern
 * requires revenue context.
 *
 * Run `node scripts/audit-build.mjs --selftest` after editing these.
 */
const REVENUE_PATTERNS = [
  /mid[- ]seven[- ]figure/i,
  /\$[\d.,]+\s*[KMB]?\s*(?:\/|per\s+|a\s+)(?:month|mo|year|yr|annum)\s+(?:business|brand|company|store|shop)/i,
  /(?:business|brand|company|store|shop)\s+(?:doing|earning|making|generating|turning over)\s+\$[\d.,]/i,
  /revenue (?:of|is|was|hit|reached|at) \$[\d.,]/i,
  /(?:scaled|grew|took|built)(?:\s+\w+){0,3}\s+to \$[\d.,]+\s*[KMB]?\s*(?:\/|per\s+|a\s+)(?:month|year)/i,
  // Absolute revenue only, and only where the figure and the word sit on the
  // same line — a stat tile renders its number and label as separate elements
  // that only become adjacent after tag stripping.
  /(?<![+]\s?)(?<!additional )(?<!extra )(?<!incremental )\$[\d.,]+\s*[KMB]?[ \t]+(?:in[ \t]+)?(?:annual[ \t]+|monthly[ \t]+|yearly[ \t]+)?(?:revenue|turnover)\b/i,
];

/** Fabricated or unfinished content that must never reach production. */
const PLACEHOLDER_MARKERS = ['Client Name', 'Company Name', 'Lorem ipsum', 'TODO:', 'REPLACE_WITH'];

/**
 * Client identities that must never appear in shipped HTML.
 *
 * The rule is: case-study *figures and results are fine* — they're the whole
 * point — but the client must not be identifiable. Describe them by category
 * ("a long-established specialty retailer"), never by name.
 *
 * This check reads the raw HTML, not the visible text, because Astro renders
 * `<!-- -->` comments into the output. A comment reading
 * `<!-- Card 3: Auto Shop — D.JANC Workshop -->` shipped a client's name to
 * production for months. Use `{/* ... *␘/}` for anything that shouldn't render.
 */
const CLIENT_NAMES = [
  'D.JANC',
  'DJANC',
  'Chocolat on James',
  'Chocolat',
  'Todd McDaniel',
  'Pharmex',
];

if (process.argv.includes('--selftest')) {
  const mustFlag = [
    'a $537K/year business',
    'mid-seven-figure brands',
    'scaled his business to $700K/month',
    'revenue of $1.2M last year',
    'a store doing $80K a month',
    '$537K in annual revenue',
    'grew the shop to $50K per month',
  ];
  const mustPass = [
    'Shopify starts at $39/month',
    'Claude is $20/month',
    'competitors charge $249/month',
    'replaced $75K in annual agency costs',
    '$2M+ in ad spend managed',
    'builds run $5,000-$25,000',
    'coaching runs $3,000-$8,000',
    '+$115K annual revenue from margin adjustments alone',
    '$115K \n\n Revenue from Pricing Alone',
  ];
  let ok = true;
  for (const s of mustFlag) {
    if (!REVENUE_PATTERNS.some((r) => r.test(s))) {
      ok = false;
      console.log('  MISSED        :', JSON.stringify(s));
    }
  }
  for (const s of mustPass) {
    const r = REVENUE_PATTERNS.find((r) => r.test(s));
    if (r) {
      ok = false;
      console.log('  FALSE POSITIVE:', JSON.stringify(s), '->', r);
    }
  }
  console.log(
    ok
      ? `✅ revenue patterns: ${mustFlag.length + mustPass.length}/${mustFlag.length + mustPass.length} cases correct`
      : '❌ revenue pattern selftest FAILED'
  );
  process.exit(ok ? 0 : 1);
}

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

  // 8. No revenue figures in public content (see REVENUE_PATTERNS above).
  for (const re of REVENUE_PATTERNS) {
    const hit = visibleText.match(re);
    if (hit) fail('revenue-figure-in-public-content', `${page} — "${hit[0].trim()}"`);
  }

  // 9. Placeholder/fabricated content must never ship.
  for (const marker of PLACEHOLDER_MARKERS) {
    if (visibleText.includes(marker)) fail('placeholder-content', `${page} — "${marker}"`);
  }

  // 9b. No client identities anywhere in the HTML — including comments, which
  //     Astro renders. Checked against `html`, not `visibleText`, on purpose.
  for (const name of CLIENT_NAMES) {
    if (new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(html)) {
      fail('client-name-in-output', `${page} — "${name}"`);
    }
  }

  // 9c. Scroll-reveal elements start at opacity:0 and are only shown when an
  //     IntersectionObserver adds `.visible`. A page that uses .fade-in-up but
  //     never adds that exact class renders blank below the fold — which is
  //     what shipped on /media/ when its observer added `is-visible` instead.
  if (html.includes('fade-in-up') && !/classList\.add\(\s*['"]visible['"]\s*\)/.test(html)) {
    fail('fade-in-never-revealed', `${page} — uses .fade-in-up with no observer adding .visible`);
  }

  // 10. Every JSON-LD block must be parseable
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (err) {
      fail('invalid-json-ld', `${page} — ${err.message}`);
    }
  }
}

// 11. Sitemap must carry lastmod (the freshness signal Google was missing)
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
