import { useData } from '../../contexts/data'

export const Consent = () => {
  const { consent } = useData()
  return <div>{consent}</div>
}
