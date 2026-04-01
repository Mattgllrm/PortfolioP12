import React from "react";

export default function Hero() {
  return (
    <header id="hero">
      <div className="container hero-content">
        <span className="hero-badge">Front-End Developer</span>

        <h1>
          Bonjour, je suis <span>Matthis Guillerm</span>
        </h1>

       <p>
  Développeur front-end en reconversion, je construis des interfaces
  web structurées, performantes et pensées pour évoluer dans le temps.
</p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn secondary">
            Me contacter
          </a>
        </div>
      </div>
    </header>
  );
}

