import { Header } from './components/header/Header'
import styles from './App.module.scss'
import { DataProvider } from './contexts/data'

export const App = () => {
  return (
    <div className={styles.content}>
      <DataProvider>
        <Header />
      </DataProvider>
    </div>
  )
}
