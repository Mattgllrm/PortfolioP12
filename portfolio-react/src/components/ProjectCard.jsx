import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/projects/${project.slug}`} className="project-card__link">
        <div className="project-card__media">
          {project.image ? (
            <img src={project.image} alt={""} loading="lazy" />
          ) : (
            <div className="project-card__placeholder">
              <span>{project.title}</span>
            </div>
          )}
        </div>

        <div className="project-card__body">
          <div className="project-card__top">
            <h3 className="project-card__title">{project.title}</h3>
            {project.category ? (
              <span className="project-card__badge">{project.category}</span>
            ) : null}
          </div>

          <p className="project-card__desc">{project.description}</p>

          {project.tags?.length ? (
            <ul className="project-card__tags">
              {project.tags.map((tag) => (
                <li key={tag} className="project-card__tag">
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <span className="project-card__cta">Voir le projet →</span>
        </div>
      </Link>
    </article>
  );
}

