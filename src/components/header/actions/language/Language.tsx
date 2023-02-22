import { useLanguage } from 'contexts/language'
import { useCallback } from 'react'
import styles from './Language.module.scss'

const LANGUAGES = ['PL', 'EN']

export const Language = () => {
  const language = useLanguage()

  const languages = language === 'en' ? [...LANGUAGES].reverse() : LANGUAGES

  const handleClick = useCallback(() => {
    window.location.href = `?lang=${language == 'en' ? 'pl' : 'en'}`
  }, [language])

  console.log(language, languages)
  return (
    <div className={styles.language} onClick={handleClick}>
      🌐
      {languages.map((lang) => (
        <span key={lang}>{lang}</span>
      ))}
    </div>
  )
}
