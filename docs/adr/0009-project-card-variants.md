# Project card system with three variants

We need to display projects in a results-oriented way that leads with business impact. Three card variants were chosen to handle different project types: metrics-first (dominant number), outcome narrative (image-led with story), and before/after split (side-by-side comparison). All share one data shape with optional fields.

Homepage uses a mixed feed (curated cards + "view all" link). `/projects` uses a simple filterable grid — no timeline, no chronology. Metric placement is flexible (sometimes secondary to the image) to avoid forcing every project into the same visual hierarchy.

Alternatives considered: timeline view (rejected — duplicates year data already on cards), accordion expand (rejected — hides content), card+dialog modal from jos.gg (rejected — user explicitly moved away from jos.gg pattern).
