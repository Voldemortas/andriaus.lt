import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaScroll } from 'react-icons/fa'

const SliderArticle = () => {
  return (
    <header className="contact-info">
      <article className="contact-info--intro">
        <p>
          Hello, I'm Andrius Simanaitis. I am in the final year of my software
          engineering bachelor degree at Kaunas Technology University. Even
          though, my first public project was an android application from the
          very beginning I was interested in web development. I started by
          learning and working with php. Today I'm familiar with node
          (express.js), sql, nosql (mongoDb), my current passion is Frontend.
        </p>
        <p>
          In my free time I love learning about language I have even written a
          Discord bot which helps learners of Lithuanian on daily basis.
        </p>
      </article>
      <br />
      <img
        src="face.png"
        className="contact-info--image"
        alt="personal picture"
      />
      <ul className="contact-info--links">
        <li>
          <a href="https://www.linkedin.com/in/andrius-simanaitis-b197a7139/">
            <FaLinkedin /> Andrius Simanaitis
          </a>
        </li>
        <li>
          <a href="https://github.com/Voldemortas">
            <FaGithub className="hideable-icon" /> github.com/Voldemortas
          </a>
        </li>
        <li>
          <a href="mailto:eragonas5@gmail.com">
            <FaEnvelope className="hideable-icon" /> eragonas5@gmail.com
          </a>
        </li>
        <li>
          <a href="/CV.pdf">
            <FaScroll /> Curriculum Vitae
          </a>
        </li>
      </ul>
      <div className="contact-info--technologies">
        Technologies I have worked with:
        <br />
        <br />
        <img src="git.png" alt="git" title="git" />
        <img src="javascript.png" alt="javascript" title="javascript" />
        <img src="php.png" alt="php" title="php" />
        <img src="react.png" alt="react" title="react" />
        <img src="reactnative.png" alt="react native" title="react native" />
        <img src="sass.png" alt="sass" title="sass" />
        <img src="typescript.webp" alt="typescript" title="typescript" />
        <img src="vue.png" alt="vue.js" title="vue.js" />
      </div>
    </header>
  )
}
export default SliderArticle
