/**
 * site.ts — Values that must never be hardcoded because they drift with time.
 *
 * The site shipped with "10+ Years in E-Commerce" against a 2014 start date
 * (it was 12 by 2026) and a hardcoded "© 2026" footer. Anything that silently
 * becomes wrong on January 1st belongs here.
 */

export const SITE_URL = "https://www.gregkowalczyk.com";

/** First e-commerce brand launched with his daughter. */
const ECOMMERCE_START_YEAR = 2014;

/**
 * Engineering career start.
 *
 * ⚠️ Set to 1998 to preserve the "28 years" figure that has been live since
 * launch. Note that CLAUDE.md documents the corporate engineering career as
 * running 1997–2011, which would make it 29 years in 2026. Confirm which start
 * point is intended (graduation vs. first role) and correct this one constant —
 * every mention on the site reads from it.
 */
const ENGINEERING_START_YEAR = 1998;

export const currentYear = new Date().getFullYear();
export const yearsInEcommerce = currentYear - ECOMMERCE_START_YEAR;
export const yearsInEngineering = currentYear - ENGINEERING_START_YEAR;
