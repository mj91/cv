import { useCookiesConsent } from 'contexts/cookies-consent/cookies-consent'
import { useData } from 'contexts/data'
import { ChangeEventHandler, useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './CookiesBar.module.scss'

const createHandleToggleFunction =
  (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ): ChangeEventHandler<HTMLInputElement> =>
  (event) =>
    setState(event.currentTarget.checked)

export const CookiesBar = () => {
  const [functional, setFunctional] = useState(true)
  const [analytics, setAnalytics] = useState(true)
  const [isAlreadySet, setAlreadySet] = useState(false)
  const { cookies } = useData()
  const { allow, deny } = useCookiesConsent()

  const handleToggleFunctional = useCallback(
    createHandleToggleFunction(setFunctional),
    []
  )
  const handleToggleAnalytics = useCallback(
    createHandleToggleFunction(setAnalytics),
    []
  )

  const handleDeny = useCallback(() => {
    setAlreadySet(true)
    deny()
  }, [])

  const handleAllow = useCallback(() => {
    setAlreadySet(true)
    allow({ functional, analytics })
  }, [])

  const showCookiesConsent = useCallback(() => setAlreadySet(false), [])

  return ReactDOM.createPortal(
    isAlreadySet ? (
      <div className={styles.icon} onClick={showCookiesConsent} />
    ) : (
      <div className={styles.bar}>
        <div>{cookies.description}</div>
        <div>
          <div>
            <label>
              <input type="checkbox" checked disabled />
              {cookies.necessary}
            </label>
            <label>
              <input
                type="checkbox"
                checked={functional}
                onChange={handleToggleFunctional}
              />
              {cookies.functional}
            </label>
            <label>
              <input
                type="checkbox"
                checked={analytics}
                onChange={handleToggleAnalytics}
              />
              {cookies.analytics}
            </label>
          </div>
          <div>
            <button onClick={handleDeny}>{cookies.deny}</button>
            <button onClick={handleAllow}>{cookies.allow}</button>
          </div>
        </div>
      </div>
    ),
    document.getElementsByTagName('html')[0]
  )
}
