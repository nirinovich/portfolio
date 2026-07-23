# Use Astro 7 official i18n routing

The site is bilingual (FR default, EN under `/en/`). We are replacing the current manual folder-routes + `useTranslations` + `Astro.currentLocale` approach with Astro 7's official `i18n` config (`defaultLocale: 'fr'`, `locales: ['fr','en']`, `prefixDefaultLocale: false`). URLs stay identical (`/` for FR, `/en/` for EN), so there is no SEO or inbound-link breakage, but the architecture becomes official and less error-prone across all 14 pages.
