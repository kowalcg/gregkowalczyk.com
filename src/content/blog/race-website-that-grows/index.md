---
title: "A Race Website That Grows Instead of Starting Over"
description: "Most event sites get rebuilt every season. Ours adds capability instead. The architecture behind a race website that grows, and what it earned in year one."
pubDate: 2026-08-05
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
version: "1.0"
tag: "Digital-First Race"
image: "/images/blog/race-website-that-grows.jpg"
imageAlt: "Aerial view of the start arch and sold-out start corral on Ontario Street at the Mercedes-Benz Oakville Bronte Harbour Classic 5K in Oakville"
faq:
  - q: What does it mean for a race website to grow instead of being rebuilt?
    a: >-
      A growing site adds each edition alongside the last one rather than
      replacing it. Every year gets its own permanent path, older pages stay
      live at the URLs they were published on, and new capability is added as
      new sections. A rebuilt site overwrites the previous season, so search
      authority, inbound links and event history reset to zero every year.
  - q: Why do event websites get rebuilt every year?
    a: >-
      Usually because the site was built as a registration funnel rather than a
      permanent asset. Once registration closes, the page has no job left, so
      the following season starts with a fresh template. The decision is rarely
      deliberate. It is what happens by default when nobody defines a URL scheme
      that has room for a second edition.
  - q: Does keeping old event pages online hurt SEO?
    a: >-
      Not when each edition sits on its own dated path and the current year is
      clearly the one being promoted. The pages that hurt are duplicates
      competing for the same query. Archived editions answer different questions
      than the live registration page, and the accumulated links pointing at
      them are authority a rebuilt site throws away every season.
  - q: What does it cost to keep a race website online year-round?
    a: >-
      For a static site, roughly the price of the domain. Ours runs on Astro and
      Vercel with photos on Cloudflare R2, so there is no database and no server
      billing monthly. The costs that make year-round hosting expensive come
      from platforms priced per view or per gigabyte, which is a choice rather
      than a requirement.
  - q: How long does it take to build an event website this way?
    a: >-
      The architecture decisions cost almost nothing extra at the start. Picking
      a dated URL scheme and a static generator takes an afternoon of thought
      before the first page exists. The expensive version is retrofitting it
      later, once a season of content has been published on paths that were
      never designed to hold a second year.
---

# A Race Website That Grows Instead of Starting Over

*This is Part 5 of **Building a Digital-First Race** — a series on the digital and AI decisions behind the Mercedes-Benz Oakville Bronte Harbour Classic 5K, and why we made them. Last time: [why our medals have QR codes](/news/qr-code-race-medals). Coming up: the health and safety ecosystem we built around the race.*

Every winter, the same thing happens to a local event. Someone opens the website, sees that it still says last June, and decides to rebuild it. New template, new registration page, new photo links. The old edition gets flattened in the process, and a site that had spent twelve months quietly earning search results starts again from nothing.

We built the Mercedes-Benz Oakville Bronte Harbour Classic 5K on the opposite premise. The race website was designed from the first page to be a race website that grows — one that adds an edition every June rather than replacing itself, and that keeps working in the eleven months when nobody is registering for anything.

> **Quick Answer:** Instead of rebuilding bronteharbourclassic.com each season, we architected it to accumulate. Every edition gets its own permanent path, published pages are never overwritten, and each year adds sections rather than replacing them. One year in, the site carries 80 partner pages, 1,843 race photos and videos, and more than 50 articles that all still work between race seasons.

## Why most event websites get demolished every year

I want to be fair to the people doing this, because the rebuild is not laziness. It is what happens when a site is built as a registration funnel.

A funnel has one job: take money until a date, then stop. Once the race is run, every page on it is expired inventory. There is no natural place to put last year, because nobody drew a URL scheme with room for a second edition. So the following January, the fastest path forward is a clean template — and the previous year's results, photos, sponsor logos and thousand small pages of accumulated detail go in the bin.

The cost of that is invisible, which is why it keeps happening. A five-year-old race that has rebuilt five times has the search presence of a five-week-old race. Every inbound link a local paper or a running club ever pointed at it now 404s. The event has been running for half a decade and the internet has no memory of four of those years.

What makes this frustrating is that the fix is not expensive. It is a set of decisions you have to make before you publish the first page, and almost free if you make them then.

## What "grows instead of starting over" actually means

The rule we run bronteharbourclassic.com by is additive: **a published URL is never repurposed and never deleted.** New things get new paths. That single constraint produces the whole architecture.

In practice the site is four layers, and only one of them changes each season.

**The permanent editions.** The 2026 race lives at [bronteharbourclassic.com/2026/](https://www.bronteharbourclassic.com/2026/) and will stay there. The 2027 edition is being built at /2027/ alongside it, not on top of it. Neither one is the homepage; the homepage points at whichever race is next, which means the marketing surface can change every year without touching a single archived page.

**The evergreen race information.** Course maps, training plans, the FAQ, the volunteer page, what to bring, parking. This is the material people search for in March and the week before race day, and almost none of it is year-specific. It gets edited, not rebuilt.

**The media.** All 1,843 photos and videos from race morning, in a [free gallery searchable by bib number](https://www.bronteharbourclassic.com/photos/) — 813 course shots, 341 from the finish line, 281 from the Kids 1K, 217 from the festival, 138 from the awards, 53 at the start. That library only ever gets bigger. Next June it gains a year rather than being replaced by one.

**The writing.** More than 50 articles now, most of them answering something a runner or a local business actually typed into a search box. Every one of them keeps working between seasons, which is the entire point.

Each June adds to all four layers. Nothing removes from them.

## The four decisions that make growth possible

None of this requires a developer on staff. I am a mechanical engineer who builds with AI in the loop, and our team is two volunteer Race Co-Directors. What it requires is getting four things right early.

**1. Date the editions, not the site.** Every year-specific thing goes under /YYYY/. The homepage is a pointer, never a container. This is the decision everything else hangs off, and it costs nothing on day one — it is just a folder name. Retrofitting it after a season of content has shipped is where the pain lives.

**2. Go static.** The site is built with [Astro](https://astro.build) and deployed on Vercel. No database, no server process, nothing that decays or bills by the month. A static site is a pile of files, and files from 2026 keep serving in 2036 without anyone maintaining a runtime. It also means the pages are fast by default, which is doing quiet work for us on [Core Web Vitals](https://web.dev/articles/vitals).

**3. Own the media.** Photos on a photographer's delivery platform or a social album have a shelf life measured in months. Ours sit in [Cloudflare R2](https://developers.cloudflare.com/r2/) with pre-generated variants, served from our domain, under our control.

**4. Move nothing without a redirect.** When something does have to change location — and it will — it moves with a 301, permanently. [Google's own guidance on redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects) is unambiguous about this, and it is the mechanism that lets a site evolve without breaking the links people have already made to it. The QR codes stamped into our finisher medals make that non-negotiable for us.

## The rebuild we caused ourselves

I would rather tell you about the part of this that we got wrong, because it is the most useful thing in the article.

We launched the photo gallery on a hosted media platform. It worked, and the runners loved it. It also would have cost roughly $99 a month forever — for photos we already owned, of a race we had already run, at a price that scaled with how many people looked at them. That is exactly the kind of recurring dependency this whole architecture exists to avoid, and we walked straight into it.

In June 2026 we migrated all 1,843 files to Cloudflare R2 and the ongoing cost went to effectively zero. But it was a migration: new URLs, new variants, redirects, a week of work that produced no new capability for anyone. A site designed to grow instead of starting over spent a week starting over.

The honest lesson is not "we were careless." It is that the promise — *this link works forever* — has to be applied to every layer, including the boring infrastructure ones, and we only applied it to the pages at first. Media storage is a URL scheme too.

## What a year-round site earned in year one

Here is what I can actually measure, twelve months in.

**Partner conversations start from evidence.** All 80 sponsors, vendors and organizing groups from 2026 — 21 sponsors, 52 vendors, 7 organizing groups — have a permanent page in the archive with their story and real race-day photos. When we open a [2027 sponsorship](https://www.bronteharbourclassic.com/sponsors) conversation, we send a live URL instead of a PDF describing hypothetical exposure. That changed the tone of those conversations more than anything else we built.

**The site works when the race is not happening.** Traffic in the weeks after race day went to the photo gallery, not the registration page. Traffic in the winter goes to the training and course content. A funnel site has two useful months a year; this one has twelve.

**Search and AI answers compound.** Being the documented, citable source about the Oakville Father's Day 5K matters more each month as answer engines increasingly cite rather than link — I wrote up that approach in [AI Search Optimization for Small Business in 2026](/news/ai-search-optimization-2026), and the race site is where I tested it.

Now the honest limit on all of that: **I cannot yet prove any of it converts into 2027 registrations.** Registration for next June is not far enough along to draw a line from a page view to a signup, and anyone claiming otherwise about a first-year event is guessing. What I have is behaviour — return visits, partner replies, articles that rank — not attribution. I will publish the registration numbers in Part 7 when they exist, including if they are unremarkable.

There is a second limit worth naming. A site that only ever adds accumulates weight. We are one year in and it is fine; at ten years and several thousand pages, "never delete" will need a real information architecture and some honest pruning of things that were never useful. Growth is not free, it is just much cheaper than demolition.

## How to build an event website that grows

If you run a race, a festival, a conference, or anything that recurs, this is the sequence I would follow.

**Own the domain first.** Not a page on someone else's platform. Everything below depends on controlling the address.

**Draw the URL scheme before the first page.** Decide today where 2029 will live. Write it down. Ten minutes now saves a rebuild later.

**Pick a static generator.** Astro, Eleventy, Hugo — the specific tool matters far less than the property that the output is files.

**Separate evergreen from year-specific.** Course maps and training content are not 2026 content. Put them on undated paths so they never need re-creating.

**Own your media from day one.** Learn from our $99-a-month detour: object storage you control, served from your domain.

**Print the URL on something physical only once the scheme is locked.** A medal outlives three redesigns. The link stamped into it has to outlive them too.

Do those six things and your event compounds. Skip them and you will rebuild your website every January for as long as the event exists, paying full price each time for something you already had.

## FAQ

### What does it mean for a race website to grow instead of being rebuilt?

A growing site adds each edition alongside the last one rather than replacing it. Every year gets its own permanent path, older pages stay live at the URLs they were published on, and new capability is added as new sections. A rebuilt site overwrites the previous season, so search authority, inbound links and event history reset to zero every year.

### Why do event websites get rebuilt every year?

Usually because the site was built as a registration funnel rather than a permanent asset. Once registration closes, the page has no job left, so the following season starts with a fresh template. The decision is rarely deliberate. It is what happens by default when nobody defines a URL scheme that has room for a second edition.

### Does keeping old event pages online hurt SEO?

Not when each edition sits on its own dated path and the current year is clearly the one being promoted. The pages that hurt are duplicates competing for the same query. Archived editions answer different questions than the live registration page, and the accumulated links pointing at them are authority a rebuilt site throws away every season.

### What does it cost to keep a race website online year-round?

For a static site, roughly the price of the domain. Ours runs on Astro and Vercel with photos on Cloudflare R2, so there is no database and no server billing monthly. The costs that make year-round hosting expensive come from platforms priced per view or per gigabyte, which is a choice rather than a requirement.

### How long does it take to build an event website this way?

The architecture decisions cost almost nothing extra at the start. Picking a dated URL scheme and a static generator takes an afternoon of thought before the first page exists. The expensive version is retrofitting it later, once a season of content has been published on paths that were never designed to hold a second year.

---

*Next in the series: **A Race Is Just the Start** — the health and safety ecosystem we built around the race, and why a 5K was the right place to begin.*

*The runner-facing version of this story is on the race site: [Everything on BronteHarbourClassic.com (and Why It Stays Up All Year)](https://www.bronteharbourclassic.com/news/bronteharbourclassic-year-round/). Catch up on [Part 1](/news/why-we-archived-every-race-forever), [Part 2](/news/how-ai-organized-race-photos-drone-videos), [Part 3](/news/why-every-sponsor-vendor-gets-permanent-web-presence), and [Part 4](/news/qr-code-race-medals) if you missed them.*
