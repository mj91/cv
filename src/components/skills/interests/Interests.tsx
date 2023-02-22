import { useData } from 'contexts/data'
import styles from './Interests.module.scss'

export const Interests = () => {
  const {
    skills: {
      interests: { title, entries },
    },
  } = useData()
  return (
    <>
      <h2>{title}</h2>
      <div className={styles.entries}>
        {entries.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
    </>
  )
}
