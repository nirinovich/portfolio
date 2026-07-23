# Spec: Portfolio Website — Complete Overhaul

> Authoritative PRD synthesizing the grill-with-docs planning session (July 2026) for the
> `nirinovich/portfolio` site. Supersedes the earlier `docs/specs/portfolio-full-build.md`,
> which predates the architecture decisions captured in `docs/adr/`. Decisions live in
> `docs/adr/` (ADR-0001..0008 from the grill, plus ADR-001..010 from earlier planning);
> glossary in `CONTEXT.md`.

## Problem Statement

I have a portfolio site (Astro 7 + Tailwind 4 + GSAP) whose index hero is good and worth
keeping, but the rest of the site is minimal and broken: the nav links (`#work`, `#projects`)
point to nothing, there is no internationalization, and there are no real sub-pages. I need a
complete overhaul that **preserves the existing hero experience verbatim** while building out a
full, bilingual (French + English), multi-page portfolio — with a proper component architecture,
content collections, modern motion, and good SEO — without migrating off the current stack.

## Solution

Overhaul the entire site except the frozen hero:

- **Keep the hero frozen** — the existing index hero (markup, colors, GSAP entrance animation)
  is extracted verbatim into a shared `Hero.astro` used by both the FR and EN index pages. It is
  never redesigned or restyled.
- **Build a real multi-page site** — landing (frozen hero + scroll-revealed Work timeline and
  Projects grid), project detail pages, blog index + posts, About, Contact, and a Mini-Games
  page, all in both FR (`/`) and EN (`/en/`).
- **Restructure the architecture** — a design-system component layer (`Section`, `Container`,
  `Card`, `Badge`, `Button`), a fixed bottom tab bar for navigation, and Astro 7 official i18n
  routing. Content lives in Content Layer collections.
- **Modernize the visuals** — a "harmonized evolution": blue stays the accent, light foundation,
  refined typography, soft shadows / subtle glass, stronger layout rhythm. No dark mode, no rebrand.
- **Polish the motion & SEO** — GSAP scroll reveals + Astro View Transitions for navigation;
  per-page title/description/`hreflang` alternates, a sitemap, `robots.txt`, and per-page
  Open Graph / Twitter cards.
- **Keep the deploy pipeline** — GitHub Actions on the `dev` branch → Firebase Hosting, unchanged.

## User Stories

1. As a visitor, I want the hero to load with its existing entrance animation, so the first impression I originally designed is preserved.
2. As a visitor, I want a scroll indicator on the hero, so I know there is more content below.
3. As a visitor, I want to scroll down and see a Work section with an experience timeline, so I can understand the developer's professional background.
4. As a visitor, I want to scroll down and see a Projects section with project cards, so I can browse the developer's work.
5. As a visitor, I want sections below the hero to animate in as I scroll, so the experience feels polished.
6. As a visitor, I want to click a project card and land on a dedicated detail page, so I can learn more about a specific project.
7. As a visitor, I want a project detail page with title, description, tech stack, gallery/screenshots, and links, so I can evaluate the project.
8. As a visitor, I want a "back to projects" link on detail pages, so I can return easily.
9. As a visitor, I want to navigate to an About page, so I can learn about the developer beyond the hero bio.
10. As a visitor, I want to navigate to a Contact page with email, LinkedIn, and GitHub links, so I can reach the developer.
11. As a visitor, I want to navigate to a Blog page, so I can read the developer's articles.
12. As a visitor, I want to read individual blog posts with proper formatting, so I can consume long-form content.
13. As a visitor, I want to navigate to a Games page, so I can play browser-based mini-games.
14. As a visitor, I want a consistent bottom tab bar on every page (mobile and desktop), so I can always find my way around.
15. As a visitor, I want to switch language via a toggle in the nav, so I can read the site in French or English.
16. As a visitor, I want the URL to change when I switch languages (e.g. `/` ↔ `/en/`), so I can share or bookmark a specific language version.
17. As a visitor, I want project cards to show a thumbnail, title, description, tech stack, and tags, so I can quickly assess projects.
18. As a visitor, I want to filter or browse projects by tags, so I can find relevant work.
19. As a visitor, I want the blog index to show post titles, dates, and descriptions, so I can decide what to read.
20. As a visitor, I want the Work timeline to show company, role, dates, and description per entry, so I can understand career progression.
21. As a visitor, I want the profile photo to load reliably (no URL-encoding issues from spaces in the filename), so the image always renders.
22. As a visitor, I want proper SEO tags (title, description, `hreflang` alternates) per page, so the site is discoverable and shareable.
23. As a visitor, I want link previews on LinkedIn/GitHub to show a relevant Open Graph image, so shared links look professional.
24. As a visitor, I want a `sitemap.xml` and `robots.txt`, so search engines can index the site correctly.
25. As a visitor, I want navigation to feel app-like and consistent across all 14 pages × 2 locales, so the site feels cohesive.
26. As a developer (owner), I want content collections with type-safe schemas, so I can add projects and posts without breaking the build.
27. As a developer, I want UI strings in translation files, so I can maintain both languages without touching component code.
28. As a developer, I want unused files and dependencies removed, so the codebase is clean and maintainable.
29. As a developer, I want `pnpm build` to be the primary acceptance gate, so invalid content or broken locale routes fail fast.
30. As a developer, I want the frozen hero's GSAP animations left untouched, so the preserved experience never regresses.

## Implementation Decisions

- **i18n routing (Astro 7 official):** `defaultLocale: "fr"`, `locales: ["fr","en"]`,
  `routing.prefixDefaultLocale: false`. FR serves at `/`, EN at `/en/`. URLs are unchanged from
  the manual approach, so no SEO/link breakage. (ADR-0001)
- **Stack:** stay on Astro 7 + Tailwind 4 (via `@tailwindcss/vite`) + GSAP + astro-icon,
  upgraded in place. No React meta-framework migration. (ADR-0002)
- **Translation system:** `src/i18n/fr.json` + `en.json` consumed by a `useTranslations(locale)`
  utility returning `t(key)`. All UI chrome (nav, headings, buttons, labels) uses `t()`. Project
  and blog **content** is single-language (not translated). (ADR-003 / content-translation)
- **Content Layer collections** (`src/content.config.ts`): `projects` (title, description, date,
  thumbnail, techStack[], links{github?, live?}, tags[], gallery[], markdown body) and `blog`
  (title, date, description, tags[], markdown body). The existing frontmatter schema is preserved;
  only the loading API moves to Content Layer. (ADR-002 / content-schema)
- **Frozen hero:** extracted verbatim into a shared `Hero.astro`, rendered by both `index.astro`
  (FR) and `en/index.astro` (EN). Markup, colors, and GSAP entrance are unchanged. A CSS
  scroll-indicator is added.
- **Design-system components:** `Section`, `Container`, `Card`, `Badge`, `Button` compose the
  overhauled surfaces. `BottomBar` is retained and reworked into the bottom tab bar.
- **Navigation (bottom tab bar):** fixed, glassmorphism (backdrop-blur, semi-transparent), 4–5
  icon+label items using `@iconify-json/mdi`, always visible on **all** viewports (mobile and
  desktop), with the language toggle integrated. The older floating-nav / NavSelector / Nav
  variants are removed. (ADR-010)
- **Landing page:** frozen 100vh hero, then scroll-revealed Work timeline (alternating cards from
  a data source) and Projects grid (cards from the collection, each linking to `/projects/[slug]`),
  all under GSAP ScrollTrigger. (ADR-001 page architecture)
- **Project detail:** dynamic route `/projects/[slug]` (+ `/en/projects/[slug]`) via
  `getStaticPaths()` over the projects collection.
- **Other pages:** Blog index + `[slug]` post; About (expanded bio, skills, education); Contact
  (email/LinkedIn/GitHub links only, no backend/form); Games (vanilla JS/Canvas mini-games,
  client-side, lazy-loaded, scaffold-level structure).
- **Motion:** unify on GSAP — ScrollTrigger for in-page scroll reveals + the frozen hero; Astro
  View Transitions for route changes. One motion system, no new deps. (ADR-0003)
- **Styling / design direction:** evolve the token system rather than reuse current values — keep
  blue as the hue but build a proper semantic scale (accent / accent-soft / accent-contrast /
  accent-muted), use tinted surfaces instead of pure white, and pair a characterful display font
  (headings) with a clean grotesk (body). "Harmonized evolution," not a rebrand. (CONTEXT glossary)
- **SEO:** per-page title/description/`hreflang` alternates (Astro i18n supplies alternates) +
  `sitemap.xml` (Astro built-in sitemap integration) + `robots.txt` + per-page Open Graph and
  Twitter Card meta with a per-page OG image (frozen hero for top-level pages, project thumbnail
  for detail pages). (ADR-0008)
- **Build sequence (no deadline):** freeze hero → extract design-system components → build all
  overhauled pages in both locales → wire real content → deploy. Quality over speed; scope is
  trimmed only for quality, never for a date. (ADR-0005)
- **Content strategy:** build the full structure now using the content already in the repo
  (existing projects + the one blog post) and insert clearly-marked placeholders for missing
  assets (resume PDF link, `profile.png`, project screenshots/galleries, extra posts, fuller bio).
  The site is fully functional; the owner enriches copy/assets later. (ADR-0006)
- **Testing:** acceptance = `pnpm build` passes (Astro validates content schemas + i18n routes at
  build time) plus a manual visual pass in both FR and EN. No automated test framework. (ADR-0007)
- **Hosting / deploy:** GitHub Actions on the `dev` branch → Firebase Hosting, unchanged. (ADR-0004)
- **Cleanup:** remove `Welcome.astro`, `starwind.css`, `astro.svg`, `background.svg`; remove deps
  `tailwind-merge`, `tailwind-variants`, `tw-animate-css`, `@tailwindcss/forms`, `@tabler/icons`;
  rename the profile image (`Design sans titre (1).png` → `profile.png`) and update all references.
- **Doc hygiene (follow-up):** the repo carries two overlapping ADR numbering schemes
  (`docs/adr/0001..0008` from the grill and `docs/adr/ADR-001..010` from earlier planning) that
  even clash on numbers (e.g. "ADR-004" = content-translation in one scheme, firebase-hosting in
  the other). These should be consolidated into one re-numbered, de-duplicated source of truth.

## Testing Decisions

- **What makes a good test:** assert only external, user-visible behavior — a page renders in both
  locales, every route exists in FR and EN, the hero GSAP entrance fires, scroll reveals trigger on
  scroll, the nav + language toggle produce correct URLs, no broken `#` links remain, and
  `pnpm build` succeeds. Do **not** test implementation details (specific class names, internal
  component structure).
- **Modules under test:** all 14 pages × 2 locales; `Layout`/bottom tab bar; the i18n routing
  layer; the `projects` and `blog` content collections.
- **Prior art:** Astro's build-time validation of content-collection schemas and i18n routes is the
  primary automated gate; a manual visual pass in both locales (the approach named in the original
  spec) is the secondary check. No new test framework is introduced.

## Out of Scope

- Server-side rendering (SSR) — static output only.
- Contact form submission or any backend logic.
- Full translation of project/blog content (only UI strings are translated).
- CMS integration — content is managed via markdown in the repo.
- Dark mode toggle (not requested).
- Analytics integration.
- Specific mini-game implementations (only page structure + placeholder).
- Formal accessibility audit (basic a11y via semantic HTML only).
- Performance optimization beyond lazy-loading the games.

## Further Notes

- The existing GSAP entrance animations on the hero must not be modified — they work as-is.
- The Firebase Hosting pipeline (GitHub Actions on `dev`) continues to work without changes.
- Node ≥ 22.12.0 and pnpm are required (per `package.json` engines).
- The profile-photo rename (`Design sans titre (1).png` → `profile.png`) must be reflected in
  `index.astro` and any other references.
- The mini-games section is scaffold-level — specific games are a future concern.
- All terminology in this spec follows `CONTEXT.md` (e.g. "Original Style" = the frozen hero;
  "Overhaul" = the full visual + architectural + content redesign everywhere except the hero).
