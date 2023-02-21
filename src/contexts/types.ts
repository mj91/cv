import { createElement } from 'react'

export type Data = {
  name: string
  birthdate: string
  email: string
  phone: string
  experience: {
    title: string
    entries: ExperienceEntry[]
  }
}

export type ExperienceDescription =
  | string
  | {
      type: Parameters<typeof createElement>[0]
      props?: Parameters<typeof createElement>[1]
      children?: ExperienceDescription | ExperienceDescription[]
    }

export type ExperienceEntry = {
  company: string
  job?: string
  start?: string | number
  end?: string | number
  description?: ExperienceDescription | ExperienceDescription[]
}
