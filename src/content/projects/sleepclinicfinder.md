---
name: "SleepClinicFinder.com"
tag: "Web Directory · Live"
tagColor: "cyan"
image: "/images/projects/sleepclinicfinder-homepage.webp"
description: "Sleep clinic directory for Peel, Halton and the GTA — sleep study clinics, sleep apnea treatment, CPAP providers, dental sleep medicine, myofunctional therapy and pediatric sleep care, with verified OHIP billing, referral and home sleep test details. A regional, evidence-first directory built with AI in under a week and live since August 2026."
stats:
  - "221 active sleep clinics across Peel, Halton and the GTA — 12 city pages, 6 types of care"
  - "40 evidence-rich clinic profiles (median 383 words, every claim quoted from the clinic's own site)"
  - "10 patient guides: OHIP sleep study cost, referrals, home test vs in-lab, CPAP vs dental appliance, and more"
  - "Public pages render from a committed data snapshot — zero database reads, so a database outage can't take the site down"
tech: ["Next.js 16", "React", "Tailwind CSS", "Neon Postgres", "Firecrawl", "Claude API", "Vercel", "Resend"]
links:
  - { label: "Visit Site", href: "https://www.sleepclinicfinder.com", external: true }
  - { label: "SportClinicFinder — the first directory", href: "/projects/sportsclinicfinder/" }
liveUrl: "https://www.sleepclinicfinder.com"
order: 42
schemaType: "WebSite"
year: "2026"
faq:
  - q: "What is SleepClinicFinder.com?"
    a: "SleepClinicFinder.com is a free directory of sleep clinics in Peel Region, Halton Region and the Greater Toronto Area. It covers sleep study clinics, sleep apnea treatment and CPAP providers, dental sleep medicine and airway dentists, myofunctional therapy providers and pediatric sleep clinics, and shows whether each clinic bills OHIP, needs a referral, or offers home sleep tests."
  - q: "How was SleepClinicFinder built?"
    a: "It was built by Greg Kowalczyk with AI-assisted development in under a week, reusing the architecture of SportClinicFinder.com. Clinic data is scraped with Firecrawl, verified and written into profiles with the Claude API, stored in Neon Postgres, and served from a committed JSON snapshot on Vercel. It went live on August 9, 2026."
  - q: "How is the clinic information verified?"
    a: "Every service, practitioner and coverage claim on a clinic profile is quoted from that clinic's own website during enrichment. Profiles get deeper only where there is evidence to support it, which is why they range from about 150 to 650 words instead of all being the same length."
  - q: "Can a clinic claim its listing?"
    a: "Yes. Listings are free, and a clinic can claim its profile to keep details accurate. Verified claims are also how clinics learn about the Breathe+ partner program from TapeGeeks."
  - q: "Why build a regional directory instead of a national one?"
    a: "SportClinicFinder is national with 12,770 clinics. SleepClinicFinder deliberately starts with 221 clinics in one region so every profile can be evidence-verified and every guide can answer a real Ontario question, such as what a sleep study costs under OHIP. Depth first, then expand."
---

## The problem

Someone snores badly enough that their partner sends them to the doctor. The doctor says
"get a sleep study". In Ontario that raises five questions at once: is it OHIP covered,
do I need a referral, can I do it at home, which clinics near me do it, and if it turns
out to be sleep apnea, is a CPAP machine the only option or will a dentist-made appliance
do?

None of that was answerable in one place. Sleep clinics, CPAP vendors, airway dentists,
myofunctional therapists and children's sleep programs each live in their own corner of
the web, and most of their sites don't say whether they bill OHIP or need a referral.

## What it is

A directory of **221 sleep clinics across Peel, Halton and the GTA** — Mississauga,
Brampton, Oakville, Burlington, Milton, Halton Hills, Toronto, Etobicoke, North York,
Scarborough, Vaughan and Markham — organised by the six types of care people actually
search for:

- Sleep study clinics (in-lab polysomnography and home sleep tests)
- Sleep apnea treatment and CPAP providers
- Dental sleep medicine and airway dentists
- Myofunctional therapy providers
- Pediatric sleep clinics
- Plus ten patient guides on cost, referrals, symptoms and treatment choices

Each profile states what the clinic offers, who works there, whether it bills OHIP,
whether it needs a referral and whether it does home sleep tests — and every one of
those claims is quoted from the clinic's own website, not inferred.

## The second directory is the interesting one

[SportClinicFinder](/projects/sportsclinicfinder/) was the first build: national,
12,770 clinics, and a hard lesson about programmatic SEO when a Google core update cut
its indexed pages from roughly 15,000 to about 1,000.

SleepClinicFinder is what I built after learning that lesson. It reuses the same
Next.js, Neon and Vercel architecture, but the strategy is inverted:

- **Regional, not national.** 221 clinics in one region instead of thousands across a
  country. Small enough that every profile can be verified by hand-equivalent rigour.
- **Evidence-first profiles.** The enrichment pipeline does a deep scrape of each clinic
  site with Firecrawl, then writes the profile with the Claude API under a rule: no
  service, practitioner or coverage claim without a quote to back it. Profiles came out
  at a median of 383 words, ranging from about 150 to 650 depending on how much evidence
  existed. Thin where the evidence is thin, deep where it's deep.
- **Only 40 profiles are indexable.** The other 181 clinics are searchable on-site but
  kept out of the sitemap until they have enough verified content to deserve a page in
  Google. The sitemap is the quality gate, and enrichment reads its target list from the
  live sitemap so nothing can slip in mid-run.
- **Guides answer Ontario questions.** "How much does a sleep study cost with OHIP",
  "home sleep test vs in-lab", "CPAP vs dental appliance", "snoring vs sleep apnea" — each
  guide passed a scored content gate before publishing.

## What went wrong, and what it changed

Five days after launch the site went down. The free Postgres tier had a monthly data
transfer quota, and every page load was pulling clinic data straight from the database.
Five days of traffic burned the month's allowance.

The fix was architectural, not a bigger bill: **public pages now render from a committed
JSON snapshot of the clinic data**, refreshed weekly by a workflow that commits only when
something changed. Reads cost nothing, the database can be asleep or down and the site
stays up, and only claims and admin writes touch Postgres. A monitor checks uptime and
5xx errors and emails an alert from the site's own verified domain.

## Timeline

- **August 9, 2026** — live, submitted to Google Search Console and Bing, IndexNow wired.
- **August 14** — rich-profile rebuild: profiles go from a median of 140 words to 383.
- **August 15** — outage traced to the database quota; snapshot architecture shipped the
  same day.

Built in under a week, hardened within one.
