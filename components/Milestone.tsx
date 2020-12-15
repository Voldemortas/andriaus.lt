import React, { ReactChild } from 'react'
type properties = {
  title: string
  children: ReactChild
}

const SliderArticle = ({ title, children }: properties) => {
  return (
    <section className="milestone">
      <header>
        <h2>{title}</h2>
      </header>
      <article>{children}</article>
    </section>
  )
}
export default SliderArticle
