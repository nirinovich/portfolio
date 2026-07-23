# nirinovich Portfolio

Glossary for the portfolio site overhaul (the Astro 7 + Tailwind 4 project at repo root). Pins down project-specific vocabulary so the overhaul stays coherent. Architectural decisions live in `docs/adr/` — this file is a glossary only.

## Language

**Original Style**: The existing index hero section, preserved verbatim during the overhaul — same markup, same colors, same GSAP fade-in animations. Frozen: it must not be redesigned or restyled.
_Avoid_: calling it the "homepage" or "landing section" as if it were in scope.

**Overhaul**: The full-site redesign in progress — a new visual design **and** a restructured architecture **and** refreshed content, applied everywhere except the frozen hero. "Complete overhaul" = all three dimensions change; the hero is the sole carve-out.
_Avoid_: using "redesign" to mean only the visuals.

**Design direction**: Harmonized evolution — blue kept as the accent and a light foundation (cohesive with the frozen hero), but modernized hard via refined typography, more sophisticated surfaces (soft shadows, subtle gradients/glass), and stronger layout rhythm.
_Avoid_: "dark mode," "rebrand," "new color identity."

**Palette strategy**: Evolve the token system rather than reuse current values — keep blue as the hue but build a proper semantic scale (accent / accent-soft / accent-contrast / accent-muted), use tinted surfaces instead of pure white, and pair a characterful display font (headings) with a clean grotesk (body).

**i18n**: Bilingual FR (default, served at `/`) and EN (served at `/en/`), implemented with Astro 7's official i18n routing. See ADR-0001.
_Avoid_: the old manual folder-routes + `useTranslations` approach for new code.

**Astro v7 docs (source of truth)**: Standing working agreement — implement against the Astro v7 official documentation, not third-party tutorials or outdated guides.

**Content model**: `blog` and `projects` are Astro 7 Content Layer collections; the existing frontmatter schema is preserved (only the loading API changes from `getCollection` to Content Layer). "Refreshed content" means better copy within those existing fields, not new fields.

**Component architecture**: A proper component layer. The frozen hero is extracted to a shared `Hero.astro` (verbatim markup, used by both the FR and EN index pages). Overhauled surfaces are built from design-system components: `Section`, `Container`, `Card`, `Badge`, `Button`. `BottomBar` is retained.

**In-scope surfaces**: Every non-hero surface, in both FR and EN — the homepage's below-hero sections (featured projects, tech-stack marquee, work timeline, all-projects grid), blog (list + detail), projects (detail), games, about, contact. The frozen hero is the only carve-out.

**Motion strategy**: Unify on GSAP for all in-page motion — the frozen hero's GSAP fade-in is kept, and scroll reveals in the overhauled body reuse GSAP. Astro View Transitions handle navigation between routes. One motion library (no new animation deps); GSAP is already present.

**Deployment**: Firebase Hosting, as-is. `firebase.json` serves the static `dist` folder with no rewrites. The overhaul's unchanged URLs (`/` = FR, `/en/` = EN) and static output are already compatible, so no hosting config changes are needed.

**Type & tokens (resolved)**: Self-hosted fonts via `@fontsource` (no external requests, no CLS). Display/headings = **Space Grotesk**; body/UI = **Inter**. Accent = refined blue scale anchored on the existing `#2563eb` hue — `accent #2563eb`, `accent-strong #1d4ed8`, `accent-soft #dbeafe` — with tinted neutral surfaces instead of pure white. Resolves the Palette strategy + Design direction into concrete values.

**Content refresh (depth)**: Draft improved copy in BOTH FR and EN for the overhauled surfaces, preserving the facts (name, ESTI, projects, links) but polishing prose/structure for the new design. Existing copy is not kept verbatim; the user can tweak later.
