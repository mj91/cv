import { useData } from 'contexts/data'
import styles from './SoftSkills.module.scss'

export const SoftSkills = () => {
  const {
    skills: {
      soft: { title, entries },
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
