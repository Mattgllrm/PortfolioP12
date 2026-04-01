import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav id="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            Matthis Guillerm
          </Link>
        </div>

        {/* Burger icon */}
        <button
          className="nav-burger"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>

        <ul className={`nav-links ${open ? "is-open" : ""}`}>
          <li><a href="/#hero" onClick={closeMenu}>Accueil</a></li>
          <li><a href="/#about" onClick={closeMenu}>À propos</a></li>
          <li><a href="/#projects" onClick={closeMenu}>Projets</a></li>
          <li><a href="/#skills" onClick={closeMenu}>Compétences</a></li>
          <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {open && <div className="nav-overlay" onClick={closeMenu} />}
      </div>
    </nav>
  );
}
