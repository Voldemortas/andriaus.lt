import React from 'react'
import {FaLinkedin, FaGithub, FaEnvelope, FaScroll} from 'react-icons/fa'

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
        src="/static/face.webp"
        className="contact-info--image"
        alt="personal picture"
        width="105"
        height="113"
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
          <a href="/static/AndriusSimanaitisResume.pdf">
            <FaScroll /> Resume
          </a>
        </li>
      </ul>
      <div className="contact-info--technologies">
        Technologies I have worked with:
        <br />
        <br />
        <img src="/static/git.png" alt="git" title="git" width="32" height="32" />
        <img
          src="/static/javascript.png"
          alt="javascript"
          title="javascript"
          width="32"
          height="32"
        />
        <img src="/static/php.png" alt="php" title="php" width="32" height="32" />
        <img src="/static/react.png" alt="react" title="react" width="32" height="32" />
        <img
          src="/static/reactnative.png"
          alt="react native"
          title="react native"
          width="32"
          height="32"
        />
        <img src="/static/sass.png" alt="sass" title="sass" width="32" height="32" />
        <img
          src="/static/typescript.png"
          alt="typescript"
          title="typescript"
          width="32"
          height="32"
        />
        <img src="/static/vue.png" alt="vue.js" title="vue.js" width="32" height="32" />
        <img src="/static/java.png" alt="java" title="java" width="32" height="32" />
      </div>
    </header>
  )
}
export default SliderArticle
