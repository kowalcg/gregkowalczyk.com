# CLAUDE.md — gregkowalczyk.com Project Context
> **Last Updated:** February 23, 2026
> **Project:** Greg Kowalczyk Personal Brand & AI Consulting Website

---

## WHAT THIS PROJECT IS

Personal brand and consulting website for Greg Kowalczyk. Positions Greg as an AI implementation consultant who builds real tools (not just advice) for SMBs in the GTA.

**Live URL:** https://gregkowalczyk.com
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
├── components/       # One file per page section
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── ResultsBar.astro
│   ├── Services.astro
│   ├── HowIWork.astro
│   ├── CaseStudies.astro
│   ├── About.astro
│   ├── TechStack.astro
│   ├── FAQ.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro  # Base HTML, all SEO meta, JSON-LD structured data
├── pages/
│   └── index.astro   # Page assembly + scroll animations
└── styles/
    └── global.css    # Full design system (CSS vars, glass tokens, animations)
docs/
├── brand-voice.md
├── positioning.md
├── keyword-strategy.md
├── website-copy.md
└── visual-direction.md
```

---

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

### JSON-LD Structured Data (`Layout.astro`)
Four schemas in a `@graph`:
1. **Person** — Greg's profile, job title, social profiles, skills
2. **ProfessionalService** — service types, area served (GTA/Ontario)
3. **LocalBusiness** — Oakville address + geo coordinates + hours
4. **FAQPage** — 8 FAQ question/answer pairs

### Social Profiles (sameAs)
- LinkedIn: `https://www.linkedin.com/in/gregkowalczyk/`
- X: `https://x.com/kowalcg`
- Facebook: `https://www.facebook.com/Kowalcg/`

### Location
- **Correct:** Oakville, Ontario (not Burlington)
- All components, meta tags, and JSON-LD use Oakville

---

## SITE SECTIONS (in order)

1. Nav — Sticky, mobile responsive with hamburger
2. Hero — Typing animation cycling through offer types
3. Results Bar — Animated counters (revenue, clients, projects, hours saved)
4. Services — 4 service cards (AI Assessment, Custom AI, Marketing Automation, E-commerce AI)
5. How I Work — 4-step terminal-style process cards
6. Case Studies — 3 cards (SunUp iOS, TapeGeeks content, RunMate Pro)
7. About — Bio + career timeline
8. Tech Stack — Pill badges (Claude AI, N8N, Zapier, Klaviyo, Shopify, Amazon, etc.)
9. FAQ — 8 questions, accordion behavior
10. Contact — Form + info card with social links
11. Footer — Social icons, links, location, copyright

---

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

---

## WHAT NOT TO BREAK

- **Location:** Always "Oakville, Ontario" — never Burlington
- **Social handles:** LinkedIn `/in/gregkowalczyk/`, X `@kowalcg`, Facebook `Kowalcg`
- **JSON-LD:** Located in `Layout.astro` — all 4 schemas must stay intact
- **Font loading:** Non-blocking preconnect pattern in `<head>` — do not switch to blocking
- **Glass design tokens:** Use CSS custom properties from `:root`, don't hardcode colors
- **Static build:** No SSR — keep `output: 'static'` in `astro.config.mjs`

---

## CONTENT OWNERSHIP

All copy, positioning, and strategy documents are in `docs/`. Before rewriting any section copy, check `docs/website-copy.md` for the approved version and `docs/brand-voice.md` for tone guidelines.

---

## CONTACT INFO (for forms / structured data)

- **Email:** prekoconsult@gmail.com
- **Phone:** 905-334-9282
- **Location:** Oakville, Ontario, Canada
