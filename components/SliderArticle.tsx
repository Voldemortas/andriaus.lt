import React, { ReactChild } from 'react'
type properties = {
  title: string
  url: string
  children: ReactChild
  image: string
  repo: string
}

const SliderArticle = ({ title, url, children, image, repo }: properties) => {
  return (
    <section className="info-box">
      <header>
        <h2>{title}</h2>
      </header>
      <img src={image} width="320"></img>
      <article>{children}</article>
      <br />
      <footer>
        Live page: <a href={url}>{url}</a>
        <br />
        Github repo: <a href={repo}>{repo}</a>
      </footer>
    </section>
  )
}
export default SliderArticle
