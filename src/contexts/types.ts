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
      entries: {
        name: string
        level: 'expert' | 'advanced' | 'intermediate' | 'beginner'
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

  consent: string
}

export type TimelineEntryDescription =
  | string
  | {
      type: Parameters<typeof createElement>[0]
      props?: Parameters<typeof createElement>[1]
      children?: TimelineEntryDescription
    }
  | TimelineEntryDescription[]

export type TimelineEntry = {
  start?: string | number
  end?: string | number
  description?: TimelineEntryDescription
}

export type ExperienceEntry = TimelineEntry & {
  company: string
  job?: string
}

export type EducationEntry = TimelineEntry & {
  school: string
  faculty?: string
}
