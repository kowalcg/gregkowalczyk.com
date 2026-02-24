---
title: "How I Replaced $75K in Agency Costs With $2K in AI Tools"
description: "The exact tools, systems, and approach I used to eliminate agency dependency across two e-commerce brands — and what I'd do differently today."
pubDate: 2026-02-23
tag: "AI Strategy"
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
version: "1.1"
updatedDate: 2026-02-24
---

# How I Replaced $75K in Agency Costs With $2K in AI Tools

For years I paid agencies to do work I now do better, faster, and cheaper with AI tools I built myself. This is the full story — what I was paying, what broke, what I built, and the exact numbers on the other side.

## What I Was Actually Paying For

Two e-commerce brands — GearTOP (sun protection gear) and TapeGeeks (athletic tape and recovery products) — both running on Amazon, Shopify, and across multiple countries since 2014. By 2023, the monthly bill looked like this:

- **Content agency: $35K/year** — product descriptions, email copy, seasonal campaign content, and Amazon listing rewrites. Three-day turnaround on requests. Brand voice was inconsistent. Every new writer needed three rounds of briefing before they understood the products. Listings they wrote rarely outperformed ones I'd done myself years earlier.

- **Social media management: $25K/year** — scheduled posts, basic engagement, monthly reporting. We got content. We didn't get strategy. Engagement was flat. The agency's work looked professional but generated almost no measurable traffic or sales lift.

- **Analytics and reporting: $15K/year** — a freelancer who spent every Monday pulling numbers from Shopify, Amazon Seller Central, Google Analytics, and Meta Ads into a spreadsheet. Same spreadsheet every week. Same four hours. Same delay between when the data existed and when I could see it.

- **Overflow freelancers: variable** — additional $5K–$15K/year for product photography descriptions, ad copy testing, and listing translations.

**Total: $75K–$125K annually.** For work that arrived late, required constant hand-holding, and was impossible to scale without writing a bigger cheque.

The breaking point came during Q4 2023. I needed 200 product listing updates ahead of the holiday season. The agency quoted six weeks and $8,000. I knew the information. I knew the brand. I just had no way to produce it fast enough myself.

That's when I started building.

## The Content System

The first thing I built was a Claude-powered prompt library — not a single prompt, but a structured system of interconnected prompts that could produce platform-specific content at volume while maintaining our brand voice.

Here's how it actually works:

**Step 1 — Product brief input.** I fill in a simple template: product name, key features, target customer, primary use case, and two or three differentiators versus competitors. Takes about 3 minutes.

**Step 2 — Voice layer.** A core system prompt carries the brand voice for each company. GearTOP's voice is practical and outdoor-confident ("built for people who actually spend time in the sun, not people who think about it"). TapeGeeks speaks to athletes and clinicians — technical but not clinical. These took time to develop properly, but now they're stable.

**Step 3 — Platform-specific generation.** The same brief gets routed through different output prompts depending on destination: Amazon title + bullet points + description, Shopify product page, email feature spotlight, social caption, or ad headline set. Each has its own structural rules baked in — Amazon has character limits and keyword requirements, Shopify needs SEO-structured prose, email copy needs a subject line and preview text.

**The result:** A full content set for one product — Amazon listing, Shopify description, two email features, and four social variants — in under 20 minutes. The agency took three business days per product and delivered one version.

Volume-wise: I went from being able to update roughly 15–20 listings per month (agency capacity) to 80–100 per month at my own pace. The content also converts better. Click-through rates on updated listings are consistently higher than the agency versions they replaced, and email open rates on AI-assisted sequences run 28–34% versus the 18–22% we saw with agency copy.

## The Reporting System

The analytics freelancer was spending four hours every Monday doing the same thing: logging into four platforms, copying numbers into a spreadsheet, formatting it, and emailing it to me.

I replaced this with an N8N automation that:

1. Pulls Shopify revenue, orders, and conversion rates via API — automatically, every night
2. Pulls Amazon sales data from Seller Central
3. Pulls Google Analytics 4 session and traffic data
4. Pulls Meta Ads spend and ROAS
5. Formats everything into a single unified view and delivers it to my dashboard by 6am

Setup time: two weekends. Ongoing maintenance: maybe 30 minutes a month. Cost: N8N's cloud plan at $20/month.

The freelancer cost $1,250/month to do the same job four days later. The automation does it overnight, every night, including weekends and holidays.

More importantly, I now have daily visibility instead of weekly. That matters in e-commerce — when a listing tanks or an ad campaign spikes, I know the same morning, not four days later.

## The Email System

Email was the third piece. We were using Klaviyo already, but the sequences were basic — a welcome flow, an abandoned cart reminder, and a post-purchase email. The agency wrote the copy. It was generic.

I rebuilt all of it.

**Welcome flow:** 5-email sequence, each with a specific job — introduce the brand, establish credibility, explain the product range, overcome the most common objection (price versus quality), and drive the first purchase with a time-limited offer. AI-assisted copy, tuned through 3–4 iterations until it read like something I'd actually write.

**Abandoned cart:** Behavioural branching based on product category. A customer who abandons a sun hat gets a different sequence than one who abandons kinesiology tape. The problem they were solving and the objection they likely had are completely different.

**Post-purchase:** Onboarding content specific to what they bought, a review request at the right timing, and a cross-sell sequence tied to complementary products.

**Result:** Email marketing ROI went from roughly 8–10x to 15–20x within two quarters of the new system going live. Unsubscribe rates dropped. Revenue per email sent increased.

Klaviyo's cost is variable based on list size — for us, about $150–$200/month. The agency that previously managed our email was billing $1,500–$2,000/month.

## The Full Numbers

| Category | Before (Agency) | After (AI Tools) |
|---|---|---|
| Content production | $35K/year | ~$600/year (Claude API) |
| Analytics reporting | $15K/year | $240/year (N8N) |
| Email management | $18–24K/year | $1,800–2,400/year (Klaviyo) |
| Social management | $25K/year | Handled internally |
| **Total** | **$75K–$125K/year** | **~$2,400–3,000/year** |
| Content volume | 15–20 pieces/month | 80–100 pieces/month |
| Reporting frequency | Weekly (4-day lag) | Daily (overnight) |
| Email ROI | 8–10x | 15–20x |

The $2K figure in the headline is slightly compressed — the real number is closer to $2,400–3,000/year in tool costs. But the savings are real: $75K–$125K annually, redirected entirely.

## What I'd Do Differently

**Start with one system, not three.** I tried to build the content system, the reporting automation, and the email rebuild simultaneously. That was too much. The content system should have come first — it had the highest impact and the fastest payoff. Then reporting. Then email.

**Spend more time on voice before scaling.** The first three months of content output were uneven because the system prompt wasn't stable. I kept tweaking it, which meant old and new content had different tones. Lock the voice first. Then scale.

**Track everything from day one.** I didn't set clean baselines before switching. I know the current numbers are better, but the comparison is partly from memory rather than data. Set your benchmarks before you start — conversion rate by listing, open rate by sequence, revenue per email. You want clean before/after numbers to validate your own investment.

**You don't need to code.** I'm a mechanical engineer. I learned to use Claude Code and Cursor AI to build these systems without a programming background. The tools do the implementation. You supply the business logic — the part only someone who actually runs your business can contribute.

---

*Greg Kowalczyk is an AI & Digital Growth Consultant based in Oakville, Ontario. He runs GearTOP and TapeGeeks, two e-commerce brands operating since 2014, powered by AI systems he built and runs himself. [See his services →](/services)*
