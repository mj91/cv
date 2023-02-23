import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useLanguage } from '../language'
import { Data } from './types'

const noData: Data = {
  name: '',
  birthdate: '',
  email: '',
  phone: '',
  experience: {
    title: '',
    entries: [],
  },
  education: {
    title: '',
    entries: [],
  },
  skills: {
    title: '',
    tech: {
      title: '',
      description: '',
      entries: [],
    },
    experience: {
      title: '',
      entries: [],
    },
    languages: {
      title: '',
      entries: [],
    },
    other: {
      title: '',
      entries: [],
    },
    soft: {
      title: '',
      entries: [],
    },
    interests: {
      title: '',
      entries: [],
    },
  },
  consent: '',
}

const DataContext = createContext<Data>(noData)

export const useData = () => useContext(DataContext)

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const { language } = useLanguage()
  const [data, setData] = useState<Data>(noData)

  useEffect(() => {
    import(`../../data/${language}.json`).then((data) => {
      setData(data as Data)
    })
  }, [language])

  return (
    <DataContext.Provider value={data as Data}>{children}</DataContext.Provider>
  )
}
