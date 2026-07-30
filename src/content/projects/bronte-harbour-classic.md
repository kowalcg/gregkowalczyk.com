---
name: "Bronte Harbour Classic"
tag: "Web · Live"
tagColor: "cyan"
image: "/images/projects/bhc-website.webp"
description: "Full event website for the Bronte Harbour Classic — a chip-timed 5K road race and Kids 1K Fun Run held on Father's Day, June 21, 2026 at Bronte Harbour Park in Oakville. Registration, course info, festival details, sponsorship, and a permanent race archive."
stats:
  - "Live at bronteharbourclassic.com"
  - "Inaugural event ran June 21, 2026 — Father's Day, Oakville, Ontario"
  - "Chip-timed 5K + Kids 1K Fun Run + all-day post-race festival"
  - "Permanent archive: every result, photo, sponsor and vendor keeps a page"
tech: ["Astro 5", "Tailwind CSS", "Vercel", "Cloudflare R2", "Chip Timing"]
links:
  - { label: "Visit Site", href: "https://www.bronteharbourclassic.com/", external: true }
  - { label: "Why we archived every race forever", href: "/news/why-we-archived-every-race-forever" }
order: 50
schemaType: "WebSite"
year: "2026"
---

## The event

The Bronte Harbour Classic is a chip-timed 5K road race with a Kids 1K Fun Run and an
all-day post-race festival, held at Bronte Harbour Park in Oakville. The inaugural
edition ran on Father's Day, June 21, 2026.

I serve as **Executive Race Director**, and co-directed that first event alongside
Charles J. Sathmary, with Greg Pace as race advisor. Planning is underway for 2027, which
expands the event to 1K, 5K and 10K distances.

## What the site had to do

A first-year race has a specific problem: no history, no reputation, and a hard deadline.
Every runner, sponsor, and vendor is being asked to trust something that has never
happened before. The website is most of the answer to that.

So it had to carry registration, the course, festival details, sponsor and vendor
information, and community outreach — and it had to look like an event that had been
running for a decade.

## The decision worth writing down

Most race websites are disposable. The event happens, the site is wiped, next year's
event starts from a blank page. Every result, every photo, every sponsor's logo, every
vendor's listing — gone.

We did the opposite. **Every sponsor and vendor gets a permanent page**, and every race
gets a permanent archive: results, photos, and the story of the day, kept at a stable URL
indefinitely.

Two reasons. The obvious one is that it's a better deal for sponsors — a local business
that backs a first-year race gets a durable, indexed page rather than a logo that vanishes
in October. The less obvious one is that it compounds. Year two starts with a year of
indexed, linked, real content instead of nothing.

I wrote both decisions up:
[why we archived every race forever](/news/why-we-archived-every-race-forever) and
[why every sponsor and vendor gets a permanent web presence](/news/why-every-sponsor-vendor-gets-permanent-web-presence).

## Build notes

Astro 5 and Tailwind on Vercel, with race photography served from Cloudflare R2 — a
first-year race generates thousands of images, and the archive commitment means the
storage decision has to be one you can live with for years.
