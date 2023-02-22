import styles from './App.module.scss'
import { DataProvider } from './contexts/data'
import { Header } from './components/header/Header'
import { Experience } from './components/experience/Experience'
import { Education } from './components/education/Education'
import { Skills } from './components/skills/Skills'
import { Consent } from './components/consent/Consent'

export const App = () => {
  return (
    <div className={styles.content}>
      <DataProvider>
        <Header />
        <Experience />
        <Education />
        <Skills />
        <Consent />
      </DataProvider>
    </div>
  )
}
