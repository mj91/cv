import { FC, ComponentProps, ReactNode, createElement } from 'react'
import { useData } from '../../contexts/data'
import { ExperienceDescription } from '../../contexts/types'
import { Timeline, TimelineItem } from '../common/timeline/Timeline'
import styles from './Experience.module.scss'

export const ExperienceEntry: FC<
  {
    company: ReactNode
    job?: ReactNode
    description?: ReactNode
  } & ComponentProps<typeof TimelineItem>
> = ({ start, end, company, job, description }) => (
  <TimelineItem start={start} end={end}>
    <div className={styles.entry}>
      <strong>{company}</strong> <i>{job}</i>
      <div>{description}</div>
    </div>
  </TimelineItem>
)

const createExperienceEntryDescriptionElement = (
  description?: ExperienceDescription | ExperienceDescription[]
): JSX.Element | null => {
  if (!description) return null

  if (typeof description === 'string') return <>{description}</>

  if (!Array.isArray(description) && description.type)
    return createElement(
      description.type,
      description.props,
      Array.isArray(description.children)
        ? description.children.map(createExperienceEntryDescriptionElement)
        : createExperienceEntryDescriptionElement(description.children)
    )

  return null
}

const ExperienceEntryDescription = ({
  description,
}: {
  description?: ExperienceDescription | ExperienceDescription[]
}) => {
  if (Array.isArray(description))
    return (
      <>
        {description.map((nestedDescription, index) => (
          <ExperienceEntryDescription
            key={index}
            description={nestedDescription}
          />
        ))}
      </>
    )

  return createExperienceEntryDescriptionElement(description)
}

export const Experience = () => {
  const { experience } = useData()

  return (
    <div className={styles.experience}>
      <h3>{experience.title}</h3>
      <Timeline>
        {experience.entries.map((entry, index) => (
          <TimelineItem key={index} start={entry.start} end={entry.end}>
            <div className={styles.entry}>
              <strong>{entry.company}</strong> <i>{entry.job}</i>
              <div>
                <ExperienceEntryDescription description={entry.description} />
              </div>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
