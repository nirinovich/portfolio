# ADR-002: Project Content Schema

**Status:** Accepted
**Date:** 2026-07-13

## Context

Each project needs a dedicated detail page with rich content. We need to define the data schema.

## Decision

Use Astro Content Collections with the following schema per project:

- **title** (string, required)
- **description** (string, required — short summary for cards)
- **date** (date, required)
- **thumbnail** (image, required — card/preview image)
- **techStack** (array of strings, required)
- **links** (object: optional `github`, optional `live` URLs)
- **tags** (array of strings — for filtering, e.g., "web", "mobile", "AI")
- **gallery** (array of images — screenshots)
- **body** (long-form markdown content — case study / write-up)

## Rationale

- Content Collections provide type safety and validation
- Rich schema supports both card views (summary) and detail pages (full content)
- Tags enable future filtering on the projects index

## Consequences

- Need `src/content/projects/` directory with Markdown/MDX files
- Need `src/content.config.ts` with Zod schema
- Project images stored in `src/assets/projects/` or alongside content files
- Detail pages generated via `[...slug].astro` or `[slug].astro` dynamic route
