import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    thumbnail: z.string(),
    techStack: z.array(z.string()),
    links: z.object({
      github: z.string().url().optional(),
      live: z.string().url().optional(),
    }).optional(),
    tags: z.array(z.string()),
    gallery: z.array(z.string()).optional(),
    role: z.string().optional(),
    metric: z.string().optional(),
    metricLabel: z.string().optional(),
    outcome: z.string().optional(),
    before: z.string().optional(),
    after: z.string().optional(),
    client: z.string().optional(),
    cardVariant: z.enum(["metrics", "narrative", "before-after"]).default("narrative"),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects, blog };
