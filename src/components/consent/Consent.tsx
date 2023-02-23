import { useData } from '../../contexts/data'

export const Consent = () => {
  const { consent } = useData()
  return <i>{consent}</i>
}
