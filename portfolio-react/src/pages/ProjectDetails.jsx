import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="container project-page">
        <Link to="/#projects" className="back-link">
          ← Retour aux projets
        </Link>
        <h1 className="project-title" style={{ marginTop: 20 }}>
          Projet introuvable
        </h1>
      </main>
    );
  }

  const s = project.sections;

  const objectifsAsArray = Array.isArray(s?.objectifs) ? s.objectifs : null;


  return (
    <main className="container project-page">
      <Link to="/#projects" className="back-link">
        ← Retour aux projets
      </Link>

      {/* =========== HERO ============= */}
      <header className="project-hero">
        <div className="project-hero__top">
          <div>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags?.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="project-hero__meta">
            {project.category && (
              <div className="project-meta">
                <span className="project-meta__label">Catégorie</span>
                <span className="project-meta__value">{project.category}</span>
              </div>
            )}

            {project.role && (
              <div className="project-meta">
                <span className="project-meta__label">Rôle</span>
                <span className="project-meta__value">{project.role}</span>
              </div>
            )}
          </div>
        </div>

        {/* ================= COVER ================= */}
        <div className="project-cover">
          {project.cover ? (
            <img src={project.cover} alt={`${project.title} - aperçu`} />
          ) : (
            <div className="project-cover__placeholder">
            </div>
          )}
        </div>
      </header>

      {/* ================= CE QUE JAI REALISE ============= */}
      <section className="project-section">
        <h2>Ce que j’ai réalisé</h2>
        <ul className="project-list">
          {project.highlights?.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      {/* =============== GALLERY ============== */}
      {project.gallery?.length ? (
        <section className="project-section">
          <h2>Galerie</h2>

          <div className="project-gallery">
            {project.gallery.map((src, index) => (
              <img
                key={`${project.slug}-${index}`}
                src={src}
                alt={`${project.title} - capture ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* ===============ETDUDE DE CAS============== */}
      {s && (
        <section className="project-section">
          <h2>Étude de cas</h2>

          <div className="case-grid">
            {s.contexte && (
              <div className="case-card">
                <h3>Contexte</h3>
                <p>{s.contexte}</p>
              </div>
            )}

            {/* ========LISTE =========*/}
            {s.objectifs && (
              <div className="case-card">
                <h3>Objectifs</h3>
                {objectifsAsArray ? (
                  <ul>
                    {objectifsAsArray.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{s.objectifs}</p>
                )}
              </div>
            )}

           
            {s.stack && (
              <div className="case-card">
                <h3>Stack technique</h3>
                <p>{s.stack}</p>
              </div>
            )}

            {s.competences && (
              <div className="case-card">
                <h3>Compétences développées</h3>
                <p>{s.competences}</p>
              </div>
            )}

            {s.resultats && (
              <div className="case-card">
                <h3>Résultats & impact</h3>
                <p>{s.resultats}</p>
              </div>
            )}

            {s.ameliorations && (
              <div className="case-card">
                <h3>Perspectives d’amélioration</h3>
                <p>{s.ameliorations}</p>
              </div>
            )}

          
          </div>
        </section>
      )}

      {/* GITHUB + DEMO */}
      <div className="project-actions">
        {project.github && (
          <a
            className="btn primary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            className="btn secondary"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Démo
          </a>
        )}
      </div>
    </main>
  );
}

