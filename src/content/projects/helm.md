---
name: "Helm"
tag: "Internal Tool · In Testing"
tagColor: "purple"
image: "/images/projects/helm.webp"
description: "Seller intelligence for the two e-commerce brands I run. Helm pulls Amazon SP-API, Amazon Ads, Shopify, Meta, Klaviyo and Search Console into one place, then exposes it to Claude as a set of tools — so the question 'why did ACOS jump last week' gets answered in a sentence instead of an afternoon of spreadsheets."
stats:
  - "33 tools spanning sales, ads, inventory, margin, search queries and email"
  - "Daily advertising review and weekly brief, delivered by email"
  - "True margin by SKU — landed cost, fees, ads and returns, not just revenue"
  - "Built for GearTOP and TapeGeeks; currently in internal testing"
tech: ["Next.js 15", "TypeScript", "Model Context Protocol", "Neon Postgres", "Prisma", "Vercel"]
links:
  - { label: "Visit helm.ad", href: "https://helm.ad", external: true }
  - { label: "Ask me about this", href: "/contact" }
order: 30
featured: true
schemaType: "SoftwareApplication"
platform: "Web"
year: "2026"
---

> **Status:** Helm is an internal tool, in testing across my own brands. It isn't open to
> outside users yet.

## The problem

Running two product brands across Amazon and Shopify means the numbers that matter live in
six or seven systems that don't talk to each other. Amazon Seller Central knows units and
fees. Amazon Ads knows spend. Shopify knows direct sales. Klaviyo knows email. Search
Console knows organic. Meta knows paid social.

Any question worth asking crosses at least three of them. *Is this SKU actually
profitable after ads and returns?* *Did that ad spend move anything, or did we buy sales
we'd have got anyway?* *What runs out of stock before the next container lands?*

Answering those by hand takes hours, so in practice they don't get asked often enough. And
the commercial tools that do this start around $249/month per account.

## What it does

Helm is a hosted MCP server with a dashboard on top. MCP — Model Context Protocol — is
what lets Claude call the tools directly, so instead of exporting a report and reading it,
I ask a question in plain language and the model queries the actual data.

Thirty-three tools, roughly grouped as:

- **Data** — sales and traffic, inventory health, fee breakdown, search query performance,
  financials, ad performance and search terms, repeat purchase, customer journey.
- **Intelligence** — ACOS diagnosis, negative-keyword harvesting, stockout forecasting,
  true margin by SKU, keyword opportunities, a weekly brief.
- **Review** — a daily advertising review and an email-marketing review that grade
  channels against CAC, LTV and payback rather than vanity metrics.

The margin work is the part that changed the most decisions. Revenue per SKU is easy and
misleading; landed cost plus Amazon fees plus attributed ad spend plus returns is the
number that tells you whether to reorder.

## How it's built

Next.js 15 and TypeScript on Vercel, Prisma against Neon Postgres, WorkOS for auth, with
scheduled jobs pulling each source on its own cadence. Every credential is encrypted at
rest; every tool call is logged.

The architecture decision I'd defend: **it reads, it never writes.** No Helm tool changes a
bid, a price, or a listing. That constraint makes the whole thing safe to point an LLM at.
Write access is a separate, later, deliberately harder problem.

## Why it's on this page

Two reasons. It's the clearest example of what I actually do for clients — take data that
exists but isn't usable, and turn it into something that answers questions. And it runs at
roughly the cost of a couple of coffees a month against commercial tools priced in the
hundreds, which is the same arithmetic behind every build on this site.
