---
title: "AI Brand Voice Guidelines: How I Make Each Site Sound Like Itself (Not Like AI)"
description: "The exact 7-part structure I use to write brand voice files for 6 different websites — so the AI writes in the right voice every time without re-explaining it."
pubDate: 2026-03-20
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
tag: "AI Tools"
image: "/images/blog/ai-brand-voice-guidelines.jpg"
imageAlt: "Brand voice guidelines document with multiple brand identity cards and AI writing interface"
version: "1.0"
---

This is Part 2 of a series on my AI blog writing system. [Part 1 covered the full 5-phase workflow](/news/ai-blog-writing-workflow) — intake, SEO research, writing, formatting, deployment. This post covers the piece most people skip entirely: brand voice files.

The most common AI content problem isn't bad prompting. It's no voice.

You give the AI a topic, maybe a keyword, and ask it to write. It produces something grammatically correct, well-structured, and completely generic. It sounds like every other AI-written piece on that topic because you gave it nothing to distinguish itself from them.

The fix isn't a better prompt. It's a brand voice file — a reference document the AI loads before writing anything, every time, for every post.

> **Quick Answer:** AI brand voice guidelines are reference documents that encode who the brand is, what it sounds like, what it avoids, and what proof points it always mentions. A well-written voice file lets an AI produce on-brand content consistently without re-briefing. I use a 7-part structure: brand summary, audience, tone, voice markers, avoid list, CTAs, and a sample sentence. That's it.

---

## Why Generic "Tone of Voice" Docs Don't Work for AI

Most businesses have a brand style guide somewhere. It says things like "we're approachable and professional" or "we use clear, conversational language." That's fine for a human copywriter who can interpret vague descriptors. It's useless for an AI.

AI doesn't interpret. It pattern-matches. If you say "conversational," it gives you something that sounds like every other "conversational" brand on the internet. If you say "sounds like a physio who's worked with elite athletes for 15 years and has no patience for bro-science," it produces something specific.

The difference between a decorative brand guide and an executable voice file is specificity. Adjectives alone don't work. You need:

- Exact phrases the brand uses
- Exact phrases the brand never uses
- The specific proof points that get mentioned in content
- A sample sentence that demonstrates the voice

When I built my blog-writer Claude Code skill, each site gets its own voice file. The skill loads the relevant file at the start of every post. No re-briefing, no drift, no "this sounds like a press release" edits afterward.

---

## The 7-Part Structure I Use

Every voice file I write follows the same structure. Here's each part and what it actually does:

### 1. Brand + Audience (2–3 sentences)

Who is the brand, and who are they talking to? Not demographics — psychographics. What does the audience already believe, and what are they trying to accomplish?

TapeGeeks: *Athletes, runners, physios, coaches, parents, CrossFit community. They want to perform without getting hurt. They trust science over hype.*

gregkowalczyk.com: *SMB owners and marketers who want AI results without the consulting firm markup. They're skeptical of hype. They've been burned by advice that didn't work.*

The audience definition shapes everything — vocabulary level, what you lead with, how much you explain.

### 2. Tone (1 sentence)

One sentence. Not a list of adjectives. A sentence that describes the person writing, not the feeling they're trying to create.

TapeGeeks: *Knowledgeable sports professional. Direct, practical, occasionally conversational. Evidence-based.*

gregkowalczyk.com: *Practitioner-consultant. First-person experience, specific results, no fluff, slightly contrarian. Engineering mindset meets plain talk.*

The tone sentence is what the AI holds in mind while writing every paragraph. It acts as a continuous filter.

### 3. Voice Markers (4–6 bullets)

This is the most important section. Voice markers are patterns that appear repeatedly in on-brand content. They're not rules — they're signatures.

For GearTop, every piece of content leads with proof: *"4.6/5 stars, 2,400+ Amazon reviews vs Columbia Bora Bora 3.8/5 — same price."* That's a voice marker. It's specific enough that the AI knows exactly what to do with it.

For this site, voice markers include: first-person throughout, specific numbers from real work (not estimates), calling out bad advice directly, and self-deprecation where relevant. I'm a 55-year-old mechanical engineer who learned to build iOS apps through AI tools. That's a voice marker. The number 39 — App Store rejections before RunMate Pro was approved — is a voice marker. Specificity is the voice.

For SunUp by GearTOP (my UV safety app), every piece cites an academic or clinical source. The Skin Cancer Foundation, NIH, Fitzpatrick skin type scale. That's a voice marker too: *above 37° north latitude, UV-B intensity from November through March is too weak for meaningful vitamin D synthesis regardless of how long you're outside.*

Voice markers teach the AI how to think about the brand, not just how to write for it.

### 4. Avoid List

Just as important as what to say is what not to say. Every brand has phrases that would immediately ring false.

TapeGeeks never says "game changer," "revolutionary," or anything that sounds like fitness influencer copy. The audience — physios, coaches, competitive athletes — hears those words and stops reading.

GearTop never makes vague protection claims without specs. Not "blocks UV rays" — "UPF 50+ certified." The outdoor gear audience has been burned by marketing language before.

This site avoids corporate consultant tone ("driving transformation," "leveraging synergies"), vague AI hype ("unlock the power of AI"), and anything that sounds like it was written by someone who hasn't actually run a campaign.

The avoid list is where I spend the most time when building a new voice file. It's faster to correct the AI's instincts up front than to edit them out of 20 posts.

### 5. Proof Points (permanent facts to weave in)

Every brand has specific claims that should appear repeatedly in their content because they build trust and distinguish the brand. These aren't marketing slogans — they're verifiable facts.

GearTop: 4.6/5 stars, 2,400+ Amazon reviews. Same $29.99 as Columbia. CleverHiker award. UPF 50+ certified.

TapeGeeks: specific Amazon ratings for each product line, professional validator mentions (physios, coaches, trainers), Breathe+ tagline ("Better Sleep Through Better Breathing").

This site: $2M+ in ad spend managed. 39 App Store rejections before approval. Two live iOS apps built without a coding background. 28 years of engineering experience applied to AI systems.

When these proof points are in the voice file, the AI uses them naturally. When they're not, the AI invents generic-sounding credibility signals that nobody believes.

### 6. CTAs (where to send people)

Each brand has specific destinations. TapeGeeks sends traffic to Amazon listings or the Shopify store. GearTop does the same, plus SunUp app mentions. RunMate Pro drives App Store downloads. This site drives consulting inquiries and newsletter signups.

The CTA section is short — two or three lines — but it prevents the AI from hallucinating product URLs or linking to competitors.

### 7. Sample Sentence

One sentence that demonstrates the voice in action. Not a paragraph — one sentence. The AI uses it as a calibration point.

GearTop sample: *"UV protection hats vary wildly in quality. The Navigator has been in the field for 3 years, reviewed by CleverHiker as 'best bang for your buck,' and rated 4.6/5 by 2,400+ verified buyers. Here's what makes the difference."*

This site sample: *"Most AI marketing advice is useless. It's written by people who've never run an actual campaign. I've managed $2M+ in ad spend across Amazon, Meta, and Google. Here's what actually changes results when you add AI — and what's just noise."*

The sample sentence is the fastest way to communicate tone. One sentence beats three paragraphs of description every time.

---

## The Contrast That Matters

The reason I have 6 separate voice files instead of one is that these brands are genuinely different — not just in product category, but in how they speak.

TapeGeeks is confident and clinical. It doesn't hedge. It tells you how to tape your knee in four minutes because the audience doesn't want to read 800 words to get the answer.

Bronte Harbour Classic (the 5K race I co-direct) is warm, community-forward, and local. It mentions Bronte Harbour Park. It references Father's Day. It's welcoming to first-timers in a way that would sound wrong for TapeGeeks.

This site is skeptical and specific. It names numbers. It pushes back on generic advice.

If I ran all 6 through a single voice file, they'd converge toward an average. The average of all those voices is exactly the kind of undifferentiated content that neither ranks nor converts.

---

## What I'd Do Differently

When I built the first version of these voice files, they were too long. Three pages of brand background, history, values, and positioning. The AI couldn't hold all of it in focus across a 2,000-word post.

Short and specific beats long and thorough. The voice file I use for each brand now fits on half a page. Every word in it is either a constraint (avoid list) or a calibration signal (voice markers, sample sentence). Background context that the AI can't directly act on has been cut.

If you're building voice files for your own brands or clients: write it, test it on 3 posts, then cut everything the AI didn't use. The file that remains is your actual voice file.

---

## What's Coming in This Series

- **Part 3:** The Full Frase competitor scrape pipeline — what I look for when I read 7 competitor posts before writing
- **Part 4:** Schema markup, image SEO, and why most AI posts miss 40% of on-page optimization
- **Part 5:** Multi-platform deployment — git hooks, Vercel API triggers, and why I stopped running `vercel --prod`

If you want to implement something like this for your business or your content team, [reach out](/contact).

---

## Frequently Asked Questions

### What are AI brand voice guidelines?

AI brand voice guidelines are reference documents that tell an AI how a specific brand speaks — including tone, vocabulary, proof points, and phrases to avoid. Unlike a human copywriter who can interpret vague descriptors, an AI needs specific examples and patterns to calibrate. A well-structured voice file typically includes: audience summary, tone definition, voice markers, avoid list, recurring proof points, CTA destinations, and a sample sentence.

### How long should an AI brand voice file be?

Short. The best brand voice files I've used fit on half a page — 300 to 400 words. Longer files dilute the signal. If you write three pages of brand history and values, the AI will average across all of it and produce something generic. Every line in the file should be either a constraint the AI must follow or a calibration signal it can directly apply.

### Can you use one brand voice file for multiple brands?

You can, but the output converges toward a generic average. The real advantage of separate voice files is that brands with genuinely different audiences and tones produce content that sounds distinct. TapeGeeks (evidence-based, clinical, direct) should sound nothing like Bronte Harbour Classic (warm, community, welcoming). One file makes them sound the same.

### How do you prevent AI from drifting from the brand voice over time?

Two things: encode the voice file in the system rather than the prompt, and include a kill list of phrases the brand would never use. Prompt-level instructions get diluted as context grows. A voice file loaded at the system level — as I do in my Claude Code blog-writer skill — stays consistent across the full post. The kill list gives the AI a negative constraint it can actively test against, which is more reliable than positive description alone.

### What's the difference between brand voice and brand tone?

Voice is consistent — it's who the brand is. Tone shifts by context — it's how the brand feels in a specific situation. A brand might have a direct, no-nonsense voice but use a warmer tone in a community post and a more precise tone in a technical guide. In practice, most AI brand voice files need to encode both: the consistent personality markers (voice) and the contextual calibration signals (tone) for the type of content being produced.
