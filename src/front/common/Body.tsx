import React, { type ReactNode } from 'react'
import styles from './body.module.scss'

type Props = {
  children: ReactNode
}

export default function Body({ children }: Props) {
  return (
    <>
      <div className={styles('container')}>
        <main className={styles('main')}>{children}</main>
      </div>
    </>
  )
}
