import { createElement } from 'react'
import { TimelineEntryDescription as Description } from '../../../contexts/data'

const createTimelineDescriptionElement = (
  description?: Description,
  index?: number
): JSX.Element | null => {
  if (!description) return null

  if (typeof description === 'string') return <>{description}</>

  if (Array.isArray(description))
    return <>{description.map(createTimelineDescriptionElement)}</>

  if (description.type)
    return createElement(
      description.type,
      { key: index, ...description.props },
      Array.isArray(description.children)
        ? description.children.map(createTimelineDescriptionElement)
        : createTimelineDescriptionElement(description.children)
    )

  return null
}

export const TimelineEntryDescription = ({
  description,
}: {
  description?: Description
}) => {
  return <div>{createTimelineDescriptionElement(description)}</div>
}
