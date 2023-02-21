import { createContext, FC, PropsWithChildren, useContext } from 'react'
import pl from '../data/pl.json'
import { Data } from './types'

const DataContext = createContext<Data>(pl as Data)

export const useData = () => useContext(DataContext)

export const DataProvider: FC<PropsWithChildren<{ language?: 'pl' }>> = ({
  children,
  language = 'pl',
}) => {
  return (
    <DataContext.Provider value={pl as Data}>{children}</DataContext.Provider>
  )
}
