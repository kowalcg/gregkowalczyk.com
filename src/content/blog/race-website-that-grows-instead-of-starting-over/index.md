---
title: "A Race Website That Grows Instead of Starting Over"
description: "Why bronteharbourclassic.com adds capability every year instead of getting rebuilt — the content-collection architecture behind 51 posts and 160 partner pages."
pubDate: 2026-08-05
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
version: "1.0"
tag: "Digital-First Race"
image: "/images/blog/race-website-that-grows-instead-of-starting-over.jpg"
imageAlt: "Two runners crossing the finish line under the red Bronte Harbour Classic arch at the Mercedes-Benz Oakville Bronte Harbour Classic 5K, Bronte Heritage Waterfront Park, Oakville"
---

# A Race Website That Grows Instead of Starting Over

*This is Part 5 of **Building a Digital-First Race** — a series on the digital and AI decisions behind the Mercedes-Benz Oakville Bronte Harbour Classic 5K, and why we made them. Last time: [why our medals have QR codes](/news/qr-code-race-medals). Coming up: why we partnered with a recovery brand before anyone got hurt.*

Most event websites get rebuilt every year. Not redesigned — rebuilt. A new registration platform, a new template, a new developer who didn't build the last one, and the old site's content either migrates badly or doesn't migrate at all. I know this because I checked: bronteharbourclassic.com has never gone through that. It's the same Astro codebase from before race day one, and it's grown from a handful of pages into 235 without a single rebuild — no lost URLs, no re-platforming, no starting the search rankings over from zero.

> **Quick Answer:** bronteharbourclassic.com is built on Astro content collections, so every new blog post, sponsor page, or event year is a structured content file rendered through an existing template — not a new page built from scratch. That architecture is why the site now serves 235 pages (51 articles, 160 partner pages across 2026 and 2027) from the same codebase we launched with, and why it can add a full second event year without a redesign.

## Why event websites usually get rebuilt instead of growing

Most races don't own their website the way we do. Registration lives on a platform, results live on a timing company's server, the site itself is often a template that gets refreshed — sometimes fully rebuilt — every season because last year's structure doesn't fit this year's event. Add a second distance, add a new sponsor tier, and the honest answer is often "we'll deal with that in the redesign."

That approach throws away exactly the asset I wrote about in [Part 1](/news/why-we-archived-every-race-forever): everything that made the old site valuable — its search rankings, its permanent links, its accumulated content — resets to zero. A rebuild isn't neutral. It's a tax on every year of work that came before it.

## What "grows instead of rebuilds" actually means technically

The site runs on [Astro content collections](https://docs.astro.build/en/guides/content-collections/) — the same pattern I described for [sponsor and vendor pages](/news/why-every-sponsor-vendor-gets-permanent-web-presence) in Part 3. Every blog post, every partner page, every archived event year is a structured content file validated against a schema, rendered through a shared template. Adding capability means adding files, not touching the template that already works.

That's not an abstraction — it's the actual current state of the site. As of this week, bronteharbourclassic.com serves 235 total pages: 51 blog articles and 160 partner pages spanning the 2026 archive and the growing 2027 directory, plus the core site pages — all from the codebase that existed before the first sponsor ever signed on. None of that growth required a new site.

The schema does real work here, not just organization. Every content file — a blog post, a sponsor page, an event year — gets validated against a defined shape before the site builds: required fields, correct types, valid dates. Miss a field on a new sponsor page and the build fails loudly, right then, instead of shipping a broken page that someone discovers three weeks later. A small build-audit script runs after every deploy and checks details like whether every page carries a proper last-modified date for the sitemap — the kind of thing that's easy to get wrong by hand across 235 pages and easy to guarantee automatically across all of them at once.

## The archive pattern is the same pattern, applied to years

The clearest example is what happens at the top level of the site. The 2026 archive lives at `/2026/` and stays exactly where it is, forever — that's the whole premise of Part 1. The 2027 event doesn't replace it; it gets its own path at `/2027/`, built with the identical template, sitting alongside 2026 rather than overwriting it. A handful of 2027 partner pages are already live there, growing as new sponsors commit, while every 2026 page keeps resolving exactly like it did on day one.

Scale that pattern out and you get the real shape of the site: not one flat structure that has to be redesigned every year, but a stack of permanent, self-contained archives that never interfere with each other, plus a shared shell of core pages — home, sponsors, vendors, register — that updates in place.

## The honest limitation: not everything is purely additive

I don't want to oversell this. Some things about the race genuinely changed enough this year that we touched core pages, not just added new ones — 2027 will add a 10K alongside the 5K and Kids 1K, so the registration and pricing pages needed real structural updates, not just new content files. Growth-without-rebuilding describes the *architecture* — content collections, permanent archives, a shared template — not a promise that literally nothing ever gets restructured. What it does mean is that those changes stayed scoped to the pages that actually needed them; the 51 articles and 160 partner pages built on the old structure never had to move, break, or get touched at all.

## Why this matters beyond convenience

**Search compounds instead of resetting.** A site that's never been rebuilt keeps every backlink, every indexed page, and every bit of accumulated relevance it's earned since launch. [Google's own sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) is built around the assumption that a site's structure is stable enough for a crawler to trust — a site that resets annually is fighting that assumption every single year.

**Every past decision keeps paying off.** The AI photo tagging from [Part 2](/news/how-ai-organized-race-photos-drone-videos), the sponsor page template from Part 3, the permanent archive from Part 1 — none of that had to be rebuilt to support Part 4's QR codes or this year's 2027 launch. Each piece was built once and just keeps working underneath everything added after it.

**The team doesn't need to relearn the site every year.** We're two volunteers, not an agency. A codebase that adds files instead of getting rebuilt means the mental model of "how the site works" from year one still applies in year two, year three, and beyond.

**Content maintenance stays cheap even as the site gets bigger.** Retiring a stale FAQ entry or correcting a detail on one partner page touches one file, not a template shared by everything else. A site of 235 pages that requires the same one-file-at-a-time edits as a site of 20 pages is what actually makes long-term maintenance sustainable for a volunteer team, rather than something that gets harder every year the site grows.

## How to build a website that grows with your own event

You don't need a development team on staff — I'm a mechanical engineer who directs AI to build the implementation, not a career programmer. If you're running any recurring event, here's the sequence that gets you a site that grows instead of resetting.

**1. Pick an architecture built around structured content, not hand-coded pages.** Content collections, a headless CMS, anything that separates data from template — this is the single decision that determines whether next year is additive or a rebuild.

**2. Give every event edition its own permanent path.** `/2026/`, `/2027/`, and so on. Never repurpose last year's URL for this year's event; let each edition keep existing while the new one grows alongside it.

**3. Build shared templates once, and be willing to revisit them rarely, not never.** A sponsor page template, an article template — get it right early, and expect to touch it only when something structurally new (a new distance, a new tier) actually requires it, not on a yearly schedule.

**4. Keep the core shell separate from the archives.** Registration, sponsors, and homepage pages can and should update in place. The archived years underneath them shouldn't have to move when they do.

**5. Measure growth, don't assume it.** We didn't guess that we'd hit 235 pages — we counted. Knowing your real page count, post count, and partner count is what tells you whether the architecture is actually holding up or quietly turning into technical debt.

**6. Let the build fail loudly on mistakes, not silently in production.** Schema validation on every content file, plus a small audit script checking things like sitemap dates, catches a broken sponsor page or a missing field before it ever goes live. At 20 pages you can eyeball that by hand. At 235, you can't — and you shouldn't have to.

Do this once and your website compounds the way the rest of your event should — instead of starting over every single year.

## FAQ

### What does it mean for a race website to "grow instead of starting over"?

It means the site adds new content — articles, sponsor pages, event years — without rebuilding the underlying codebase or template each season. bronteharbourclassic.com does this through Astro content collections: new content is a structured file rendered through an existing template, so growth never requires a redesign or migration.

### How many pages does bronteharbourclassic.com have?

As of this update, 235 total pages: 51 blog articles and 160 partner pages spanning the 2026 archive and the growing 2027 directory, plus the core site pages — all served from the same codebase the site launched with.

### Why is event website architecture important for SEO?

A site that never gets rebuilt keeps every indexed page, backlink, and bit of accumulated search relevance it has ever earned. Search engines trust stable site structures more than ones that reset annually, and a permanent-archive pattern — where each year gets its own URL instead of overwriting the last — is what makes that stability possible.

### Does a growing website ever need structural changes?

Yes — architecture that grows instead of rebuilding doesn't mean nothing ever changes structurally. When the race itself changes meaningfully, like adding a second distance for 2027, core pages like registration need real updates. The difference is that those changes stay scoped to the pages that need them, while everything built on the older structure — every prior article, every partner page, every past event archive — keeps working exactly as it did before, untouched.

---

*Next in the series: [**Runner Safety Ecosystem: Building Beyond Race Day**](/news/runner-safety-ecosystem-sun-safety-injury-prevention) — the four tools that cover the other 364 days, and why they're four products instead of one app.*

*The runner-facing version of this story is on the race site: [Everything on BronteHarbourClassic.com (and Why It Stays Up All Year)](https://www.bronteharbourclassic.com/news/everything-on-bronteharbourclassic-com/). Catch up on [Part 1](/news/why-we-archived-every-race-forever), [Part 2](/news/how-ai-organized-race-photos-drone-videos), [Part 3](/news/why-every-sponsor-vendor-gets-permanent-web-presence), and [Part 4](/news/qr-code-race-medals) if you missed them.*
