import { useCookiesConsent } from 'contexts/cookies-consent/cookies-consent'
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from 'react'
import ReactGA from 'react-ga4'

const defaultTrack = (...args: Parameters<typeof ReactGA.event>) => {
  return
}

const AnalyticsContext = createContext({ track: defaultTrack })

export const useAnalytics = () => useContext(AnalyticsContext)

export const AnalyticsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { analytics } = useCookiesConsent()

  useEffect(() => {
    if (analytics) ReactGA.initialize('G-5K91DXG3PC')
  }, [analytics])

  const track = analytics ? ReactGA.event : defaultTrack

  return (
    <AnalyticsContext.Provider value={{ track }}>
      {children}
    </AnalyticsContext.Provider>
  )
}
