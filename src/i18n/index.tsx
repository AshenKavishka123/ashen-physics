import type { ReactNode } from 'react'
import i18n from 'i18next'
import { initReactI18next, useTranslation as useI18nextTranslation } from 'react-i18next'
import en from './en.json'
import si from './si.json'

export type Lang = 'en' | 'si'

const resources = {
  en: { translation: en },
  si: { translation: si },
} as const

const storedLanguage = (() => {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem('ashen-physics-lang')
  return saved === 'si' ? 'si' : 'en'
})()

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: storedLanguage,
    fallbackLng: 'en',
    returnEmptyString: false,
    interpolation: {
      escapeValue: false,
    },
  })
}

export function setLanguage(lang: Lang) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('ashen-physics-lang', lang)
  }
  void i18n.changeLanguage(lang)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export function useTranslation() {
  const { t, i18n: i18nInstance } = useI18nextTranslation()
  const lang = (i18nInstance.language === 'si' ? 'si' : 'en') as Lang

  return {
    t,
    lang,
    setLang: (nextLang: Lang) => setLanguage(nextLang),
    i18n: i18nInstance,
  }
}
