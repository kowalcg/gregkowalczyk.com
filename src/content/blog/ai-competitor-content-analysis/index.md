---
title: "AI Competitor Content Analysis: What I Read in 7 Posts Before Writing Anything"
description: "Before writing any SEO blog post, I scrape and read 7 competitor articles using Frase and Claude Code. Here's exactly what I look for — and what most competitor analysis guides miss."
pubDate: 2026-03-25
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
version: "1.0"
tag: "AI Tools"
featured: false
image: "/images/blog/ai-competitor-content-analysis.jpg"
imageAlt: "Competitor content analysis pipeline showing Frase topic frequency map and Claude Code gap analysis output"
---

This is Part 3 of a series on my AI blog writing system. [Part 1 covered the full 5-phase workflow](/news/ai-blog-writing-workflow). [Part 2 covered brand voice files](/news/ai-brand-voice-guidelines) — how I make each of 6 sites sound like itself. This post covers the research phase that actually determines whether a post ranks: reading your competitors before you write a single word.

Most people skip this. Or they do it badly.

> **Quick Answer:** AI competitor content analysis means scraping the full text of the top 7 ranking posts for your target keyword, then extracting a topic map — which subtopics appear in most posts, which questions they answer, what structure they use, and crucially, what gaps they all share. I do this with Frase (automated scrape + topic frequency) and Claude Code (pattern extraction and gap analysis). The result is a content brief that tells me exactly what to include, what to skip, and where I have a genuine opening to outrank.

---

## Why Most Competitor Analysis Advice Doesn't Work

The standard advice: "Google your keyword, read the top results, see what they cover."

That's not analysis. That's browsing.

Reading 7 posts sequentially without a framework, you'll remember the first one and the last one. You'll notice whatever was most visually distinctive, not what was most strategically important. You'll miss the pattern that only becomes visible when you look at all 7 together.

The question you're trying to answer before writing isn't "what do competitors say?" It's: "What does every strong post on this topic include — and where is the gap I can own?"

You can't answer that by reading. You need to extract and compare.

---

## The Competitor Scrape Pipeline

My competitor scrape runs inside the `frase-content` skill I built for Claude Code. Here's what it does, phase by phase.

### Phase 1: Pull the Top 10 SERP Results

DataForSEO API call for the target keyword, location set to US, depth 10. I pull:

- Top 10 organic URLs with titles and meta descriptions
- Featured snippet format and content (if one exists)
- People Also Ask — minimum 5 questions
- Related searches

The featured snippet is the first thing I look at. If one exists, it tells me the exact format Google wants for this keyword — definition, list, table, or how-to steps. That format becomes my Quick Answer block.

### Phase 2: Filter and Scrape the Top 7

Not all 10 results get scraped. I skip YouTube videos, Reddit threads, Wikipedia, Amazon product pages, and government or forum pages. What's left — 5 to 7 actual blog posts and guides — gets scraped with Firecrawl. Full text, not just visible content. This pulls text hidden behind accordions, "read more" toggles, and FAQ sections that basic scrapers miss.

For each scraped post I extract:
- Word count
- H2 and H3 headers (complete list)
- Questions answered in body text and FAQs
- Statistics cited with sources
- Products or tools mentioned
- Any original research or first-hand data

This takes 3–4 minutes total. Manually, it used to take me 90.

### Phase 3: Build the Topic Frequency Map

This is where the pattern becomes visible.

Claude Code processes all 7 scraped posts together and builds a frequency map: how many competitors cover each subtopic. The output has four tiers:

| Tier | Frequency | What it means |
|------|-----------|---------------|
| Must-cover | 5–7 / 7 | Readers expect this. Missing it signals a thin post. |
| Should-cover | 3–4 / 7 | Adds depth. Good for topic coverage. |
| Optional | 1–2 / 7 | May differentiate, may not be worth the space. |
| Gap | 0 / 7 | Nobody covers this — but should someone? |

The gaps column is where I spend the most time. Sometimes a gap exists because the topic is genuinely irrelevant. Sometimes it's because every competitor wrote from the same template and nobody thought to go further.

For the [SportClinicFinder build story](/news/how-i-built-a-sports-clinic-directory-with-ai) I published recently, every competitor guide on directory websites covered "how to get the data" at the surface level. Nobody explained what happens when your initial import is 25% wrong — dental offices, allergy clinics, and ENT practices mixed in with your sports medicine listings. That gap became a full section. It's the part most people mention.

### Phase 4: Extract and Prioritize the PAA Questions

People Also Ask questions are the closest thing Google gives you to a real-time map of what people actually want answered. I pull all of them from the SERP — minimum 5 — and check which competitors answer them and which don't.

If 6 out of 7 competitors don't answer a PAA question usefully, that question becomes a priority in my FAQ section. Not just because FAQ sections can earn featured snippets (they do), but because an unresolved search question is an invitation. A direct, specific answer wins against a vague one every time.

### Phase 5: Find What Competitors Couldn't Find

After the scrape, I run one or two research queries on the topic — looking for:

- Recent data that competitors wrote before (a 2022 post won't have 2025 stats)
- Studies or papers none of them cited
- Angles that require original synthesis rather than aggregation

This is where first-hand data matters most. If I have a real number from my own work — 39 App Store rejections before RunMate Pro was approved, 12,770 clinic records processed for SportClinicFinder, $2M+ in ad spend managed across Amazon and Meta — that data doesn't appear in any competitor's post by definition. It's differentiated automatically.

---

## What I Do With the Output

The scrape produces a content brief with four sections:

**Keyword intel** — search volume, CPC, competition level, featured snippet format, PAA questions

**Proposed structure** — H2 order based on topic frequency map, word count target (competitor average × 110%)

**Must-include list** — subtopics in 5+ competitors, with my planned angle on each

**Differentiation opportunities** — gaps to fill, outdated stats I'll update, PAA questions nobody answers well, and first-person data I can bring in

I write against this brief, not against a blank page. The difference in output quality is significant — and measurable. A post written from a brief covers the topic map faster, hits the right word count without padding, and earns links from the sections that fill genuine gaps.

---

## What Frase Actually Does (and What It Doesn't)

Frase automates the scrape and displays a visual topic coverage score — how many target subtopics appear in your draft as you write. It's genuinely useful as a real-time coverage checklist while writing.

What it doesn't do: tell you which gaps matter, how to differentiate, or whether the topics it's flagging are worth covering at all. The frequency map shows what's common. It doesn't show what's valuable.

I use Frase for the scrape and the frequency baseline, then run gap analysis and differentiation work in Claude Code. The combination is faster than either tool alone.

If you don't have Frase: Firecrawl handles scraping, a spreadsheet handles manual frequency counting, and Claude handles pattern analysis. It takes 60–90 minutes instead of 5, but the output is the same. The framework is what matters, not the specific software.

---

## What I'd Do Differently

When I first built this pipeline, I was scraping too many posts. I started with 10, then 12, on the theory that more data meant better analysis.

It doesn't. Above 7, you hit diminishing returns. Results 8 through 10 tend to rank on domain authority, not content quality. Including them in the frequency map dilutes the signal — you start treating mediocre coverage as a benchmark. The top 5–7 are who you're actually competing with.

I also used to read every scraped post before building the frequency map. Now I build the map first, then read strategically — only the sections in the gaps column or the ones with genuine differentiation. Saves 30–40 minutes per post and produces the same brief.

---

## What's Coming in This Series

- **Part 4:** Schema markup, image SEO, and why most AI posts miss 40% of on-page optimization
- **Part 5:** Multi-platform deployment — git hooks, Vercel API triggers, and why I stopped running `vercel --prod`

If you want to implement this pipeline for your business or content team, [reach out](/contact).

---

## Frequently Asked Questions

### How many competitor posts should you analyze before writing?

Seven is the number I settled on after testing. The top 5–7 results represent genuine topical competitors — posts ranking on content quality. Above 7, you start including results that rank on domain authority alone, which distorts your topic frequency map. Below 5, you might miss a pattern that appears in 3 of 7 posts but is actually a must-cover subtopic. For most keywords, 7 gives you enough signal without noise.

### What is a content brief in SEO?

A content brief is a structured document that specifies what a post needs to include before writing begins. A good brief covers the target keyword and related variants, proposed H2 structure based on competitor frequency, word count target, must-include subtopics, People Also Ask questions to answer, and any differentiation opportunities — gaps, outdated stats to update, or first-person data to include. Writing from a brief consistently produces better-optimized content than writing from a keyword alone.

### What does Frase do for SEO content research?

Frase scrapes the top-ranking pages for a target keyword and builds a topic frequency map — showing which subtopics appear across multiple competitor posts. As you write, it scores your draft against that map in real time. It's most useful for quickly identifying must-cover subtopics and checking coverage before publishing. It accelerates the research phase significantly but doesn't replace gap analysis or differentiation strategy — those require judgment, not just frequency data.

### How do you find gaps in competitor content?

Build a topic frequency map from the top 7 competitors and look for subtopics that appear in 0 out of 7 posts. Not every gap is worth filling — some exist because the topic is genuinely off-scope. But many gaps exist because all 7 competitors wrote from the same template. Check whether the gap corresponds to a real PAA question or a common follow-up search. If it does, and you can cover it with first-hand data or better depth, that section often becomes the most-shared part of the post.

### Can you do competitor content analysis without paid tools?

Yes. Firecrawl has a free tier that handles scraping. For topic frequency mapping, you can build a manual spreadsheet from scraped posts — it takes 60–90 minutes instead of 5. Google Keyword Planner covers search volume and CPC for free. The paid tools (Frase, DataForSEO) accelerate the research phase, but the underlying analysis is tool-independent. The framework — scrape, frequency map, gap analysis, brief — works regardless of which software runs it.
