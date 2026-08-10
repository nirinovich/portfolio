import { getCollection } from 'astro:content';
import type { Locale } from './i18n/translations';

/** Fetch projects for a given locale. */
export async function getProjects(locale: Locale) {
  return getCollection(locale === 'fr' ? 'projectsFr' : 'projectsEn');
}

/** Fetch blog posts for a given locale. */
export async function getPosts(locale: Locale) {
  return getCollection(locale === 'fr' ? 'blogFr' : 'blogEn');
}
