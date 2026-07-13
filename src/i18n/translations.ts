import fr from './fr.json';
import en from './en.json';

const translations = { fr, en } as const;

export type Locale = 'fr' | 'en';
export type TranslationKey = keyof typeof fr;

export function useTranslations(locale: Locale) {
  const dict = translations[locale] ?? translations.fr;
  return function t(key: TranslationKey): string {
    return dict[key] ?? key;
  };
}
