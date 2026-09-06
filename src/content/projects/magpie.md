---
name: "Magpie"
tag: "Internal Tool · Live"
tagColor: "purple"
image: "/images/projects/magpie.webp"
description: "A shared visual brain for the team. Drop in a link, a screenshot, or a highlighted quote and Magpie enriches it — title, summary, category, thumbnail — then makes it searchable across every brand. Built because research kept getting done twice by different people."
stats:
  - "Drag-and-drop, paste, browser extension, and mobile share-sheet capture"
  - "AI titling, summaries and auto-categorisation on every saved item"
  - "Search operators: type:, status:, #category, by:me"
  - "REST API with scoped tokens, so agents can read and write the library too"
tech: ["React", "Vite", "Firebase", "Cloud Functions", "Claude API", "Vercel"]
links:
  - { label: "Ask me about this", href: "/contact" }
order: 35
schemaType: "SoftwareApplication"
platform: "Web"
year: "2026"
faq:
  - q: "What is Magpie?"
    a: "Magpie is a shared visual research library for a small team. Drop in a link, a screenshot or a highlighted quote and it enriches the item with a title, summary, category and thumbnail, then makes it searchable across every brand."
  - q: "Why build a bookmarking tool instead of using an existing one?"
    a: "Because saving had to be faster than not saving. Every tool the team tried added enough friction that people stopped using it, and the same research got done twice. Magpie's capture takes two seconds and no form."
  - q: "How does Magpie enrich saved links?"
    a: "A server-side function fetches the page, chooses a real hero image rather than the generic Open Graph default, uses Claude Haiku to write a title and summary and suggest a category, and rehosts the thumbnail so it survives changes on the source site."
  - q: "Can AI tools query Magpie?"
    a: "Yes. Magpie has a REST API with scoped tokens, so Claude Code can search the library at the start of a task and write findings back at the end."
  - q: "Is Magpie a public product?"
    a: "No. It is an internal tool for Greg Kowalczyk's team across GearTOP, TapeGeeks and the Bronte Harbour Classic. Sign-in is domain-gated with an allowlist."
---

> **Status:** Internal tool for my team across GearTOP, TapeGeeks, and the race. Not a
> public product.

## The problem

Five people, six brands, and everybody bookmarking things in a different place. The same
competitor teardown got researched twice in a month by two people who each thought they
were starting from scratch. Slack links scrolled away. Browser bookmarks were private by
definition.

The failure wasn't a lack of a tool — we'd tried several. It was that saving something had
to be *faster than not saving it*, and every tool we tried added enough friction that
people quietly stopped.

## What it does

Capture is the whole product. Drag a link in, paste a screenshot, highlight text and press
a key, share from a phone, or click the browser extension. Two seconds, no form.

Enrichment happens after, server-side: it fetches the page, picks a real hero image rather
than the site's generic OG default, and uses Claude Haiku to write a title, a summary, and
suggest a category. Thumbnails are rehosted into our own storage, so nothing breaks when
the source site changes.

Then it's searchable across the whole team — filtered by brand, status, category,
platform, or who saved it, with operators like `type:video`, `status:queued`, `#seo`, and
`by:me`.

The piece I use most: a **REST API with scoped tokens**, which means Claude Code can query
the library at the start of a task and write findings back at the end. The research
library and the thing doing the research are connected.

## Build notes

React and Vite on the front end, Firebase for auth, data and storage, Cloud Functions for
enrichment and the API, deployed on Vercel. Google sign-in is domain-gated with an
allowlist on top.

One decision worth flagging: the enrichment function fetches arbitrary user-supplied URLs,
which is a textbook server-side request forgery risk. It validates every redirect hop and
every resolved address rather than just the URL you typed. If you're building anything
that fetches a URL a user gave you, that's the check people skip.
