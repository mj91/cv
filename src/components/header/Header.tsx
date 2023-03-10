import { useAnalytics } from 'contexts/analytics/analytics'
import { useLanguage } from 'contexts/language'
import { useCallback } from 'react'
import { useData } from '../../contexts/data'
import { Language } from './actions/language/Language'
import { Theme } from './actions/theme/Theme'
import styles from './Header.module.scss'
import { QrCode } from './qr-code/QrCode'

export const Header = () => {
  const data = useData()
  const { track } = useAnalytics()
  const { language } = useLanguage()

  const handlePrint = useCallback(() => {
    track('print')
    window.print()
  }, [track])

  return (
    <div className={styles.header}>
      <img className={styles.photo} src="./photo.png" alt={data.name} />
      <h1>{data.name}</h1>
      <div>
        ⭐{' '}
        {new Date(data.birthdate).toLocaleDateString(
          language || navigator.language,
          {
            dateStyle: 'long',
          }
        )}
      </div>
      <div>
        📧 <a href={`mailto:${data.email}`}>{data.email}</a>
      </div>
      <div>
        📞 <a href={`tel:${data.phone.replaceAll(' ', '')}`}>{data.phone}</a>
      </div>
      <div className={styles.qr}>
        <QrCode />
      </div>
      <div className={styles.actions}>
        <span className={styles.print} onClick={handlePrint}>
          🖨️
        </span>
        <Theme />
        <Language />
      </div>
    </div>
  )
}
