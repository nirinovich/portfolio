# ADR-014: Project Detail Dark Aesthetic

**Status:** Accepted
**Date:** 2026-08-03

## Context

The current `[slug].astro` uses a light aesthetic (`bg-[#e8ecf1]`, `bg-white` cards, blue accent-heavy styling). This clashes with the dark index page. Project detail pages must follow the same visual language as the homepage.

## Decision

Update `projects/[slug].astro` to use:
- Dark backgrounds (`bg-primary-dark`, `bg-slate-900`)
- Border-based separation (`border-slate-800`)
- Muted text (`text-slate-400`) with white headings
- Accent highlights for links and metrics
- Same typography (Space Grotesk headings, Inter body)

## Consequences

- Consistent visual experience across all pages
- Light-themed project pages are eliminated
- Gallery images and prose content need contrast adjustments for dark backgrounds
