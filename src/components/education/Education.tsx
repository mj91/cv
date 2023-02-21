import { useData } from '../../contexts/data'
import { Timeline, TimelineItem } from '../common/timeline/Timeline'
import { TimelineEntryDescription } from '../common/timeline/TimelineEntryDescription'
import styles from './Education.module.scss'

export const Education = () => {
  const { education } = useData()
  return (
    <div className={styles.education}>
      <h3>{education.title}</h3>
      <Timeline>
        {education.entries.map((entry, index) => (
          <TimelineItem key={index} start={entry.start} end={entry.end}>
            <div className={styles.entry}>
              <strong>{entry.school}</strong>
              <br />
              <i>{entry.faculty}</i>
              <TimelineEntryDescription description={entry.description} />
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
