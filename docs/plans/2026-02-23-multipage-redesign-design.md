# Design: Multi-Page Architecture + Projects Section + Blog
**Date:** 2026-02-23
**Status:** Approved
**Scope:** Full site restructure from single-page scroll to multi-page architecture

---

## Summary

Convert gregkowalczyk.com from a single long-scroll page to a proper multi-page site. Update positioning title from "AI Implementation Consultant" to "AI & Digital Growth Consultant". Add a Projects page showcasing all built tools and apps. Add a Blog section. Home page becomes a lean landing page with preview sections linking to inner pages.

---

## Positioning Change

| Before | After |
|--------|-------|
| AI Implementation Consultant | AI & Digital Growth Consultant |

Update everywhere: Hero, meta title, meta description, JSON-LD structured data, Nav, Footer, About, og:title.

---

## Site Architecture

### Pages & URLs
```
/              Home — lean landing page
/services      Full services detail
/projects      All projects with images/placeholders
/about         Full bio, timeline, tech stack, speaking
/blog          Blog index (list of all posts)
/blog/[slug]   Individual blog post (dynamic route)
/contact       Standalone contact page
```

### Navigation
```
[Greg Kowalczyk logo/name]    Services  Projects  About  Blog  Contact    [Book a Call →]
```
- Every nav item links to a separate page — no scroll anchors
- Logo links to `/`
- "Book a Call" CTA button links to `/contact`
- Mobile hamburger with same page links

---

## Home Page — Lean Landing (`/`)

Sections in order:

| Section | Treatment |
|---------|-----------|
| Nav | Updated links → pages |
| Hero | Full — update title to "AI & Digital Growth Consultant" |
| Results Bar | Full — stays as-is |
| Services | Preview — 4 cards, shortened copy, "See All Services →" → `/services` |
| Projects | NEW preview — 3 featured cards (SunUp, RunMate, Content Creator PRO), "View All Projects →" → `/projects` |
| About | Shortened teaser — 3-4 sentences + career snapshot, "My Full Story →" → `/about` |
| Blog | NEW preview — 3 most recent posts (title + date + 1-line excerpt), "Read All Posts →" → `/blog` |
| Contact CTA | Simplified — headline + single button → `/contact` |
| Footer | Stays as-is |

**Removed from home (moved to inner pages):**
- How I Work 4-step process → `/services`
- Tech Stack pills → `/about`
- FAQ accordion → `/services`
- Full case study cards → replaced by Projects preview

---

## Inner Pages

### `/services`
- Hero banner: "What I Build" + intro paragraph
- 4 expanded service cards (more detail than home preview)
- How I Work (4-step process) — moved from home
- FAQ accordion (8 questions) — moved from home
- Contact CTA banner → `/contact`

### `/projects`
- Hero banner: "Things I've Built"
- Filter tags: All | iOS Apps | AI Tools | Automation | Web
- Project cards — all projects, each with:
  - Image placeholder (or screenshot/icon when available)
  - Project name + tag badge
  - 2-3 sentence description
  - Key stats (launch date, outcome, notable story)
  - Tech stack pills
  - Link button(s)
- Contact CTA at bottom

**Projects to include:**

| Project | Type | Tag | Key Stat | Links |
|---------|------|-----|----------|-------|
| SunUp by GearTOP | iOS App | iOS App · Live | Live Sept 2025 | App Store |
| RunMate Pro | iOS App | iOS App · Live | 39 rejections → approved, Live Sept 2025 | App Store |
| Content Creator PRO | Web App | AI Tool | Deployed on GitHub Pages | GitHub Pages |
| Analytics Dashboard | Internal Tool | Automation | Shopify + Amazon + Google + Meta | Ask me |
| gregkowalczyk.com | Website | Web | This site, Astro + Glass-UI | Live |

**SunUp card detail:**
- Summary: Personalized UV safety app — real-time burn time by skin type, 48-hour UV forecast, family mode, AQI tracking, GearTOP product recommendations. Built as a non-coder using AI-assisted development.
- Built with: React Native, Expo, VibeCode, Claude Code
- Integrates: UV Index API, AQI data, location services

**RunMate Pro card detail:**
- Summary: GPS run tracking with shoe mileage management, route history, and injury prevention tools. Built for runners who want data without the complexity.
- Built with: React Native, Expo, VibeCode, Claude Code
- Story callout: "39 App Store rejections before approval" — displayed prominently on card

**Images:** Placeholder slots for all projects. App Store screenshots/icons to be added later.

### `/about`
- Full bio (4 paragraphs, existing copy)
- Career timeline (visual gradient, existing style)
- Tech Stack pills — moved from home
- Speaking / community section (VibeMarketer talk Dec 2025, Bronte Runners co-lead, BHC Race Director)
- Contact CTA at bottom

### `/blog`
- Hero: "Writing" or "Thoughts" headline
- Blog post cards: title, date, tag, 1-2 sentence excerpt, "Read More →"
- Posts stored as `.md` files in `src/content/blog/` (Astro Content Collections)
- Dynamic routes: `src/pages/blog/[slug].astro`
- First post: placeholder structure, content written separately

### `/contact`
- Full contact form (name, email, company, budget range, message)
- Contact info card (email, phone, LinkedIn, X, Facebook)
- "What to expect" copy (response time, how engagement starts)

---

## File Structure Changes

```
src/
├── pages/
│   ├── index.astro          # Updated home page
│   ├── services.astro       # New
│   ├── projects.astro       # New
│   ├── about.astro          # New
│   ├── contact.astro        # New
│   └── blog/
│       ├── index.astro      # Blog listing page
│       └── [...slug].astro  # Dynamic blog post route
├── content/
│   └── blog/                # Blog posts as .md files
│       └── .gitkeep
├── components/
│   ├── (existing components, refactored as needed)
│   ├── ProjectCard.astro    # New reusable project card
│   ├── BlogCard.astro       # New reusable blog post card
│   └── PageHero.astro       # New reusable inner page hero banner
└── layouts/
    └── Layout.astro         # Updated title/meta per page
```

---

## Design System — No Changes

All existing Glass-UI tokens, animations, fonts, and CSS custom properties stay unchanged. New pages use the same design system.

---

## SEO Impact

- Each inner page gets its own `<title>` and `<meta description>`
- `/blog/[slug]` pages get individual SEO meta per post
- JSON-LD Person schema updated with new title
- Sitemap auto-generates all new URLs via `@astrojs/sitemap`
- Canonical URLs auto-set via existing `Layout.astro` pattern

---

## Out of Scope (this build)

- Actual blog post content (structure built, first post written separately)
- App Store screenshots / project images (placeholder slots built, images added later)
- Contact form backend / Formspree integration (existing placeholder stays)
- CMS / headless blog (flat .md files is sufficient for now)
