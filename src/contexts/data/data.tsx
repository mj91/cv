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

const DataContext = createContext<Data | undefined>(undefined)

export const useData = () => {
  const data = useContext(DataContext)

  if (!data)
    throw new Error('useData can be only used in scope of DataProvider')

  return data
}

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const { language } = useLanguage()
  const [data, setData] = useState<Data>()

  useEffect(() => {
    import(`../../data/${language}.json`).then((data) => {
      setData(data as Data)
    })
  }, [language])

  return !data ? null : (
    <DataContext.Provider value={data as Data}>{children}</DataContext.Provider>
  )
}
