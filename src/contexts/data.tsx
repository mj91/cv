import { createContext, FC, PropsWithChildren, useContext } from 'react'
import pl from '../data/pl.json'

const DataContext = createContext(pl)

export const useData = () => useContext(DataContext)

export const DataProvider: FC<PropsWithChildren<{ language?: 'pl' }>> = ({
  children,
  language = 'pl',
}) => {
  return <DataContext.Provider value={pl}>{children}</DataContext.Provider>
}
