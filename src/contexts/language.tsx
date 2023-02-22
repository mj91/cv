import { createContext, useContext, FC, PropsWithChildren } from 'react'

const LanguageContext = createContext<'pl' | 'en'>('pl')

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const language =
    new URLSearchParams(document.location.search).get('lang') === 'en'
      ? 'en'
      : 'pl'
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  )
}
