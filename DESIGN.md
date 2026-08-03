# Design System — Version B

<!-- impeccable:design-schema 1 -->

## World

**Thesis:** Brutalist-tech clarity — dark, grid-structured, high-contrast interfaces that communicate engineering precision and technical authority. No decorative flourishes; every element serves function.

**Cultural home:** Developer portfolios, technical documentation sites, dark-mode SaaS dashboards. The aesthetic inherits from brutalist web design and terminal interfaces, where information hierarchy is enforced through structure rather than ornament.

**Own-world:** Dark surfaces with blue accent, grid borders as structural elements, grayscale imagery with selective color reveals, uppercase tracking for labels, and clean sans-serif typography with mono accents for technical content.

---

## Palette

| Role | Value | Use |
|------|-------|-----|
| `primary-dark` | `#0a1128` | Page background, dark surfaces |
| `accent` | `#0367ff` | Interactive elements, highlights, CTAs |
| `accent-hover` | `#024bcc` | Hover state for accent elements |
| `accent-light` | `#4f96ff` | Light accent for subtle highlights |
| `accent-muted` | `#99c2ff` | Muted accent for secondary interactions |
| `accent-dark` | `#023899` | Dark accent for active states |
| `accent-ghost` | `#e6f0ff` | Ghost backgrounds on dark surfaces |
| `border` | `slate-800` | Structural borders, section dividers |
| `text-muted` | `slate-400` | Secondary text, descriptions |
| `text-dim` | `slate-500` | Dimmed text, technical labels |
| `surface-hover` | `slate-900` | Hover background for cards/rows |

**Strategy:** Restrained — dark neutral base with one saturated accent carrying 30-60% of interactive surfaces. Light or dark is forced by the use scene: technical portfolio evaluated by developers and recruiters, typically in dark-mode environments.

---

## Typography

| Role | Font | Weights | Use |
|------|------|---------|-----|
| Heading | Poppins | 600, 700 | Section titles, hero text, card titles |
| Body | Lato | 400, 700 | Paragraphs, descriptions, UI text |
| Mono | System mono stack | 400 | Technical labels, badges, code references |

**Scale:**
- Hero heading: `text-5xl lg:text-7xl` (3rem / 4.5rem)
- Section heading: `text-3xl sm:text-4xl` (1.875rem / 2.25rem)
- Card heading: `text-xl` (1.25rem)
- Body large: `text-lg` (1.125rem)
- Body default: `text-base` (1rem)
- Body small: `text-sm` (0.875rem)
- Label/caption: `text-xs` (0.75rem)
- Technical badge: `text-[10px]` with `font-mono uppercase tracking-widest`

**Tracking:**
- Headings: `tracking-tight` (-0.025em)
- Labels: `tracking-wider` (0.05em) or `tracking-widest` (0.1em)
- Body: default (0)

---

## Layout

**Container:** `max-w-[1200px] mx-auto border-x-2 border-slate-800`

**Grid system:**
- Primary: `grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]` (asymmetric split)
- Projects: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Mobile-first with `minmax()` for flexible columns

**Borders:** `border-2 border-slate-800` — structural, never decorative. Borders separate sections and create visual hierarchy. Always 2px, always slate-800.

**Spacing rhythm:**
- Section padding: `px-8 py-12 sm:px-16 sm:py-16 lg:pl-24`
- Card padding: `p-7`
- Between sections: borders, not gaps
- Inside sections: `gap-6` to `gap-8`

---

## Components

### Hero
- Asymmetric two-column grid: content left, image right
- Image container: `bg-slate-900/50` with border, `aspect-[3/4]`
- Profile image: grayscale by default, color on hover, `filter grayscale hover:grayscale-0 transition-all duration-700`
- Image frame: slight rotation (`rotate-3`) with `hover:rotate-0 transition-transform duration-500`

### Buttons
- **Primary:** `bg-white text-primary-dark px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-slate-200`
- **Secondary:** `border-2 border-slate-800 text-slate-300 px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-slate-900`
- **CTA:** `bg-accent text-white px-10 py-5 font-bold uppercase tracking-wider text-base hover:bg-accent-hover`

### Cards
- Background: `bg-primary-dark` on `bg-slate-800` grid (gap creates border effect)
- Hover: `hover:bg-slate-900`
- Image: `aspect-video`, grayscale with color on hover
- Year badge: `bg-accent text-white text-xs font-bold px-2 py-1 uppercase tracking-wider`
- Tech tags: `text-[10px] font-mono uppercase tracking-widest text-slate-500 border border-slate-700 px-2 py-1 bg-slate-900`

### List Items (Tech Stack)
- Numbered badges: `bg-white text-primary-dark px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider`
- Hover: `hover:bg-slate-900` with chevron icon `group-hover:text-accent`
- Border: `border-b-2 border-slate-800 last:border-b-0`

### Section Headers
- Centered, `text-balance`, `max-w-xl mx-auto`
- Emphasis: `<strong class="text-accent">` on key word
- Bottom padding: `py-20`

---

## Interactions

**Hover states:**
- Cards: background shift to `slate-900`, image scales `group-hover:scale-105`, color reveal on grayscale images
- Buttons: background darken or accent fill
- List items: background shift, icon color change to accent

**Transitions:**
- Duration: `duration-500` to `duration-700` for image effects
- Duration: `transition-colors` for instant feedback
- Easing: default (ease) for most, `ease-out` for motion

**Focus:** Maintain browser defaults with visible focus rings for accessibility.

---

## Imagery

- Profile photo: `aspect-[3/4]`, grayscale filter, color on hover
- Project thumbnails: `aspect-video`, grayscale filter, color on hover, scale on hover
- All images: `object-cover` for consistent framing
- Border treatment: `border-2 border-slate-800` around image containers

---

## Responsive

- Mobile: single column, full-width images, stacked layout
- Tablet (sm): two-column grids, side-by-side content
- Desktop (md/lg): asymmetric splits, three-column project grids
- Breakpoints: `sm:640px`, `md:768px`, `lg:1024px`

---

## Anti-patterns (Avoid)

- Gradient text (emphasis via weight/size instead)
- Glass/blur as decoration
- Colored left/right borders on cards
- Emoji as icons (use Iconify/MDI)
- Section numbers (01/02/03) unless sequence carries information
- Kickers/eyebrows above headings
- Hero-metric template
- Same-size cards as page structure

---

## Finishing

- Contrast: body text ≥4.5:1 on dark backgrounds
- Depth: shadows carry offset and blur (not zero-offset halos)
- Spacing: more space above headings than below
- Type: body measure 65-75ch, display max 6rem
- Motion: one authored moment per section, not scattered effects
- States: hover, focus, disabled, loading, error, empty
- Copy: product's own language, controls name their action
- Coverage: every brief requirement present and findable within seconds
