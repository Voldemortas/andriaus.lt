import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideSlide from '../components/SideSlide'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andriaus.lt - Andriaus Simanaičio svetainė</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>
          Welcome to <a href="https://andriaus.lt">Andriaus.lt</a>
        </h1>
      </header>
      <main className={styles.main}>
        <SideSlide leftSlide={true}>
          <div style={{ backgroundColor: '#ff0000' }}>MAIN</div>
        </SideSlide>
        <SideSlide leftSlide={false}>
          <div style={{ backgroundColor: '#ffff00' }}>MAIN</div>
        </SideSlide>
        <SideSlide leftSlide={true}>
          <div style={{ backgroundColor: '#ff00ff' }}>MAIN</div>
        </SideSlide>
        <SideSlide leftSlide={false}>
          <div style={{ backgroundColor: '#00ff00' }}>MAIN</div>
        </SideSlide>
      </main>

      <footer className={styles.footer}>
        Andrius Simanaitis © 2020
        {new Date().getFullYear() !== 2020
          ? ` - ${new Date().getFullYear()}`
          : ''}
      </footer>
    </div>
  )
}
