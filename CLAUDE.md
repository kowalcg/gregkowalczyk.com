# CLAUDE.md — gregkowalczyk.com Project Context
> **Last Updated:** July 29, 2026
> **Project:** Greg Kowalczyk Personal Brand & AI Consulting Website

---

## WHAT THIS PROJECT IS

Personal brand and consulting website for Greg Kowalczyk. Positions Greg as an AI implementation consultant who builds real tools (not just advice) for SMBs in the GTA.

**Live URL:** https://www.gregkowalczyk.com  (apex 301s to www — **www is canonical**)
**Hosting:** Vercel (auto-deploy on push to `main`)
**DNS:** Namecheap → Vercel nameservers

---

## TECH STACK

- **Framework:** Astro 5 (fully static output)
- **Styling:** Tailwind CSS v4 + custom CSS design system in `global.css`
- **Fonts:** Outfit (body/headings) + JetBrains Mono (code/accents) — Google Fonts
- **Deployment:** Vercel via `@astrojs/vercel` adapter
- **SEO:** `@astrojs/sitemap`, canonical URLs, Open Graph, JSON-LD structured data

---

## FILE STRUCTURE

```
src/
├── components/       # One file per page section (22 files)
├── content/
│   ├── blog/<slug>/index.md    # 14 posts — markdown only, never pasted HTML
│   ├── projects/<slug>.md      # 12 projects; a markdown body means it gets
│   │                           #   a detail page at /projects/<slug>/
│   └── config.ts               # collection schemas
├── data/
│   ├── faqs.ts       # single source for the FAQ accordion AND the FAQPage schema
│   ├── media.ts      # podcasts/talks + their PodcastEpisode schema
│   ├── meetups.ts    # AI for Business meetups + EventSeries/Event schema
│   └── site.ts       # values that drift with time (years, current year)
├── layouts/
│   └── Layout.astro  # head, canonical, OG, and the JSON-LD @graph
├── pages/
│   ├── index.astro  about.astro  services.astro  contact.astro  media.astro
│   ├── news/index.astro  news/[...slug].astro
│   ├── projects/index.astro  projects/[...slug].astro
│   └── rss.xml.js
└── styles/global.css
scripts/audit-build.mjs   # post-build correctness gate — run after every build
docs/                     # brand-voice, positioning, keyword-strategy, website-copy
```

## DESIGN SYSTEM — GLASS UI

The site uses a glassmorphism design system defined in `src/styles/global.css`.

**Key patterns:**
- Dark background: `#030712` (deep space) with noise texture overlay (`.noise-overlay`)
- Glass cards: `backdrop-filter: blur(20px)` + `rgba` border + inner glow shadow
- Floating orbs: three large gradient blobs (`.orb-purple`, `.orb-blue`, `.orb-cyan`) that drift slowly in the background and create refracted light through glass elements
- Scroll-reveal: `data-animate` attribute triggers fade-in when element enters viewport
- Animated counters: `ResultsBar.astro` uses Intersection Observer to count up on scroll

**Typography:**
- Body/headings: `font-family: 'Outfit'`
- Code/terminal/accents: `font-family: 'JetBrains Mono'`
- Both loaded non-blocking via Google Fonts preconnect

**CSS custom properties (in `:root`):**
- `--color-*` — full color palette
- `--glass-bg`, `--glass-border`, `--glass-blur` — glass card tokens
- All components use these tokens for consistency

**Reference image:** `viableedge-glass-cards-detail.png` and `viableedge-glass-reference.png` in project root — used as design inspiration

---

## SEO ARCHITECTURE

### Canonical host
Everything — canonicals, schema `@id`/`url`, OG images, sitemap, robots — uses
`https://www.gregkowalczyk.com`. Schema previously used the apex while canonicals used
www, which split the entity across two identities in Google's index.

### JSON-LD
`Layout.astro` builds a `@graph`: **Person**, **ProfessionalService**, **LocalBusiness**,
plus **FAQPage** *only when the page passes `showFaq={true}`*. Page-specific nodes
(BlogPosting, PodcastEpisode, SoftwareApplication, ItemList) are passed in through the
`extraSchema` prop — never rendered after `</Layout>`, which used to emit the script tag
after `</html>`.

### The entity problem
"Greg Kowalczyk" is a contested brand SERP. As of July 2026 the site held positions 2, 10
and 16 while LinkedIn held #1 and positions 3–9 were two obituaries for a different
Gregory Kowalczyk, a namesake's Instagram, a retired professor, and a medical-device
entrepreneur. `/media/` exists to fix this: `PodcastEpisode` nodes tied to the Person node
via `subjectOf`, and every verifiable third-party URL in `sameAs`.

### Indexing
The sitemap emits `lastmod` (from `updatedDate ?? pubDate` for posts, file mtime for
pages) and `priority`. Google had not re-downloaded the sitemap between 2026-04-09 and
this refresh, and two posts were never discovered as a result. After content changes:
resubmit in GSC, then run `./submit-indexnow.sh`.

### Analytics
GA4 + Microsoft Clarity via `components/Analytics.astro`, inert until `PUBLIC_GA4_ID` and
`PUBLIC_CLARITY_ID` are set in Vercel. The site had zero instrumentation before July 2026.

### Keyword strategy
See `docs/keyword-strategy.md`, rewritten 2026-07-29 against measured data.
**Do not re-target local terms** — `ai consultant oakville`, `ai consultant burlington
ontario`, `ecommerce ai consultant` and `fractional ai consultant` all have no reportable
Canadian volume. Oakville stays in the NAP and LocalBusiness schema; it does not drive
titles.

### Social Profiles (sameAs)
LinkedIn `/in/gregkowalczyk/`, X `@kowalcg`, Facebook `Kowalcg`, GitHub `kowalcg`, plus
every podcast/talk URL from `src/data/media.ts`.

### Location
**Oakville, Ontario** — never Burlington.

## PAGES

| Route | Purpose |
|---|---|
| `/` | Hero, results, **next meetup banner**, services preview, case studies, projects preview, commercial block, about teaser, testimonials, **as-heard-on**, FAQ, blog preview, contact CTA |
| `/services/` | Six services, case studies, digital launch, how I work |
| `/projects/` | All 12 projects, rendered from the content collection |
| `/projects/<slug>/` | Build stories — sunup, runmate-pro, sportsclinicfinder, bronte-harbour-classic, helm, magpie |
| `/media/` | Podcasts, talks, teaching — plus the entity schema |
| `/meetups/` | AI for Business — the free monthly meetup series (Hamilton + Oakville) |
| `/about/` | Bio, timeline, tech stack, community |
| `/news/` + `/news/<slug>/` | 14 posts |
| `/contact/` | What happens next, fit/not-fit, form |
| `/rss.xml` | Feed |

## DEVELOPMENT COMMANDS

```bash
npm run dev       # localhost:4321
npm run build     # production build → dist/
npm run preview   # preview dist/ locally
```

---

## CHANGE HISTORY

| Version | Date | Summary |
|---------|------|---------|
| v1.0.0 | Feb 23, 2026 | Initial build + Vercel deployment, Namecheap DNS |
| v1.1.0 | Feb 23, 2026 | Font loading optimized for Lighthouse |
| v1.2.0 | Feb 23, 2026 | Full Glass-UI redesign (orbs, frosted glass, noise texture) |
| v1.3.0 | Feb 23, 2026 | Location corrected: Burlington → Oakville across all components |
| v1.4.0 | Feb 23, 2026 | Social media expanded: X and Facebook added alongside LinkedIn |
| v1.5.0 | Feb–Jul 2026 | Multipage redesign: services, projects, about, contact, news + 14 blog posts (undocumented at the time) |
| v2.1.0 | Aug 21, 2026 | Added `/meetups/` — the free monthly *AI for Business* series for Hamilton and Oakville business owners, with `EventSeries`/`Event` JSON-LD, a homepage banner (`MeetupPreview.astro`), and nav + footer links. First event: Hamilton, Sep 10, CoWork at the Cotton Factory. |
| **v2.0.0** | **Jul 29, 2026** | **Refresh + SEO overhaul.** Removed three fabricated testimonials that were live on the homepage. Fixed sitemap indexing (Google had not re-read it since Apr 9; two posts were never discovered). Unified schema on the www host, scoped FAQPage to pages with a visible FAQ, moved BlogPosting inside the document. Retitled `/services/` off a zero-volume keyword. Added `/media/` with PodcastEpisode schema and two 2026 podcast appearances. Moved projects into a content collection with six build-story pages, adding Helm and Magpie. Converted the two raw-HTML posts to markdown. Added RSS, GA4/Clarity, and `scripts/audit-build.mjs`. Images: ~18MB → 2.8MB. |

## WHAT NOT TO BREAK

Each of these corresponds to a defect that was live in production before July 2026.

- **Never publish a testimonial that isn't real.** `Testimonials.astro` shipped three
  invented quotes attributed to "Client Name / Business Owner / Company Name" under the
  heading "What Clients Say". The array is empty and the section renders nothing while it
  is. Real name, real company, real permission — or leave it empty.
- **No revenue figures in public content.** Cost-replacement figures are fine; brand or
  client revenue is not.
- **Canonical host is `www`** — everywhere, including schema `@id`s.
- **`FAQPage` only where the FAQ is visible** (`showFaq={true}`).
- **FAQ copy lives in `src/data/faqs.ts`**; the accordion and schema both read it.
- **Page-specific JSON-LD uses the `extraSchema` prop**, never rendered after `<Layout>`.
- **Time-varying numbers come from `src/data/site.ts`.**
- **Verify podcast/media dates against the source RSS feed**, never from memory.
- **Blog posts are markdown**, never pasted inline-styled HTML.
- **Race title:** Greg is **Executive Race Director** (short form "Race Director").
  "Race Co-Director" refers only to the completed June 2026 inaugural event.
- **Location:** always Oakville, Ontario — never Burlington.
- **Never publish a meetup date that isn't confirmed.** `src/data/meetups.ts`
  only emits Event schema for entries with `status: 'announced'` — which
  requires a real date, a real venue, and a live registration URL. Anything
  still being scheduled is `status: 'planned'` and renders as "Date TBA" with
  no schema and no register button.
- **A new page needs an entry in `pageFiles` in `astro.config.mjs`**, or it
  ships without `<lastmod>` and the build audit fails.
- **Run `node scripts/audit-build.mjs` after every build.**
- **Static build:** keep `output: 'static'`.
- **Font loading:** keep the non-blocking preconnect pattern.
- **Glass design tokens:** use the CSS custom properties, don't hardcode colours.

## CONTENT OWNERSHIP

All copy, positioning, and strategy documents are in `docs/`. Before rewriting any section copy, check `docs/website-copy.md` for the approved version and `docs/brand-voice.md` for tone guidelines.

---

## CONTACT INFO (for forms / structured data)

- **Email:** prekoconsult@gmail.com
- **Phone:** 905-334-9282
- **Location:** Oakville, Ontario, Canada


---

## CEO-Workspace — Global Sprint Tracking

All sprint tracking, daily notes, and cross-project logging use the **global CEO-Workspace** — not any local folder.

**Path:** `/Users/MacBook1/Library/CloudStorage/GoogleDrive-info@geartopdesign.com/Shared drives/Greg/0. AI/20. ORGO/CEO-Workspace/`

> The `Operations/CEO-Workspace` path this file used to name is stale — that vault stopped
> being updated on 2026-07-15. Check Daily-Notes recency before writing.

When running `/morning`, `/sync`, `/eod`, or `/sprint` from this project:
- All reads/writes go to the **ORGO CEO-Workspace** above
- Never write to a local CEO-Workspace folder in this project directory
