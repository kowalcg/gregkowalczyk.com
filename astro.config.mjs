// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://www.gregkowalczyk.com';

/**
 * remark plugin — strip the leading H1 from markdown post bodies.
 *
 * Every post starts with `# Title`, but the page template already renders an
 * <h1> in its header. The old fix hid the second one with `display: none`,
 * which left two <h1> elements in the markup on 8 of 12 posts. Removing the
 * node is the actual fix.
 */
function remarkStripH1() {
  return (tree) => {
    tree.children = tree.children.filter(
      (node) => !(node.type === 'heading' && node.depth === 1)
    );
  };
}

/**
 * Build a URL → last-modified map for <lastmod> in the sitemap.
 *
 * Google last re-downloaded this sitemap on 2026-04-09 and there were no
 * <lastmod> values at all, so it had no reason to recrawl — two posts were
 * never discovered. Posts use their own updatedDate/pubDate; static pages use
 * the source file's mtime.
 */
function buildLastmodMap() {
  const map = new Map();

  // Blog posts — read the frontmatter dates directly (the sitemap integration
  // runs outside the content collection, so we can't query it here).
  const blogDir = 'src/content/blog';
  try {
    for (const slug of readdirSync(blogDir)) {
      const file = join(blogDir, slug, 'index.md');
      const raw = readFileSync(file, 'utf8');
      const fm = raw.split('---')[1] ?? '';
      const updated = fm.match(/^updatedDate:\s*['"]?([\d-]+)/m)?.[1];
      const published = fm.match(/^pubDate:\s*['"]?([\d-]+)/m)?.[1];
      const date = updated ?? published;
      if (date) map.set(`${SITE}/news/${slug}/`, new Date(date).toISOString());
    }
  } catch {
    // No blog dir yet — nothing to map.
  }

  // Project detail pages — mtime of the entry file.
  const projectDir = 'src/content/projects';
  try {
    for (const file of readdirSync(projectDir)) {
      if (!file.endsWith('.md')) continue;
      const slug = file.replace(/\.md$/, '');
      map.set(`${SITE}/projects/${slug}/`, statSync(join(projectDir, file)).mtime.toISOString());
    }
  } catch {
    // No projects collection yet.
  }

  // Static pages — fall back to source mtime.
  const pageFiles = {
    [`${SITE}/`]: 'src/pages/index.astro',
    [`${SITE}/about/`]: 'src/pages/about.astro',
    [`${SITE}/services/`]: 'src/pages/services.astro',
    [`${SITE}/projects/`]: 'src/pages/projects/index.astro',
    [`${SITE}/contact/`]: 'src/pages/contact.astro',
    [`${SITE}/media/`]: 'src/pages/media.astro',
    [`${SITE}/news/`]: 'src/pages/news/index.astro',
  };
  for (const [url, file] of Object.entries(pageFiles)) {
    try {
      map.set(url, statSync(file).mtime.toISOString());
    } catch {
      // Page doesn't exist yet.
    }
  }

  return map;
}

const lastmodMap = buildLastmodMap();

export default defineConfig({
  site: SITE,
  output: 'static',
  // webAnalytics injects Vercel's own pageview script — no extra dependency.
  // (@vercel/speed-insights was skipped: its optional @sveltejs/kit peer drags
  // in a conflicting vite major and breaks `npm install` on this tree.)
  adapter: vercel({ webAnalytics: { enabled: true } }),
  markdown: {
    remarkPlugins: [remarkStripH1],
  },
  integrations: [
    sitemap({
      serialize(item) {
        const lastmod = lastmodMap.get(item.url);
        if (lastmod) item.lastmod = lastmod;
        // Homepage and services are the pages worth recrawling most often.
        if (item.url === `${SITE}/`) item.priority = 1.0;
        else if (item.url.startsWith(`${SITE}/news/`)) item.priority = 0.7;
        else item.priority = 0.8;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
