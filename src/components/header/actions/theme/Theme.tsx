import { useCallback } from 'react'

export const Theme = () => {
  const toggleTheme = useCallback(() => {
    const isDark =
      document.documentElement.dataset.theme === 'dark' ||
      (!document.documentElement.dataset.theme &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark'
  }, [])

  return <div onClick={toggleTheme}>🌓</div>
}
