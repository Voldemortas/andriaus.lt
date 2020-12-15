import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideSlide from '../components/SideSlide'
import SliderArticle from '../components/SliderArticle'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="block">
        <Head>
          <title>Andriaus.lt - Andriaus Simanaičio svetainė</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>

        <header>
          <h1 className={styles.title}>
            Welcome to <a href="https://andriaus.lt">Andriaus.lt</a>
          </h1>
        </header>
        <main className={styles.main}>
          <SideSlide leftSlide={true}>
            <SliderArticle
              title="ActiveGen"
              url="https://activegen.projektai.nfqakademija.lt"
              image="/activegen.gif"
              repo="https://github.com/nfqakademija/activegen"
            >
              <b>ActiveGen</b> is a project dedicated for young families with
              little children looking for various activies for their children.
              The project was created with a team of students as the graduating
              project of the{' '}
              <a href="https://www.nfq.lt/nfq-academy">NFQ academy</a>. Our team
              consisted of 4 people as well as the mentor - employee of NFQ. The
              three other team members were responsible for the back end part
              while my main response was the front end side. The front end was
              implemented using React.
            </SliderArticle>
          </SideSlide>
          <SideSlide leftSlide={false}>
            <SliderArticle
              title="Warehouse"
              url="https://warehouse.andriaus.lt"
              image="/warehouse.gif"
              repo="https://github.com/Voldemortas/warehouse"
            >
              <b>Warehouse</b> is a small project that tries to simulate
              warehouse/eshop administration side. The project has no back end
              and uses localstorage to store all the data. Although, there is no
              real database/back end, the proeject still makes pseudo API calls
              to simulated database and not-instant response times.
            </SliderArticle>
          </SideSlide>
          <SideSlide leftSlide={true}>
            <SliderArticle
              title="mortas bot"
              url="https://discord.gg/KTR72Znp"
              image="/mortasbot.png"
              repo="https://github.com/Voldemortas/botas"
            >
              <b>mortas bot</b> is not a website but it is a discord bot.
              Despite discord being marketed as a platform for gamers, there are
              also other various communities such as language learners. This bot
              is intended to be used by such community and its main
              functionality revolves about two main features:
              <ul>
                <li>
                  Verb conjugating (
                  <a href="https://en.wikipedia.org/wiki/Grammatical_conjugation">
                    Wikipedia link)
                  </a>
                </li>
                <li>
                  Phonemic transcription to{' '}
                  <a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet">
                    IPA
                  </a>
                </li>
              </ul>
              You can either join the mine discord server (the link below) and
              test it out or use the{' '}
              <a href="https://discordapp.com/oauth2/authorize?client_id=673301008075456542&scope=bot&permissions=67584">
                invitation link
              </a>{' '}
              to invite it to your own server.
              <br />
              <br />
              <br />
            </SliderArticle>
          </SideSlide>
        </main>
        <footer className={styles.footer}>
          Andrius Simanaitis © 2020
          {new Date().getFullYear() !== 2020
            ? ` - ${new Date().getFullYear()}`
            : ''}
        </footer>
      </div>
    </div>
  )
}
