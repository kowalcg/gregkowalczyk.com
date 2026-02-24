# gregkowalczyk.com — Personal Brand & Consulting Website

**Live site:** https://gregkowalczyk.com
**Deployed on:** Vercel
**DNS:** Namecheap

---

## What This Is

Personal brand website for Greg Kowalczyk — Mechanical Engineer turned AI implementation consultant and e-commerce entrepreneur based in Oakville, Ontario, Canada. The site positions Greg as an AI consultant who builds real tools (not just advice), targeting SMBs in the GTA.

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Astro 5 (static site) |
| Styling | Tailwind CSS v4 |
| Fonts | Outfit (body) + JetBrains Mono (code/accent) via Google Fonts |
| Deployment | Vercel |
| Sitemap | @astrojs/sitemap |
| Build output | `dist/` (static HTML) |

---

## Project Structure

```
gregkowalczyk.com/
├── src/
│   ├── components/         # All page section components
│   │   ├── Nav.astro         # Sticky nav with mobile hamburger menu
│   │   ├── Hero.astro        # Animated typing headline, CTA buttons
│   │   ├── ResultsBar.astro  # Animated metric counters (revenue, clients, etc.)
│   │   ├── Services.astro    # Service cards with glass-card styling
│   │   ├── HowIWork.astro    # Process timeline (terminal-styled steps)
│   │   ├── CaseStudies.astro # Split-layout case study cards
│   │   ├── About.astro       # Bio with gradient timeline
│   │   ├── TechStack.astro   # Pill-badge tech stack display
│   │   ├── FAQ.astro         # Accordion FAQ (single-open behavior)
│   │   ├── Contact.astro     # Contact form + info card with social links
│   │   └── Footer.astro      # 3-column footer with social icons
│   ├── layouts/
│   │   └── Layout.astro      # Base HTML layout, SEO meta, JSON-LD structured data
│   ├── pages/
│   │   └── index.astro       # Main page — assembles all components
│   └── styles/
│       └── global.css        # Design system: CSS vars, glass-UI tokens, animations
├── docs/
│   ├── brand-voice.md        # Brand voice guide
│   ├── positioning.md        # Positioning strategy
│   ├── keyword-strategy.md   # SEO keyword research
│   ├── website-copy.md       # Approved website copy
│   └── visual-direction.md   # Visual design system documentation
├── public/                   # Static assets (favicon, images)
├── astro.config.mjs          # Astro config (Vercel adapter, Tailwind, sitemap)
├── vercel.json               # Vercel deployment config
└── package.json
```

---

## Page Sections (top to bottom)

1. **Nav** — Sticky top nav with logo, anchor links, "Book a Call" CTA, mobile hamburger
2. **Hero** — Animated typing headline cycling through offer types, two CTAs (Book a Call / See My Work)
3. **Results Bar** — Animated counters: revenue generated, clients, projects, hours saved
4. **Services** — Four service cards: AI Readiness Assessment, Custom AI Tool Dev, Marketing Automation, E-commerce AI Integration
5. **How I Work** — 4-step process: Diagnose → Build → Deploy → Optimize (terminal card style)
6. **Case Studies** — Split layout cards: SunUp iOS app, TapeGeeks content system, RunMate Pro
7. **About** — Bio, engineering background, gradient career timeline
8. **Tech Stack** — Pill badges: Claude AI, N8N, Zapier, Klaviyo, Shopify, Amazon, React Native, etc.
9. **FAQ** — 8 questions covering cost, timeline, ROI, risk, agency replacement
10. **Contact** — Contact form (name, email, message, budget range) + info card with social links
11. **Footer** — Links, social icons (LinkedIn, X, Facebook), location, copyright

---

## Design System — Glass UI

The site uses a custom glassmorphism design system built in `global.css`:

- **Background:** Deep space dark (`#030712`) with noise texture overlay
- **Glass cards:** `backdrop-filter: blur(20px)` + semi-transparent borders + subtle inner glow
- **Floating orbs:** Three large gradient blobs (purple, blue, cyan) that drift and create background light sources for glass refraction
- **Accent colors:** Electric blue (`#60a5fa`), cyan, purple
- **Typography:** Outfit for body/headings, JetBrains Mono for code blocks and terminal cards
- **Animations:** Scroll-reveal fade-ins, animated counters, typing effect, orb drift
- **Reference:** Inspired by ViableEdge glass card UI pattern

---

## SEO Implementation

- Canonical URLs via `Layout.astro`
- Open Graph + Twitter Card meta tags on every page
- JSON-LD Structured Data (4 schemas):
  - `Person` — Greg's full profile, skills, social profiles
  - `ProfessionalService` — consulting services, service area (GTA/Ontario)
  - `LocalBusiness` — Oakville address, geo coordinates, hours
  - `FAQPage` — 8 FAQ Q&A pairs for rich results
- Sitemap via `@astrojs/sitemap`
- Social `sameAs` array: LinkedIn, X (Twitter), Facebook

---

## Deployment

**Platform:** Vercel (auto-deploys on push to `main`)
**DNS:** Configured via Namecheap → Vercel nameservers
**Build command:** `npm run build`
**Output:** `dist/` (static HTML, no SSR)

---

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Local dev server → localhost:4321
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
```

---

## Change Log

### v1.0.0 — Initial Build
- Full 9-section consulting website built with Astro + Tailwind
- Deployed to Vercel, DNS configured via Namecheap
- Custom domain gregkowalczyk.com live

### v1.1.0 — Lighthouse Font Optimization
- Converted Google Fonts loading to non-blocking (preconnect + async strategy)
- Improved Lighthouse performance score

### v1.2.0 — Glass-UI Redesign
- Full visual overhaul to glassmorphism design system
- Added Outfit + JetBrains Mono fonts
- Floating gradient orbs as background light sources
- Frosted glass cards across all sections
- Noise texture overlay on body
- Scroll-reveal animations on all sections

### v1.3.0 — Location Correction
- Updated all location references from Burlington → Oakville, Ontario
- Updated: Hero, About, Contact, Footer components
- Updated: index.astro meta tags
- Updated: JSON-LD structured data address and LocalBusiness schema

### v1.4.0 — Social Media Expansion
- Added X (Twitter) and Facebook profiles alongside existing LinkedIn
- Updated JSON-LD `sameAs` array with all three platforms
- Footer: expanded from 1 to 3 social icons with hover effects
- Contact section: added X and Facebook links
- Social handles: LinkedIn (`/in/gregkowalczyk/`), X (`@kowalcg`), Facebook (`Kowalcg`)

---

## Contact

Greg Kowalczyk
prekoconsult@gmail.com
905-334-9282
Oakville, Ontario, Canada
