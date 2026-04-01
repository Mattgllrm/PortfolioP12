import React from "react";
import { Link } from "react-router-dom";

export default function Parcours() {
  return (
    <main className="container parcours-page">
      <Link to="/" className="back-link">← Retour</Link>

      <header className="parcours-header">
        <h1>Mon parcours</h1>
        <p>
          J’ai longtemps cherché un domaine qui me motive vraiment. Après plusieurs expériences en industrie,
          j’ai découvert le développement web — et c’est devenu une évidence. Depuis, je me forme et je construis
          des projets chaque semaine.
        </p>
      </header>

      <div className="parcours-grid">
        {/* ÉTUDES */}
        <section className="parcours-card">
          <h2>🎓 Études & formation</h2>

          <div className="parcours-timeline">
            <div className="parcours-step">
              <div className="parcours-dot" />
              <div className="parcours-step__content">
                <span className="parcours-date">2019</span>
                <h3>Bac STI2D — Lycée Paul Sérusier (Carhaix-Plouguer)</h3>
                <p>Culture technologique, logique de conception et résolution de problèmes.</p>
              </div>
            </div>

            <div className="parcours-step">
              <div className="parcours-dot" />
              <div className="parcours-step__content">
                <span className="parcours-date">2019 — 2021</span>
                <h3>BTS Électrotechnique — Lycée Colbert (Lorient)</h3>
                <p>Bases techniques solides, rigueur et travail en équipe.</p>
              </div>
            </div>

            <div className="parcours-step">
              <div className="parcours-dot" />
              <div className="parcours-step__content">
                <span className="parcours-date">2021 — 2022</span>
                <h3>Licence Électrotechnique — UIMM (Plérin)</h3>
                <p>Approfondissement technique et mise en pratique en alternance.</p>
              </div>
            </div>

            <div className="parcours-step">
              <div className="parcours-dot" />
              <div className="parcours-step__content">
                <span className="parcours-date">Mai 2025 — Fév. 2026</span>
                <h3>OpenClassrooms — Intégrateur Web</h3>
                <p>
                  Projets concrets : HTML, CSS, JavaScript, React, intégration responsive,
                  API et bonnes pratiques.
                </p>
              </div>
            </div>

            <div className="parcours-step">
              <div className="parcours-dot parcours-dot--ongoing" />
              <div className="parcours-step__content">
                <div className="parcours-row">
                  <span className="parcours-date">Aujourd’hui</span>
                  <span className="parcours-badge">En cours</span>
                </div>
                <h3>Apprentissage continu</h3>
               <p>Approfondissement front-end : technologies, qualité, accessibilité, performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPÉRIENCES */}
        <section className="parcours-card">
          <h2>💼 Expériences</h2>

          <div className="parcours-timeline">
            <div className="parcours-step">
              <div className="parcours-dot" />
              <div className="parcours-step__content">
                <span className="parcours-date">2019 — 2021 (Vacances scolaires)</span>
                <h3>Vitalac — Agent de fabrication polyvalent (Carnoët)</h3>
                <p>Emplois saisonniers : adaptation, rigueur et respect des consignes.</p>
              </div>
            </div>

            <div className="parcours-step">
              <div className="parcours-dot" />
              <div className="parcours-step__content">
                <span className="parcours-date">Sept. 2021 — Juil. 2022</span>
                <h3>Eiffage Énergie Systèmes — Assistant Chargé d’Affaires (Vannes)</h3>
                <p>Suivi de projets, coordination, organisation et communication avec les équipes.</p>
              </div>
            </div>

            <div className="parcours-step">
              <div className="parcours-dot" />
              <div className="parcours-step__content">
                <span className="parcours-date">Août 2022 — Juin 2023</span>
                <h3>DS Smith — Opérateur machine carton (Carhaix)</h3>
                <p>Autonomie, qualité, réactivité et respect des process.</p>
              </div>
            </div>

            <div className="parcours-step">
              <div className="parcours-dot" />
              <div className="parcours-step__content">
                <span className="parcours-date">Sept. 2023 — Avr. 2025</span>
                <h3>Vitalac — Agent de fabrication polyvalent (Carnoët)</h3>
                <p>Polyvalence, fiabilité, esprit d’équipe et constance.</p>
              </div>
            </div>

            <div className="parcours-step">
              <div className="parcours-dot parcours-dot--ongoing" />
              <div className="parcours-step__content">
                <div className="parcours-row">
                  <span className="parcours-date">Depuis 2025</span>
                  <span className="parcours-badge">En cours</span>
                </div>
                <h3>Reconversion vers le développement web</h3>
                <p>
                   Développement de projets concrets, structuration des bases techniques
                  et progression continue vers un profil professionnel.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

