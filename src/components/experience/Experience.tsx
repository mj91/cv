import { useData } from '../../contexts/data'
import { Timeline, TimelineItem } from '../common/timeline/Timeline'
import { Description } from '../common/descrition/Description'
import styles from './Experience.module.scss'

export const Experience = () => {
  const { experience } = useData()

  return (
    <div className={styles.experience}>
      <h2>{experience.title}</h2>
      <Timeline>
        {experience.entries.map((entry, index) => (
          <TimelineItem key={index} start={entry.start} end={entry.end}>
            <div className={styles.entry}>
              <strong>
                {entry.url ? (
                  <a href={entry.url} target="blank">
                    {entry.company}
                  </a>
                ) : (
                  entry.company
                )}
              </strong>{' '}
              <i>{entry.job}</i>
              <div>
                <Description description={entry.description} />
              </div>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
