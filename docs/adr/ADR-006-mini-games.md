# ADR-006: Mini-Games Section

**Status:** Accepted
**Date:** 2026-07-13

## Context

The user wants a mini-games section with built-in browser games, not just a showcase.

## Decision

- Games are built with vanilla JS/Canvas (or lightweight libraries as needed)
- Playable directly on the portfolio site
- Each game gets its own route or lives on a single `/games` page
- Games are interactive demos that showcase front-end and creative coding skills

## Consequences

- Games run client-side only — need `client:*` directives if using framework components
- May need a separate layout or full-screen mode for games
- Performance considerations — games should be lazy-loaded
- Need to decide: one page with multiple games, or separate routes per game
