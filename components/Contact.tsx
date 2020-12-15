import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const SliderArticle = () => {
  return (
    <header className="contact-info">
      <article className="contact-info--intro">
        Hello, I'm Andrius Simanaitis. I am in the final year of my software
        engineering bachelor degree at Kaunas Technology University. My main
        focus is the Front End development yet I have some experience in
        creating Back End with PHP and NodeJS Express as well as creating bots
        for Discord.
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
            <FaGithub /> github.com/Voldemortas
          </a>
        </li>
        <li>
          <a href="mailto:eragonas5@gmail.com">
            <FaEnvelope /> eragonas5@gmail.com
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
        <img src="sass.png" alt="sass" title="sass" />
        <img src="typescript.webp" alt="typescript" title="typescript" />
        <img src="vue.png" alt="vue.js" title="vue.js" />
      </div>
    </header>
  )
}
export default SliderArticle
