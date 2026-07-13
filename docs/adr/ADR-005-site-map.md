# ADR-005: Site Map and Additional Pages

**Status:** Accepted
**Date:** 2026-07-13

## Context

Beyond the hero, projects, and work sections, the user wants additional pages and sections.

## Decision

The full site structure:

### Landing Page (single scroll)
1. **Hero** — full-screen, existing design preserved
2. **Work** — experience timeline with company, role, dates, description
3. **Projects** — project cards linking to detail pages

### Standalone Pages
4. **About** (`/about`) — expanded bio, skills, education
5. **Contact** (`/contact`) — contact form or direct info
6. **Blog** (`/blog`) — articles/writing
7. **Blog Post** (`/blog/[slug]`) — individual article pages
8. **Mini-Games** (`/games`) — interactive games section
9. **Project Detail** (`/projects/[slug]`) — per-project detail pages

### Existing
10. **Resume** — PDF download (already exists)

## Rationale

- Rich portfolio with multiple facets: professional (work, projects), personal (blog, games), contact
- Blog adds ongoing content and SEO value
- Mini-games section differentiates the portfolio and showcases interactive/creative skills

## Consequences

- Significant increase in page count — need consistent layout and nav across all
- Blog needs content collection infrastructure
- Mini-games section needs architectural decisions (what games, what tech)
- All pages need i18n support
- Nav component needs to handle multiple pages/routes
