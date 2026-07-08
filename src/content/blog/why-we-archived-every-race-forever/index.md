---
title: "Why We Archived Every Race Forever"
description: "Most race websites reset every year — results vanish, photo links die. Here's why our 5K archives everything forever, and what it does for runners, sponsors, and vendors."
pubDate: 2026-07-08
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
version: "1.0"
tag: "Digital-First Race"
featured: true
image: "/images/blog/race-archive-bronte-harbour-classic.jpg"
imageAlt: "Hundreds of runners in red race shirts packed into the start corral of the Mercedes-Benz Oakville Bronte Harbour Classic 5K in Oakville"
---

# Why We Archived Every Race Forever

*This is Part 1 of **Building a Digital-First Race** — a series on the digital and AI decisions behind the Mercedes-Benz Oakville Bronte Harbour Classic 5K, and why we made them. Coming up: how AI organized more than 1,800 race photos, why every sponsor and vendor gets a permanent web page, why our medals have QR codes, and how we built a race website that grows instead of starting over.*

Go look up almost any local 5K from three years ago. The registration page is dead. The results are a broken link or a PDF on a timing company's server. The photos were on someone's Facebook album that nobody can find. The sponsors who paid real money to support that race? No trace they were ever involved.

That's the norm. Race websites are treated as disposable — built for registration season, abandoned after the finish line. When we launched the Mercedes-Benz Oakville Bronte Harbour Classic this June, we made the opposite decision before the first runner registered: **nothing gets deleted. Ever.**

> **Quick Answer:** We built a permanent public archive at [bronteharbourclassic.com/2026/](https://www.bronteharbourclassic.com/2026/) holding every result, 81 sponsor and vendor pages, and 1,843 searchable race photos and drone videos from our inaugural 5K — and committed to keeping it online indefinitely. Every finisher medal carries a QR code pointing to it. The rule we run the site by: that URL must never return a 404.

## The moment that made the decision obvious

Our race sold out — 875 registrations across the 5K and the Kids 1K on Father's Day, June 21, 2026, at Bronte Heritage Waterfront Park in Oakville. For hundreds of those people, it was a first race. For a few, it was the fastest they'll ever run. Adam Schmidt won it in 14:43. Sadie-Jane Hickson crossed first for the women in 16:34.

Here's the question I kept asking during planning: what does a runner have left twelve months later?

A medal in a drawer, usually. Maybe a photo, if they managed to grab it before the gallery link expired. The race itself — the times, the sponsors, the atmosphere, the fact that a first-year event on the Oakville waterfront sold out — just evaporates from the internet.

That struck me as a waste of the most durable asset an event creates. A race produces something no ad budget can buy: hundreds of genuine human stories tied to one place and one morning. Deleting that every year and starting from zero is the digital equivalent of tearing down the finish arch and burning it.

## What "archiving forever" actually looks like

The archive lives at one permanent URL: [bronteharbourclassic.com/2026/](https://www.bronteharbourclassic.com/2026/). It holds three things.

**The results and the story.** Prize winners, the sold-out numbers, the day itself — written up as pages, not a PDF attachment that dies when a timing platform changes vendors.

**Every partner, permanently.** All 81 sponsors, vendors, and organizers from 2026 — 21 sponsors, 53 vendors, 7 organizing groups — have their own mini landing page in the archive. Not a logo in a footer: a real page with their story, their role in the race, and actual race-day photos they appear in. I'll write a full article about why we did this (it changed our partner conversations more than anything else we built), but the short version: a local business that backed a first-year community race deserves better than being scrubbed from the site in November.

**All 1,843 photos and videos, searchable.** Every photo from race day is in a [free public gallery](https://www.bronteharbourclassic.com/photos/) where runners can search by bib number, name, or moment — start line, course, finish line, Kids 1K, festival, awards. The drone footage of the whole morning is in there too, cut into nine watchable chapters. AI handles the organization; 92% of bibs were detected and indexed automatically. That's Part 2 of this series.

And the piece that ties the physical to the digital: **every finisher medal has a QR code stamped into it that points at the archive.** The medal in the drawer is now a working link. Scan it in 2031 and it has to resolve. That's the standard we signed up for.

## The economics: why "forever" costs almost nothing

The obvious objection is cost. Keeping a full race site online year-round, with 1,843 photos and videos, forever? That sounds like a hosting bill.

It isn't, if you make the right technical choices. The site is fully static — built with [Astro](https://astro.build), deployed on Vercel's free tier, no database, no server to maintain. The photo gallery originally ran on a media platform that would have cost about $99 a month in perpetuity. In June we migrated everything to [Cloudflare R2](https://developers.cloudflare.com/r2/) with pre-generated image variants, and the ongoing cost dropped to effectively zero.

So the real annual cost of archiving a race forever is roughly the price of a domain name. The barrier was never money. It's that nobody in the race industry treats the website as a permanent asset, so nobody architects it like one.

## What a permanent archive earns you

I run e-commerce brands, so I think about this the way I think about any compounding asset. The archive pays out on three fronts.

**For runners:** the race doesn't end. People came back to the photo gallery for weeks after race day. A finisher can send their parents a link, not a screenshot. A kid who ran the 1K will be able to find that morning when they're twenty. This is the experience layer, and it's the reason people bring friends back next year.

**For sponsors and vendors:** proof, not promises. When we talk to a partner about 2027, we don't hand them a deck describing hypothetical exposure. We send them a live page showing exactly how their brand appeared at the 2026 race — including photos our AI tagged them in. With 81 of those pages live, renewal conversations start from evidence.

One honest caveat: I can't yet prove the archive converts into 2027 registrations — the race is three weeks behind us and that data doesn't exist yet. What I can measure today is behavior: people kept returning to the gallery for weeks after race day, and partners reply to a live page faster than they ever replied to a PDF. I'll publish the registration numbers when I have them.

**For the race itself:** compounding search presence. A site that persists accumulates authority; a site that resets every year starts from nothing every year. Our site already carries 50+ articles, and every one of them, plus the archive, keeps working for us between race seasons — including in AI search, where being the documented, citable source about "the Oakville Father's Day 5K" matters more every month. I covered our AEO approach in [AI Search Optimization for Small Business in 2026](/news/ai-search-optimization-2026), and the race site follows that playbook.

## The rule that makes it real: never 404

A commitment like this needs an enforcement mechanism or it's just a mood. Ours is a single operating rule: **the URL printed on the medals must never return a 404.** Not during a redesign, not after a platform migration, not in five years.

That one constraint quietly dictates good architecture. It forces stable URLs, static pages that don't depend on any vendor's continued existence, photo storage we own, and redirects whenever anything moves. Constraints like this are how a two-person volunteer team ends up with more durable infrastructure than events fifty times our size.

If you're building any event — race, festival, conference — I'd give you the same advice: pick the promise first ("this link works forever"), and let the promise force the architecture.

## How to build a permanent archive for your own event

If you run a race, a festival, or any recurring event and want to steal this playbook, here's the sequence I'd follow. None of it requires a developer on staff — I'm a mechanical engineer who builds with AI in the loop, not a programmer.

**1. Own the domain and the site.** Not a page on a registration platform, not a Facebook event — a domain you control. This is the single decision everything else depends on. Platforms come and go; your domain renews for about $20 a year.

**2. Go static.** A static site generator (we use Astro) means no database, no server, nothing that decays or bills monthly. Your event site becomes a pile of files that any host can serve for free, essentially forever.

**3. Design URLs for decades, not seasons.** Give every edition its own path — /2026/, /2027/ — and let the homepage always point to the current year. Never reuse or repurpose an edition's URL. Boring URL discipline is what "permanent" actually means in practice.

**4. Own your media.** Photos on a photographer's delivery platform or a social album will disappear. Move them to storage you control — object storage like Cloudflare R2 costs effectively nothing at race-gallery scale — and serve them from your own domain.

**5. Publish results as pages, not PDFs.** A results PDF on a timing vendor's server is a dead link waiting to happen. Pages you host are searchable, linkable, and yours.

**6. Only then, print the URL on something physical.** The QR code goes on the medal *after* the URL scheme is locked. Physical objects outlive redesigns; the link they carry has to as well.

Do those six things and your event has a compounding digital asset that most ten-year-old races don't have. Skip them and you're renting your history from vendors.

## FAQ

### Why do most race websites disappear after the event?

Most races rent their web presence: a registration platform page, a timing company's results portal, a social media album. Each of those belongs to a vendor with no reason to preserve it. When the contract ends or the platform changes, the content vanishes. Unless the race owns its own site and treats it as a permanent asset, deletion is the default outcome.

### What is a race archive?

A race archive is a permanent public record of an event edition — results, prize winners, sponsors, photos, and the story of the day — kept online at a stable URL indefinitely. Ours lives at bronteharbourclassic.com/2026/, and each future edition will get its own: /2027/, /2028/, and so on, with the homepage always serving the current year.

### How much does it cost to keep a race website online forever?

Almost nothing, if the site is static. Our race site runs on Astro and Vercel with photos on Cloudflare R2 — the recurring cost is essentially the domain registration, on the order of $20 a year. The expensive version of "forever" only exists when a site depends on databases, servers, or paid media platforms that bill monthly.

### What do QR codes on race medals do?

Each finisher medal from the Bronte Harbour Classic carries a QR code that resolves to the permanent 2026 archive. Scanning it brings up the race results, the photo gallery searchable by bib number, and every sponsor and vendor page from that edition — turning the medal into a durable link between the physical keepsake and the digital record of the day.

---

*Next in the series: **How AI Organized 1,800+ Race Photos** — Google Vision, a 92% bib detection rate, and why we gave every photo away free.*

*The runner-facing version of this story is on the race site: [The 2026 Archive: Your Race, Saved Forever](https://www.bronteharbourclassic.com/news/2026-archive-your-race-saved-forever/). And if you're thinking about building an event from scratch, start with [what building one taught me](/news/building-bronte-harbour-classic-inaugural-race).*
