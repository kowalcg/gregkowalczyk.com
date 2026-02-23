# Visual Direction: gregkowalczyk.com

## Approved Direction: "Dark Engineer"

A dark, techy developer aesthetic that signals "this person builds things" — not a polished corporate consultant site. The visual language of GitHub, Linear, and Vercel applied to a personal consulting brand.

## Why This Direction

**Brand alignment:** Greg is an engineer-turned-builder. The site should look like it was made by someone who lives in terminals and code editors, not someone who hired a branding agency.

**Competitive differentiation:** Every AI consultant in Ontario has a clean white site with stock photos. A dark, technical aesthetic immediately signals "different." It says "builder" before they read a word.

**Audience resonance:** Business owners exploring AI tools are already visiting GitHub, Vercel, and Linear. This visual language feels familiar and trustworthy to that audience.

**Reference sites analyzed:**
- **github.com** — Dark mode palette, card-based layouts, subtle borders
- **linear.app** — Gradient accents, smooth animations, premium dark UI
- **vercel.com** — Clean dark backgrounds, monospace typography, developer-focused
- **thevibemarketer.com** — Conversion flow structure (NOT the light aesthetic)

---

## Color System

### Core Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0d1117` | Page background (GitHub dark) |
| `--bg-secondary` | `#161b22` | Card backgrounds, elevated surfaces |
| `--bg-tertiary` | `#21262d` | Hover states, active elements |
| `--text-primary` | `#e6edf3` | Main body text, headings |
| `--text-secondary` | `#8b949e` | Muted text, labels, captions |
| `--border` | `#30363d` | Card borders, dividers, subtle separators |

### Accent System

| Token | Hex | Usage |
|---|---|---|
| `--accent-purple` | `#7c3aed` | Primary accent, gradient start |
| `--accent-blue` | `#3b82f6` | Secondary accent, gradient mid, links |
| `--accent-cyan` | `#06b6d4` | Tertiary accent, gradient end, highlights |
| `--accent-gradient` | `linear-gradient(135deg, #7c3aed, #3b82f6, #06b6d4)` | CTA buttons, border accents, hero elements |

### Effect Colors

| Token | Value | Usage |
|---|---|---|
| `--glow` | `rgba(59, 130, 246, 0.15)` | Card hover glow, button ambient light |
| `--glow-strong` | `rgba(59, 130, 246, 0.25)` | Active state glow |
| `--gradient-text` | Same as accent-gradient | Applied to key headings via `background-clip: text` |

---

## Typography

### Font Stack

| Role | Font | Fallback | Weight |
|---|---|---|---|
| Headings | JetBrains Mono | Fira Code, monospace | 700 (bold), 600 (semi) |
| Body | Inter | -apple-system, sans-serif | 400 (regular), 500 (medium) |
| Code/accents | JetBrains Mono | monospace | 400 |

### Type Scale

| Element | Size (desktop) | Size (mobile) | Line Height |
|---|---|---|---|
| H1 (Hero) | 3.5rem (56px) | 2.25rem (36px) | 1.1 |
| H2 (Section) | 2.25rem (36px) | 1.75rem (28px) | 1.2 |
| H3 (Card) | 1.25rem (20px) | 1.125rem (18px) | 1.3 |
| Body | 1.125rem (18px) | 1rem (16px) | 1.7 |
| Small/caption | 0.875rem (14px) | 0.875rem (14px) | 1.5 |
| Code snippets | 0.9rem (14.4px) | 0.85rem | 1.6 |

### Typography Styling

- **Gradient text on hero H1:** `background: var(--accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- **Monospace accents:** Process step labels (`discover()`, `build()`) use JetBrains Mono with syntax-highlighting color treatment
- **Section headings:** JetBrains Mono, subtle gradient underline accent
- **Body text:** Inter for readability on dark backgrounds, generous line height (1.7)

---

## Layout & Spacing

### Grid System
- Max content width: 1200px, centered
- Section padding: 6rem (96px) top/bottom desktop, 4rem mobile
- Card grid: CSS Grid, auto-fill, min 300px
- Gap between cards: 1.5rem (24px)

### Responsive Breakpoints
| Breakpoint | Width | Layout Changes |
|---|---|---|
| Mobile | < 640px | Single column, reduced padding, smaller type |
| Tablet | 640-1024px | 2-column grid, nav collapses |
| Desktop | > 1024px | Full layout, all animations active |

---

## Component Design

### Navigation
- **Style:** Sticky top bar, transparent on hero, solid `--bg-primary` on scroll
- **Background:** `backdrop-filter: blur(12px)` with semi-transparent `--bg-primary`
- **Links:** `--text-secondary` default, `--text-primary` on hover
- **Active section:** Subtle gradient underline
- **Mobile:** Hamburger menu with slide-in panel

### Cards (Services, Case Studies, Tech Stack)
- **Background:** `--bg-secondary`
- **Border:** 1px solid `--border`
- **Border radius:** 12px
- **Hover effect:** Border transitions to gradient (`--accent-gradient`), subtle `--glow` box-shadow
- **Padding:** 2rem (32px)
- **No drop shadows** — borders and subtle glows only (matches GitHub/Linear aesthetic)

### Buttons
- **Primary CTA:** Gradient background (`--accent-gradient`), white text, 12px radius
- **Hover:** Slight scale (1.02), increased glow
- **Secondary:** Transparent with gradient border, gradient text
- **Disabled:** Reduced opacity (0.5)

### Code Blocks (How I Work section)
- **Background:** `--bg-tertiary` or slightly darker
- **Font:** JetBrains Mono
- **Syntax colors:** Purple for function names, cyan for parentheses, blue for comments
- **Border-left:** 3px gradient accent
- **Subtle terminal chrome:** Dot indicators (red/yellow/green) at top

### Results Bar
- **Background:** `--bg-secondary` with subtle gradient border top/bottom
- **Numbers:** Large (2.5rem+), gradient text, JetBrains Mono
- **Labels:** Small, `--text-secondary`, Inter
- **Animation:** Count-up on scroll into view

### FAQ Accordion
- **Closed state:** Question in `--text-primary`, `+` icon in `--text-secondary`
- **Open state:** Answer slides down with easing, `+` rotates to `x`
- **Dividers:** `--border` between items
- **Hover:** Subtle background shift to `--bg-secondary`

### Contact Form
- **Input fields:** `--bg-secondary` background, `--border` border, `--text-primary` text
- **Focus state:** Border transitions to `--accent-blue`, subtle glow
- **Submit button:** Full gradient CTA treatment
- **Labels:** `--text-secondary`, small, above inputs

---

## Animation System

### Principles
- **Subtle, not distracting.** Animations enhance, not entertain.
- **Performance-first.** Only animate `transform` and `opacity` (GPU-accelerated).
- **Reduced motion respected.** `prefers-reduced-motion: reduce` disables all animations.

### Specific Animations

| Element | Animation | Trigger | Duration |
|---|---|---|---|
| Hero typing effect | Text appears character-by-character, cursor blinks | Page load | 80ms per char, 3s pause between phrases |
| Background grid | Subtle animated dot pattern, slow drift | Always | 20s cycle |
| Section content | Fade-in-up (translateY 20px -> 0, opacity 0 -> 1) | Scroll into viewport | 600ms, ease-out |
| Results bar counters | Count from 0 to target value | Scroll into viewport | 2s, ease-out |
| Card hover borders | Border color transitions to gradient | Mouse hover | 300ms |
| Card hover glow | Box-shadow fades in | Mouse hover | 300ms |
| Nav background | Transparent to solid | Scroll past hero | 200ms |
| FAQ accordion | Height auto with smooth expand | Click | 300ms, ease |

### Implementation Notes
- **Typing effect:** Vanilla JS, no library. Cycle through phrases array with configurable speed.
- **Scroll animations:** Intersection Observer API with `threshold: 0.1`. Apply `.visible` class.
- **Counter animation:** `requestAnimationFrame` with easing function. Triggered once by Intersection Observer.
- **No animation libraries.** Keep bundle size minimal for Astro's zero-JS-by-default philosophy.

---

## Background Treatment

### Hero Background
- Base: `--bg-primary` (#0d1117)
- Overlay: Subtle animated dot grid pattern using CSS radial-gradient
- Dots: 1px, `rgba(139, 148, 158, 0.15)`, spaced 24px apart
- Optional: Very subtle gradient wash from top-left (purple tint) to bottom-right (cyan tint) at 5% opacity

### Section Backgrounds
- Alternate between `--bg-primary` and `--bg-secondary` for visual rhythm
- Results Bar: `--bg-secondary` with gradient border accents
- Case Studies: `--bg-primary` (cards provide contrast)

---

## Image Treatment

### Headshot
- Shape: Rounded corners (16px radius), not circular
- Border: 2px gradient border (accent-gradient)
- Size: 280px wide on desktop, 200px mobile
- Effect: Subtle `--glow` on the border
- Source: Greg's professional headshots from Google Drive

### Tech Stack Icons
- Style: Simple, monochrome white/light icons at 80% opacity
- Hover: Full opacity + subtle color (brand color of each tool)
- Size: 40-48px
- Grid: Flex wrap with generous gap

---

## Imagery Philosophy

**No stock photos.** Ever. This site uses:
1. Greg's real headshot
2. Tool/tech logos (SVG, monochrome)
3. CSS-generated visual effects (gradients, grids, glows)
4. Typography and spacing as the primary visual language

The absence of stock imagery IS the aesthetic statement. It says "engineer" louder than any hero image could.

---

## Quality Benchmarks

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Color contrast (WCAG AA) | All text passes 4.5:1 minimum |
| Focus states | Visible on all interactive elements |
| Touch targets | Minimum 44x44px on mobile |
| First Contentful Paint | < 1s |
| Largest Contentful Paint | < 1.5s |
| Cumulative Layout Shift | < 0.1 |
