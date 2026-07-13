# ADR-003: Internationalization (i18n) Strategy

**Status:** Accepted
**Date:** 2026-07-13

## Context

The portfolio needs to support French and English. The current site is primarily in French with some English elements. We need to decide how language switching works.

## Decision

**Locale prefix routing with French as default:**

- Root `/` serves French (default locale)
- `/en/` prefix for English pages
- Use Astro's built-in i18n routing (`i18n` config in `astro.config.mjs`)
- All pages exist in both locales: `/`, `/en/`, `/projects/[slug]`, `/en/projects/[slug]`
- Language toggle in the nav switches between locale prefixes

## Rationale

- Locale prefix routing is SEO-friendly — each language has its own URLs
- French as default matches the primary audience (French recruiters/contacts)
- Astro's i18n support handles routing, `<link rel="alternate">` tags, and redirects
- Deep-linkable — users can share a link to a specific language version

## Consequences

- Need `astro.config.mjs` i18n configuration with `defaultLocale: "fr"` and `locales: ["fr", "en"]`
- Need translation files or per-locale content for UI strings (nav labels, section headings, etc.)
- Content collection entries need both French and English versions
- Need a `LanguagePicker` component in the nav
- Static output: each page must be generated for each locale (Astro handles this with `getStaticPaths`)
- The hero page bio text needs translation
