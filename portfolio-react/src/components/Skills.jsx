import React from "react";
import { skillIcons } from "../data/skillIcons";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Compétences</h2>

        {/* Intro */}
        <p className="skills-intro">
  Une sélection des technologies que j’utilise actuellement, et que je continue
  d’approfondir et d’élargir au fil de mon évolution professionnelle.
</p>


        {/* Cards */}
        <div className="skills-grid">
          {/* Front-end */}
          <div className="skills-card">
            <div className="skills-card__header">
              <h3>Front-end</h3>
            </div>

            <ul className="skills-badges">
              <li className="skill-badge">
               <span className="skill-icon">
                <img src={skillIcons.html} alt="" aria-hidden="true" />
                </span>
                     HTML5
                     </li>
              <li className="skill-badge">
                <span className="skill-icon">
                  <img src={skillIcons.CSS} alt="" aria-hidden="true" />
                  </span>
                CSS / SCSS
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                  <img src={skillIcons.JS} alt="" aria-hidden="true" />
                  </span>
                JavaScript (ES6+)
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                 <img src={skillIcons.React} alt="" aria-hidden="true" />
                  </span>
                React
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                 <img src={skillIcons.Redux} alt="" aria-hidden="true" />                  
                 </span>
                Redux
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                  <img src={skillIcons.Resp} alt="" aria-hidden="true" />  
                  </span>
                Responsive
              </li>
            </ul>
          </div>

          {/* Outils */}
          <div className="skills-card">
            <div className="skills-card__header">
              <h3>Outils & écosystème</h3>
            </div>

            <ul className="skills-badges">
              <li className="skill-badge">
                <span className="skill-icon">
                <img src={skillIcons.git} alt="" aria-hidden="true" />  
                  </span>
                Git / GitHub
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
              <img src={skillIcons.RestAPI} alt="" aria-hidden="true" />  

                  </span>
                API REST
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                <img src={skillIcons.Swagger} alt="" aria-hidden="true" />  
                  </span>
                Swagger
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                  <img src={skillIcons.Vite} alt="" aria-hidden="true" />  
                  </span>
                Vite
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                   <img src={skillIcons.NPM} alt="" aria-hidden="true" />  
                  </span>
                npm
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                   <img src={skillIcons.Figma} alt="" aria-hidden="true" />  

                  </span>
                Figma
              </li>
            </ul>
          </div>

          {/* Méthodo */}
          <div className="skills-card">
            <div className="skills-card__header">
              <h3>Méthodologie</h3>
            </div>

            <ul className="skills-badges">
              <li className="skill-badge">
                <span className="skill-icon">
                  <img src={skillIcons.Mobile} alt="" aria-hidden="true" />  
                  </span>
                Mobile-first
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                  <img src={skillIcons.Acc} alt="" aria-hidden="true" />  
                  </span>
                Accessibilité 
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
               <img src={skillIcons.Sprint} alt="" aria-hidden="true" />  
                  </span>
                SCRUM
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                  <img src={skillIcons.doc} alt="" aria-hidden="true" /> 
                  </span>
                Documentation
              </li>
              <li className="skill-badge">
                <span className="skill-icon">
                  <img src={skillIcons.loupe} alt="" aria-hidden="true" /> 
                  </span>
                Analyse de besoins
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="skills-timeline">
          <h3 className="skills-timeline__title">Timeline d’apprentissage</h3>

          <ol className="timeline">
            <li className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">Début 2025</span>
                <p>Fondations HTML/CSS, responsive et intégration.</p>
              </div>
            </li>

            <li className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">Milieu 2025</span>
                <p>JavaScript, DOM, appels API et authentification.</p>
              </div>
            </li>

            <li className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">Fin 2025</span>
                <p>React, Redux, architecture et projets plus complets.</p>
              </div>
            </li>
            <li className="timeline-item timeline-item--ongoing">
  <div className="timeline-dot timeline-dot--ongoing" />
  <div className="timeline-content">
    <span className="timeline-date">Aujourd’hui & en continu</span>
    <p>
      Approfondissement de React, bonnes pratiques front-end,
      accessibilité et optimisation des performances.
    </p>
  </div>
</li>

          </ol>
        </div>
      </div>
    </section>
  );
}
