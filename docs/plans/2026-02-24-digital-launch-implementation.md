# Digital Launch & Growth Service — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a two-track "Digital Launch & Growth" service (e-commerce launch + local business digital growth) across the site — new component, 5th service card, FAQ additions, typing animation update, and JSON-LD schema updates.

**Architecture:** Astro 5 static site. New `DigitalLaunch.astro` component renders two glass cards side-by-side (stacked on mobile). Added to `/services` page below existing service cards. 5th preview card added to homepage `ServicesPreview.astro`. No new pages needed.

**Tech Stack:** Astro 5, Tailwind CSS v4, existing glass-card CSS tokens from `global.css`, existing `gradient-text` / `comment-prefix` utility classes.

**Design doc:** `docs/plans/2026-02-24-digital-launch-service-design.md`

---

## Task 1: Create `DigitalLaunch.astro` — two-track section component

**Files:**
- Create: `src/components/DigitalLaunch.astro`

**Step 1: Create the component**

```astro
---
/**
 * DigitalLaunch.astro — "Going Online" two-track service section
 * E-Commerce Launch + Local Business Digital Growth.
 * Two glass cards side by side, stacked on mobile.
 */
---

<section id="digital-launch" class="py-24 md:py-32">
  <div class="mx-auto max-w-6xl px-6">

    <!-- Section Heading -->
    <h2
      class="mb-4 text-center text-3xl font-bold md:text-4xl"
      style="font-family: 'JetBrains Mono', 'Fira Code', monospace;"
    >
      <span class="comment-prefix">// </span><span class="gradient-text">Going Online</span>
    </h2>

    <!-- Section Intro -->
    <p
      class="mx-auto mb-16 max-w-2xl text-center text-[#8b949e]"
      style="font-family: 'Outfit', sans-serif;"
    >
      Not online yet — or barely there? I coach you through the launch and build the
      AI layer from day one. You run the business. I hand you the tools and the playbook.
    </p>

    <!-- Two-Track Cards -->
    <div class="grid gap-8 md:grid-cols-2">

      <!-- Track 1: E-Commerce Launch -->
      <div class="fade-in-up glass-card p-8 md:p-10">
        <!-- Icon -->
        <div
          class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
          style="background: linear-gradient(135deg, #8b5cf6, #06b6d4);"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </div>

        <!-- Label -->
        <div
          class="mb-3 inline-block rounded-full px-3 py-1 text-xs"
          style="font-family: 'JetBrains Mono', monospace; background: rgba(139,92,246,0.12); color: #8b5cf6;"
        >
          Track 1 — Product Businesses
        </div>

        <!-- Title -->
        <h3
          class="mb-4 text-2xl font-bold text-[#e6edf3]"
          style="font-family: 'Outfit', sans-serif;"
        >
          E-Commerce Launch
        </h3>

        <!-- Body -->
        <p class="mb-6 leading-relaxed text-[#8b949e]" style="font-family: 'Outfit', sans-serif;">
          You have a product. I get you selling it online. Amazon, Shopify, or Walmart — I've built
          and run multi-platform e-commerce operations since 2014. I coach you through the setup and
          build the AI layer: product content systems, SEO-optimized listings, and email automation
          that runs without you.
        </p>

        <!-- Deliverables -->
        <ul class="mb-6 space-y-2 text-sm text-[#8b949e]" style="font-family: 'Outfit', sans-serif;">
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            Platform setup: Amazon Seller Central, Shopify, or Walmart
          </li>
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            AI-powered product content and listing optimization
          </li>
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            Email marketing automation (Klaviyo setup and sequences)
          </li>
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            Paid ads orientation and marketing strategy
          </li>
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            Analytics dashboard and growth KPIs
          </li>
        </ul>

        <!-- Proof -->
        <p class="mb-6 text-sm italic text-[#06b6d4]" style="font-family: 'Outfit', sans-serif;">
          Built GearTOP and TapeGeeks from zero to multi-platform, multi-country operations since 2014.
        </p>

        <!-- CTA -->
        <a
          href="/contact"
          class="inline-block rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
          style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); font-family: 'Outfit', sans-serif; touch-action: manipulation;"
        >
          Launch Your Store →
        </a>
      </div>

      <!-- Track 2: Local Business Digital Growth -->
      <div class="fade-in-up glass-card p-8 md:p-10">
        <!-- Icon -->
        <div
          class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
          style="background: linear-gradient(135deg, #06b6d4, #3b82f6);"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>

        <!-- Label -->
        <div
          class="mb-3 inline-block rounded-full px-3 py-1 text-xs"
          style="font-family: 'JetBrains Mono', monospace; background: rgba(6,182,212,0.12); color: #06b6d4;"
        >
          Track 2 — Service Businesses
        </div>

        <!-- Title -->
        <h3
          class="mb-4 text-2xl font-bold text-[#e6edf3]"
          style="font-family: 'Outfit', sans-serif;"
        >
          Local Business Digital Growth
        </h3>

        <!-- Body -->
        <p class="mb-6 leading-relaxed text-[#8b949e]" style="font-family: 'Outfit', sans-serif;">
          Electricians. Landscapers. Plumbers. Home services. If customers can't find you online —
          or AI assistants don't recommend you — you're invisible to the next generation of buyers.
          I build your digital foundation and optimize it so you show up everywhere your customers
          are searching, including AI-powered search.
        </p>

        <!-- Deliverables -->
        <ul class="mb-6 space-y-2 text-sm text-[#8b949e]" style="font-family: 'Outfit', sans-serif;">
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            Professional website setup and mobile optimization
          </li>
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            Google Business Profile optimization
          </li>
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            Local SEO — rank where your customers search
          </li>
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            LLM optimization — get recommended by AI assistants
          </li>
          <li class="flex items-start gap-2">
            <span style="color: #06b6d4; flex-shrink: 0; margin-top: 2px;">→</span>
            Lead generation tracking and content strategy
          </li>
        </ul>

        <!-- Proof -->
        <p class="mb-6 text-sm italic text-[#06b6d4]" style="font-family: 'Outfit', sans-serif;">
          Chocolat on James: traditional chocolate shop mapped to full digital operation in 6 weeks.
        </p>

        <!-- CTA -->
        <a
          href="/contact"
          class="inline-block rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105"
          style="background: rgba(255,255,255,0.06); color: #e6edf3; border: 1px solid rgba(255,255,255,0.12); font-family: 'Outfit', sans-serif; touch-action: manipulation;"
        >
          Grow Your Business →
        </a>
      </div>

    </div>
  </div>
</section>
```

**Step 2: Verify file exists**

```bash
ls src/components/DigitalLaunch.astro
```
Expected: file listed.

**Step 3: Commit**

```bash
git add src/components/DigitalLaunch.astro
git commit -m "feat: create DigitalLaunch two-track service component"
```

---

## Task 2: Add `DigitalLaunch` to the `/services` page

**Files:**
- Modify: `src/pages/services.astro`

**Step 1: Add import and render**

In `src/pages/services.astro`, add the import after the existing imports:
```astro
import DigitalLaunch from '../components/DigitalLaunch.astro';
```

Add `<DigitalLaunch />` between `<Services />` and `<HowIWork />`:
```astro
<Services />
<DigitalLaunch />
<HowIWork />
```

**Step 2: Verify build**

```bash
npm run build
```
Expected: `8 page(s) built`, 0 errors.

**Step 3: Commit**

```bash
git add src/pages/services.astro
git commit -m "feat: add DigitalLaunch section to /services page"
```

---

## Task 3: Add 5th service card to `Services.astro`

**Files:**
- Modify: `src/components/Services.astro`

**Step 1: Add new entry to the `services` array**

Add this object as the 5th item in the `services` array:
```ts
{
  title: "Digital Launch & Growth",
  body: "Not online yet? I coach product businesses through Amazon, Shopify, and Walmart setup — and service businesses (electricians, landscapers, trades) through website, local SEO, and LLM optimization. You run the business. I build the AI layer that scales it.",
  proof: "Two brands launched from zero. Chocolat on James: offline shop to full digital presence in 6 weeks.",
  icon: "rocket",
},
```

**Step 2: Add the rocket icon SVG** in the icon rendering block (after the `compass` icon block):
```astro
{service.icon === "rocket" && (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)}
```

**Step 3: Change grid from 2-col to accommodate 5 cards**

Update the grid class to allow the 5th card to span full width on larger screens:
```astro
<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
```
(This gives 3 columns on xl, 2 on md — the 5th card sits naturally in the 3rd column row.)

**Step 4: Verify build**

```bash
npm run build
```
Expected: 0 errors.

**Step 5: Commit**

```bash
git add src/components/Services.astro
git commit -m "feat: add Digital Launch & Growth as 5th service card"
```

---

## Task 4: Add 5th preview card to `ServicesPreview.astro`

**Files:**
- Modify: `src/components/ServicesPreview.astro`

**Step 1: Add 5th card** after the existing 4 cards, before the closing `</div>` of the grid:

```astro
<div class="fade-in-up glass-card p-8">
  <div class="mb-4 text-2xl">🚀</div>
  <h3 class="mb-2 text-lg font-bold" style="font-family: 'JetBrains Mono', monospace; color: #e6edf3;">Digital Launch & Growth</h3>
  <p class="text-sm leading-relaxed" style="font-family: 'Outfit', sans-serif; color: #8b949e;">Going online for the first time? I coach product and service businesses through the full digital launch — e-commerce setup, local SEO, and LLM optimization — and build the AI layer from day one.</p>
</div>
```

**Step 2: Update grid class** from `grid-cols-2` to `grid-cols-2 lg:grid-cols-3` so 5 cards lay out cleanly:
```astro
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

**Step 3: Verify build**

```bash
npm run build
```
Expected: 0 errors.

**Step 4: Commit**

```bash
git add src/components/ServicesPreview.astro
git commit -m "feat: add Digital Launch & Growth preview card to homepage"
```

---

## Task 5: Update Hero typing animation

**Files:**
- Modify: `src/components/Hero.astro`

**Step 1: Add new phrase** to the `phrases` array in the `<script>` block:

Find:
```ts
const phrases = [
  "> AI Implementation Specialist",
  "> E-Commerce Systems Builder",
  "> Custom Tool Developer",
  "> Marketing Automation Engineer",
];
```

Replace with:
```ts
const phrases = [
  "> AI Implementation Specialist",
  "> E-Commerce Systems Builder",
  "> Custom Tool Developer",
  "> Marketing Automation Engineer",
  "> Local Business Digital Strategist",
];
```

**Step 2: Verify build**

```bash
npm run build
```
Expected: 0 errors.

**Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: add Local Business Digital Strategist to hero typing animation"
```

---

## Task 6: Add 3 new FAQ items to `FAQ.astro`

**Files:**
- Modify: `src/components/FAQ.astro`

**Step 1: Add 3 new FAQ objects** at the end of the `faqs` array:

```ts
{
  question: "Can you help my brick-and-mortar store go online?",
  answer:
    "Yes — and this is where real experience beats theory. I've built two product brands from zero to multi-platform e-commerce since 2014. I know exactly what breaks when you first launch on Amazon, why Shopify stores don't convert out of the box, and how to avoid the expensive mistakes most businesses make trying to figure it out alone. I coach you through the setup and build the AI tools that make it scale.",
},
{
  question: "Do you work with service businesses like contractors or trades?",
  answer:
    "Yes. Electricians, landscapers, plumbers, HVAC — any local service business that's invisible online. I build your digital foundation: professional website, Google Business Profile, and local SEO. Then I optimize it for LLM search so AI assistants recommend you when people search for your services. The next generation finds local businesses by asking Siri, ChatGPT, and Google. I make sure you show up in all of them.",
},
{
  question: "What does it cost to get started selling online?",
  answer:
    "Platform fees are low — Shopify starts at $39/month, Amazon at $39.99/month. The real investment is the setup: getting listings right, content optimized, and systems in place so you don't waste money on ads before the foundation is solid. My coaching engagements typically run $3,000–$8,000 for the initial setup phase. After that you're running independently with AI tools I've built for you.",
},
```

**Step 2: Also fix the FAQ's `DOMContentLoaded` timing bug** (same fix applied to Nav, Hero, ResultsBar):

Find:
```js
document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.querySelector(".faq-accordion");
```

Replace with:
```js
function initFAQ() {
  const accordion = document.querySelector(".faq-accordion");
```

Find the closing `});` of the DOMContentLoaded callback and replace with:
```js
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFAQ);
} else {
  initFAQ();
}
```

**Step 3: Verify build**

```bash
npm run build
```
Expected: 0 errors.

**Step 4: Commit**

```bash
git add src/components/FAQ.astro
git commit -m "feat: add 3 FAQ items for digital launch service + fix DOMContentLoaded timing"
```

---

## Task 7: Update JSON-LD structured data in `Layout.astro`

**Files:**
- Modify: `src/layouts/Layout.astro`

**Step 1: Add new service types** to the `serviceType` array in the `ProfessionalService` schema.

Find:
```ts
"serviceType": [
  "AI Implementation Consulting",
  "Custom AI Tool Development",
  "Business Process Automation",
  "AI Readiness Assessment",
  "Marketing Automation",
  "E-commerce AI Integration",
  "Workflow Automation with N8N and Zapier",
  "AI Strategy and Deployment"
],
```

Replace with:
```ts
"serviceType": [
  "AI Implementation Consulting",
  "Custom AI Tool Development",
  "Business Process Automation",
  "AI Readiness Assessment",
  "Marketing Automation",
  "E-commerce AI Integration",
  "Workflow Automation with N8N and Zapier",
  "AI Strategy and Deployment",
  "E-Commerce Launch Consulting",
  "Amazon and Shopify Setup and Optimization",
  "Local Business Digital Marketing",
  "Local SEO and Google Business Profile Optimization",
  "LLM Search Optimization",
  "Brick-and-Mortar to E-Commerce Transition"
],
```

**Step 2: Verify build**

```bash
npm run build
```
Expected: 0 errors, 8 pages built.

**Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: add digital launch and local business service types to JSON-LD schema"
```

---

## Task 8: Final verification and deploy

**Step 1: Full build check**

```bash
npm run build
```
Expected output:
- `8 page(s) built`
- 0 errors or warnings
- Both blog posts render
- `/services` page includes DigitalLaunch section

**Step 2: Push to deploy**

```bash
git push origin main
```
Expected: Vercel auto-deploy triggers. Live in ~90 seconds.

**Step 3: Verify checklist**

After deploy:
- [ ] `/services` — DigitalLaunch two-track section visible below "What I Build" cards
- [ ] Homepage — 5th "Digital Launch & Growth" card visible in services preview
- [ ] Homepage — Hero typing cycles through "Local Business Digital Strategist"
- [ ] `/services` FAQ — 3 new questions appear in accordion
- [ ] View page source — JSON-LD contains "E-Commerce Launch Consulting" and "LLM Search Optimization"
