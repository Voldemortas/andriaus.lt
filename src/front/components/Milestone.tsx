import React from 'react'
import type { ReactNode } from 'react'
type properties = {
  title: string
  children: ReactNode
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
