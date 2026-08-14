import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tag: z.string().optional(),
    draft: z.boolean().optional().default(false),
    author: z.string().default("Greg Kowalczyk"),
    authorTitle: z.string().default("AI & Digital Growth Consultant"),
    version: z.string().default("1.0"),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    // Per-post FAQ. When present, news/[...slug].astro emits a FAQPage node.
    // The same Q/As must appear visibly in the post body ("FAQPage only where
    // the FAQ is visible" — see CLAUDE.md).
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

/**
 * Projects collection.
 *
 * Previously the projects page and the homepage teaser
 * (components/ProjectsPreview.astro) each hardcoded their own copy of the same
 * project descriptions, so they drifted. Both now render from here.
 *
 * A project with a markdown body also gets a detail page at
 * /projects/<slug>/ — that's how the build stories become their own entry
 * points for long-tail search. Projects with an empty body render as cards only.
 */
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    /** Short label shown in the card pill, e.g. "iOS App · Live". */
    tag: z.string(),
    tagColor: z.enum(['purple', 'cyan']).default('cyan'),
    /** One-paragraph summary used on the card and as the detail page's meta description. */
    description: z.string(),
    stats: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          external: z.boolean().default(false),
        })
      )
      .default([]),
    /** Highlighted one-liner above the description. */
    callout: z.string().optional(),
    /** Fallback tile text when there is no screenshot. */
    initials: z.string().optional(),
    image: z.string().optional(),
    /** Card order on /projects/ — lower first. */
    order: z.number().default(50),
    /** Show in the homepage teaser. */
    featured: z.boolean().default(false),
    /** schema.org type for the detail page. */
    schemaType: z.enum(['SoftwareApplication', 'WebSite', 'CreativeWork']).default('CreativeWork'),
    /** For SoftwareApplication: iOS, Web, etc. */
    platform: z.string().optional(),
    /** Year the thing shipped, for the detail page byline. */
    year: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
