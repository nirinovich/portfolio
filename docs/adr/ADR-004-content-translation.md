# ADR-004: Content Translation Approach

**Status:** Accepted
**Date:** 2026-07-13

## Context

With i18n routing in place, we need to decide how project content itself is translated.

## Decision

**Single content file + UI translations only:**

- Each project has ONE markdown file (language-neutral or primary language — French)
- UI strings (nav labels, section headings, button text, "View project", "Back", etc.) are translated via a JSON/TS translation file per locale
- Project body content, title, description, and gallery are NOT duplicated per locale

## Rationale

- Avoids maintaining two copies of every project write-up
- UI translations are small, manageable files (similar to `en.json` / `fr.json`)
- Project content can be written once in the author's preferred language
- If full translation is needed later, this can be extended without restructuring

## Consequences

- Need `src/i18n/en.json` and `src/i18n/fr.json` (or similar) for UI strings
- Need a utility function to load the correct translation based on current locale
- Content collection entries are single-language
- The locale prefix still applies to routes, even though content is the same
