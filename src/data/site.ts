/**
 * site.ts — Values that must never be hardcoded because they drift with time,
 * and the dated facts everything else derives from.
 *
 * The site shipped with "10+ Years in E-Commerce" against a 2014 start date
 * (it was 12 by 2026) and a hardcoded "© 2026" footer. Anything that silently
 * becomes wrong on January 1st belongs here.
 */

export const SITE_URL = "https://www.gregkowalczyk.com";

/* ── The actual timeline (confirmed by Greg, 2026-07-30) ──────────────────
 *
 *   1997        Graduated, straight into a drafting role.
 *   1997–2011   PRO-ECO / SMS-Siemag. Draftsman → designer → design team
 *               leader → Manager of Engineering, ~70-person department.
 *   2011–2019   Left the corporate job; continued as an independent
 *               consulting engineer across many companies — overlapping the
 *               early brand years.
 *   2014–now    GearTOP and TapeGeeks, built and run with his daughter.
 *   2019–now    Consulting shifts to e-commerce.
 *   2022–now    AI, starting with Jarvis, then Jasper, then ChatGPT/Claude.
 *
 * ⚠️ Engineering practice is a CLOSED span (1997–2019 = 22 years). It is a
 * constant, not a counter — it stopped growing in 2019. The site previously
 * claimed "28 years of engineering", computed from a 1998 start against the
 * current year, which both overstated it and kept inflating annually.
 */
const ENGINEERING_START_YEAR = 1997;
const ENGINEERING_END_YEAR = 2019;
const ECOMMERCE_START_YEAR = 2014;

/** First year using AI tools in production — Jarvis, before ChatGPT existed. */
export const AI_SINCE_YEAR = 2022;

export const currentYear = new Date().getFullYear();

/** Still growing. */
export const yearsInEcommerce = currentYear - ECOMMERCE_START_YEAR;

/** Fixed at 22. Do not recompute against currentYear. */
export const yearsInEngineering = ENGINEERING_END_YEAR - ENGINEERING_START_YEAR;
