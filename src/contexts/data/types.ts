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
  education: {
    title: string
    entries: EducationEntry[]
  }
  skills: {
    title: string
    tech: {
      title: string
      description: Description
      entries: {
        name: string
        level: 1 | 2 | 3 | 4 | 5
      }[]
    }
    experience: {
      title: string
      entries: {
        name: string
        details?: string
      }[]
    }
    languages: {
      title: string
      entries: {
        name: string
        level: string
      }[]
    }
    other: {
      title: string
      entries: string[]
    }
    soft: {
      title: string
      entries: string[]
    }
    interests: {
      title: string
      entries: string[]
    }
  }
  info: string
  cookies: {
    description: string
    necessary: string
    functional: string
    analytics: string
    deny: string
    allow: string
  }
  consent: string
}

export type Description =
  | string
  | {
      type: Parameters<typeof createElement>[0]
      props?: Parameters<typeof createElement>[1]
      children?: Description
    }
  | Description[]

export type TimelineEntry = {
  start?: string | number
  end?: string | number
  description?: Description
}

export type ExperienceEntry = TimelineEntry & {
  company: string
  job?: string
  url?: string
  stack?: string[]
}

export type EducationEntry = TimelineEntry & {
  school: string
  faculty?: string
}
