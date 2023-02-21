import { useData } from '../../contexts/data'
import styles from './Header.module.scss'

export const Header = () => {
  const data = useData()

  return (
    <div className={styles.header}>
      <img className={styles.photo} src="photo.png" alt={data.name} />
      <h1>{data.name}</h1>
      <div>
        ⭐{' '}
        {new Date('01/30/1991').toLocaleDateString(navigator.language, {
          dateStyle: 'long',
        })}
      </div>
      <div>
        📧 <a href={`mailto:${data.email}`}>{data.email}</a>
      </div>
      <div>
        📞 <a href={`tel:${data.phone.replaceAll(' ', '')}`}>{data.phone}</a>
      </div>
    </div>
  )
}
