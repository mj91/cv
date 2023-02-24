import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import ReactGA from 'react-ga4'

const defaultCookiesConsent = {
  functional: false,
  analytics: false,
}

const get = () => {
  const cookies = localStorage.getItem('cookies')

  if (!cookies) return { ...defaultCookiesConsent, isAlreadySet: false }

  try {
    return { ...JSON.parse(cookies), isAlreadySet: true }
  } catch {
    return { ...defaultCookiesConsent, isAlreadySet: false }
  }
}

const deny = () => {
  localStorage.clear()
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
  })
}

const allow = ({
  functional,
  analytics,
}: {
  functional?: boolean
  analytics?: boolean
}) => {
  localStorage.setItem(
    'cookies',
    JSON.stringify({ ...defaultCookiesConsent, functional, analytics })
  )
}

const CookiesConsentContext = createContext({
  ...defaultCookiesConsent,
  isAlreadySet: false,
  get,
  allow,
  deny,
})

export const useCookiesConsent = () => useContext(CookiesConsentContext)

export const CookiesConsentProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cookiesConsent, setCookiesConsent] = useState(get())

  useEffect(() => {
    if (cookiesConsent.analytics) ReactGA.initialize('G-5K91DXG3PC')
  }, [cookiesConsent.analytics])

  const allowCookies: typeof allow = (selection) => {
    allow(selection)
    setCookiesConsent(get())
  }

  const denyCookies: typeof deny = () => {
    deny()
    setCookiesConsent(get())
  }

  return (
    <CookiesConsentContext.Provider
      value={{ ...cookiesConsent, get, allow: allowCookies, deny: denyCookies }}
    >
      {children}
    </CookiesConsentContext.Provider>
  )
}
