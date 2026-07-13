# ADR-008: Cleanup and Scroll Animation

**Status:** Accepted
**Date:** 2026-07-13

## Cleanup

Remove all unused files and dependencies:

**Files to remove:**
- `src/components/Welcome.astro`
- `src/styles/starwind.css`
- `src/assets/astro.svg`
- `src/assets/background.svg`

**Dependencies to remove:**
- `tailwind-merge`
- `tailwind-variants`
- `tw-animate-css`
- `@tailwindcss/forms`
- `@tabler/icons`

**Other cleanup:**
- Rename `public/Design sans titre (1).png` to `public/profile.png` (fix URL encoding issues)
- Update README.md to reflect the actual project
- Remove duplicate CLAUDE.md / AGENTS.md (keep one)

## Scroll Animation

Use GSAP ScrollTrigger for section reveal animations below the hero:
- Consistent with existing GSAP entrance animations
- Sections fade/slide in as user scrolls
- Scroll indicator on the hero prompts user to scroll
