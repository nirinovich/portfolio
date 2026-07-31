# Project Card System — Results-Oriented Portfolio Overhaul

## Problem Statement

The current portfolio site displays projects as simple cards with a thumbnail, title, description, and tech tags. There is no way to showcase business outcomes (revenue generated, user reach, conversion impact) or tell a results-oriented story. The homepage has a curated "featured projects" section and an "all projects" grid, but both use the same flat card pattern. There is no dedicated `/projects` listing page — the full project grid is embedded in the EN homepage only. The content collection schema lacks fields for metrics, roles, outcomes, before/after comparisons, and client names.

## Solution

Introduce a project card system with three variants — **metrics-first**, **outcome narrative**, and **before/after split** — that let each project lead with its business impact. Expand the content collection schema to support the new fields. Replace the current flat card grid on the homepage with a mixed feed of curated cards using the appropriate variant, plus a "view all" link. Create a dedicated `/projects` route with a filterable grid showing all projects. Apply the card variants consistently across both FR and EN locales.

## User Stories

1. As a portfolio visitor, I want to see the most impactful metric of a project immediately (e.g. "500,000 Ariary/month revenue"), so that I understand the business value at a glance.
2. As a portfolio visitor, I want to read a short outcome narrative for each project, so that I understand what was built and what it achieved.
3. As a portfolio visitor, I want to see a before/after comparison for appropriate projects, so that I can evaluate the transformation delivered.
4. As a portfolio visitor, I want to filter projects by tag on the `/projects` page, so that I can find projects relevant to my interests (e.g. ecommerce, saas, react).
5. As a portfolio visitor, I want to see a curated selection of featured projects on the homepage, so that I can quickly grasp the best work without browsing everything.
6. As a portfolio visitor, I want a "view all" link from the homepage featured section to the `/projects` route, so that I can explore further if interested.
7. As a portfolio visitor, I want each project card to show the project image, so that I can see visual proof of the work.
8. As a portfolio visitor, I want project cards to show the client name when available, so that I can assess credibility through association.
9. As a portfolio visitor, I want project cards to show the year range, role, and tags, so that I understand the context of the work.
10. As a portfolio visitor, I want to click a project card and navigate to a detail page with full information, so that I can dive deeper into projects that interest me.
11. As a portfolio visitor, I want the metric element to sometimes be secondary to the project image, so that visual projects can lead with their screenshot.
12. As a portfolio visitor, I want the before/after comparison to be displayed side-by-side, so that I can compare the problem and solution simultaneously.
13. As a portfolio visitor, I want the homepage mixed feed to show 3-6 featured projects, so that the section is scannable but not overwhelming.
14. As a portfolio visitor, I want the `/projects` page to show all projects in a responsive grid (1-2-3 columns), so that I can browse the full catalog.
15. As a portfolio visitor, I want project cards to have consistent visual styling with the existing card pattern (rounded corners, shadows, hover effects), so that the design feels cohesive.
16. As a portfolio visitor, I want the tag filter on `/projects` to include an "All" option plus one option per unique tag across all projects, so that filtering is comprehensive.
17. As a portfolio visitor, I want the tag filter to be visually simple (pill buttons), so that it doesn't distract from the projects.
18. As a portfolio visitor, I want project cards to link to external live URLs when available, so that I can see the finished product.
19. As a portfolio visitor, I want the metrics-first card to display the metric in large prominent typography, so that the number is the first thing I notice.
20. As a portfolio visitor, I want the outcome narrative card to display the project image prominently with the narrative as the main body text, so that visual projects shine.
21. As a portfolio visitor, I want the before/after card to show the "before" state on the left and "after" on the right with a divider, so that the transformation is clear.
22. As a developer, I want the content collection schema to include optional fields for metric, metricLabel, outcome, before, after, client, and role, so that I can populate project data without restructuring existing content.
23. As a developer, I want the card variant to be selectable via a frontmatter field (e.g. `cardVariant: "metrics"`), so that I can choose the right layout per project.
24. As a developer, I want the three card variants to share a common component interface, so that the homepage and `/projects` page can render any variant without conditional logic.
25. As a developer, I want the featured projects list to be configurable via a frontmatter field (e.g. `featured: true`), so that I can curate the homepage without hardcoding slugs.
26. As a developer, I want the `/projects` page to exist as a standalone route (not embedded in the homepage), so that it can be linked directly and shareable.
27. As a developer, I want the project detail page to display all fields including metrics, outcome, before/after, and client, so that the full story is available.
28. As a developer, I want the card components to be reusable across FR and EN pages, so that I don't duplicate card markup.
29. As a developer, I want the tag filter state to be managed client-side (no page reload), so that filtering is instant.
30. As a developer, I want the existing project content (4 entries) to remain valid after the schema change, so that nothing breaks during the transition.

## Implementation Decisions

### Content Collection Schema Extension

The `projects` collection schema will be extended with new optional fields. Existing fields (`title`, `description`, `date`, `thumbnail`, `techStack`, `links`, `tags`, `gallery`) remain unchanged. New fields:

- `role`: `z.string().optional()` — the role held on this project (e.g. "Full-stack Developer")
- `metric`: `z.string().optional()` — the primary business outcome number (e.g. "500,000 Ariary/month")
- `metricLabel`: `z.string().optional()` — label for the metric (e.g. "Monthly Revenue")
- `outcome`: `z.string().optional()` — narrative paragraph describing what was built and what it achieved
- `before`: `z.string().optional()` — problem state description (for before/after variant)
- `after`: `z.string().optional()` — solution state description (for before/after variant)
- `client`: `z.string().optional()` — client or company name
- `cardVariant`: `z.enum(["metrics", "narrative", "before-after"]).default("narrative")` — which card layout to use
- `featured`: `z.boolean().default(false)` — whether to show on homepage mixed feed

All new fields are optional to preserve backward compatibility with existing content.

### Card Component Architecture

Three Astro components sharing a common prop interface:

- `ProjectCardMetrics.astro` — metric in large type, image secondary, title + role + outcome below
- `ProjectCardNarrative.astro` — image dominant, title + role + outcome paragraph as main body
- `ProjectCardBeforeAfter.astro` — side-by-side split with before (left) and after (right), divider between

A wrapper component `ProjectCard.astro` accepts the full project data and delegates to the correct variant based on `cardVariant`. All variants accept the same base props: `title`, `role`, `year`, `metric?`, `metricLabel?`, `outcome?`, `before?`, `after?`, `tags[]`, `client?`, `image?`, `liveUrl?`, `repoUrl?`.

### Homepage Mixed Feed

The featured projects section on both FR and EN homepages will query projects where `featured: true` and render them using the appropriate card variant. A "View all projects →" link at the bottom navigates to `/projects` (EN: `/en/projects`). The section displays 3-6 projects maximum.

The current hardcoded slug filter (`['malitix', 'exotika', 'smartservice']`) will be replaced by the `featured` frontmatter field.

### Projects Listing Route

A new `/projects` route (and `/en/projects`) will display all projects in a filterable grid. The page includes:
- A filter bar at the top with pill-style tag buttons (derived from unique tags across all projects, plus "All")
- A responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop)
- Client-side filtering via a small inline `<script>` (no framework dependency)
- Cards rendered using the `ProjectCard` wrapper component

### Project Detail Page

The existing `[slug].astro` route will be updated to display the new fields (metric, metricLabel, outcome, before, after, client, role) in addition to the current content.

### Design Consistency

All card variants use the existing card pattern tokens:
- `bg-white rounded-2xl shadow-md` base
- `hover:shadow-xl transition-all duration-300` interaction
- `border border-transparent hover:border-accent/20` focus state
- Tech tags: `text-xs px-2 py-0.5 bg-accent-light text-accent-dark rounded-full`

### Seams for Testing

The primary test seams are:

1. **Content schema validation** — new entries with all optional fields omitted must still pass validation (backward compatibility)
2. **Card variant rendering** — each variant renders correctly given its required fields (metrics variant needs metric + metricLabel, before-after needs before + after)
3. **Featured filter** — projects with `featured: true` appear on homepage; those without do not
4. **Tag filter on /projects** — filtering by tag shows only matching projects; "All" shows everything
5. **Locale routing** — `/projects` serves FR, `/en/projects` serves EN, both show the same project data in their respective language

## Testing Decisions

- **Schema backward compatibility**: Add a test entry with zero new fields to verify the schema accepts it. This is the most critical test — existing content must not break.
- **Card variant rendering**: Visual test each variant in isolation with mock data. Verify metric-first shows metric prominently, narrative shows image prominently, before-after shows side-by-side layout.
- **Filter behavior**: Manual test — click each tag, verify correct projects appear. Click "All", verify all projects return.
- **Responsive layout**: Visual test at mobile (375px), tablet (768px), desktop (1280px) breakpoints.
- **Existing tests**: No automated test infrastructure exists in this project. Testing is manual visual verification via `astro dev`.

## Out of Scope

- Redesigning the hero section (frozen per CONTEXT.md)
- Changing the tech stack marquee or work timeline sections
- Adding new content entries (placeholder data only — user populates real content later)
- Implementing GSAP scroll reveal animations for the new sections (CSS classes exist but JS is not implemented — separate concern)
- Adding `@fontsource` packages (mentioned in CONTEXT.md but not in this spec's scope)
- Modifying the `BottomBar.astro` component
- Adding View Transitions (mentioned in CONTEXT.md but not in this spec's scope)
- Blog page changes

## Further Notes

- The `test.html` and `test.css` files in `src/` are reference files from a jos.gg portfolio design and are NOT part of the active site. They should not be modified or imported.
- The EN homepage (`en/index.astro`) currently has the most complete implementation. The FR homepage (`index.astro`) only has the hero section. This spec adds the missing sections to both.
- Existing project content (4 entries: smartservice, portfolio-website, malitix, exotika) will need frontmatter updates to populate the new fields (role, metric, outcome, etc.). This is a content task, not a code task.
