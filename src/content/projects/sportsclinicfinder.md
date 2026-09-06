---
name: "SportClinicFinder.com"
tag: "Web Directory · Live"
tagColor: "cyan"
image: "/images/projects/sportsclinicfinder-homepage.webp"
description: "Canada-wide sports clinic directory helping patients find physiotherapy, chiropractic, massage, athletic therapy, and sports medicine clinics. Every province and territory covered. Search by city, injury type, or specialty — with insurance details, Google ratings, and direct booking links."
stats:
  - "12,770 active clinics indexed across Canada"
  - "521 cities — every province and territory covered"
  - "245+ SEO pages: city, province, injury, and specialty combinations"
  - "Clinics can claim their listing to keep their profile current"
tech: ["Next.js 16", "React", "Tailwind CSS", "Neon Postgres", "Drizzle ORM", "Vercel"]
links:
  - { label: "Visit Site", href: "https://www.sportsclinicfinder.com", external: true }
  - { label: "Read the story", href: "/news/how-i-built-a-sports-clinic-directory-with-ai" }
order: 40
featured: true
liveUrl: "https://www.sportsclinicfinder.com"
schemaType: "WebSite"
year: "2026"
faq:
  - q: "What is SportClinicFinder.com?"
    a: "SportClinicFinder.com is a Canada-wide directory of 12,770 sports medicine clinics across 521 cities, covering physiotherapy, chiropractic, massage therapy, athletic therapy and sports medicine, with insurance details, Google ratings and booking links."
  - q: "How was SportClinicFinder built with AI?"
    a: "Greg Kowalczyk built it with AI-assisted development on Next.js, Neon Postgres and Vercel. The hard parts were data acquisition, deduplication and enrichment across provincial registries, Google Business Profiles and thousands of clinic websites of varying quality."
  - q: "Can a clinic claim its listing on SportClinicFinder?"
    a: "Yes. Listings are free and clinics can claim them to keep details current. A verified claim automatically upgrades the listing and triggers the owner notification flow."
  - q: "What happened to SportClinicFinder's Google indexing?"
    a: "After a Google core update the site dropped from roughly 15,000 indexed pages to about 1,000. Recovering was a months-long exercise in sitemaps, canonical hygiene and content depth, and it shaped how the second directory, SleepClinicFinder, was built."
  - q: "What is the lesson about programmatic SEO?"
    a: "Programmatic SEO is a usefulness-at-volume game, not a content-volume game. A template that produces a genuinely useful page for every city is worth building; a template that only inserts the city's name is worth nothing, and Google eventually says so."
---

## The problem

Someone tears a hamstring on a Tuesday. They want a physiotherapist near them who takes
their insurance and has an appointment this week. In Canada, finding that means Google
Maps, a dozen clinic websites of wildly varying quality, and a lot of phone calls.

There was no single, national, searchable index of sports-medicine clinics.

## What it is

A directory of **12,770 clinics across 521 cities**, covering every province and
territory. You can search by city, by injury, or by specialty — physiotherapy,
chiropractic, massage therapy, athletic therapy, sports medicine — and each listing
carries insurance details, Google ratings, and a direct booking link where one exists.

Clinics can claim their own listing, which is how the data stays current without me
maintaining 12,770 records by hand. A verified claim now auto-upgrades the listing and
triggers the owner notification flow.

## Why it's interesting as a build

A directory is a good stress test for AI-assisted development because the hard parts
aren't the interface — they're data acquisition, deduplication, and scale.

- **Acquisition and enrichment.** Clinic data is scattered across provincial registries,
  Google Business Profiles, and clinic sites that range from modern to abandoned. The
  enrichment pipeline scrapes and normalizes, and it has to fail gracefully on the many
  sites that are broken.
- **Programmatic SEO, honestly.** 245+ pages across city / province / injury / specialty
  combinations. The trap with programmatic SEO is generating thousands of thin pages that
  Google correctly ignores. The pages have to answer a real query for a real person.
- **Indexing at scale is its own discipline.** This site went from roughly 15,000 indexed
  pages down to about 1,000 after a Google core update, and getting that back was a
  months-long exercise in sitemaps, canonical hygiene, and content depth. Directories live
  or die on indexing.

## What it taught me

Programmatic SEO is not a content-volume game — it's a *usefulness at volume* game. A
template that produces a genuinely useful page for every city is worth building. A
template that produces a page merely containing the city's name is worth nothing, and
Google will eventually tell you so.

I wrote up the build in more detail:
[how I built a sports clinic directory with AI](/news/how-i-built-a-sports-clinic-directory-with-ai).
