import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
// @ts-ignore
import css from './style.css' with {type: 'text'}
import type {Language} from 'src/cv/dictionary.ts'
import dictionary from 'src/cv/dictionary.ts'

function App({language}: {language: Language}) {
  return (
    <main id="content">
      <header>
        <div className="face-row">
          <img src="foto.webp" className="face" />
        </div>
        <div className="name-row">
          <div className="name">
            Andrius
            <br />
            Simanaitis
          </div>
          <div>{dictionary.profession[language]}</div>
        </div>
        <div className="contact-row">
          <div className="icon" data-img="phone">
            <a target="_blank" href="tel:+37061600124">
              +370<span className="space"></span>616
              <span className="space"></span>00<span className="space"></span>
              124
            </a>
          </div>
          <div className="icon" data-img="letter">
            <a target="_blank" href="mailto:labas@andriaus.lt">
              labas@andriaus.lt
            </a>
          </div>
          <div className="icon" data-img="letter">
            <a target="_blank" href="mailto:eragonas5@gmail.com">
              eragonas5@gmail.com
            </a>
          </div>
          <div className="icon" data-img="cursor">
            <a target="_blank" href="https://andriaus.lt" className="external">
              andriaus.lt
            </a>
          </div>
          <div className="icon" data-img="map">
            Kaunas/Marijampolė
          </div>
        </div>
      </header>
      <article>
        <h2>{dictionary.experience[language]}</h2>
        <div className="row">
          <div>
            <h3>{dictionary.rideshare[language]}</h3>
            <div className="info">{dictionary.rideshareInfo[language]}</div>
          </div>
          <div className="date">2026-07 – {dictionary.present[language]}</div>
        </div>
        <div className="row">
          <div>
            <h3>{dictionary.websiteAdministrator[language]}</h3>
            <div className="info">
              <a target="_blank" href="https://atng.lt/" className="external">
                Mikroautobusų nuoma
              </a>
            </div>
          </div>
          <div className="date">2026-04 – 2026-06</div>
        </div>
        <div className="row">
          <div>
            <h3>{dictionary.softwareDeveloper[language]}</h3>
            <div className="info">
              <a target="_blank" href="https://kayak.com/" className="external">
                KAYAK
              </a>
            </div>
          </div>
          <div className="date">2021-12 – 2024-01</div>
        </div>
        <div className="row">
          <div>
            <h3>{dictionary.juniorSoftwareDeveloper[language]}</h3>
            <div className="info">
              <a target="_blank" href="https://openg.lt/" className="external">
                Atvira karta
              </a>
            </div>
          </div>
          <div className="date">2021-02 – 2021-12</div>
        </div>
      </article>
      <article>
        <h2>Asmeniniai projektai</h2>
        <div className="row">
          <div>
            <h3>Kalbynas</h3>
            <div className="info">
              <a
                target="_blank"
                href="https://kalbynas.lt/"
                className="external"
              >
                kalbynas.lt
              </a>
            </div>
          </div>
          <div className="date">2023-11 – {dictionary.present[language]}</div>
        </div>
        <div className="row">
          <div>
            <h3>Marijampolės Miesto Meniu</h3>
            <div className="note">{dictionary.mmmInfo[language]}</div>
          </div>
          <div className="date">2014-07 – 2016-09</div>
        </div>
      </article>
      <article>
        <h2>{dictionary.education[language]}</h2>
        <div className="row">
          <div>
            <h3>{dictionary.bachelor[language]}</h3>
            <div className="info">Kauno Technologijos universitetas</div>
            <div className="note">{dictionary.bachelorInfo[language]}</div>
          </div>
          <div className="date">2016 – {dictionary.present[language]}</div>
        </div>
        <div className="row">
          <div>
            <h3>{dictionary.secondaryEducation[language]}</h3>
            <div className="info">Marijampolės marijonų gimnazija</div>
          </div>
          <div className="date">2008 – 2016</div>
        </div>
      </article>
      <article>
        <h2>{dictionary.courses[language]}</h2>
        <div className="row">
          <div>
            <h3>NFQ Akademija, Ruduo 2019</h3>
          </div>
          <div className="date">2019-10 – 2019-12</div>
        </div>
        <div className="row">
          <div>
            <h3>KAYAK UI Academy 2019</h3>
          </div>
          <div className="date">2019-07 – 2019-09</div>
        </div>
      </article>
      <article>
        <h2>Kalbos</h2>
        <div className="row">
          <div className="column">
            <div className="row">
              <div>
                <h3>{dictionary.Lithuanian[language]}</h3>
              </div>
              <div className="info">{dictionary.native[language]}</div>
            </div>
            <div className="row">
              <div>
                <h3>{dictionary.Russian[language]}</h3>
              </div>
              <div className="info">B1</div>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <div>
                <h3>{dictionary.English[language]}</h3>
              </div>
              <div className="info">C1</div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <h2>{dictionary.skills[language]}</h2>
        <div className="row">
          <div className="column">
            <div className="row">
              <div>
                <h3>ReactJS</h3>
              </div>
              <div className="info">{dictionary.highExperience[language]}</div>
            </div>
            <div className="row">
              <div>
                <h3>Typescript</h3>
              </div>
              <div className="info">{dictionary.highExperience[language]}</div>
            </div>
            <div className="row">
              <div>
                <h3>CSS</h3>
              </div>
              <div className="info">{dictionary.highExperience[language]}</div>
            </div>
            <div className="row">
              <div>
                <h3>PHP</h3>
              </div>
              <div className="info">{dictionary.lowExperience[language]}</div>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <div>
                <h3>Java</h3>
              </div>
              <div className="info">{dictionary.highExperience[language]}</div>
            </div>
            <div className="row">
              <div>
                <h3>SQL</h3>
              </div>
              <div className="info">{dictionary.highExperience[language]}</div>
            </div>
            <div className="row">
              <div>
                <h3>Git</h3>
              </div>
              <div className="info">{dictionary.highExperience[language]}</div>
            </div>
            <div className="row">
              <div>
                <h3>C#</h3>
              </div>
              <div className="info">{dictionary.lowExperience[language]}</div>
            </div>
          </div>
        </div>
      </article>
      {/*<article>*/}
      {/*  <h2>{dictionary.driverLicenses[language]}</h2>*/}
      {/*  <div className="row">*/}
      {/*    <div className="column">*/}
      {/*      <div className="row">*/}
      {/*        <div>*/}
      {/*          <h3>B</h3>*/}
      {/*        </div>*/}
      {/*        <div className="date">2015-09</div>*/}
      {/*      </div>*/}
      {/*      <div className="row">*/}
      {/*        <div>*/}
      {/*          <h3>AM</h3>*/}
      {/*        </div>*/}
      {/*        <div className="date">2015-09</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="column">*/}
      {/*      <div className="row">*/}
      {/*        <div>*/}
      {/*          <h3>B1</h3>*/}
      {/*        </div>*/}
      {/*        <div className="date">2015-09</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</article>*/}
    </main>
  )
}

export default function generateHTML(language: Language) {

  const html = renderToStaticMarkup(<App language={language} />)

  return `<!DOCTYPE html>
<html lang="${language}">
  <head>
    <style>${css}</style>
  </head>
  <body>
    ${html}
  </body>
</html>`
}

