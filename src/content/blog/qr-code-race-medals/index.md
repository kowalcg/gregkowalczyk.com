---
title: "Why Our Medals Have QR Codes (When No One Else's Do)"
description: "Why we put QR code race medals into our first 5K instead of a plain metal disc — the standard we chose, the honest tradeoffs, and what it cost to add."
pubDate: 2026-07-29
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
version: "1.0"
tag: "Digital-First Race"
image: "/images/blog/qr-code-race-medals.jpg"
imageAlt: "Finisher medal and finish arch at the Mercedes-Benz Oakville Bronte Harbour Classic 5K, Bronte Heritage Waterfront Park, Oakville"
---

# Why Our Medals Have QR Codes (When No One Else's Do)

*This is Part 4 of **Building a Digital-First Race** — a series on the digital and AI decisions behind the Mercedes-Benz Oakville Bronte Harbour Classic 5K, and why we made them. Last time: [why every sponsor and vendor gets a permanent web page](/news/why-every-sponsor-vendor-gets-permanent-web-presence). Coming up: how we built a race website that grows instead of starting over.*

Pick up almost any finisher medal from almost any local 5K and you get the same object: a stamped disc of metal on a ribbon, worth exactly what it cost to manufacture. Ours has one difference I haven't seen at another community race — QR code race medals that actually do something after you take them off. Flip a Bronte Harbour Classic medal over, point a phone camera at it, and it opens the same permanent archive I wrote about in Part 1: your results, your photos, the whole morning. Most races could add this in an afternoon. Almost none do.

> **Quick Answer:** Every finisher medal from the 2026 Bronte Harbour Classic carries a QR code linking to the permanent race archive — results, bib-searchable photos, and sponsor pages. We chose an open QR standard over a proprietary NFC chip because any phone camera scans it with no app required, and it costs next to nothing to add to an existing medal die.

## Why most race medals are dead weight the moment you get home

A finisher medal does one job well: it proves you showed up and finished. Almost every race gets that part right. What almost none of them do is give the medal a second job once it's off the podium and in a drawer.

I went looking, while we were designing ours, at what other local races put on their medals. Event name, date, distance, maybe a logo. Functionally, it's a trophy that stops working the moment the ceremony ends. Nothing on it connects back to anything — not your time, not your photos, not the fact that 875 other people ran that morning with you. The object and the data about the day live in two completely separate places, and the object never points to the data.

That seemed like a missed connection, not a big one, but a real one. We already had a permanent home for every result and photo — [the 2026 archive](/news/why-we-archived-every-race-forever). The only piece missing was a physical object that pointed at it.

## What's actually encoded in ours

Nothing exotic. The QR code on a Bronte Harbour Classic medal encodes a single URL: `bronteharbourclassic.com/2026/`. That's it. No app, no login, no proprietary reader hardware. Scan it with the stock Camera app on an iPhone or the built-in scanner in Android's camera and you land on the archive — results, the [free photo gallery](https://www.bronteharbourclassic.com/photos/) searchable by bib number, drone footage, and all 80 sponsor and vendor pages.

The technical decision worth explaining is why we used a QR code at all instead of the fancier-sounding options.

## Why an open standard beat a proprietary chip

Race-tech vendors will happily sell you an NFC chip embedded in a medal or bib — tap instead of scan, feels more premium. We didn't use one, for a boring reason: a QR code is defined by an [open ISO standard](https://www.iso.org/standard/83389.html) (ISO/IEC 18004), which means every camera phone made in the last decade can read one natively, with zero dependency on us or any vendor staying in business. An NFC medal usually needs a specific app or a phone held a specific way against a specific chip. A QR code needs a camera, which is to say it needs nothing new at all.

[Apple's own documentation](https://support.apple.com/en-us/104962) on scanning QR codes with the stock Camera app makes the point better than I can: this is now default behavior on the device already in every runner's pocket, not a feature they have to seek out. [Denso Wave](https://www.qrcode.com/en/history/), the Japanese company that invented the QR code in 1994 for tracking automotive parts, released the format royalty-free specifically so anyone could implement it without licensing friction. Thirty years later, that decision is why a finisher medal can carry a working link that costs us nothing in licensing and requires nothing from the runner beyond a phone they already own.

There's a second reason, closer to the theme of this whole series: permanence. A proprietary NFC format can be discontinued by whichever company owns it. An open, ISO-standardized 2D barcode has no owner to go out of business. If I'm promising a link on a medal will still resolve in 2036, I want the *scanning technology*, not just the archive behind it, to be something nobody can retire out from under me.

## What it actually took to build

This part is genuinely small, which is worth saying plainly because "add a QR code to a physical medal" sounds like it should involve more moving parts than it did.

**Generate the code.** A QR code encoding a single static URL is a five-minute job with any of a dozen free generators — the hard part isn't making the code, it's deciding what it should point to and committing to never changing that URL.

**Get the artwork to the medal manufacturer.** The QR artwork drops into the medal's existing die alongside the event logo, exactly like any other design element. It doesn't require new tooling or a different manufacturing process — it's ink and stamping, the same as the rest of the medal face.

**Test it against the actual medal surface.** This is the step people skip. A QR code needs enough contrast and a clean enough quiet zone (the blank border around the code) to scan reliably once it's embossed into curved, reflective metal instead of printed flat on paper. We test-scanned physical samples under normal indoor lighting before approving the production run, because a code that scans perfectly on a screen can fail completely on brushed metal under fluorescent light.

**Point it at a URL that will never move.** This is the part that actually took engineering discipline, and it's the same discipline I wrote about in Part 1: the archive lives at a permanent path, on infrastructure we control, so the promise printed on 875 medals doesn't quietly break the first time we redesign the site.

None of that required a QR-specific vendor relationship or ongoing subscription. It's a one-time design addition to a physical object we were already having manufactured.

## The honest limitation

Here's what I won't oversell. We know the QR code scans correctly on the medals we tested, and we know from server logs that people are scanning them — but we don't have good data yet on the *long-term* scan rate. A medal that sits in a drawer for three years accumulates scratches, tarnish, and pocket lint in ways a lab sample doesn't. I don't yet know what percentage of our QR codes will still scan cleanly in year five, and I won't know until year five actually happens. If contrast degrades badly on a worn medal, the fallback is that the archive URL is also short and readable — bronteharbourclassic.com/2026/ — so a human can type it in even if a scratched code won't resolve. That's a real limitation, not a solved problem, and I'd rather say so than pretend a metal object ages as gracefully as a website does.

## Why this compounds beyond race day

A QR code on a medal is a small thing by itself. What makes it worth building correctly is what it connects to. Every scan lands on the same permanent archive that holds all 80 sponsor and vendor pages I wrote about last week, the bib-searchable photo gallery, and the full results. The medal isn't just a keepsake anymore — it's a physical bookmark for a digital asset that keeps accumulating value the longer it stays online. Show someone at a dinner table how to scan it, and you've just demonstrated the entire premise of this series in about four seconds.

## How to build this for your own event

You don't need a race-tech vendor relationship to do this — I'm a mechanical engineer who directs AI to build the implementation, not a career programmer. If you're organizing any recurring event with a physical takeaway, here's the sequence.

**1. Build the permanent digital home first.** A QR code pointing at nothing durable is worse than no QR code — it's a promise you can't keep. Get the archive, the results page, or whatever it links to stable and permanent before you print anything.

**2. Pick an open standard, not a proprietary one.** A QR code costs nothing to license and scans on hardware every attendee already owns. Don't trade that for a "premium-feeling" proprietary chip that depends on one vendor's continued existence.

**3. Test the physical object, not just the digital file.** A QR code that scans perfectly on your monitor can fail on an embossed, reflective, or textured surface. Print or stamp a sample and test it under real lighting before you commit to a production run.

**4. Choose a URL you can defend for a decade, not a season.** The code is only as durable as the link inside it. Lock the URL structure down before you finalize the artwork.

**5. Give people a human-readable fallback.** Print the URL itself somewhere near the code, small. If the code degrades or a phone camera struggles, a short, readable web address still gets someone there.

Do those five things and a fifty-cent design addition turns a disposable trophy into a permanent, working link — for the cost of testing a sample run, not a new vendor contract.

## FAQ

### What is a QR code race medal?

A QR code race medal is a finisher medal with a scannable QR code stamped or printed into its design, linking to a digital destination — usually race results, photos, or an event archive. Ours points to the permanent [2026 archive](https://www.bronteharbourclassic.com/2026/), so scanning the medal brings up results, bib-searchable photos, and sponsor pages from race day.

### Do I need an app to scan a race medal QR code?

No. Every QR code on a Bronte Harbour Classic medal scans with the stock Camera app already installed on iPhone and Android — no separate app, login, or account required. Point the camera at the code, tap the link that appears, and the archive opens in the phone's browser.

### Why use a QR code instead of an NFC chip on a medal?

A QR code is defined by an open ISO standard, so any smartphone camera can read it with no proprietary hardware or app dependency. An NFC chip typically needs a specific app or reader behavior and depends on a vendor's format staying supported. For a link meant to work for a decade, the standard with no single point of failure was the safer bet.

### How much does it cost to add a QR code to a race medal?

The QR artwork itself costs nothing to generate, and adding it to an existing medal die is a design change, not a new manufacturing process — the real cost is the time spent testing that the code scans reliably on the finished metal surface, not a licensing fee or vendor markup.

---

*Next in the series: **A Race Website That Grows Instead of Starting Over** — why we built bronteharbourclassic.com to add capability every year instead of getting rebuilt from scratch.*

*The runner-facing version of this story is on the race site: [Scan Your Medal: What the QR Code Unlocks](https://www.bronteharbourclassic.com/news/race-medal-qr-code/). Catch up on [Part 1](/news/why-we-archived-every-race-forever), [Part 2](/news/how-ai-organized-race-photos-drone-videos), and [Part 3](/news/why-every-sponsor-vendor-gets-permanent-web-presence) if you missed them.*
