import type { Locale } from './i18n-config'
export type tType = {[key: string]: { [key: string]: string } }

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: {[key: string]: () => Promise<tType> } = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  al: () => import('./dictionaries/al.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return locale === 'al' ?  dictionaries['al']() :  dictionaries['en']()
}


