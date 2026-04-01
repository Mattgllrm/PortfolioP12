import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/photomodif.webp";

export default function About() {
  return (
    <section id="about">
      <div className="container about-content">

        <div className="about-image">
          <img src={photo} alt="Photo de Matthis Guillerm" />
        </div>

        <div className="about-text">
          <h2>À propos de moi</h2>

<p>
  À 24 ans, j’ai choisi de me spécialiser en développement front-end,
  un domaine qui me pousse à apprendre en continu et à viser l’exigence
  dans la qualité du code.
</p>

<p>
  Je travaille aujourd’hui sur des projets concrets en React,
  JavaScript, CSS et d’autres technologies, avec une approche
  structurée et tournée vers l’amélioration constante.
</p>


          <Link to="/parcours" className="about-link">
            En savoir plus sur mon parcours →
          </Link>
        </div>

      </div>
    </section>
  );
}
