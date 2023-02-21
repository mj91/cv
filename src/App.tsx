import styles from './App.module.scss'
import { DataProvider } from './contexts/data'
import { Header } from './components/header/Header'
import { Experience } from './components/experience/Experience'

export const App = () => {
  return (
    <div className={styles.content}>
      <DataProvider>
        <Header />
        <Experience />
      </DataProvider>
    </div>
  )
}
