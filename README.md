# gregkowalczyk.com — Personal Brand & Consulting Website

**Live site:** https://www.gregkowalczyk.com (the apex 301s to `www` — `www` is canonical)
**Deployed on:** Vercel (auto-deploys on push to `main`)
**DNS:** Namecheap

---

## What This Is

Personal brand and consulting website for Greg Kowalczyk — mechanical engineer turned AI
tool builder and e-commerce operator, based in Oakville, Ontario. The site does two jobs:
it establishes authority (podcasts, talks, build stories) and it generates consulting
leads.

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS v4 + a custom Glass-UI system in `src/styles/global.css` |
| Fonts | Outfit (body) + JetBrains Mono (code/accent), non-blocking Google Fonts |
| Content | Astro content collections — `blog` and `projects` |
| Deployment | Vercel via `@astrojs/vercel`, web analytics enabled through the adapter |
| Sitemap | `@astrojs/sitemap` with a `serialize` hook that emits `lastmod` |
| Feed | `@astrojs/rss` at `/rss.xml` |
| Build output | `dist/` |

---

## Commands

```bash
npm run dev        # localhost:4321
npm run build      # production build -> dist/
npm run preview    # serve dist/ locally

node scripts/audit-build.mjs   # post-build correctness gate — run after every build
```

---

## Project Structure

```
src/
├── components/          # One file per page section
├── content/
│   ├── blog/<slug>/index.md      # 14 posts
│   ├── projects/<slug>.md        # 12 projects; a body means it gets a detail page
│   └── config.ts                 # collection schemas
├── data/
│   ├── faqs.ts          # single source for the FAQ accordion AND the FAQPage schema
│   ├── media.ts         # podcasts/talks + their PodcastEpisode schema
│   └── site.ts          # values that drift with time (years in business, current year)
├── layouts/Layout.astro # head, meta, canonical, and the JSON-LD @graph
├── pages/
│   ├── index / about / services / contact / media
│   ├── news/            # blog index + [...slug]
│   ├── projects/        # index + [...slug]
│   └── rss.xml.js
└── styles/global.css    # design system: CSS vars, glass tokens, animations
scripts/audit-build.mjs  # fails the build on the defects listed below
docs/                    # brand voice, positioning, keyword strategy, website copy
public/                  # favicons, images, robots.txt, verification files
```

---

## Rules that exist for a reason

Each of these corresponds to a bug that shipped to production. Please don't undo them.

**Never publish a testimonial that isn't real.** `Testimonials.astro` shipped three
fabricated quotes attributed to "Client Name / Business Owner / Company Name" under the
heading "What Clients Say". The array is now empty and the section renders nothing while
it is. Real name, real company, real permission — or leave it empty.

**No revenue figures in public-facing content.** Cost-replacement figures ("replaced $75K
in agency costs") are fine. Brand revenue and client revenue are not.

**Everything canonical is `www`.** Schema `@id`/`url`, OG images, sitemap, robots. Mixing
apex and `www` split the entity across two identities in Google's index.

**`FAQPage` only on pages that visibly render the FAQ.** Pass `showFaq={true}` to the
layout. It used to be emitted on every URL, including `/contact/` and every blog post,
which violates Google's structured-data guidelines.

**FAQ copy lives in `src/data/faqs.ts`.** The accordion and the schema both read it. When
they were maintained separately they drifted to 11 questions vs. 8.

**Page-specific JSON-LD goes through the `extraSchema` prop**, never rendered after
`<Layout>` — doing that emitted the `<script>` *after* `</html>`.

**Time-varying numbers come from `src/data/site.ts`.** "10+ Years in E-Commerce" was 12 by
the time anyone noticed, and the footer was hardcoded to 2026.

**Verify media dates against the source RSS feed.** The site listed two podcast
appearances as "2019 & 2021"; the feeds show 2018 and 2020.

**Blog posts are markdown, not pasted HTML.** Two posts were inline-styled HTML and so
inherited nothing from `.prose-blog`. They were also where every dead link and every piece
of rogue schema lived.

**Run `node scripts/audit-build.mjs` after building.** It fails on dead internal links,
missing or relative social images, pages without exactly one `<h1>`, content after
`</html>`, FAQ schema whose questions aren't visible on the page, apex-host URLs in
schema, unparseable JSON-LD, missing canonicals, and sitemap URLs without `lastmod`.

---

## Analytics

GA4 and Microsoft Clarity load from `src/components/Analytics.astro` and are **inert until
their IDs are set** — nothing renders in dev, so local traffic never pollutes the data.
Set these in Vercel → Settings → Environment Variables:

```
PUBLIC_GA4_ID=G-XXXXXXXXXX
PUBLIC_CLARITY_ID=xxxxxxxxxx
```

Vercel Web Analytics is enabled through the adapter. `@vercel/speed-insights` is
deliberately not installed: its optional `@sveltejs/kit` peer pulls a conflicting Vite
major and breaks `npm install`.

---

## After deploying content changes

1. Resubmit `sitemap-index.xml` in Search Console. Google did not re-download it between
   2026-04-09 and this refresh, and two posts were never discovered as a result.
2. Run `./submit-indexnow.sh` to push URLs to Bing/IndexNow.

---

## A note on this working copy

The repo lives inside a synced Google Drive folder. `dist/`, `.vercel/`, `.astro/` and
`node_modules/` are gitignored but still physically present, so every build pushes a few
hundred MB through Drive sync. Consider moving the working copy to `~/Sites/` — the
canonical copy is on GitHub either way.
