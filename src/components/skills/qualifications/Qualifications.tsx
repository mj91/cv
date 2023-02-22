import { useData } from 'contexts/data'
import styles from './Qualifications.module.scss'
import sortBy from 'lodash/sortBy'

export const Qualifications = () => {
  const {
    skills: { title, tech, experience, languages, other },
  } = useData()
  return (
    <>
      <h2>{title}</h2>
      <h3>{tech.title}</h3>
      <div className={styles.tech}>
        {tech.entries.map(({ name, level }) => (
          <>
            {name}
            <span className={styles[level]}></span>
          </>
        ))}
      </div>
      <h3>{experience.title}</h3>
      <div className={styles.experience}>
        {sortBy(experience.entries, 'name').map(({ name, details }) => (
          <span
            key={name}
            className={details ? styles.detailed : undefined}
            title={details}
          >
            {name}
          </span>
        ))}
      </div>
      <h3>{languages.title}</h3>
      <div className={styles.languages}>
        {languages.entries.map(({ name, level }, index) => (
          <>
            {name}
            <i>{level}</i>
          </>
        ))}
      </div>
      <h3>{other.title}</h3>
      <div className={styles.other}>
        {other.entries.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
    </>
  )
}
