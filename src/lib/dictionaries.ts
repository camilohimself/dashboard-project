import type { Locale } from './i18n'

const dictionaries = {
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  de: () => import('../dictionaries/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()