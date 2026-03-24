---
title: "How I Built a 12,000-Clinic Sports Directory in Canada With AI and No Backend Team"
description: "I built SportClinicFinder.com — 12,770 sports clinics across Canada — in weeks using Claude Code, Next.js 16, and Neon Postgres. Here's the exact stack, the data pipeline, and the part that surprised me most."
pubDate: 2026-03-24
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
version: "1.0"
tag: "AI Development"
featured: false
image: "/images/blog/sports-clinic-finder-canada.jpg"
imageAlt: "SportClinicFinder.com homepage — Canada's sports clinic directory built with AI-assisted development using Next.js and Claude Code"
---

# How I Built a 12,000-Clinic Sports Directory in Canada With AI and No Backend Team

The short answer: Next.js 16, Neon Postgres, Drizzle ORM, Claude Code, and Outscraper for the data. I had a live, searchable directory of 12,770 sports clinics across Canada in a few weeks — no development team, no agency, no backend developer on retainer.

The longer answer involves data quality problems I didn't see coming, a programmatic SEO architecture that took some real thought to get right, and what AI-assisted development actually looks like when you're building something with real data at scale.

> **Quick Answer:** Building a directory website with AI means using a tool like Claude Code as your co-developer, not just a code generator. You still need a proper tech stack (I used Next.js 16 + Neon Postgres + Drizzle ORM), a data source (Outscraper for Google Maps data), and a programmatic SEO strategy. The AI handles the implementation complexity — you own the data quality and information architecture.

## Why I Built a Sports Clinic Directory

I run TapeGeeks, an athletic tape brand. Our customers — athletes, runners, physio patients — kept asking where to find sports clinics in their city. When I looked for an existing Canada-wide directory that was filterable by injury type and actually current, I couldn't find one.

Provincial college databases with no search. Generic wellness directories packed with yoga studios and naturopaths. Google Maps with zero filtering for injury type or specialty.

Nothing built for the person who just tweaked their IT band and needs a sports physio in Oakville by Thursday.

So I built it. [SportClinicFinder.com](https://www.sportsclinicfinder.com) — physiotherapy, chiropractic, massage therapy, athletic therapy, sports medicine, and podiatry, across every province and territory in Canada.

## The Tech Stack

I didn't agonize over this. My stack for web projects is Next.js + Tailwind + Vercel. It was the obvious choice:

**Next.js 16 (App Router)** — Server Components for all the directory pages, Route Handlers for the API endpoints, dynamic routing for 521 cities, 13 provinces, 15 service specialties, and 12 injury types. The App Router handles this kind of nested dynamic routing cleanly.

**Neon Postgres** — Serverless PostgreSQL. The clinics table has 85 columns. Neon handles the scale without me managing a server or worrying about connection limits on Vercel.

**Drizzle ORM** — Type-safe queries, schema-first. When you're writing 30+ data processing scripts, having TypeScript types for your entire schema is the difference between confident and terrified.

**Vercel** — Zero-config deployment, auto-scales, native Next.js support. The build pipeline just works.

**shadcn/ui + Tailwind CSS 4** — Fast component library. Green-and-white design system, clean clinic cards, search filters that don't look like they were built in a weekend.

Each piece does one job. Nothing clever, nothing exotic. When you're processing 12,000 records and debugging data pipelines at 11pm, you want boring infrastructure.

## Getting the Data — The Part I Underestimated

This is where most "build a directory" tutorials hand-wave. I'll be specific.

**Sourcing the data:** I used [Outscraper](https://outscraper.com) to pull listings from Google Maps — search by category + city, export CSV, import to Postgres. Ran that for roughly 500 Canadian cities across the service categories I wanted.

First pass: around 16,000 records. Looks good. Then I started cleaning.

**The data quality problem:** My initial import included dental offices, allergy clinics, ENT practices, naturopaths, and midwives. Anything with "clinic" in the name could show up. I needed a directory of *sports and rehab* clinics specifically — not a general health directory.

I wrote a series of scripts with Claude Code to fix this:

**Deactivation scripts** — Pattern matching against clinic names, categories, and scraped service descriptions to identify and deactivate non-sports businesses. I went through about 11 false-positive categories: allergy, dental, ENT, fertility, mental health, midwifery, naturopath, optometry, pediatric, weight management, cosmetic.

**Service inference rules** — Which clinics offer kinesiology tape? Athletic therapy? I couldn't rely on clinics declaring their services accurately. I scraped their websites, built inference rules that check clinic name + Google category + raw service text together, and only flagged a service when multiple signals confirmed it. Conservative by design — a clinic only gets tagged with "offers kinesiology tape" if the evidence is solid.

**Sports confirmation checks** — Before deactivating anything, the script checks: does this clinic's name or service text contain sports keywords? This protected legitimate sports clinics from getting swept up in the category-based deactivation rules.

After all of it: 12,770 active clinics. Started at 16,000. About 3,200 records removed as not genuinely sports-related.

The data work took longer than the site build. By a lot.

## The Programmatic SEO Architecture

245+ indexed pages, each targeting real search intent. Here's how the URL structure maps:

| Page type | Example URL | Target query |
|-----------|-------------|--------------|
| City | `/city/toronto` | "sports clinics Toronto" |
| Province | `/province/on` | "physiotherapy clinics Ontario" |
| Province + Injury | `/province/on/knee` | "knee injury clinics Ontario" |
| Injury (national) | `/injury/knee` | "knee pain treatment Canada" |
| Specialty | `/specialty/physiotherapy` | "physiotherapy clinics Canada" |
| Clinic detail | `/clinics/on/toronto/[slug]` | Clinic name searches |

The province × injury cross-filter alone generates 156 pages — 13 provinces × 12 injury types. Not 156 identical templates with the city name swapped. Each page has location-specific content: insurance coverage notes (OHIP in Ontario, MSP in BC, private-only in provinces without public physio coverage), clinic counts, city-specific FAQs.

Every page also has:
- Dynamic `<title>` and meta description pulled from the database
- FAQPage JSON-LD schema
- BreadcrumbList schema
- `revalidate` so pages serve fresh data without full rebuilds

This is what programmatic SEO is actually supposed to mean — real information architecture, not filler. Every page has to answer a real question. If it doesn't, it shouldn't exist.

## What Claude Code Actually Did

I want to be specific here, because "I used AI" means nothing.

Claude Code lives inside your project directory. It reads your schema, understands your existing code, and writes implementation — not just snippets. When I said "write a script that deactivates clinics matching these 11 categories, but protects anything where the clinic name or servicesRaw field contains sports keywords, with dry-run mode and a summary," it wrote exactly that.

The pattern was always: I knew what I needed to build. Claude Code knew how to build it. I described the logic in plain language, it wrote the TypeScript, I reviewed it and ran it.

It's not magic. It's a fast development partner that doesn't lose track of your schema and doesn't need three Slack messages to understand what you mean.

For context on what's possible with this approach: I've shipped [two iOS apps to the App Store](/news/how-i-built-2-ios-apps-without-coding), this directory, multiple Shopify integrations, and custom analytics dashboards — with no traditional coding background, just AI-assisted development and stubbornness.

## What I'd Do Differently

**Start the data pipeline first.** I built half the UI on data that still had dental offices in it. The filters revealed the bad data underneath. Do the data work first, build the interface second.

**Map the full URL architecture before touching code.** I added sport-based pages (running, hockey, CrossFit) later in the process when I realized athletes search by sport, not just by injury. I should have designed the complete information architecture on a whiteboard before the first commit.

**Scrape clinic websites in the first import pass.** Outscraper gives you the Google Maps listing. To know what services a clinic actually offers, you need to hit their website. I added that scraping step later. It should have been part of the initial import pipeline.

None of these mistakes were fatal. All of them added time.

## FAQ

### How long does it take to build a directory website with AI?

The site build — routing, pages, UI, database schema, API — took two to three weeks of focused work. The data pipeline (sourcing, cleaning, and enriching 12,000+ records) took longer. Budget four to six weeks total for a directory at this scale if you're doing it properly. If you're using a starter template and curated data, you can move faster.

### What's the best tech stack for a directory website in 2025?

For a Next.js project on Vercel: Neon Postgres for the database, Drizzle ORM for type-safe queries, shadcn/ui for components, Tailwind for styling. This stack has no weak links and deploys to Vercel in minutes. If you're not on Vercel, PlanetScale or Supabase are solid Postgres alternatives with similar serverless characteristics.

### How do you get data for a directory website?

Outscraper is the fastest path for Google Maps data — search by category and city, export CSV, import to your database. For US directories, data.gov has public business data for some categories. Whatever source you use, plan for 20–30% data cleanup work after the initial import. It's never clean.

### Does programmatic SEO work for directory sites?

Yes — directories are one of the strongest programmatic SEO use cases. Every city + specialty + injury combination is a real search query. The requirement is that each page has to be genuinely useful, not just a swapped variable in a template. Add local context: insurance notes by province or state, city-specific clinic counts, FAQs that reflect the local healthcare system. Thin pages don't rank; useful pages do.

### What's the hardest part of building a directory website?

Data quality. Getting the initial data is straightforward. Getting it to a state where every listing is accurate, every service flag is reliable, and every clinic that shows up actually belongs there — that's where the real work is. You can build the frontend in days. The data work takes weeks.

---

**[SportClinicFinder.com](https://www.sportsclinicfinder.com) is live.** Full stack: Next.js 16, Neon Postgres, Drizzle ORM, Tailwind CSS 4, Vercel. Built with Claude Code. If you're thinking about building a directory and want to talk through the architecture, [get in touch](/contact).
