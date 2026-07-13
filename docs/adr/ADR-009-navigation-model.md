# ADR-009: Navigation Model — Floating Menu (replaces Navbar)

**Status:** Proposed (A/B options presented)
**Date:** 2026-07-13

## Context

The fixed navbar was rejected. The hero already has inline nav links (#work, #projects, resume). We need a way to navigate to About, Blog, Games, Contact, and switch language without a persistent navbar.

## Options

### Option A: Corner FAB (Floating Action Button)
- A small circular button in the bottom-right corner
- Toggles a radial or stacked menu with page links + language toggle
- Minimal visual footprint, always accessible
- Inspired by Material Design FAB pattern

### Option B: Side Rail
- A thin vertical strip on the left or right edge
- Icons only (no text), with tooltips on hover
- Always visible, doesn't overlay content
- Language toggle as a small flag/icon at the bottom of the rail

### Option C: Full-screen Overlay Trigger
- A hamburger-style icon fixed in the top-right corner
- Opens a full-screen overlay with all links in a centered layout
- Language toggle in the overlay
- Most dramatic, most "portfolio-like"

## Decision

(TBD — user will choose after A/B testing)
