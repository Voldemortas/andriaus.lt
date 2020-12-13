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
              repo="
                https://github.com/nfqakademija/activegen"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non quam vel massa pellentesque vehicula ut non sem. Maecenas a
              condimentum odio, sed faucibus dolor. Donec non tortor massa.
              Suspendisse velit lacus, blandit et lacus congue, dapibus
              imperdiet sapien. Donec posuere ligula et velit pellentesque
              tempor. Aliquam sit amet tristique nulla. Cras tempor semper
              sagittis. Cras scelerisque sollicitudin purus, quis mollis augue
              eleifend ut. Proin quis diam mattis, cursus erat sit amet, lacinia
              urna. Praesent elementum, ante quis consequat euismod, lorem velit
              sollicitudin purus, in venenatis tellus orci sed augue. Morbi
              ultrices mollis pharetra. Proin id vestibulum ante.
            </SliderArticle>
          </SideSlide>
          <SideSlide leftSlide={false}>
            <SliderArticle
              title="ActiveGen"
              url="https://activegen.projektai.nfqakademija.lt"
              image="/activegen.gif"
              repo="
                https://github.com/nfqakademija/activegen"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non quam vel massa pellentesque vehicula ut non sem. Maecenas a
              condimentum odio, sed faucibus dolor. Donec non tortor massa.
              Suspendisse velit lacus, blandit et lacus congue, dapibus
              imperdiet sapien. Donec posuere ligula et velit pellentesque
              tempor. Aliquam sit amet tristique nulla. Cras tempor semper
              sagittis. Cras scelerisque sollicitudin purus, quis mollis augue
              eleifend ut. Proin quis diam mattis, cursus erat sit amet, lacinia
              urna. Praesent elementum, ante quis consequat euismod, lorem velit
              sollicitudin purus, in venenatis tellus orci sed augue. Morbi
              ultrices mollis pharetra. Proin id vestibulum ante.
            </SliderArticle>
          </SideSlide>
          <SideSlide leftSlide={true}>
            <SliderArticle
              title="ActiveGen"
              url="https://activegen.projektai.nfqakademija.lt"
              image="/activegen.gif"
              repo="
                https://github.com/nfqakademija/activegen"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non quam vel massa pellentesque vehicula ut non sem. Maecenas a
              condimentum odio, sed faucibus dolor. Donec non tortor massa.
              Suspendisse velit lacus, blandit et lacus congue, dapibus
              imperdiet sapien. Donec posuere ligula et velit pellentesque
              tempor. Aliquam sit amet tristique nulla. Cras tempor semper
              sagittis. Cras scelerisque sollicitudin purus, quis mollis augue
              eleifend ut. Proin quis diam mattis, cursus erat sit amet, lacinia
              urna. Praesent elementum, ante quis consequat euismod, lorem velit
              sollicitudin purus, in venenatis tellus orci sed augue. Morbi
              ultrices mollis pharetra. Proin id vestibulum ante.
            </SliderArticle>
          </SideSlide>
          <SideSlide leftSlide={false}>
            <SliderArticle
              title="ActiveGen"
              url="https://activegen.projektai.nfqakademija.lt"
              image="/activegen.gif"
              repo="
                https://github.com/nfqakademija/activegen"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non quam vel massa pellentesque vehicula ut non sem. Maecenas a
              condimentum odio, sed faucibus dolor. Donec non tortor massa.
              Suspendisse velit lacus, blandit et lacus congue, dapibus
              imperdiet sapien. Donec posuere ligula et velit pellentesque
              tempor. Aliquam sit amet tristique nulla. Cras tempor semper
              sagittis. Cras scelerisque sollicitudin purus, quis mollis augue
              eleifend ut. Proin quis diam mattis, cursus erat sit amet, lacinia
              urna. Praesent elementum, ante quis consequat euismod, lorem velit
              sollicitudin purus, in venenatis tellus orci sed augue. Morbi
              ultrices mollis pharetra. Proin id vestibulum ante.
            </SliderArticle>
          </SideSlide>
          <SideSlide leftSlide={true}></SideSlide>
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
