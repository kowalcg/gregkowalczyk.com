# Multi-Page Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert gregkowalczyk.com from a single long-scroll page to a proper multi-page site with `/services`, `/projects`, `/about`, `/blog`, and `/contact` pages; update positioning title to "AI & Digital Growth Consultant"; add a Projects section showcasing all built tools and apps.

**Architecture:** Home page becomes a lean landing page with preview sections linking to full inner pages. Each inner page is a new `src/pages/*.astro` file using the existing `Layout.astro`, shared components, and the existing Glass-UI design system. Blog uses Astro Content Collections with `.md` files in `src/content/blog/`.

**Tech Stack:** Astro 5 (static), Tailwind CSS v4, `astro:content` for blog, existing Glass-UI tokens in `global.css`.

**Verification command (run after every task):** `npm run build` — must complete with 0 errors.

---

## Task 1: Update Positioning Title Throughout Existing Files

**Files:**
- Modify: `src/layouts/Layout.astro:19` (JSON-LD jobTitle)
- Modify: `src/components/Footer.astro:91` (tagline)
- Modify: `src/components/Hero.astro:88` (img alt)
- Modify: `src/pages/index.astro:17` (Layout title prop)

**Step 1: Update JSON-LD jobTitle in Layout.astro**

Find line 19 in `src/layouts/Layout.astro`:
```
      "jobTitle": "AI Implementation Consultant",
```
Replace with:
```
      "jobTitle": "AI & Digital Growth Consultant",
```

**Step 2: Update Footer tagline**

Find in `src/components/Footer.astro`:
```
      AI Implementation Consultant &middot; Oakville, Ontario
```
Replace with:
```
      AI & Digital Growth Consultant &middot; Oakville, Ontario
```

**Step 3: Update Hero img alt**

Find in `src/components/Hero.astro`:
```
              alt="Greg Kowalczyk - AI Implementation Consultant in Oakville, Ontario"
```
Replace with:
```
              alt="Greg Kowalczyk - AI & Digital Growth Consultant in Oakville, Ontario"
```

**Step 4: Update index.astro Layout title**

Find in `src/pages/index.astro`:
```
  title="Greg Kowalczyk | AI Implementation Consultant | Oakville, Ontario"
  description="AI implementation consultant in Oakville, Ontario. I build custom AI tools, marketing automation, and e-commerce solutions that replace $75K+ in agency costs. 28 years engineering + mid-seven-figure brands."
```
Replace with:
```
  title="Greg Kowalczyk | AI & Digital Growth Consultant | Oakville, Ontario"
  description="AI & digital growth consultant in Oakville, Ontario. Custom AI tools, e-commerce systems, SEO, automation, and app development. 28 years engineering + mid-seven-figure brands."
```

**Step 5: Verify build**
```bash
npm run build
```
Expected: Build succeeds with 0 errors.

**Step 6: Commit**
```bash
git add src/layouts/Layout.astro src/components/Footer.astro src/components/Hero.astro src/pages/index.astro
git commit -m "feat: update positioning title to AI & Digital Growth Consultant"
```

---

## Task 2: Update Nav — Page Links + Book a Call CTA

**Files:**
- Modify: `src/components/Nav.astro:7-15` (navLinks array)
- Modify: `src/components/Nav.astro:96` (mobile CTA href)

**Step 1: Replace navLinks array**

Find in `src/components/Nav.astro` (lines 7-15):
```javascript
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
```
Replace with:
```javascript
const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
```

**Step 2: Add "Book a Call" CTA button to desktop nav**

Find in `src/components/Nav.astro` the closing `</ul>` of the desktop nav links:
```html
      </ul>

      <!-- Mobile Hamburger Button -->
```
Replace with:
```html
      </ul>

      <!-- Desktop CTA -->
      <a
        href="/contact"
        class="hidden rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 md:inline-block"
        style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); font-family: 'Outfit', sans-serif;"
      >
        Book a Call
      </a>

      <!-- Mobile Hamburger Button -->
```

**Step 3: Update mobile CTA href**

Find in `src/components/Nav.astro`:
```html
          href="#contact"
          class="mobile-nav-link block rounded-full px-4 py-3 text-center text-base font-semibold text-white"
          style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); font-family: 'Outfit', sans-serif;"
        >
          Let's Build Something
```
Replace with:
```html
          href="/contact"
          class="mobile-nav-link block rounded-full px-4 py-3 text-center text-base font-semibold text-white"
          style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); font-family: 'Outfit', sans-serif;"
        >
          Book a Call
```

**Step 4: Update Hero CTA href**

Find in `src/components/Hero.astro`:
```html
            href="#contact"
            class="inline-block rounded-full px-8 py-4
```
Replace with:
```html
            href="/contact"
            class="inline-block rounded-full px-8 py-4
```

**Step 5: Verify build**
```bash
npm run build
```
Expected: Build succeeds with 0 errors.

**Step 6: Commit**
```bash
git add src/components/Nav.astro src/components/Hero.astro
git commit -m "feat: update nav to page links, add Book a Call CTA"
```

---

## Task 3: Create Reusable Shared Components

**Files:**
- Create: `src/components/PageHero.astro`
- Create: `src/components/ContactCTA.astro`
- Create: `src/components/ProjectCard.astro`
- Create: `src/components/BlogCard.astro`

**Step 1: Create PageHero.astro**

Create `src/components/PageHero.astro`:
```astro
---
interface Props {
  title: string;
  subtitle?: string;
}
const { title, subtitle } = Astro.props;
---

<section class="pb-12 pt-8 md:pb-16 md:pt-12">
  <div class="mx-auto max-w-6xl px-6">
    <h1
      class="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
      style="font-family: 'JetBrains Mono', 'Fira Code', monospace;"
    >
      <span class="comment-prefix">// </span><span class="gradient-text">{title}</span>
    </h1>
    {subtitle && (
      <p
        class="max-w-2xl text-base leading-relaxed md:text-lg"
        style="font-family: 'Outfit', sans-serif; color: #8b949e;"
      >
        {subtitle}
      </p>
    )}
  </div>
</section>
```

**Step 2: Create ContactCTA.astro**

Create `src/components/ContactCTA.astro`:
```astro
---
interface Props {
  heading?: string;
  body?: string;
}
const {
  heading = "Ready to Build Something?",
  body = "Tell me what's eating your time or budget. I'll tell you if AI or automation can fix it — and exactly how I'd build the solution.",
} = Astro.props;
---

<section class="py-16 md:py-24">
  <div class="mx-auto max-w-6xl px-6">
    <div
      class="glass-card p-10 text-center md:p-16"
      style="position: relative; overflow: hidden;"
    >
      <h2
        class="mb-4 text-2xl font-bold md:text-3xl"
        style="font-family: 'JetBrains Mono', 'Fira Code', monospace; color: #e6edf3;"
      >
        {heading}
      </h2>
      <p
        class="mx-auto mb-8 max-w-xl leading-relaxed"
        style="font-family: 'Outfit', sans-serif; color: #8b949e;"
      >
        {body}
      </p>
      <a
        href="/contact"
        class="inline-block rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
        style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); font-family: 'Outfit', sans-serif;"
      >
        Let's Build Something
      </a>
    </div>
  </div>
</section>
```

**Step 3: Create ProjectCard.astro**

Create `src/components/ProjectCard.astro`:
```astro
---
interface Link {
  label: string;
  href: string;
  external?: boolean;
}

interface Props {
  name: string;
  tag: string;
  tagColor?: 'purple' | 'cyan';
  description: string;
  stats: string[];
  tech: string[];
  links: Link[];
  callout?: string;
  initials?: string;
}

const {
  name,
  tag,
  tagColor = 'cyan',
  description,
  stats,
  tech,
  links,
  callout,
  initials = '??',
} = Astro.props;

const tagBg = tagColor === 'purple'
  ? 'rgba(139, 92, 246, 0.1)'
  : 'rgba(6, 182, 212, 0.1)';
const tagFg = tagColor === 'purple' ? '#8b5cf6' : '#06b6d4';
---

<div class="fade-in-up glass-card overflow-hidden p-8 md:p-10">
  <div class="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:gap-10">

    <!-- Left: Details -->
    <div>
      <span
        class="mb-4 inline-block rounded-full px-3 py-1 text-xs"
        style={`font-family: 'JetBrains Mono', monospace; background-color: ${tagBg}; color: ${tagFg};`}
      >
        {tag}
      </span>

      <h3
        class="mb-4 text-xl font-bold md:text-2xl"
        style="font-family: 'JetBrains Mono', 'Fira Code', monospace; color: #e6edf3;"
      >
        {name}
      </h3>

      {callout && (
        <div
          class="mb-4 rounded-lg px-4 py-3 text-sm font-semibold"
          style="font-family: 'JetBrains Mono', monospace; background: rgba(139, 92, 246, 0.1); border-left: 3px solid #8b5cf6; color: #c4b5fd;"
        >
          {callout}
        </div>
      )}

      <p
        class="mb-6 leading-relaxed"
        style="font-family: 'Outfit', sans-serif; color: #8b949e;"
      >
        {description}
      </p>

      <!-- Stats -->
      <ul class="mb-6 space-y-2" style="font-family: 'Outfit', sans-serif; color: #8b949e;">
        {stats.map((stat) => (
          <li class="flex items-start gap-3">
            <span
              class="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style="background-color: #06b6d4;"
            ></span>
            <span>{stat}</span>
          </li>
        ))}
      </ul>

      <!-- Tech pills -->
      <div class="mb-6 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            class="rounded-full px-3 py-1 text-xs"
            style="font-family: 'JetBrains Mono', monospace; background: rgba(255,255,255,0.05); color: #8b949e; border: 1px solid rgba(255,255,255,0.08);"
          >
            {t}
          </span>
        ))}
      </div>

      <!-- Links -->
      <div class="flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            class="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105"
            style="background: rgba(255,255,255,0.06); color: #e6edf3; border: 1px solid rgba(255,255,255,0.12); font-family: 'Outfit', sans-serif;"
          >
            {link.label} {link.external ? '↗' : '→'}
          </a>
        ))}
      </div>
    </div>

    <!-- Right: Image placeholder -->
    <div class="flex items-start justify-center md:justify-end">
      <div
        class="flex h-24 w-24 items-center justify-center rounded-2xl md:h-32 md:w-32"
        style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15)); border: 1px solid rgba(255,255,255,0.08);"
      >
        <span
          class="text-2xl font-bold opacity-40 md:text-3xl"
          style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;"
        >
          {initials}
        </span>
      </div>
    </div>

  </div>
</div>
```

**Step 4: Create BlogCard.astro**

Create `src/components/BlogCard.astro`:
```astro
---
interface Props {
  title: string;
  pubDate: Date;
  description: string;
  slug: string;
  tag?: string;
}

const { title, pubDate, description, slug, tag } = Astro.props;

const formattedDate = pubDate.toLocaleDateString('en-CA', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
---

<a
  href={`/blog/${slug}`}
  class="fade-in-up glass-card block p-6 transition-all duration-200 hover:-translate-y-1 md:p-8"
  style="text-decoration: none;"
>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      {tag && (
        <span
          class="rounded-full px-3 py-1 text-xs"
          style="font-family: 'JetBrains Mono', monospace; background: rgba(6, 182, 212, 0.1); color: #06b6d4;"
        >
          {tag}
        </span>
      )}
      <span
        class="text-xs"
        style="font-family: 'JetBrains Mono', monospace; color: #8b949e;"
      >
        {formattedDate}
      </span>
    </div>

    <h3
      class="text-lg font-bold leading-snug md:text-xl"
      style="font-family: 'JetBrains Mono', 'Fira Code', monospace; color: #e6edf3;"
    >
      {title}
    </h3>

    <p
      class="leading-relaxed"
      style="font-family: 'Outfit', sans-serif; color: #8b949e; font-size: 0.95rem;"
    >
      {description}
    </p>

    <span
      class="mt-1 text-sm font-semibold"
      style="font-family: 'Outfit', sans-serif; color: #06b6d4;"
    >
      Read More →
    </span>
  </div>
</a>
```

**Step 5: Verify build**
```bash
npm run build
```
Expected: Build succeeds with 0 errors.

**Step 6: Commit**
```bash
git add src/components/PageHero.astro src/components/ContactCTA.astro src/components/ProjectCard.astro src/components/BlogCard.astro
git commit -m "feat: add reusable PageHero, ContactCTA, ProjectCard, BlogCard components"
```

---

## Task 4: Create /contact Page

**Files:**
- Create: `src/pages/contact.astro`

**Step 1: Read the existing Contact component**

Read `src/components/Contact.astro` to understand the form markup.

**Step 2: Create contact.astro**

Create `src/pages/contact.astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
import Nav from '../components/Nav.astro';
import PageHero from '../components/PageHero.astro';
import Contact from '../components/Contact.astro';
import Footer from '../components/Footer.astro';
---

<Layout
  title="Contact Greg Kowalczyk | AI & Digital Growth Consultant"
  description="Book a call with Greg Kowalczyk. AI & digital growth consulting for businesses ready to replace agency costs with custom AI tools, automation, and e-commerce systems."
>
  <Nav />
  <main>
    <PageHero
      title="Let's Build Something"
      subtitle="Tell me what's eating your time or budget. I'll tell you if AI can fix it — and exactly how I'd build the solution."
    />
    <Contact />
  </main>
  <Footer />

  <script>
    document.querySelectorAll('.fade-in-up').forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  </script>
</Layout>
```

**Step 3: Verify build and check /contact route exists**
```bash
npm run build && ls dist/contact/
```
Expected: `index.html` exists in `dist/contact/`.

**Step 4: Commit**
```bash
git add src/pages/contact.astro
git commit -m "feat: add /contact page"
```

---

## Task 5: Create /services Page

**Files:**
- Create: `src/pages/services.astro`

The services page gets the full service cards + HowIWork process steps + FAQ + ContactCTA at bottom. These components already exist — we just assemble them on a new page.

**Step 1: Create services.astro**

Create `src/pages/services.astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
import Nav from '../components/Nav.astro';
import PageHero from '../components/PageHero.astro';
import Services from '../components/Services.astro';
import HowIWork from '../components/HowIWork.astro';
import FAQ from '../components/FAQ.astro';
import ContactCTA from '../components/ContactCTA.astro';
import Footer from '../components/Footer.astro';
---

<Layout
  title="Services | Greg Kowalczyk — AI & Digital Growth Consultant"
  description="Custom AI tools, e-commerce growth systems, marketing automation, and AI readiness assessments. Built and deployed in weeks. Serving Oakville, GTA, and Ontario businesses."
>
  <Nav />
  <main>
    <PageHero
      title="What I Build"
      subtitle="Every project follows one rule: you get a working system, not a strategy deck. I code it, deploy it, and train you to use it."
    />
    <Services />
    <HowIWork />
    <FAQ />
    <ContactCTA />
  </main>
  <Footer />

  <script>
    document.querySelectorAll('.fade-in-up').forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  </script>
</Layout>
```

**Step 2: Verify build and check /services route**
```bash
npm run build && ls dist/services/
```
Expected: `index.html` exists.

**Step 3: Commit**
```bash
git add src/pages/services.astro
git commit -m "feat: add /services page with full services, process, and FAQ"
```

---

## Task 6: Create /about Page

**Files:**
- Create: `src/pages/about.astro`

The about page gets the full About bio + TechStack + a speaking/community section + ContactCTA.

**Step 1: Create about.astro**

Create `src/pages/about.astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
import Nav from '../components/Nav.astro';
import PageHero from '../components/PageHero.astro';
import About from '../components/About.astro';
import TechStack from '../components/TechStack.astro';
import ContactCTA from '../components/ContactCTA.astro';
import Footer from '../components/Footer.astro';
---

<Layout
  title="About Greg Kowalczyk | AI & Digital Growth Consultant in Oakville"
  description="Mechanical engineer turned AI tool builder. 28 years of engineering discipline, mid-seven-figure e-commerce brands, and 2 iOS apps shipped as a non-coder. Based in Oakville, Ontario."
>
  <Nav />
  <main>
    <PageHero
      title="About Greg"
      subtitle="Engineer by training. Builder by nature. Based in Oakville, Ontario."
    />
    <About />
    <TechStack />

    <!-- Speaking & Community Section -->
    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-6xl px-6">
        <h2
          class="mb-12 text-2xl font-bold md:text-3xl"
          style="font-family: 'JetBrains Mono', 'Fira Code', monospace;"
        >
          <span class="comment-prefix">// </span><span class="gradient-text">Beyond the Work</span>
        </h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="fade-in-up glass-card p-8">
            <h3
              class="mb-2 text-lg font-bold"
              style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;"
            >
              VibeMarketer Community — Speaker
            </h3>
            <p
              class="mb-2 text-sm"
              style="font-family: 'JetBrains Mono', monospace; color: #06b6d4;"
            >
              December 2025
            </p>
            <p
              class="leading-relaxed"
              style="font-family: 'Outfit', sans-serif; color: #8b949e;"
            >
              Presented on building two App Store iOS apps as a non-coder using VibeCode and Claude Code. Real numbers, real rejections, real results.
            </p>
          </div>

          <div class="fade-in-up glass-card p-8">
            <h3
              class="mb-2 text-lg font-bold"
              style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;"
            >
              Bronte Harbour Classic 5K — Race Director
            </h3>
            <p
              class="mb-2 text-sm"
              style="font-family: 'JetBrains Mono', monospace; color: #06b6d4;"
            >
              June 21, 2026
            </p>
            <p
              class="leading-relaxed"
              style="font-family: 'Outfit', sans-serif; color: #8b949e;"
            >
              Co-directing the inaugural Bronte Harbour Classic 5K on Father's Day at Bronte Harbour Park, Oakville. Chip-timed 5K + Kids 1K Fun Run + post-race festival.
            </p>
          </div>

          <div class="fade-in-up glass-card p-8">
            <h3
              class="mb-2 text-lg font-bold"
              style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;"
            >
              Bronte Runners — Co-Lead
            </h3>
            <p
              class="leading-relaxed"
              style="font-family: 'Outfit', sans-serif; color: #8b949e;"
            >
              Co-leading the Bronte Runners club in the Oakville/Burlington area. Running community, regular group runs, and race events.
            </p>
          </div>

          <div class="fade-in-up glass-card p-8">
            <h3
              class="mb-2 text-lg font-bold"
              style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;"
            >
              Building in Public
            </h3>
            <p
              class="leading-relaxed"
              style="font-family: 'Outfit', sans-serif; color: #8b949e;"
            >
              Sharing what I build and learn — apps, tools, strategies — on LinkedIn and X. If you're figuring out AI as a non-technical founder, follow along.
            </p>
          </div>
        </div>
      </div>
    </section>

    <ContactCTA
      heading="Work With Me"
      body="I take on a limited number of consulting engagements. If you're ready to replace agency costs with AI systems you own, let's talk."
    />
  </main>
  <Footer />

  <script>
    document.querySelectorAll('.fade-in-up').forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  </script>
</Layout>
```

**Step 2: Verify build and check /about route**
```bash
npm run build && ls dist/about/
```
Expected: `index.html` exists.

**Step 3: Commit**
```bash
git add src/pages/about.astro
git commit -m "feat: add /about page with full bio, tech stack, and speaking sections"
```

---

## Task 7: Set Up Blog Content Collections + Blog Pages

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/blog/how-i-replaced-agency-costs-with-ai.md`
- Create: `src/pages/blog/index.astro`
- Create: `src/pages/blog/[...slug].astro`

**Step 1: Create content collection config**

Create `src/content/config.ts`:
```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tag: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
```

**Step 2: Create the first blog post**

Create `src/content/blog/how-i-replaced-agency-costs-with-ai.md`:
```markdown
---
title: "How I Replaced $75K in Agency Costs With $2K in AI Tools"
description: "The exact tools, systems, and approach I used to eliminate agency dependency across two mid-seven-figure e-commerce brands — and what I'd do differently today."
pubDate: 2026-02-23
tag: "AI Strategy"
---

# How I Replaced $75K in Agency Costs With $2K in AI Tools

For years I paid agencies to do work I now do better, faster, and cheaper with AI tools I built myself. Here's what changed — and exactly how I did it.

## The Before State

Two e-commerce brands. Mid-seven figures in combined revenue. Paying:

- $35K/year for content agency (product descriptions, blog posts, email copy)
- $25K/year for social media management
- $15K/year for reporting and analytics dashboards
- Freelancers on top of that for overflow work

Total: $75K–$125K annually. For work that was inconsistent, slow, and required constant briefing.

## What I Built Instead

**Custom AI content system** — Claude-powered prompt library trained on our brand voice. Generates product descriptions, email sequences, and ad copy that sounds like us, not like ChatGPT wrote it at 2am.

**Automated reporting** — N8N workflows pulling data from Shopify, Amazon Seller Central, Google Analytics, and Meta Ads into a single dashboard. What used to take a freelancer 4 hours every Monday now runs automatically overnight.

**Email automation** — Klaviyo flows with AI-generated copy, triggered by real customer behavior. 15–20x ROI on email marketing.

## The Numbers

- Monthly tool cost: ~$200 (Claude API, N8N, minor infrastructure)
- Hourly time to maintain: ~3 hours/week
- Content volume: 5–10x more than agency delivered
- Quality: Measurably better (higher conversion rates, lower unsubscribe rates)

## What I'd Tell Myself

Start with the thing eating the most time. For us, that was content. One good prompt system replaced the content agency in the first month.

Don't try to automate everything at once. Pick one workflow, build it properly, measure the result, then move to the next one.

You don't need to code. I'm a mechanical engineer. I built everything using Claude Code and Cursor AI. The tools do the heavy lifting — you supply the business logic.

---

*Greg Kowalczyk is an AI & Digital Growth Consultant based in Oakville, Ontario. He runs GearTOP and TapeGeeks, two mid-seven-figure e-commerce brands built on AI tools he developed himself.*
```

**Step 3: Create blog index page**

Create `src/pages/blog/index.astro`:
```astro
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import Nav from '../../components/Nav.astro';
import PageHero from '../../components/PageHero.astro';
import BlogCard from '../../components/BlogCard.astro';
import Footer from '../../components/Footer.astro';

const allPosts = await getCollection('blog', ({ data }) => !data.draft);
const posts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
---

<Layout
  title="Blog | Greg Kowalczyk — AI & Digital Growth Consultant"
  description="Practical writing on AI implementation, e-commerce automation, app development, and digital growth. Real tools, real numbers, no fluff."
>
  <Nav />
  <main>
    <PageHero
      title="Writing"
      subtitle="Practical posts on AI tools, automation, e-commerce systems, and building things that actually work."
    />

    <section class="py-12 md:py-16">
      <div class="mx-auto max-w-6xl px-6">
        {posts.length === 0 ? (
          <div
            class="glass-card p-12 text-center"
            style="font-family: 'Outfit', sans-serif; color: #8b949e;"
          >
            <p>First post coming soon.</p>
          </div>
        ) : (
          <div class="flex flex-col gap-6">
            {posts.map((post) => (
              <BlogCard
                title={post.data.title}
                pubDate={post.data.pubDate}
                description={post.data.description}
                slug={post.slug}
                tag={post.data.tag}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  </main>
  <Footer />

  <script>
    document.querySelectorAll('.fade-in-up').forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  </script>
</Layout>
```

**Step 4: Create dynamic blog post page**

Create `src/pages/blog/[...slug].astro`:
```astro
---
import { getCollection, render } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import Nav from '../../components/Nav.astro';
import ContactCTA from '../../components/ContactCTA.astro';
import Footer from '../../components/Footer.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);

const formattedDate = post.data.pubDate.toLocaleDateString('en-CA', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
---

<Layout title={`${post.data.title} | Greg Kowalczyk`} description={post.data.description}>
  <Nav />
  <main>
    <article class="mx-auto max-w-3xl px-6 py-16 md:py-24">

      <!-- Post header -->
      <header class="mb-12">
        <div class="mb-4 flex items-center gap-3">
          {post.data.tag && (
            <span
              class="rounded-full px-3 py-1 text-xs"
              style="font-family: 'JetBrains Mono', monospace; background: rgba(6, 182, 212, 0.1); color: #06b6d4;"
            >
              {post.data.tag}
            </span>
          )}
          <span
            class="text-xs"
            style="font-family: 'JetBrains Mono', monospace; color: #8b949e;"
          >
            {formattedDate}
          </span>
        </div>

        <h1
          class="mb-4 text-3xl font-bold leading-tight md:text-4xl"
          style="font-family: 'JetBrains Mono', 'Fira Code', monospace; color: #e6edf3;"
        >
          {post.data.title}
        </h1>

        <p
          class="text-lg leading-relaxed"
          style="font-family: 'Outfit', sans-serif; color: #8b949e;"
        >
          {post.data.description}
        </p>
      </header>

      <!-- Post content -->
      <div class="prose-blog">
        <Content />
      </div>

    </article>

    <ContactCTA />
  </main>
  <Footer />
</Layout>

<style>
  .prose-blog {
    font-family: 'Outfit', sans-serif;
    color: #8b949e;
    line-height: 1.8;
  }
  .prose-blog h1,
  .prose-blog h2,
  .prose-blog h3 {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    color: #e6edf3;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }
  .prose-blog h2 { font-size: 1.5rem; }
  .prose-blog h3 { font-size: 1.25rem; }
  .prose-blog p { margin-bottom: 1.25rem; }
  .prose-blog ul, .prose-blog ol {
    margin-bottom: 1.25rem;
    padding-left: 1.5rem;
  }
  .prose-blog li { margin-bottom: 0.5rem; }
  .prose-blog strong { color: #e6edf3; }
  .prose-blog a { color: #06b6d4; text-decoration: underline; }
  .prose-blog hr {
    border-color: rgba(255, 255, 255, 0.08);
    margin: 2rem 0;
  }
  .prose-blog code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.875rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
    color: #06b6d4;
  }
</style>
```

**Step 5: Verify build and check /blog routes**
```bash
npm run build && ls dist/blog/
```
Expected: `index.html` and `how-i-replaced-agency-costs-with-ai/index.html` exist.

**Step 6: Commit**
```bash
git add src/content/config.ts src/content/blog/ src/pages/blog/
git commit -m "feat: add blog content collection, index page, and post template"
```

---

## Task 8: Create /projects Page

**Files:**
- Create: `src/pages/projects.astro`

**Step 1: Create projects.astro**

Create `src/pages/projects.astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
import Nav from '../components/Nav.astro';
import PageHero from '../components/PageHero.astro';
import ProjectCard from '../components/ProjectCard.astro';
import ContactCTA from '../components/ContactCTA.astro';
import Footer from '../components/Footer.astro';
---

<Layout
  title="Projects | Greg Kowalczyk — AI & Digital Growth Consultant"
  description="Apps, tools, and systems built by Greg Kowalczyk. Two iOS apps live in the App Store, custom AI tools, automation systems, and more — all built using AI-assisted development."
>
  <Nav />
  <main>
    <PageHero
      title="Things I've Built"
      subtitle="Not client decks. Not demos. Actual tools, apps, and systems deployed and running in the real world."
    />

    <section class="py-12 md:py-16">
      <div class="mx-auto max-w-6xl px-6">
        <div class="flex flex-col gap-8">

          <ProjectCard
            name="SunUp by GearTOP"
            tag="iOS App · Live"
            tagColor="cyan"
            initials="SU"
            description="Personalized UV safety app that calculates your real burn time based on skin type, live UV index, and cloud cover. Features 48-hour UV forecasts, family mode for multiple profiles, AQI tracking, and sun protection product recommendations. Built as a non-coder using AI-assisted development."
            stats={[
              "Live in the App Store since September 2025",
              "Covers UV Index, AQI, burn time calculation, and family profiles",
              "Integrates real-time UV and air quality data via location services",
              "Built for GearTOP's sun protection product line",
            ]}
            tech={["React Native", "Expo", "VibeCode", "Claude Code", "iOS"]}
            links={[
              { label: "View on App Store", href: "https://apps.apple.com", external: true },
            ]}
          />

          <ProjectCard
            name="RunMate Pro"
            tag="iOS App · Live"
            tagColor="purple"
            initials="RM"
            callout="39 App Store rejections before final approval"
            description="GPS run tracking app with shoe mileage management, route history, and injury prevention tools. Tracks every run, monitors shoe wear across multiple pairs, and surfaces insights to help runners avoid overuse injuries. Built for TapeGeeks' running and recovery community."
            stats={[
              "Live in the App Store since September 2025",
              "GPS tracking, shoe mileage, route management, injury prevention",
              "Approved after 39 App Store review rejections — every one documented and resolved",
              "Built by a non-coder using AI-assisted development tools",
            ]}
            tech={["React Native", "Expo", "VibeCode", "Claude Code", "iOS"]}
            links={[
              { label: "View on App Store", href: "https://apps.apple.com", external: true },
            ]}
          />

          <ProjectCard
            name="Content Creator PRO"
            tag="AI Web App"
            tagColor="cyan"
            initials="CC"
            description="Custom web application for generating platform-specific AI prompts. Built for a client running a $537K/year business who needed to produce professional content without hiring an agency. Generates tailored prompts for Instagram, email, Google Ads, product descriptions, and more — all maintaining consistent brand voice."
            stats={[
              "Deployed on GitHub Pages — live and used daily",
              "Generates prompts for 8+ content formats and platforms",
              "Built and delivered in 6 weeks",
              "Replaced $35K+/year agency content costs",
            ]}
            tech={["HTML", "CSS", "JavaScript", "Claude API", "GitHub Pages"]}
            links={[
              { label: "Ask me about this", href: "/contact" },
            ]}
          />

          <ProjectCard
            name="Multi-Platform Analytics Dashboard"
            tag="Automation · Internal"
            tagColor="purple"
            initials="AD"
            description="Custom analytics system aggregating data from Shopify, Amazon Seller Central, Google Analytics 4, and Meta Ads into a unified view. Replaced 4 hours of manual Monday morning reporting with an automated overnight workflow. Built for internal use across GearTOP and TapeGeeks."
            stats={[
              "Aggregates data from 4 platforms: Shopify, Amazon, Google, Meta",
              "Automated nightly data refresh via N8N workflows",
              "Eliminated 4+ hours of manual reporting per week",
              "Custom metrics tracking: ACOS, ROAS, organic vs. paid split",
            ]}
            tech={["N8N", "Shopify API", "Amazon SP-API", "Google Analytics API", "Meta API"]}
            links={[
              { label: "Ask me about this", href: "/contact" },
            ]}
          />

          <ProjectCard
            name="gregkowalczyk.com"
            tag="Web · This Site"
            tagColor="cyan"
            initials="GK"
            description="This website. Built with Astro 5 and a custom glassmorphism design system. Static site deployed on Vercel with full SEO implementation — JSON-LD structured data, Open Graph, sitemap, canonical URLs. Design inspired by the Viable Edge Glass-UI pattern."
            stats={[
              "Built with Astro 5 (static) + Tailwind CSS v4",
              "Custom Glass-UI design system with frosted cards and floating orbs",
              "JSON-LD structured data: Person, ProfessionalService, LocalBusiness, FAQPage",
              "Auto-deployed to Vercel on every push",
            ]}
            tech={["Astro 5", "Tailwind CSS v4", "Vercel", "Glass-UI"]}
            links={[
              { label: "You're already here", href: "/" },
            ]}
          />

        </div>
      </div>
    </section>

    <ContactCTA
      heading="Want to Build Something Like This?"
      body="I build custom tools, apps, and systems for businesses that want to stop paying agencies and start owning their technology."
    />
  </main>
  <Footer />

  <script>
    document.querySelectorAll('.fade-in-up').forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  </script>
</Layout>
```

**Step 2: Verify build and check /projects route**
```bash
npm run build && ls dist/projects/
```
Expected: `index.html` exists.

**Step 3: Commit**
```bash
git add src/pages/projects.astro
git commit -m "feat: add /projects page with all 5 project cards"
```

---

## Task 9: Restructure Home Page to Lean Landing

**Files:**
- Create: `src/components/ServicesPreview.astro`
- Create: `src/components/ProjectsPreview.astro`
- Create: `src/components/AboutTeaser.astro`
- Create: `src/components/BlogPreview.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create ServicesPreview.astro**

Read `src/components/Services.astro` to understand the existing card structure, then create `src/components/ServicesPreview.astro`:

```astro
---
// ServicesPreview.astro — Shortened 4-card grid for home page
// Full version (with How I Work + FAQ) lives at /services
---

<section id="services" class="py-24 md:py-32">
  <div class="mx-auto max-w-6xl px-6">
    <h2
      class="mb-4 text-center text-3xl font-bold md:text-4xl"
      style="font-family: 'JetBrains Mono', 'Fira Code', monospace;"
    >
      <span class="comment-prefix">// </span><span class="gradient-text">What I Build</span>
    </h2>
    <p
      class="mb-12 text-center"
      style="font-family: 'Outfit', sans-serif; color: #8b949e;"
    >
      Every project follows one rule: you get a working system, not a strategy deck.
    </p>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

      <div class="fade-in-up glass-card p-8">
        <div class="mb-4 text-2xl">⚡</div>
        <h3 class="mb-2 text-lg font-bold" style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;">Custom AI Tools</h3>
        <p class="text-sm leading-relaxed" style="font-family: 'Outfit', sans-serif; color: #8b949e;">Prompt generators, content systems, analytics dashboards — built for your specific business. Custom tools you own and control.</p>
      </div>

      <div class="fade-in-up glass-card p-8">
        <div class="mb-4 text-2xl">🛒</div>
        <h3 class="mb-2 text-lg font-bold" style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;">E-Commerce AI Systems</h3>
        <p class="text-sm leading-relaxed" style="font-family: 'Outfit', sans-serif; color: #8b949e;">Product content at scale, inventory automation, multi-channel optimization. Tested on my own brands first — mid-seven figures, running on AI I built.</p>
      </div>

      <div class="fade-in-up glass-card p-8">
        <div class="mb-4 text-2xl">⚙️</div>
        <h3 class="mb-2 text-lg font-bold" style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;">Marketing Automation</h3>
        <p class="text-sm leading-relaxed" style="font-family: 'Outfit', sans-serif; color: #8b949e;">Email sequences, social workflows, ad optimization. Replace repetitive manual work with systems that run while you sleep.</p>
      </div>

      <div class="fade-in-up glass-card p-8">
        <div class="mb-4 text-2xl">🧭</div>
        <h3 class="mb-2 text-lg font-bold" style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;">AI Readiness Assessment</h3>
        <p class="text-sm leading-relaxed" style="font-family: 'Outfit', sans-serif; color: #8b949e;">Not sure where to start? I audit your operations, identify the highest-ROI automation opportunities, then build it.</p>
      </div>

    </div>

    <div class="mt-10 text-center">
      <a
        href="/services"
        class="inline-block rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105"
        style="background: rgba(255,255,255,0.06); color: #e6edf3; border: 1px solid rgba(255,255,255,0.12); font-family: 'Outfit', sans-serif;"
      >
        See All Services →
      </a>
    </div>
  </div>
</section>
```

**Step 2: Create ProjectsPreview.astro**

Create `src/components/ProjectsPreview.astro`:
```astro
---
// ProjectsPreview.astro — 3 featured project cards for home page
// Full list lives at /projects
---

<section class="py-24 md:py-32">
  <div class="mx-auto max-w-6xl px-6">
    <h2
      class="mb-4 text-center text-3xl font-bold md:text-4xl"
      style="font-family: 'JetBrains Mono', 'Fira Code', monospace;"
    >
      <span class="comment-prefix">// </span><span class="gradient-text">Things I've Built</span>
    </h2>
    <p
      class="mb-12 text-center"
      style="font-family: 'Outfit', sans-serif; color: #8b949e;"
    >
      Not demos. Real tools, apps, and systems deployed and running.
    </p>

    <div class="flex flex-col gap-6">

      <!-- SunUp -->
      <div class="fade-in-up glass-card p-8">
        <div class="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
          <div
            class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl"
            style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.15)); border: 1px solid rgba(255,255,255,0.08);"
          >
            <span style="font-family: 'JetBrains Mono', monospace; color: #e6edf3; opacity: 0.5; font-weight: bold;">SU</span>
          </div>
          <div>
            <div class="mb-2 flex items-center gap-3">
              <span class="rounded-full px-3 py-1 text-xs" style="font-family: 'JetBrains Mono', monospace; background: rgba(6, 182, 212, 0.1); color: #06b6d4;">iOS App · Live</span>
            </div>
            <h3 class="mb-2 text-lg font-bold" style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;">SunUp by GearTOP</h3>
            <p class="text-sm leading-relaxed" style="font-family: 'Outfit', sans-serif; color: #8b949e;">Personalized UV safety app — burn time by skin type, 48-hour UV forecasts, family mode, AQI. Live in the App Store. Built as a non-coder.</p>
          </div>
        </div>
      </div>

      <!-- RunMate -->
      <div class="fade-in-up glass-card p-8">
        <div class="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
          <div
            class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl"
            style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15)); border: 1px solid rgba(255,255,255,0.08);"
          >
            <span style="font-family: 'JetBrains Mono', monospace; color: #e6edf3; opacity: 0.5; font-weight: bold;">RM</span>
          </div>
          <div>
            <div class="mb-2 flex items-center gap-3">
              <span class="rounded-full px-3 py-1 text-xs" style="font-family: 'JetBrains Mono', monospace; background: rgba(139, 92, 246, 0.1); color: #8b5cf6;">iOS App · Live</span>
            </div>
            <h3 class="mb-2 text-lg font-bold" style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;">RunMate Pro</h3>
            <p class="text-sm leading-relaxed" style="font-family: 'Outfit', sans-serif; color: #8b949e;">GPS run tracking + shoe mileage management + injury prevention. Approved after 39 App Store rejections. Live since September 2025.</p>
          </div>
        </div>
      </div>

      <!-- Content Creator PRO -->
      <div class="fade-in-up glass-card p-8">
        <div class="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
          <div
            class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl"
            style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1)); border: 1px solid rgba(255,255,255,0.08);"
          >
            <span style="font-family: 'JetBrains Mono', monospace; color: #e6edf3; opacity: 0.5; font-weight: bold;">CC</span>
          </div>
          <div>
            <div class="mb-2 flex items-center gap-3">
              <span class="rounded-full px-3 py-1 text-xs" style="font-family: 'JetBrains Mono', monospace; background: rgba(6, 182, 212, 0.1); color: #06b6d4;">AI Web App</span>
            </div>
            <h3 class="mb-2 text-lg font-bold" style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;">Content Creator PRO</h3>
            <p class="text-sm leading-relaxed" style="font-family: 'Outfit', sans-serif; color: #8b949e;">Custom AI prompt generator for a $537K/year business. Replaced a content agency. Deployed on GitHub Pages and used daily.</p>
          </div>
        </div>
      </div>

    </div>

    <div class="mt-10 text-center">
      <a
        href="/projects"
        class="inline-block rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105"
        style="background: rgba(255,255,255,0.06); color: #e6edf3; border: 1px solid rgba(255,255,255,0.12); font-family: 'Outfit', sans-serif;"
      >
        View All Projects →
      </a>
    </div>
  </div>
</section>
```

**Step 3: Create AboutTeaser.astro**

Create `src/components/AboutTeaser.astro`:
```astro
---
---

<section class="py-24 md:py-32">
  <div class="mx-auto max-w-6xl px-6">
    <div class="fade-in-up glass-card p-10 md:p-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2
            class="mb-6 text-2xl font-bold md:text-3xl"
            style="font-family: 'JetBrains Mono', 'Fira Code', monospace;"
          >
            <span class="comment-prefix">// </span><span class="gradient-text">About Greg</span>
          </h2>
          <p
            class="mb-4 leading-relaxed"
            style="font-family: 'Outfit', sans-serif; color: #8b949e;"
          >
            Mechanical engineer. 14 years leading engineering teams at a Siemens subsidiary. Then independent consulting. Then e-commerce — two brands, mid-seven figures.
          </p>
          <p
            class="mb-6 leading-relaxed"
            style="font-family: 'Outfit', sans-serif; color: #e6edf3;"
          >
            In 2024 I went all-in on AI. Built custom tools that replaced $75K+ in agency costs. Shipped two iOS apps as a non-coder. Now I build AI systems for businesses that want working solutions — not strategy decks.
          </p>
          <a
            href="/about"
            class="inline-block rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105"
            style="background: rgba(255,255,255,0.06); color: #e6edf3; border: 1px solid rgba(255,255,255,0.12); font-family: 'Outfit', sans-serif;"
          >
            My Full Story →
          </a>
        </div>
        <div class="hidden md:block">
          <div
            class="flex h-24 w-24 items-center justify-center rounded-2xl"
            style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15)); border: 1px solid rgba(255,255,255,0.08);"
          >
            <span
              class="text-2xl font-bold opacity-40"
              style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;"
            >GK</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Step 4: Create BlogPreview.astro**

Create `src/components/BlogPreview.astro`:
```astro
---
import { getCollection } from 'astro:content';
import BlogCard from './BlogCard.astro';

const allPosts = await getCollection('blog', ({ data }) => !data.draft);
const recentPosts = allPosts
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 3);
---

<section class="py-24 md:py-32">
  <div class="mx-auto max-w-6xl px-6">
    <h2
      class="mb-4 text-center text-3xl font-bold md:text-4xl"
      style="font-family: 'JetBrains Mono', 'Fira Code', monospace;"
    >
      <span class="comment-prefix">// </span><span class="gradient-text">Writing</span>
    </h2>
    <p
      class="mb-12 text-center"
      style="font-family: 'Outfit', sans-serif; color: #8b949e;"
    >
      Practical posts on AI tools, automation, and building things that actually work.
    </p>

    {recentPosts.length > 0 ? (
      <div class="flex flex-col gap-6">
        {recentPosts.map((post) => (
          <BlogCard
            title={post.data.title}
            pubDate={post.data.pubDate}
            description={post.data.description}
            slug={post.slug}
            tag={post.data.tag}
          />
        ))}
      </div>
    ) : (
      <div
        class="glass-card p-8 text-center"
        style="font-family: 'Outfit', sans-serif; color: #8b949e;"
      >
        <p>First post coming soon.</p>
      </div>
    )}

    <div class="mt-10 text-center">
      <a
        href="/blog"
        class="inline-block rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105"
        style="background: rgba(255,255,255,0.06); color: #e6edf3; border: 1px solid rgba(255,255,255,0.12); font-family: 'Outfit', sans-serif;"
      >
        Read All Posts →
      </a>
    </div>
  </div>
</section>
```

**Step 5: Rewrite index.astro as lean landing page**

Replace the entire contents of `src/pages/index.astro` with:
```astro
---
import Layout from '../layouts/Layout.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
import ResultsBar from '../components/ResultsBar.astro';
import ServicesPreview from '../components/ServicesPreview.astro';
import ProjectsPreview from '../components/ProjectsPreview.astro';
import AboutTeaser from '../components/AboutTeaser.astro';
import BlogPreview from '../components/BlogPreview.astro';
import ContactCTA from '../components/ContactCTA.astro';
import Footer from '../components/Footer.astro';
---

<Layout
  title="Greg Kowalczyk | AI & Digital Growth Consultant | Oakville, Ontario"
  description="AI & digital growth consultant in Oakville, Ontario. Custom AI tools, e-commerce systems, SEO, automation, and app development. 28 years engineering + mid-seven-figure brands."
>
  <Nav />
  <main>
    <Hero />
    <ResultsBar />
    <ServicesPreview />
    <ProjectsPreview />
    <AboutTeaser />
    <BlogPreview />
    <ContactCTA />
  </main>
  <Footer />

  <script>
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el);
    });
  </script>
</Layout>
```

**Step 6: Verify full build**
```bash
npm run build
```
Expected: Build succeeds with 0 errors. All 7 routes exist in `dist/`: `/`, `/services/`, `/projects/`, `/about/`, `/blog/`, `/blog/how-i-replaced-agency-costs-with-ai/`, `/contact/`.

**Verify all routes exist:**
```bash
ls dist/ && ls dist/blog/
```

**Step 7: Commit**
```bash
git add src/components/ServicesPreview.astro src/components/ProjectsPreview.astro src/components/AboutTeaser.astro src/components/BlogPreview.astro src/pages/index.astro
git commit -m "feat: restructure home page to lean landing with preview sections"
```

---

## Task 10: Final Verification + Cleanup

**Files:**
- No new files

**Step 1: Run full build**
```bash
npm run build
```
Expected: 0 errors, 0 warnings related to content.

**Step 2: Check all expected routes exist**
```bash
ls dist/ dist/blog/ dist/services/ dist/projects/ dist/about/ dist/contact/
```
Expected: Each directory contains `index.html`.

**Step 3: Run astro check for type errors**
```bash
npx astro check
```
Expected: 0 errors.

**Step 4: Verify sitemap includes all new pages**
```bash
cat dist/sitemap-0.xml | grep '<loc>'
```
Expected: All 7 pages appear in sitemap.

**Step 5: Final commit**
```bash
git add -A
git commit -m "feat: complete multi-page redesign with Projects, Blog, Services, About, Contact pages"
```

---

## Summary of All Files Created/Modified

**New pages:**
- `src/pages/services.astro`
- `src/pages/projects.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`
- `src/pages/blog/index.astro`
- `src/pages/blog/[...slug].astro`

**New components:**
- `src/components/PageHero.astro`
- `src/components/ContactCTA.astro`
- `src/components/ProjectCard.astro`
- `src/components/BlogCard.astro`
- `src/components/ServicesPreview.astro`
- `src/components/ProjectsPreview.astro`
- `src/components/AboutTeaser.astro`
- `src/components/BlogPreview.astro`

**New content:**
- `src/content/config.ts`
- `src/content/blog/how-i-replaced-agency-costs-with-ai.md`

**Modified:**
- `src/pages/index.astro` (full restructure)
- `src/components/Nav.astro` (page links + Book a Call CTA)
- `src/components/Hero.astro` (CTA href, img alt)
- `src/components/Footer.astro` (tagline)
- `src/layouts/Layout.astro` (JSON-LD jobTitle)
