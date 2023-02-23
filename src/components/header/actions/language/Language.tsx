import { useLanguage } from 'contexts/language'
import { useCallback } from 'react'
import styles from './Language.module.scss'

const LANGUAGES = ['PL', 'EN']

export const Language = () => {
  const { language, setLanguage } = useLanguage()

  const languages = language === 'en' ? [...LANGUAGES].reverse() : LANGUAGES

  const handleClick = useCallback(
    () => setLanguage(language === 'en' ? 'pl' : 'en'),
    [language, setLanguage]
  )

  return (
    <div className={styles.language} onClick={handleClick}>
      🌐
      {languages.map((lang) => (
        <span key={lang}>{lang}</span>
      ))}
    </div>
  )
}
