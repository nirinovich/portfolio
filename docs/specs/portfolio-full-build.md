# Spec: Portfolio Website — Full Build

## Problem Statement

I have a minimal single-page portfolio website (Astro + Tailwind + GSAP) with a hero section, broken navigation links (`#work`, `#projects` point to nothing), unused boilerplate files, and no i18n support. I need a complete portfolio that showcases my work, supports French and English, and includes multiple page types — but preserves the existing hero experience as-is.

## Solution

Build out the portfolio into a multi-page site with:
- A landing page that keeps the existing full-screen hero and adds scroll-revealed Work and Projects sections below it
- Dedicated detail pages for each project
- Additional pages: About, Contact, Blog, Mini-Games
- Full i18n with French as default locale (`/`) and English at `/en/`
- GSAP ScrollTrigger for scroll-reveal animations
- Cleanup of all unused files and dependencies

## User Stories

1. As a visitor, I want to see the hero section load with the existing entrance animations, so that the first impression is preserved
2. As a visitor, I want to see a scroll indicator on the hero, so that I know there's more content below
3. As a visitor, I want to scroll down and see a Work section with an experience timeline, so that I can understand the developer's professional background
4. As a visitor, I want to scroll down and see a Projects section with project cards, so that I can browse the developer's work
5. As a visitor, I want to click on a project card and see a dedicated detail page, so that I can learn more about a specific project
6. As a visitor, I want to see a project detail page with title, description, tech stack, screenshots, and links, so that I can evaluate the project
7. As a visitor, I want to navigate to an About page, so that I can learn more about the developer beyond the hero bio
8. As a visitor, I want to navigate to a Contact page, so that I can find the developer's email, LinkedIn, and GitHub
9. As a visitor, I want to navigate to a Blog page, so that I can read the developer's articles
10. As a visitor, I want to read individual blog posts with proper formatting, so that I can consume long-form content
11. As a visitor, I want to navigate to a Games page, so that I can play browser-based mini-games
12. As a visitor, I want to switch between French and English using a language toggle in the nav, so that I can read the site in my preferred language
13. As a visitor, I want the URL to change when I switch languages (e.g., `/` to `/en/`), so that I can share or bookmark a specific language version
14. As a visitor, I want to download the developer's resume via a PDF link, so that I can review their full CV
15. As a visitor, I want navigation to be consistent across all pages, so that I can always find my way around the site
16. As a visitor, I want sections below the hero to animate in as I scroll, so that the experience feels polished
17. As a developer (site owner), I want content collections with type-safe schemas, so that I can add new projects and blog posts easily
18. As a developer, I want UI strings in translation files, so that I can maintain both languages without touching component code
19. As a developer, I want unused files and dependencies removed, so that the codebase is clean and maintainable
20. As a visitor, I want project cards to show a thumbnail, title, description, tech stack, and tags, so that I can quickly assess projects
21. As a visitor, I want to filter or browse projects by tags, so that I can find relevant work
22. As a visitor, I want the blog index to show post titles, dates, and descriptions, so that I can decide what to read
23. As a visitor, I want the Work timeline to show company, role, dates, and description for each entry, so that I can understand career progression
24. As a visitor, I want the profile photo filename to not cause URL encoding issues, so that the image always loads correctly
25. As a visitor, I want proper SEO tags (title, description, alternates) for each page, so that the site is discoverable

## Implementation Decisions

### 1. Astro i18n Configuration

Configure Astro's built-in i18n in `astro.config.mjs`:
- `defaultLocale: "fr"`
- `locales: ["fr", "en"]`
- `routing: { prefixDefaultLocale: false }` — French serves at `/` without prefix
- `i18n.domains` not needed (single domain)

### 2. Translation System

- Two JSON files: `src/i18n/fr.json` and `src/i18n/en.json`
- A `useTranslations(locale)` utility function returns a `t(key)` function
- Layout, nav, section headings, button labels, and all UI chrome use `t()`
- Project and blog content is NOT translated (single-language per ADR-004)

### 3. Content Collections

Two collections defined in `src/content.config.ts`:

**Projects collection:**
- `title` (string)
- `description` (string)
- `date` (date)
- `thumbnail` (image)
- `techStack` (array of strings)
- `links` (object: optional `github`, optional `live`)
- `tags` (array of strings)
- `gallery` (array of images)
- Body: markdown (long-form write-up)

**Blog collection:**
- `title` (string)
- `date` (date)
- `description` (string)
- `tags` (array of strings)
- Body: markdown

### 4. Landing Page Structure

Single scroll page with three sections:
1. **Hero** (100vh) — existing design, unchanged. Add a scroll-down indicator (chevron or arrow)
2. **Work** — experience timeline rendered from a data source (could be a collection or static data). GSAP ScrollTrigger fade-in
3. **Projects** — cards from content collection. GSAP ScrollTrigger stagger. Each card links to `/projects/[slug]`

### 5. Nav Component

- Built in Layout, visible on all pages
- Contains: site logo/name, nav links (Home, Work, Projects, About, Blog, Games, Contact), resume link, language toggle
- Language toggle switches between `/` and `/en/[current-path]`
- Highlight active page
- Responsive: hamburger menu on mobile

### 6. Project Detail Pages

- Dynamic route: `src/pages/projects/[slug].astro`
- Uses `getStaticPaths()` to generate from projects collection
- Displays: title, description, date, tech stack, gallery, links, body content
- "Back to projects" link
- Generated for each locale

### 7. Work Section Data

- Work experience stored as a content collection or static data array
- Each entry: company, role, startDate, endDate (optional), description, logo (optional)
- Rendered as a vertical timeline with alternating left/right cards

### 8. Blog Pages

- Blog index: `src/pages/blog/index.astro` — list of posts with title, date, description
- Blog post: `src/pages/blog/[slug].astro` — individual post with full markdown body
- Generated from `blog` content collection

### 9. About Page

- Static content page with expanded bio, skills list, education details
- Content managed directly in the `.astro` file or pulled from a collection

### 10. Contact Page

- Static page with email, LinkedIn, GitHub links
- No form submission, no backend
- Styled consistently with the rest of the site

### 11. Games Page

- Browser-based mini-games built with vanilla JS/Canvas
- Games run client-side, lazy-loaded
- Initial implementation: page structure with placeholder for games
- Each game is a self-contained component

### 12. Cleanup

Remove:
- `src/components/Welcome.astro`
- `src/styles/starwind.css`
- `src/assets/astro.svg`
- `src/assets/background.svg`

Remove dependencies: `tailwind-merge`, `tailwind-variants`, `tw-animate-css`, `@tailwindcss/forms`, `@tabler/icons`

Rename: `public/Design sans titre (1).png` → `public/profile.png`

Update all references to the old filename.

### 13. GSAP ScrollTrigger

- Install `gsap` ScrollTrigger plugin (already have GSAP)
- Register ScrollTrigger in the animations script
- Each section below the hero uses `ScrollTrigger` to fade/slide in
- Scroll indicator on hero uses a simple CSS animation (bounce or pulse)

### 14. Seams

**Primary seam — i18n config:**
Astro's `i18n` config in `astro.config.mjs` is the root seam. All locale routing, page generation, and `<link rel="alternate">` tags flow from this single config.

**Translation seam:**
A single `useTranslations(locale)` utility imported by Layout and all components. One function, one interface, all UI strings flow through it.

**Content collections seam:**
`src/content.config.ts` defines schemas. All content rendering (project cards, detail pages, blog index, blog posts) imports from collections via `getCollection()`.

**Layout seam:**
`Layout.astro` is the shared chrome seam. Nav, language picker, head tags, and global styles live here. Every page inherits from it.

## Testing Decisions

- **Visual testing**: Since this is a portfolio site, primary testing is visual — verify each page renders correctly in both locales, animations trigger on scroll, nav links work, language toggle switches correctly
- **Content collection validation**: Astro validates content collection schemas at build time — invalid frontmatter will fail the build
- **i18n routing**: Verify all routes exist in both locales and the language toggle produces correct URLs
- **Link integrity**: Verify no broken internal links (the current `#work` and `#projects` links must resolve after implementation)
- **Build verification**: `pnpm build` must succeed with no errors — this is the primary CI gate

## Out of Scope

- Server-side rendering (SSR) — site uses static output only
- Form submission or backend logic for contact page
- Full translation of project/blog content (only UI strings are translated)
- CMS integration — content is managed via markdown files in the repo
- Dark mode toggle (not requested)
- Analytics integration
- Specific game implementations (only the page structure and placeholder)
- Accessibility audit (basic a11y via semantic HTML, but no formal audit)
- Performance optimization beyond lazy-loading games

## Further Notes

- The existing GSAP entrance animations on the hero must not be modified — they work as-is
- The Firebase Hosting deployment pipeline (GitHub Actions on `dev` branch) should continue to work without changes
- Node ≥22.12.0 and pnpm are required (per `package.json` engines)
- Profile photo rename (`Design sans titre (1).png` → `profile.png`) needs to be reflected in `index.astro` and any other references
- The mini-games section is scaffold-level — specific games are a future concern
