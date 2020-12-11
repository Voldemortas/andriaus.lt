import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andriaus.lt - Andriaus Simanaičio svetainė</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>Welcome</h1>
      </header>
      <main className={styles.main}>Main text</main>

      <footer className={styles.footer}>
        Andrius Simanaitis © 2020
        {new Date().getFullYear() !== 2020
          ? ` - ${new Date().getFullYear()}`
          : ''}
      </footer>
    </div>
  )
}
