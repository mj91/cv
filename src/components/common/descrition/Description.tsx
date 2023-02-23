import { createElement } from 'react'
import { Description as DescriptionType } from '../../../contexts/data'

const createDescriptionElement = (
  description?: DescriptionType,
  index?: number
): JSX.Element | null => {
  if (!description) return null

  if (typeof description === 'string') return <>{description}</>

  if (Array.isArray(description))
    return <>{description.map(createDescriptionElement)}</>

  if (description.type)
    return createElement(
      description.type,
      { key: index, ...description.props },
      Array.isArray(description.children)
        ? description.children.map(createDescriptionElement)
        : createDescriptionElement(description.children)
    )

  return null
}

export const Description = ({
  description,
}: {
  description?: DescriptionType
}) => {
  return <div>{createDescriptionElement(description)}</div>
}
