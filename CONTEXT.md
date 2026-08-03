# nirinovich Portfolio

Glossary for the portfolio site overhaul (the Astro 7 + Tailwind 4 project at repo root). Pins down project-specific vocabulary so the overhaul stays coherent. Architectural decisions live in `docs/adr/` — this file is a glossary only.

## Language

**Original Style**: The previous index hero section that was frozen during the earlier overhaul phase. As of the current rebuild, the hero is now in scope for redesign — the freeze has been lifted.
_Avoid_: treating the hero as untouchable or out of scope.

**Overhaul**: The full-site redesign in progress — a new visual design **and** a restructured architecture **and** refreshed content, applied to every surface including the hero. "Complete overhaul" = all three dimensions change across the entire site.
_Avoid_: using "redesign" to mean only the visuals.

**Design direction**: Dark, immersive aesthetic — deep backgrounds (`bg-primary-dark`, `bg-slate-900`), muted text (`text-slate-400`), accent highlights (`text-accent`), and a cinematic feel. Inspired by AI/agency portfolios. Light mode is not part of the current design direction.
_Avoid_: "light mode," "blue accent as primary," "rebrand."

**Edge-to-edge layout**: The site uses no max-width container — content spans the full viewport width. Sections are bounded by border lines (`border-slate-800`) rather than container constraints. Exception: project detail pages may use constrained widths for readability.
_Avoid_: `max-w-[1200px]`, boxed layouts, centered containers with side margins.

**Palette strategy**: Dark neutral foundation (`#0f172a` / `#1e293b` / `#0a0a0a`) with a single accent color (current: blue `#2563eb`). Surfaces are differentiated by border lines and subtle background shifts, not by card elevation or shadows.
_Avoid_: tinted surfaces, soft shadows, glass morphism.

**i18n**: Bilingual FR (default, served at `/`) and EN (served at `/en/`), implemented with Astro 7's official i18n routing. See ADR-0001.
_Avoid_: the old manual folder-routes + `useTranslations` approach for new code.

**Astro v7 docs (source of truth)**: Standing working agreement — implement against the Astro v7 official documentation, not third-party tutorials or outdated guides.

**Content model**: `blog` and `projects` are Astro 7 Content Layer collections; the existing frontmatter schema is preserved (only the loading API changes from `getCollection` to Content Layer). "Refreshed content" means better copy within those existing fields, not new fields.

**Component architecture**: A proper component layer. Overhauled surfaces are built from design-system components: `Hero`, `ManifestoSection`, `SectionHeader`, `ProjectCard`, `TechStackItem`, `CTASection`. Components use the dark aesthetic with border-based separation.
_Avoid_: light-themed components, card-based layouts with shadows.

**In-scope surfaces**: Every surface, in both FR and EN — the homepage (hero, manifesto, featured projects, tech stack, CTA), project detail pages, blog (list + detail), about, contact. Project detail pages must follow the same dark aesthetic as the index.

**Motion strategy**: GSAP for scroll reveals and entrance animations. Astro View Transitions handle navigation between routes. One motion library (no new animation deps).
_Avoid_: adding Framer Motion, CSS-only animations for complex sequences.

**Deployment**: Firebase Hosting, as-is. `firebase.json` serves the static `dist` folder with no rewrites. The overhaul's unchanged URLs (`/` = FR, `/en/` = EN) and static output are already compatible, so no hosting config changes are needed.

**Type & tokens**: Display/headings = **Space Grotesk**; body/UI = **Inter**. Accent = refined blue scale anchored on the existing `#2563eb` hue — `accent #2563eb`, `accent-strong #1d4ed8`, `accent-soft #dbeafe`. Dark surfaces: `bg-primary-dark` (dark navy), `bg-slate-900`, `bg-slate-800` for borders.

**Content refresh (depth)**: Draft improved copy in BOTH FR and EN for the overhauled surfaces, preserving the facts (name, ESTI, projects, links) but polishing prose/structure for the new design. Existing copy is not kept verbatim; the user can tweak later.

**Engineering philosophy**: The manifesto/hero copy must reflect the user's own philosophy: values-first, result-driven, bad code debt exists, AI still needs human oversight. Not copied from external sources (e.g., Matt Pocock).
_Avoid_: generic engineering platitudes, borrowed copy from other developers.

**Logo usage**: The site's own favicon/brand assets (`favicon.svg`, `favicon.ico`, `apple-touch-icon.png`) should be used where a site logo is needed (e.g., navbar, footer). ESTI logo (`logo-ESTI1-foot.svg`) is used in the hero context. No other brand assets are required.
_Avoid_: generating new logo assets, using third-party logo CDNs for the site brand.

**Tech stack icons**: The Arsenal/TechStack section displays tech logos sourced from a CDN (e.g., `cdn.simpleicons.org` or `skillicons.dev`). Each item shows: icon + name + short description. Icons are SVG-based, rendered inline or via `<img>`.
_Avoid_: emoji-based icons, text-only tech stack listings.

**Navigation model**: Two navigation variants exist — Variant A (current) has nav links in the hero. Variant B adds a sticky top navbar. An A/B toggle allows switching between them at runtime for testing. Both variants share the same link structure: Work, Projects, Resume, and social icons.
_Avoid_: sidebar navigation, hamburger menus on desktop.

**Project detail consistency**: Project detail pages (`/projects/[slug]`) must follow the same dark aesthetic, typography, and spacing as the index. Light-themed project pages are out of scope. The current `[slug].astro` uses light backgrounds (`bg-[#e8ecf1]`, `bg-white`) and must be updated to match the dark index style.
_Avoid_: light backgrounds, white cards, blue accent-heavy styling on project pages.

**CTA section**: The CTA section at the bottom of the homepage should be visually distinct but consistent with the dark aesthetic. Current approach: a simple centered message + email link with accent styling. The CTA should not feel "tacked on" — it should be a natural conclusion to the page flow.
_Avoid_: oversized CTA blocks, multiple competing CTAs, popup-style CTAs.
