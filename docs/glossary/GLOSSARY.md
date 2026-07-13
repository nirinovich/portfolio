# Domain Glossary

Terms specific to this portfolio website project.

| Term | Definition |
|---|---|
| **Hero** | The full-screen landing section with profile photo, name, bio, and social links. Loads first with GSAP entrance animations. |
| **Work** | Professional experience / employment history section. Rendered as a timeline on the landing page. |
| **Projects** | Personal or academic projects showcased on the portfolio. Each has a dedicated detail page (`/projects/[slug]`). |
| **Detail page** | A standalone page for a single project, accessible via `/projects/[slug]`. Contains full write-up, gallery, tech stack, and links. |
| **Scroll reveal** | Animation technique using GSAP ScrollTrigger where sections below the hero are hidden until the user scrolls down. |
| **Locale** | A language/region combination (`fr` or `en`) used for i18n routing and content. French is the default locale. |
| **Locale prefix** | URL segment indicating language: `/` for French (default), `/en/` for English. |
| **UI translations** | JSON files (`fr.json`, `en.json`) containing translated UI strings (nav labels, button text, section headings). Distinct from project content. |
| **Content collection** | Astro's built-in content management system using `src/content/` with Zod schemas for type-safe markdown/MDX. |
| **Mini-games** | Browser-based interactive games built with vanilla JS/Canvas, playable directly on the portfolio site at `/games`. |
| **Timeline** | The visual representation of work experience entries, showing company, role, dates, and description in chronological order. |
| **Blog** | Markdown-based blog posts stored in `src/content/blog/`, with index and individual post pages. |
| **Contact page** | Static page at `/contact` with direct links (email, LinkedIn, GitHub) — no form submission. |
