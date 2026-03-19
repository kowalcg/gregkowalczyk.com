---
title: "My AI Blog Writing Workflow: From Keyword to Published in Under an Hour"
description: "How I built a Claude Code skill that handles SEO research, writing, multi-platform formatting, and deployment for 6 different websites — without switching tools."
pubDate: 2026-03-19
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
tag: "AI Tools"
featured: true
image: "/images/blog/ai-blog-writing-workflow.jpg"
imageAlt: "AI blog writing workflow diagram showing research, writing, and deployment phases"
version: "1.0"
---

Most people using AI to write blog posts are doing it wrong.

They open ChatGPT, type "write me a blog post about X," paste the output into their CMS, and wonder why it doesn't rank and doesn't sound like them. I spent a lot of time testing that approach. It produces content that reads like content — technically words, but nobody's home.

This is Part 1 of a series on how I actually run my AI blog writing workflow at scale. Right now I publish SEO-researched posts to 6 different websites, across 3 different platforms, in under an hour per post. I built the entire system using Claude Code — with no formal programming background.

> **Quick Answer:** My AI blog writing workflow runs in 5 phases — intake, SEO research, writing, site-specific formatting, and deployment — using a custom Claude Code skill. The whole process takes 30–60 minutes per post depending on how competitive the keyword is, and it handles Shopify, Astro, and Next.js sites without switching tools.

---

## Why Most AI Blog Workflows Break Down

Before I get into the system, here's what I tried that didn't work.

**The copy-paste approach.** Prompt an AI, paste the output into the CMS. No keyword research, no competitor analysis, no brand voice, wrong format for the platform. The posts don't rank because they weren't built to rank.

**The tool subscription pile.** I was running Jasper for writing, Frase for research, SurferSEO for optimization, and Grammarly on top of that. Four separate subscriptions, four interfaces, and I was still manually moving data between every step. The workflow had too many handoffs — each one a chance for something to get lost or misformatted.

**The universal mega-prompt approach.** One massive prompt trying to handle research, structure, SEO, and brand voice simultaneously. This produces inconsistent output and completely falls apart when you're writing for multiple brands with different audiences, different tones, and different technical requirements.

What actually worked: treating blog writing as a **system** with defined inputs, defined steps, and defined outputs — and then encoding that system into an AI skill that executes it reliably every time.

---

## The 6 Sites, 3 Platforms Problem

Here's why a generic AI writing tool doesn't solve my problem.

I publish across 6 websites:

- **tapegeeks.com** — Shopify (HTML output with custom CSS)
- **geartopdesign.com** — Shopify (HTML output, different design system)
- **getsunup.app** — Next.js (MDX files with YAML frontmatter and a FAQ array)
- **gregkowalczyk.com** — Astro (Markdown with specific frontmatter fields)
- **bronteharbourclassic.com** — Astro (Markdown, different schema)
- **runmatepro.com** — Astro (MDX with category, readTime, and tags fields)

Each site has a different CMS, different output format, different brand voice, different internal link targets, and a different deployment method. A TapeGeeks post is raw HTML with self-contained inline CSS that gets pasted directly into the Shopify blog editor. A RunMate Pro post is an MDX file saved to a specific directory path, committed to git, and pushed to trigger a Vercel deployment.

These aren't just formatting differences. TapeGeeks sounds like an athlete who knows the science. GearTop sounds like a gear reviewer who's been on the trail. This site (gregkowalczyk.com) sounds like me — engineering background, specific numbers, direct opinion, no hedging.

A generic AI tool can't encode all of that. So I built a Claude Code skill that does.

---

## The 5-Phase System

This is the core of the AI blog writing workflow. Every post runs through the same 5 phases.

### Phase 1: Intake

The skill starts by asking 5 questions before running any research or writing:

1. **Which site?** — Determines brand voice, output format, save location, deployment method
2. **Primary keyword or topic?** — The SEO target for the post
3. **Content type?** — Guide, how-to, comparison, listicle, Q&A, or announcement
4. **Research mode?** — Quick (30 min) or Full Frase (60 min)
5. **Special angle or hook?** — A unique stat, contrarian take, personal story, or product tie-in

These 5 answers determine everything that runs downstream. The skill won't proceed with assumptions on the first three. This might seem like friction, but it's not — it's the discipline that makes everything else consistent. When you define the target clearly at the start, the AI isn't guessing what you want at step 4.

### Phase 2: SEO Research

I use two research modes depending on the keyword competitiveness.

**Quick Mode** (25–30 minutes, right for most posts):
- SERP pull via DataForSEO — top 5 organic results, People Also Ask questions, related searches
- Google Ads keyword volume + CPC data
- Perplexity deep research — current stats, recent developments, angles the top competitors miss
- Output: lightweight content brief with proposed structure and word count target

**Full Frase Mode** (55–65 minutes, for pillar content and competitive keywords):
- Full SERP pull, top 10 results
- Competitor scrape via Firecrawl — word count, H2/H3 heading structure, topics covered, stats cited, questions answered, gaps
- Topic frequency map: must-cover topics (5+ competitors mention), should-cover (3–4), optional (1–2), and gaps (no competitor covers)
- Deep research pass
- Complete content brief with differentiation angles

The mode matters more than most people realize. A Quick Mode post for a low-competition keyword might target 1,200 words. A Full Frase post for a competitive term gets a full competitive analysis showing me exactly what the top 7 results cover, at what depth, and where they fall short — before I write a single word. That's the difference between guessing at content coverage and knowing it.

### Phase 3: Writing

The skill applies the brand voice reference for the selected site and runs through a structured writing methodology I've tested and refined over two years of content publishing.

A few things that are non-negotiable in every post:

**Hook that answers the query immediately.** Google is reading your opening paragraph. So is the person who just clicked through from a search result. If you don't answer what they came for in the first 2–3 sentences, most of them leave. The intro earns the read.

**Quick Answer block.** 40–60 words, direct, placed immediately after the intro. This targets featured snippet placement and also acts as a commitment to the reader — "here's the short version, now here's the full story." Every post has one.

**FAQ section answering People Also Ask questions.** Each answer is self-contained, 40–80 words, no cross-references to other sections. Self-contained answers are how you pick up PAA featured snippets. Cross-referential answers ("as discussed above...") are how you lose them.

**Human voice enforcement.** The skill has a kill list built in: *delve, comprehensive, crucial, utilize, leverage, seamless, nuanced, robust, foster, embark, plethora, myriad*. These words appear in every piece of generic AI content. They're a signal — to readers and to Google — that nobody actually wrote this. Beyond individual words, the humanization pass also flags structural AI-isms: everything grouped in threes, perfect parallel sentence construction, fake-neutral framing ("some experts say... others argue...").

Replacing these patterns with something real isn't hard. A direct opinion. A specific number from actual experience. An admission that something doesn't work in every situation. One sentence that's 4 words long followed by one that's 22. That's what human writing sounds like.

### Phase 4: Site-Specific Formatting

This is where generic AI writing workflows fall apart completely.

The same article content gets formatted differently depending on the destination site.

**For Shopify sites (HTML output):**

```html
<style>
  .tapegeeks-blog { font-family: 'Inter', sans-serif; ... }
  .tip-box { background: #f0f9ff; border-left: 4px solid #0ea5e9; ... }
  .faq-question { font-weight: 600; ... }
</style>

<div class="tapegeeks-blog">
  <article>
    <!-- content here -->
  </article>
</div>
```

The CSS is self-contained — it travels with the post and doesn't depend on any theme file. The Quick Answer lives inside a `.tip-box` div. FAQ items use `.faq-question` and `.faq-answer` divs, not heading tags (headings inside FAQ would break the structure). Every external link gets `target="_blank" rel="noopener noreferrer"`.

**For Astro sites (this site, BHC, RunMate Pro):**

```yaml
---
title: "..."
description: "..."
pubDate: 2026-03-19
author: "Greg Kowalczyk"
tag: "AI Tools"
featured: true
---
```

File saves to `src/content/blog/[slug]/index.md`. Deployment is a git push.

**For Next.js (getsunup.app):**

```yaml
---
title: "..."
faqItems:
  - question: "What is the UV index?"
    answer: "The UV index is a scale from 1–11+ measuring..."
heroImage: "/images/blog/hero-[slug].jpg"
---
```

The `faqItems` array has to match the FAQ section in the body exactly — the page component renders both. One mismatch and the rendered page is inconsistent. The image path has to follow the exact naming convention or the component throws an error.

The skill knows all of this. I encoded it once. I don't carry it in my head.

### Phase 5: Quality Gate and Save

Before anything gets saved, the skill runs a 7-point checklist:

1. Answers the title question in the first 300 words?
2. Quick Answer present (40–60 words)?
3. All PAA questions answered in FAQ (self-contained)?
4. Zero AI-isms?
5. Brand voice matches the selected site?
6. Output format correct for the destination platform?
7. File saved to the right folder with the correct slug and extension?

Then it generates Article schema and FAQ schema markup. For HTML sites, the schema goes directly into the `<head>` as a `<script type="application/ld+json">` block. For Markdown/MDX sites, it's noted for manual addition or handled by the layout template.

After saving, the skill outputs the next step: paste into Shopify, or run `git add → git commit → git push origin main`.

---

## What This Looks Like in Practice

Here's a Quick Mode post for TapeGeeks on a typical run:

| Time | Step |
|------|------|
| 0:00 | Invoke skill, answer 5 intake questions |
| 0:02 | Keyword research: SERP pull + volume + Perplexity (parallel) |
| 0:12 | Review content brief, flag any changes |
| 0:14 | Writing begins — 1,400-word draft |
| 0:28 | Humanization pass + SEO on-page check |
| 0:33 | HTML formatting applied, schema generated |
| 0:37 | Quality gate passes, file saved |

Under 40 minutes. Production-ready, SEO-researched, formatted for the platform, schema embedded, correct file path, next step confirmed.

Full Frase mode on a competitive keyword adds the competitor scrape and topic map — another 20–25 minutes. I use that for posts where I need to outrank established content, not just fill a gap.

---

## The Principle Behind It

Here's what I think most people miss when they try to use AI for content at scale.

A useful AI system is a **decision engine**, not a prompt. It doesn't just ask the AI to "write a blog post." It orchestrates a sequence of decisions — what to research, how to structure the research, how to apply brand voice, which output format to produce, where to save the file. Each decision has encoded rules. The rules came from months of testing what actually produced posts that ranked and sounded like the brand.

The skill also handles failure gracefully. If the Perplexity API quota is exceeded, it falls back to BrightData search. If a competitor URL returns a 403 during the scrape phase, it skips that URL and notes the gap in the brief. The system degrades predictably rather than crashing silently.

When I want to add a new site, I add its platform type, output format, brand voice file, and save path to the skill. From that point, it's handled. No re-explaining, no inconsistent formatting, no wondering which folder the file goes in.

This is the same way I approach any repeatable process — from product development to race event logistics. Define the system first. Then let automation run it.

---

## What's Coming in This Series

This is Part 1. Here's the roadmap:

- **Part 2:** How I write brand voice files that make the skill sound like each brand — not like AI
- **Part 3:** The Full Frase competitor scrape pipeline — what I look for when I read 7 competitor posts before writing
- **Part 4:** Schema markup, image SEO, and why most AI posts miss 40% of on-page optimization
- **Part 5:** Multi-platform deployment — git hooks, Vercel API triggers, and why I stopped running `vercel --prod` manually

If you want to build something similar for your business or want to talk through how this kind of system could work for your content operation, [reach out](/contact).

---

## Frequently Asked Questions

### What is an AI blog writing workflow?

An AI blog writing workflow is a defined sequence of steps — research, writing, formatting, and publishing — executed by an AI system with consistent rules at each step. The distinction from "using AI to write" is systematization: inputs are defined, outputs are specified, and the AI has explicit rules for every decision. That's what produces consistent results across dozens of posts and multiple sites.

### How long does it take to write a blog post with AI?

With my current system, a Quick Mode post (1,200–1,500 words) takes 35–45 minutes from intake to saved file. A Full Frase post targeting a competitive keyword takes 60–75 minutes. Compare that to 3–5 hours for a manually researched and written post of equivalent depth. The time savings compound when you're producing multiple posts per week across multiple sites.

### Do AI-written blog posts rank on Google?

Yes — but only when they follow the same principles as any well-written piece of content: answer the query clearly and early, cover the topic thoroughly based on what search results tell you people expect, match the search intent, and include proper on-page SEO. AI content that skips the research phase and just generates text rarely ranks. AI content built around a proper keyword brief and competitor analysis performs as well as manually written content in my experience.

### What is Claude Code and why do you use it for content workflows?

Claude Code is a terminal-based AI assistant from Anthropic that can read and write files, call external APIs, and execute multi-step workflows within a single session. I use it for content workflows because it handles the full pipeline end-to-end — from API calls for keyword data to writing the content to saving the finished file in the right location. A browser-based AI tool requires manually moving data between each step. Claude Code eliminates those handoffs.

### Do you need coding experience to build something like this?

No. I'm a mechanical engineer with no formal programming background — I built this system entirely through AI-assisted development using Claude Code and Cursor. The underlying skill is written in Markdown, not code. What you need is the ability to think in systems: define your inputs, define your steps, define your outputs, then teach the AI to execute each step with explicit rules. The technical barrier is lower than most people assume.

### What platforms does this work with?

My current setup handles Shopify (HTML output), Astro (Markdown and MDX), and Next.js (MDX). The skill can be extended to WordPress, Webflow, or any other CMS by adding the output format and save path for that platform. The research and writing phases are platform-agnostic — only Phase 4 (formatting) and Phase 5 (deployment) are platform-specific.
