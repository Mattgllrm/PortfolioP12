import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
<h2>Projets sélectionnés</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
