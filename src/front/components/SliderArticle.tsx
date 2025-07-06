import React, { type ReactNode } from 'react'
type properties = {
  title: string
  url?: string | null
  children: ReactNode
  image: string
  repo: string
}

const SliderArticle = ({ title, url, children, image, repo }: properties) => {
  return (
    <section className="info-box">
      <header>
        <h2>{title}</h2>
      </header>
      <span className="image-url">
        {!/\.gif$/.test(image) ? (
          <>
            <img
              src={image}
              width="320"
              alt={`preview of ${title}`}
              title={`preview of ${title}`}
            />
          </>
        ) : (
          <video autoPlay={true} loop muted playsInline width="320">
            <source
              src={`${image.match(/(.+)\.gif$/)![1]}.webm`}
              type="video/webm"
            />
            <source
              src={`${image.match(/(.+)\.gif$/)![1]}.mp4`}
              type="video/mp4"
            />
          </video>
        )}
      </span>
      <article>{children}</article>
      <br />
      <footer>
        {url === null || url === '' || url === undefined ? (
          <></>
        ) : (
          <>
            Live page: <a href={url}>{url}</a>
          </>
        )}
        <br />
        Github repo: <a href={repo}>{repo}</a>
      </footer>
    </section>
  )
}
export default SliderArticle
