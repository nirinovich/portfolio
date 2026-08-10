import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
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
});

const blogSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  tags: z.array(z.string()),
});

const projectsFr = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects/fr' }),
  schema: projectSchema,
});

const projectsEn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects/en' }),
  schema: projectSchema,
});

const blogFr = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog/fr' }),
  schema: blogSchema,
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog/en' }),
  schema: blogSchema,
});

export const collections = { projectsFr, projectsEn, blogFr, blogEn };
