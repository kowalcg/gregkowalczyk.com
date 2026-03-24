---
title: "Why I Built a Sports Clinic Directory for Canada"
description: "SportClinicFinder.com lists over 12,000 sports clinics across Canada — free for patients, free for clinics. Here's why it needed to exist, how it was built with AI-assisted development, and what it means for athletes trying to find the right care."
pubDate: 2026-03-24
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
version: "1.0"
tag: "Project"
featured: false
image: "/images/blog/sports-clinic-finder-canada.jpg"
imageAlt: "SportClinicFinder.com homepage showing clinic search results across Canada"
---

# Why I Built a Sports Clinic Directory for Canada

Finding the right sports clinic in Canada is harder than it should be.

You've rolled your ankle. Your knee has been bothering you for three weeks. You need a physiotherapist who specializes in sports injuries — not a general practitioner, not a walk-in clinic. You want someone who understands athletes. Maybe you need kinesiology tape or shockwave therapy. Maybe you want a clinic that accepts your insurance plan.

Google gives you a map with pins. Maybe some reviews. A lot of dead links. No filter for specialty. No way to see what injuries a clinic treats.

That's the gap SportClinicFinder.com was built to fill.

## What the Directory Does

SportClinicFinder is a free, searchable directory of sports medicine clinics across Canada — physiotherapy, chiropractic, massage therapy, athletic therapy, sports medicine, and podiatry.

Search by city, by province, by injury type, or by specialty. Every listing shows the clinic's services, hours, Google rating, insurance details, and a direct link to book online. No paywalls. No ads between you and the information you need.

**Current scale:**
- 12,770 active clinics indexed
- 521 Canadian cities covered — every province and territory
- 15 service types tracked per clinic
- Injury-based search: knee, shoulder, ankle, back, plantar fasciitis, shin splints, IT band, running injuries, and more
- Province-specific insurance information (OHIP in Ontario, MSP in BC, and so on)

## Why Canada Specifically

Canada has a strong sports medicine ecosystem. Physiotherapy is widely used, well-regarded, and often covered by extended benefits. But the infrastructure for finding the right clinic is fragmented — provincial college databases with no search, generic wellness directories that mix in spas and meditation studios, and Google Maps with no filtering by injury type or specialty.

Athletes deserve better. So do the clinics trying to reach them.

A purpose-built directory solves both sides: patients find the right care faster, and clinics get visibility to exactly the patients they serve.

## What Clinics Get From the Directory

Every clinic in the directory has a public profile page — services listed, hours displayed, contact info, Google rating, and a direct booking link if available.

Clinics can claim their listing to add and update their information directly: services offered, team specialties, insurance accepted, parking details, languages spoken. A claimed listing is a complete, accurate listing — and a complete listing ranks better and converts more searches into appointments.

The claim process takes a few minutes. It's free.

## How It Was Built

SportClinicFinder is a Next.js 16 application backed by a Neon serverless Postgres database, deployed on Vercel. The initial clinic data was sourced from Google Maps via Outscraper and then processed through a custom data quality pipeline.

That pipeline was built entirely with Claude Code — a series of scripts to filter out non-sports clinics (dental offices, allergy clinics, and ENT practices that ended up in the initial data), infer which clinics offer specific services based on their website content and service descriptions, and standardize data across 12,000+ records.

**The SEO architecture** is the part I'm most proud of. The 245+ indexed pages aren't filler — each one targets a real search intent with genuine content:

- "Physiotherapy clinics in Toronto" → city page with filters, clinic cards, and insurance info for Ontario
- "Knee injury treatment in Ontario" → province + injury cross-filter with FAQs
- "Kinesiology tape clinics in Vancouver" → specialty filter showing only relevant clinics

Every page has structured FAQs, JSON-LD schema markup, and location-specific details. This is programmatic SEO done the right way: useful information at scale, not keyword-stuffed placeholders.

**The data quality work** was significant. Identifying which clinics genuinely offer athletic therapy versus which ones just mention it on their website requires more than keyword matching. I built inference rules that check clinic names, service descriptions, and scraped content together — flagging clinics only when multiple signals confirm the service is actually offered. The result is a directory where the filters you use actually mean something.

## Why Build It Instead of Adapt Something Existing

I looked for an existing Canada-wide sports clinic directory that was accurate, current, and filterable enough to be genuinely useful. What I found:

- Generic health directories that include everything from acupuncture to cosmetic surgery
- Provincial regulator databases with no search functionality beyond name lookup
- Aggregators with outdated listings, dead links, and no injury-based filtering

None of them were built for the person who just injured their IT band and needs a sports physio in Oakville by Thursday.

Building from scratch with AI-assisted development meant every design decision could serve the actual use case. The injury filter. The specialty breakdown. The province-specific insurance notes. The clinic claim flow. These don't exist in any off-the-shelf product because no off-the-shelf product was built for this audience.

The build cost was my time, Claude Code, and a serverless Postgres database that runs lean at current scale. The ongoing hosting on Vercel is effectively free for a static-heavy Next.js application.

## What's Next

The directory is live and growing. The work now is improving data quality city by city, adding more clinics as new ones open, and building features that make individual clinic profiles more useful.

If you run a sports clinic anywhere in Canada: claim your listing. It takes five minutes. Your patients are searching for you right now — make sure they find the right information when they do.

If you're an athlete looking for care: [search the directory](https://www.sportsclinicfinder.com). Filter by your city, your injury, or the service you need. Every listing links directly to booking.

---

**SportClinicFinder.com is free and live at [www.sportsclinicfinder.com](https://www.sportsclinicfinder.com).**
