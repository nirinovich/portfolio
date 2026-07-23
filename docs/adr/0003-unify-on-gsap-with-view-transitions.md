# 0003 — Unify on GSAP, add View Transitions

## Status
Accepted

## Context
The site already ships GSAP for the hero fade-in and global `.scroll-reveal`
animation (loaded by `src/layouts/Layout.astro` via `src/scripts/animations.js`).
We are adding Astro View Transitions for navigation in the overhaul. We needed to
decide how in-page motion for the new body should be implemented.

## Decision
Keep GSAP as the single in-page motion system: the frozen hero's GSAP fade-in is
preserved, and scroll reveals in the overhauled surfaces reuse GSAP. Astro View
Transitions (built into Astro 7) handle navigation between routes.

## Consequences
- No new animation dependencies are added; GSAP is already present.
- The frozen hero and the new body share one motion language (cohesive feel).
- `animations.js` must be re-initialized on View Transition navigation so GSAP
  scroll reveals re-bind after the DOM swaps.
