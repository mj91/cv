import { FC, PropsWithChildren, ReactNode } from 'react'
import styles from './Timeline.module.scss'

export const Timeline: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.timeline}>{children}</div>
)

export const TimelineItem: FC<
  PropsWithChildren<{
    start?: ReactNode
    end?: ReactNode
  }>
> = ({ children, start, end }) => {
  return (
    <>
      <span className={styles.date}>
        {start && (
          <div>
            {start}
            {end && start != end ? (
              <span className={styles.separator}>-</span>
            ) : null}
          </div>
        )}
        {end && start != end && (
          <div>
            <span className={styles.separator}>-</span>
            {end}
          </div>
        )}
      </span>
      <div className={styles.description}>{children}</div>
    </>
  )
}
