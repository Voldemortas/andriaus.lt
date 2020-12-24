import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideSlide from '../components/SideSlide'
import SliderArticle from '../components/SliderArticle'
import Contact from '../components/Contact'
import Milestone from '../components/Milestone'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="block">
        <Head>
          <title>Andriaus.lt - website of Andrius Simanaitis</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="author" content="Andrius Simanaitis" />
          <meta name="description" content="website of Andrius Simanaitis" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          />
        </Head>

        <Contact />
        <main className={styles.main}>
          <section>
            <h1>Career Milestones</h1>
            <SideSlide leftSlide={false}>
              <Milestone title="Marijampolės Miesto Menu">
                <p>
                  <b>Marijampolės Miesto Menu</b> was a project dedicated to my
                  hometown Marijampolė. The projected lasted for over two years
                  and was developed by three classmates -{' '}
                  <a href="https://www.linkedin.com/in/matas-kaminskas-b8477aa6/">
                    Matas Kaminskas
                  </a>
                  ,
                  <a href="https://www.linkedin.com/in/tadas-%C5%BEaliauskas/">
                    Tadas Žaliauskas
                  </a>{' '}
                  and me.
                </p>
                <p>
                  I was responsible for gathering the data from various sources
                  like Facebook Graph API or scrapping the website of the local
                  cinema as well as making and mainining the UI for the data so
                  we could manually fix the possible errors. <br />
                  The project has been discontinued, however, you can still
                  download it from{' '}
                  <a href="https://play.google.com/store/apps/details?id=com.miesto.meniu.app&hl=lt&gl=US">
                    Google Play
                  </a>
                  .
                </p>
              </Milestone>
            </SideSlide>
            <SideSlide leftSlide={false}>
              <Milestone title="KAYAK UI ACADEMY">
                <p>
                  <b>KAYAK UI ACADEMY</b> was an academy that lasted for 4
                  months. To get into this academy we had to recreate a react
                  component from the{' '}
                  <a href="https://github.com/Voldemortas/kayak-ui-academy-exercise">
                    given mock
                  </a>
                  . In this academy I learned not only how to write React
                  components but also one of the most commonly used libraries
                  together with React - Redux.
                </p>
              </Milestone>
            </SideSlide>
            <SideSlide leftSlide={false}>
              <Milestone title="NFQ academy, autumn 2019">
                <p>
                  <b>NFQ academy</b> was an academy that lasted for 3 months.
                  This academy was more intense than the previous one. And even
                  though main focus was on the Symfony framework we had
                  exercises on various topics like git. One of the homeworks was
                  to{' '}
                  <a href="https://github.com/Voldemortas/NFQ-GIT/network">
                    recreate given image with branching and merging
                  </a>
                </p>
                <p>
                  The academy included the group project with 2-3 back enders, 1
                  front ender and a mentor - an employee of NFQ.
                </p>
              </Milestone>
            </SideSlide>
          </section>
          <hr style={{ width: '100%' }} />
          <section>
            <h1>My projects</h1>
            <SideSlide leftSlide={true}>
              <SliderArticle
                title="ActiveGen"
                url="https://activegen.projektai.nfqakademija.lt"
                image="/activegen.gif"
                repo="https://github.com/nfqakademija/activegen"
              >
                <p>
                  <b>ActiveGen</b> is a project dedicated for young families
                  with little children looking for various activies for their
                  children. The project was created with a team of students as
                  the graduating project of the{' '}
                  <a href="https://www.nfq.lt/nfq-academy">NFQ academy</a>. Our
                  team consisted of 4 people as well as the mentor. The three
                  other team members were responsible for the back end part
                  while my main response was the front end side. The front end
                  was implemented using React.
                </p>
              </SliderArticle>
            </SideSlide>
            <SideSlide leftSlide={true}>
              <SliderArticle
                title="Warehouse"
                url="https://warehouse.andriaus.lt"
                image="/warehouse.gif"
                repo="https://github.com/Voldemortas/warehouse"
              >
                <p>
                  <b>Warehouse</b> is a small project that tries to simulate
                  warehouse/eshop administration side. The project has no back
                  end and uses localstorage to store all the data. Although,
                  there is no real database/back end, the proeject still makes
                  pseudo API calls to simulated database and not-instant
                  response times. The project uses React together with
                  Typescript.
                </p>
              </SliderArticle>
            </SideSlide>
            <SideSlide leftSlide={true}>
              <SliderArticle
                title="Xplcity"
                url="https://xplcity.andriaus.lt"
                image="/xplcity.png"
                repo="https://github.com/Voldemortas/xplcity"
              >
                <p>
                  <b>Xplcity</b> was a small project very similar to the
                  Warehouse one. The project was coded with VUE. Users can
                  manage (CRUD) the list of various items and get a bill -
                  printable version of the items without the "add/delete" type
                  buttons.
                </p>
              </SliderArticle>
            </SideSlide>
            <SideSlide leftSlide={true}>
              <SliderArticle
                title="Advent of Code"
                image="/AoC.png"
                repo="https://github.com/Voldemortas/advent2020"
              >
                <p>
                  <b>Advent of Code</b> an annual fun coding challanges event
                  that lasts from December 1st to the Christmass. The challanges
                  are easy in the very beginning, however, they get more
                  challanging as days go on. You can check out the challanges on{' '}
                  <a href="https://adventofcode.com/2020">
                    Advent of Code website
                  </a>
                  .
                </p>
              </SliderArticle>
            </SideSlide>
            <SideSlide leftSlide={true}>
              <SliderArticle
                title="mortas bot"
                url="https://discord.gg/KTR72Znp"
                image="/mortasbot.png"
                repo="https://github.com/Voldemortas/botas"
              >
                <p>
                  <b>mortas bot</b> is not a website but it is a discord bot.
                  Despite discord being marketed as a platform for gamers, there
                  are also other various communities such as language learners.
                  This bot is intended to be used by such community and its main
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
                </p>
                <p>
                  You can either join my discord server (the link below) and
                  test it out or use the{' '}
                  <a href="https://discordapp.com/oauth2/authorize?client_id=673301008075456542&scope=bot&permissions=67584">
                    invitation link
                  </a>{' '}
                  to invite it to your own server. The project was made with the
                  help of <a href="https://discord.js.org/">discord.js</a>.
                </p>
              </SliderArticle>
            </SideSlide>
          </section>
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
