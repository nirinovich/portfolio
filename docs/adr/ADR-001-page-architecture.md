# ADR-001: Page Architecture — Hybrid Single-Page + Detail Pages

**Status:** Accepted
**Date:** 2026-07-13

## Context

The portfolio has a single hero page with nav links to `#work` and `#projects` that currently point to nothing. We need to decide how to structure the site's pages.

## Decision

**Hybrid approach:**
- The landing page is a full-screen hero that loads as if it's the only section
- A scroll animation reveals additional sections below (#work, #projects)
- Each project also gets its own dedicated detail page (`/projects/[slug]`)
- Work entries may also get detail pages

## Rationale

- Full-screen hero preserves the current GSAP entrance animation experience
- Scroll-reveal adds depth without overwhelming the first impression
- Dedicated detail pages allow rich content for each project (screenshots, tech stack, links)
- Keeps the portfolio feel while enabling extensibility

## Consequences

- Need scroll-triggered animations (GSAP ScrollTrigger or similar)
- Need dynamic routes for project detail pages
- Need content collections or a data source for project entries
- Hero section must be `100vh` with scroll indicator
