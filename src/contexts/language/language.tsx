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

const LanguageContext = createContext<{
  language: Language
  setLanguage: SetLanguage
}>({ language: 'pl', setLanguage: setLanguageInURL })

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState(getLanguageFromURL())

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
    setLanguageInURL(language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
