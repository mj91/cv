import { Header } from './components/header/Header'
import styles from './App.module.scss'

export const App = () => {
  return (
    <div className={styles.content}>
      <Header />
    </div>
  )
}
