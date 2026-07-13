# ADR-010: Bottom Tab Bar Navigation

**Status:** Accepted
**Date:** 2026-07-13

## Context

The user chose the Rail navigation style but redesigned as a bottom bar. The floating nav variants (FAB, Rail, Overlay) and NavSelector will be replaced with a single bottom tab bar.

## Decision

- Fixed bottom tab bar with 4-5 icons + labels (iOS/Android style)
- Glassmorphism background (backdrop-blur, semi-transparent)
- Uses `@iconify-json/mdi` icons for each nav item
- Always visible on all pages
- Language toggle integrated into the bar
- Remove FloatingNav.astro, NavSelector.astro, and the old Nav.astro

## Consequences

- Single navigation component replaces 3 variants + selector
- Cleaner UX — consistent, always-accessible navigation
- Company logos (etech.png, Exotika) used as project thumbnails
