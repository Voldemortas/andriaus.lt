import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const SliderArticle = () => {
  return (
    <header className="contact-info">
      <article className="contact-info--intro">
        Hello, I'm Andrius Simanaitis. I'm currently studying at Kaunas
        Technology University. My main focus is the Front End development yet I
        have some experience in creating Back Eng with PHP or NodeJS Express as
        well as creating bots for Discord.
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
        <img src="javascript.png" alt="javascript" title="javascript" />
        <img src="typescript.webp" alt="typescript" title="typescript" />
        <img src="sass.png" alt="sass" title="sass" />
        <img src="react.png" alt="react" title="react" />
      </div>
    </header>
  )
}
export default SliderArticle
