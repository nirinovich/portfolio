# ADR-012: Navigation A/B Testing

**Status:** Accepted
**Date:** 2026-08-03

## Context

The current hero has inline nav links (Work, Projects, Resume, social icons). The user wants to test whether a sticky top navbar performs better. Rather than choosing one upfront, an A/B toggle will let the user switch between variants at runtime.

## Decision

- Variant A: Current hero-inline nav (links inside the hero section)
- Variant B: Sticky top navbar (fixed to top on scroll)
- A toggle button (hidden, triggered via keyboard shortcut or URL param) switches between variants
- Both variants share the same link structure and styling
- The toggle is development-only — not shipped to production

## Consequences

- User can test both navigation models before committing
- Adds a small amount of complexity (two nav components, toggle logic)
- Toggle is removed once a decision is made
