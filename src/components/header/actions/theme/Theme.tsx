import { useCookiesConsent } from 'contexts/cookies-consent/cookies-consent'
import { useCallback, useEffect } from 'react'

export const Theme = () => {
  const { functional } = useCookiesConsent()

  useEffect(() => {
    if (functional) {
      const theme = localStorage.getItem('theme')
      if (theme) document.documentElement.dataset.theme = theme
    }
  }, [functional])

  const toggleTheme = useCallback(() => {
    const isDark =
      document.documentElement.dataset.theme === 'dark' ||
      (!document.documentElement.dataset.theme &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark'

    if (functional) localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }, [])

  return <div onClick={toggleTheme}>🌓</div>
}
