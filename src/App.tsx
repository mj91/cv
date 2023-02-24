import styles from './App.module.scss'
import { DataProvider } from './contexts/data'
import { Header } from './components/header/Header'
import { Experience } from './components/experience/Experience'
import { Education } from './components/education/Education'
import { Skills } from './components/skills/Skills'
import { Consent } from './components/consent/Consent'
import { LanguageProvider } from 'contexts/language'
import { CookiesBar } from 'components/cookies-bar/CookiesBar'
import { CookiesConsentProvider } from 'contexts/cookies-consent/cookies-consent'

export const App = () => {
  return (
    <CookiesConsentProvider>
      <LanguageProvider>
        <DataProvider>
          <div className={styles.content}>
            <Header />
            <Experience />
            <Education />
            <Skills />
            <Consent />
          </div>
          <CookiesBar />
        </DataProvider>
      </LanguageProvider>
    </CookiesConsentProvider>
  )
}
