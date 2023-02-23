import { useData } from '../../contexts/data'
import styles from './Consent.module.scss'

export const Consent = () => {
  const { consent, info } = useData()
  return (
    <i className={styles.consent}>
      {consent}
      <br />
      <a href="https://github.com/mj91/cv" target="blank">
        {info}
      </a>
    </i>
  )
}
