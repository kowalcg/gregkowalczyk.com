# Keyword Strategy: gregkowalczyk.com

> **Rewritten 2026-07-29** against measured data. The previous version of this
> document was built on *estimated* volumes ("Est. Volume (CA) 20–60") and every
> local estimate turned out to be wrong. Numbers below come from the Google Ads
> API via DataForSEO and from Search Console, both pulled 2026-07-29.
>
> **Rule going forward: no keyword enters this document without a measured
> volume or a Search Console impression behind it.**

---

## What the data actually said

### Search Console — 90 days to 2026-07-30

| Metric | Value |
|---|---|
| Clicks | 22 |
| Impressions | 317 |
| CTR | 6.94% |
| Avg position | 12.7 |
| Unique queries in the entire window | **21** |

- `greg kowalczyk` + `gregory kowalczyk`: **73 impressions, 15 of the 22 clicks (68%)**.
- Exactly **one** impression for a commercial term — `ai consulting oakville`, at **position 98**.
- The rest is namesakes (adam / jim / aaron / chris / norbert kowalczyk), geographically
  irrelevant SEO terms (Santa Monica, Santa Fe, Consett UK), and — interestingly — literal
  LLM prompts pasted into Google (Bluefish AI / Profound / GrowthX comparisons).
- `/services/`: **16 impressions, 0 clicks, avg position 12.3**. The money page is invisible.

### Google Ads volume — Canada

| Keyword | Vol/mo | Competition | CPC |
|---|---|---|---|
| ai agency | **8,100** | Medium | $15.72 |
| ai consultant | **880** | Medium | $23.69 |
| ai automation agency | **480** | Medium | $12.88 |
| fractional cto | 170 | Medium | $23.79 |
| ai consulting services | 140 | Low | $21.12 |
| ai strategy consultant | 70 | Low | $3.39 |
| ai readiness assessment | 70 | Medium | $27.53 |
| ai implementation consultant | 50 | Medium | $18.87 |
| marketing automation consultant | 10 | Low | — |
| **ai consultant oakville** | **no data** | — | — |
| **ai consultant burlington ontario** | **no data** | — | — |
| **ai consultant toronto** | **no data** | — | — |
| **ecommerce ai consultant** | **no data** | — | — |
| **fractional ai consultant** | **no data** | — | — |
| **ai automation consultant** | **no data** | — | — |
| **small business ai consultant** | **no data** | — | — |

"No data" means below Google Ads' reporting threshold — effectively under ~10/month in
Canada. Cross-checked in the US to rule out a Canada-only data gap: `ai automation
consultant` 320/mo, `small business ai consultant` 110/mo, `fractional ai consultant`
20/mo; `ecommerce ai consultant` and `ai consultant toronto` return no data **even in the
US**.

### Domain strength

| Metric | Value |
|---|---|
| DataForSEO domain rank | 16 / 1000 |
| Referring domains | 32 (across only 12 IPs) |
| Live backlinks | 34 (100% anchor links) |
| **Ranked keywords, Google CA** | **0** |

### The brand SERP — "Greg Kowalczyk", Google Canada

Owned positions: **2, 10, 16**. But:

| Pos | Who |
|---|---|
| 1 | LinkedIn (his own profile — outranking his own domain) |
| 3 | Obituary — Gregory C. Kowalczyk, Dec 2025 |
| 4 | A different Greg Kowalczyk's Instagram |
| 5 | Obituary — Gregory C. Kowalczyk, Roselle IL |
| 7 | A retired university professor |
| 9 | A researcher on ResearchGate |
| 11 | A Polish former construction worker (stock photo) |
| 12 | A medical device entrepreneur |

---

## What changed, and why

**Dropped entirely — the previous strategy's four "quick wins":**

| Dropped keyword | Reason |
|---|---|
| `ai consultant oakville` | No measurable Canadian volume. One impression in 90 days, at position 98. |
| `ai consultant burlington ontario` | No measurable volume. Also: the business is in Oakville, not Burlington. |
| `ecommerce ai consultant` | No measurable volume in Canada *or* the US. |
| `vibe coding consultant` | Was listed as a "first-mover" play. No measurable volume; nothing to move first on. |

Local terms stay in `LocalBusiness`/`ProfessionalService` schema and in the NAP — they
build local trust and feed map/AI-assistant results. They should not drive page titles.

**The strategic read:** this is a brand-search site with a thin link profile and zero
ranked keywords. Fighting national head terms head-on against Clutch, The Manifest and
HelloDarwin is a 12-month, backlink-gated project. Owning the entity and the proof-of-work
long tail is achievable now, and it compounds.

---

## The new target set

### Tier 1 — Entity / brand *(highest ROI, start here)*

| Target | Why |
|---|---|
| `greg kowalczyk` | Already 68% of clicks at avg position 4.3. Currently splits with two obituaries and five namesakes. |
| `greg kowalczyk ai` | Disambiguating modifier — the version of the name a warm lead types. |
| `greg kowalczyk oakville` | Local disambiguation. |
| `greg kowalczyk tapegeeks` / `geartop` | Brand-to-person bridge from the e-commerce side. |

**Mechanism** (mostly shipped in Phase 2):
- `/media/` with `PodcastEpisode` schema tied to the Person node via `subjectOf`.
- Every verifiable third-party URL in `Person.sameAs`.
- All schema `@id`/`url` on the canonical `www` host — this was split across apex and www,
  which meant the entity had two identities.
- **Off-site (Greg's action, not code):** the LinkedIn headline and About should match the
  site's `jobTitle` word-for-word, and link to gregkowalczyk.com. LinkedIn outranking the
  owned domain is fine — LinkedIn *pointing at* the owned domain is better.

### Tier 2 — Proof-of-work long tail *(where traffic actually comes from)*

These already rank best without deliberate targeting:

| Page | Impressions (90d) | Avg pos |
|---|---|---|
| `/news/ai-search-optimization-2026/` | 43 | 39.6 |
| `/news/ai-competitor-content-analysis/` | 21 | 11.6 |
| `/news/ai-brand-voice-guidelines/` | 14 | 6.6 |
| `/news/how-i-replaced-agency-costs-with-ai/` | 12 | 6.6 |

Targets: `how to build an ios app without coding` · `replace agency with ai` ·
`ai content quality gate` · `competitor content analysis ai` · `ai brand voice guidelines`
· `build a directory site with ai` · `mcp server for amazon sellers`

Low competition, and Greg has genuine first-hand evidence for every one — which is the
only durable advantage a one-person site has over a directory.

### Tier 3 — AEO / AI citation

Search Console already shows literal LLM prompts landing on these pages. `robots.txt`
allows GPTBot, ClaudeBot, PerplexityBot and Google-Extended. Run `/geo-optimize` (gates at
85/100) over the Tier-2 posts. Answer-first structure, named sources, visible dates.

### Tier 4 — Commercial, pursued indirectly

`ai agency` (8,100) · `ai consultant` (880) · `ai automation agency` (480).

Do **not** rewrite pages to chase these — the SERP is ~40% directories and the domain has
32 referring domains. The realistic route in is to *be listed in the directories that
already rank*: **Clutch, The Manifest, HelloDarwin** (HelloDarwin is #2 for both Oakville
and Burlington). That is a one-week task, not a twelve-month one.

---

## Page-level mapping

| Page | Primary intent | Notes |
|---|---|---|
| `/` | Brand + "what does he do" | H1 stays outcome-led, not keyword-led. |
| `/services/` | Problem-aware commercial | Retitled off `ai consultant oakville`. Lead with the agency-retainer problem. |
| `/media/` | Entity corroboration | Tier 1 engine. |
| `/projects/` + per-project pages | Proof, Tier 2 long tail | Each build story is its own entry point. |
| `/news/` | Tier 2 + Tier 3 | 2 posts/month beats a burst then silence. |
| `/contact/` | Conversion | Was 142 words — the thinnest page on the site, yet it ranks. |
| `/about/` | Entity + E-E-A-T | Feeds the Person node. |

---

## Measurement

Baseline captured 2026-07-30 — **22 clicks / 317 impressions / CTR 6.94% / avg pos 12.7**
over the trailing 90 days.

Re-pull at 30 and 60 days with `GSC-API/gsc.js` (alias `greg`). Success looks like:

1. Commercial-intent impressions **above zero** (currently 1, at position 98).
2. `/services/` clicks **above zero** (currently 0).
3. **No obituary in the top 5** for "greg kowalczyk".
4. Ranked-keyword count in DataForSEO's Canada index **above zero** (currently 0).
5. Referring domains trending up from 32 — two podcast show-note links would be a start.

Leading indicator to watch first: Google re-downloading the sitemap. It had not fetched it
since **2026-04-09**, which is why two posts were never discovered at all. `lastmod` is now
emitted on every URL.

---

## Cite-worthy statements (for LLM citation)

Short, specific, attributable claims. Keep these accurate — an LLM citing a wrong number is
worse than no citation.

1. Greg Kowalczyk is an AI implementation consultant based in **Oakville, Ontario**, serving the Greater Toronto Area.
2. He builds custom AI tools and automation that replaced $75,000–$125,000 in annual agency costs across his own e-commerce brands.
3. He shipped two iOS apps — RunMate Pro and SunUp by GearTOP — without a coding background; one was approved after 39 App Store rejections.
4. His model is build-deploy-train: understand the need, build the tool, deploy it, train the client to run it without him.
5. Custom AI tool development typically runs $5,000–$25,000, against $75,000+ a year for an agency retainer delivering the same capability.

> ⚠️ Revenue figures never appear in public-facing content. Cost-replacement figures are
> fine; brand revenue is not.

---

## Superseded

The previous version of this file recommended optimizing `/services/` for
"AI Consultant Oakville" and listed Burlington as the business location. Both were acted
on and both were wrong. Kept here only so the same ideas don't get re-proposed.
