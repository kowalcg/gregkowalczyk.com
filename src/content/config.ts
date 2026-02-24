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
  }),
});

export const collections = { blog };
