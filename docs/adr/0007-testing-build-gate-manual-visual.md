# Testing — build gate + manual visual

**Status:** Accepted

Acceptance = `pnpm build` must pass (Astro validates content-collection schemas and i18n routes at build time, so invalid frontmatter or a missing locale route fails the build) plus a manual visual pass in both FR and EN: hero GSAP entrance fires, scroll reveals trigger on scroll, nav + language toggle produce correct URLs, and no broken `#` links remain. No automated test framework is added.
