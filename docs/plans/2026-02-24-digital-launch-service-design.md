# Digital Launch & Growth Service — Design Document
**Date:** 2026-02-24
**Status:** Approved
**Author:** Greg Kowalczyk / Claude

---

## What We're Building

A new service offering and corresponding site-wide content that positions Greg as a coach and AI implementer for two under-served client types:

1. **Product businesses** moving from brick-and-mortar to e-commerce (Amazon, Shopify, Walmart)
2. **Service businesses** (electricians, landscapers, plumbers, home services) that need local digital presence, SEO, and LLM optimization

This is distinct from Greg's existing AI consulting services, which target businesses already online. This targets businesses that aren't yet online or have minimal presence.

---

## Positioning

**Angle:** Not a web agency. Not a generic Shopify consultant. Greg brings 10+ years of live e-commerce operations (GearTOP, TapeGeeks) and AI implementation experience — so clients don't just get a website, they get an AI-wired digital operation from day one.

**Model:** Coaching + implementation. Greg guides the client through the process and builds the AI/technical pieces. Client executes with Greg's direction. Not done-for-you (except AI components). Not pure coaching (Greg builds the technical layer).

**Tagline concept:** "I get you online. Then I wire it with AI."

---

## Two Service Tracks

### Track 1 — E-Commerce Launch
**Target:** Retail shops, product brands, manufacturers, gift shops moving online
**Platforms:** Amazon, Shopify, Walmart
**What Greg does:**
- Full platform setup and optimization coaching
- AI-powered product content system (listings, descriptions, SEO)
- Email automation setup (Klaviyo or equivalent)
- Marketing strategy and paid ads orientation
- Analytics and KPI dashboard

**What client does:** Runs the business day-to-day with Greg's playbook
**Proof:** GearTOP + TapeGeeks — built from zero to multi-platform, multi-country e-commerce operations since 2014

---

### Track 2 — Local Business Digital Growth
**Target:** Trades, home services, professionals (electricians, plumbers, landscapers, HVAC, etc.)
**What Greg does:**
- Professional website setup and optimization
- Google Business Profile optimization
- Local SEO implementation
- LLM optimization (structured so AI assistants recommend them in local searches)
- Content strategy for local visibility
- Lead generation tracking

**What client does:** Approves content, answers client inquiries from improved lead flow
**Proof:** Chocolat on James — traditional chocolate shop mapped to full digital operation in 6 weeks

---

## Site Changes

### New Component: `src/components/DigitalLaunch.astro`
- Two-column glass card layout (stacks on mobile)
- Left card: E-Commerce Launch track
- Right card: Local Business Digital Growth track
- Section heading: `// Going Online`
- Brief intro paragraph
- Each card: icon + title + 3-4 bullet deliverables + proof line + CTA to /contact

### `src/pages/services.astro`
- Import and render `DigitalLaunch` component below `Services` and above `HowIWork`

### `src/components/ServicesPreview.astro` (homepage)
- Add 5th preview card: "Digital Launch & Growth" linking to /services section
- Adjust grid if needed (could go 2+3 or add a wider 5th card)

### `src/components/Services.astro`
- Add 5th service card to the existing 4-card grid
- Title: "Digital Launch & Growth"
- Body: umbrella description of both tracks
- Proof: Combined client proof

### `src/components/Hero.astro`
- Add `"> Local Business Digital Strategist"` to typing animation phrases

### `src/components/FAQ.astro`
- Add 3 new FAQ items:
  1. "Can you help my brick-and-mortar store go online?"
  2. "Do you work with service businesses like contractors or trades?"
  3. "What does it cost to launch an e-commerce store from scratch?"

### `src/layouts/Layout.astro` (JSON-LD)
- Add to `serviceType` array:
  - "E-Commerce Launch Consulting"
  - "Local Business Digital Marketing"
  - "LLM Search Optimization"
  - "Google Business Profile Optimization"

---

## Copy Direction

**Voice:** Direct. Practical. First-person. Numbers and specifics over vague promises.

**E-Commerce Launch card body:**
> "You have a product. I get you selling it online. Amazon, Shopify, or Walmart — I've built and run multi-platform e-commerce operations since 2014. I coach you through the setup and build the AI layer: product content systems, SEO-optimized listings, and email automation that runs without you. You run the business. I hand you the tools and the playbook."

**Local Business Digital Growth card body:**
> "Electricians. Landscapers. Plumbers. Home services. If customers can't find you online — or worse, AI assistants don't recommend you — you're invisible to the next generation of buyers. I build your digital foundation: website, local SEO, Google Business Profile, and LLM optimization so you show up everywhere your customers are searching."

**FAQ answers (draft):**
1. *Can you help my brick-and-mortar go online?* — "Yes — and this is where experience beats theory. I've built two product brands from zero to multi-platform e-commerce since 2014. I know exactly what breaks when you first launch on Amazon, why Shopify stores don't convert, and how to avoid the expensive mistakes most businesses make trying to figure it out alone. I coach you through the setup and build the AI tools that scale it."
2. *Do you work with service businesses like contractors or trades?* — "Yes. Electricians, landscapers, plumbers, HVAC — any local service business invisible online. I build your digital foundation (website, Google Business Profile, local SEO) and optimize it so AI assistants recommend you when people search. The next generation finds services by asking Siri, ChatGPT, and Google. I make sure you show up."
3. *What does it cost to get started selling online?* — "Platform fees are low — Shopify starts at $39/month, Amazon at $39.99/month. The real investment is the setup: getting listings right, content optimized, and systems in place so you don't waste money on ads before the foundation is solid. My coaching engagements typically run $3,000–$8,000 for the initial setup phase, after which you're running independently with AI tools I've built for you."

---

## Success Criteria

- New service is clearly discoverable from homepage and /services page
- Both target audiences (product business + service business) self-identify within 5 seconds
- FAQ answers handle the "is this for me?" and "what does it cost?" objections
- JSON-LD updated to improve search visibility for new service keywords
- Build passes with 0 errors

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/DigitalLaunch.astro` | **CREATE** — New two-track section component |
| `src/pages/services.astro` | **MODIFY** — Import and render DigitalLaunch |
| `src/components/Services.astro` | **MODIFY** — Add 5th service card |
| `src/components/ServicesPreview.astro` | **MODIFY** — Add 5th preview card |
| `src/components/Hero.astro` | **MODIFY** — Add typing phrase |
| `src/components/FAQ.astro` | **MODIFY** — Add 3 new FAQ items |
| `src/layouts/Layout.astro` | **MODIFY** — Add service types to JSON-LD |
