import { useCookiesConsent } from 'contexts/cookies-consent/cookies-consent'
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from 'react'
import ReactGA from 'react-ga4'

const AnalyticsContext = createContext({})

export const useAnalytics = () => useContext(AnalyticsContext)

export const AnalyticsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { analytics } = useCookiesConsent()

  useEffect(() => {
    if (analytics) ReactGA.initialize('G-5K91DXG3PC')
  }, [analytics])

  return (
    <AnalyticsContext.Provider value={{}}>{children}</AnalyticsContext.Provider>
  )
}
