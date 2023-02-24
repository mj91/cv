import { useCookiesConsent } from 'contexts/cookies-consent/cookies-consent'
import {
  createContext,
  useContext,
  FC,
  PropsWithChildren,
  useState,
  useEffect,
} from 'react'
import { GetLanguage, Language, SetLanguage } from './types'

const setLanguageInURL: SetLanguage = (language: Language) => {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', language)
  window.history.pushState({}, '', url)
}

const getLanguageFromURL: GetLanguage = (url?: URL | string | null) => {
  const searchParams =
    typeof url === 'object'
      ? url?.searchParams
      : new URLSearchParams(window.location.search)
  return searchParams?.get('lang') === 'en' ? 'en' : 'pl'
}

const getLanguageFromLocalStorage = (): Language | undefined => {
  const language = localStorage.getItem('language')
  if (language === 'pl' || language === 'en') return language
  return undefined
}
const setLanguageInLocalStorage = (language: Language): void =>
  localStorage.setItem('language', language)

const LanguageContext = createContext<{
  language: Language
  setLanguage: SetLanguage
}>({ language: 'pl', setLanguage: setLanguageInURL })

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const { functional } = useCookiesConsent()
  const [language, setLanguage] = useState(
    getLanguageFromLocalStorage() || getLanguageFromURL()
  )

  useEffect(() => {
    ;(function (history) {
      const pushState = history.pushState
      history.pushState = function (...args) {
        setLanguage(getLanguageFromURL(args[2]))
        return pushState.apply(history, args)
      }
    })(window.history)
  }, [])

  useEffect(() => {
    if (functional) setLanguageInLocalStorage(language)
    setLanguageInURL(language)
  }, [language, functional])

  useEffect(() => {
    if (functional) localStorage.setItem('language', language)
  }, [functional, language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
