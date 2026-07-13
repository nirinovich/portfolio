# ADR-007: Contact Page and Blog

**Status:** Accepted
**Date:** 2026-07-13

## Contact Page

- Static contact info page — email, LinkedIn, GitHub, possibly other socials
- No form submission — avoids serverless functions, no backend needed
- Clean, simple page with direct links and a call-to-action

## Blog

- Markdown blog posts via Astro Content Collections
- Standard blog layout: index page with post list, individual post pages
- Posts stored in `src/content/blog/`
- Schema: title, date, description, tags, body (markdown)
- Supports i18n for UI chrome (post labels, "Read more", etc.)
