# ADR-011: Edge-to-Edge Layout

**Status:** Accepted
**Date:** 2026-08-03

## Context

The previous index used a boxed layout (`max-w-[1200px] mx-auto border-x-2`) that constrained content to a centered container. The user wants the site to feel immersive and modern — content should span the full viewport width.

## Decision

Remove all `max-w-*` constraints from the index page. Sections span edge-to-edge. Visual separation between sections uses horizontal border lines (`border-slate-800`) rather than container margins. The page background is uniform (`bg-primary-dark`), with borders providing rhythm.

## Consequences

- More immersive, full-width feel
- Project grids and tech stack items use the full viewport
- Project detail pages may still use constrained widths for readability
- Mobile responsiveness must be tested at full width — no container to hide layout issues
