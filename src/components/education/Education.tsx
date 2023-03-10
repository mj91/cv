import { useData } from '../../contexts/data'
import { Timeline, TimelineItem } from '../common/timeline/Timeline'
import { Description } from '../common/descrition/Description'
import styles from './Education.module.scss'

export const Education = () => {
  const { education } = useData()
  return (
    <div className={styles.education}>
      <h2>{education.title}</h2>
      <Timeline>
        {education.entries.map((entry, index) => (
          <TimelineItem key={index} start={entry.start} end={entry.end}>
            <div className={styles.entry}>
              <strong>{entry.school}</strong>
              <br />
              <i>{entry.faculty}</i>
              <Description description={entry.description} />
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
