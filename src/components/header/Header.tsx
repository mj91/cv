import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.photo} src="photo.png" alt="Marcin Jędrzejewski" />
      <h1>Marcin Jędrzejewski</h1>
      <div>
        ⭐{' '}
        {new Date('01/30/1991').toLocaleDateString(navigator.language, {
          dateStyle: 'long',
        })}
      </div>
      <div>
        📧{' '}
        <a href="mailto:jedrzejewski.marcin@gmail.com">
          jedrzejewski.marcin@gmail.com
        </a>
      </div>
      <div>
        📞 <a href="phone:+48794792954">+48 794 792 954</a>
      </div>
    </div>
  )
}
