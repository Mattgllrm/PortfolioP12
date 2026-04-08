import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const closeBtnRef = useRef(null);

  //  MAJ des champs du formulaire
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, // met à jour le bon champ
    }));
  };

  const closeModal = () => setIsSent(false);

  useEffect(() => {
    if (!isSent) return;

    // focus automatique sur le bouton fermer
    closeBtnRef.current?.focus();

    // bloque le scroll derrière la modale
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);

    // nettoyage 
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isSent]);

  //  Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // active le loading

    try {
      const response = await fetch("https://formspree.io/f/xgopqrdj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData), 
      });
      
       // erreur
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      // succès
      setIsSent(true); // ouvre la modale
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi, réessaie !");
    } finally {
      setIsSending(false); 
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>

        <p className="contact-intro">
          Je recherche un poste de <strong>Développeur Front-End</strong> dans la région de
          <strong> Toulouse </strong>
          afin d’intégrer une équipe dynamique, contribuer à des projets web ambitieux et
          approfondir mes compétences. Une opportunité, une question ou juste envie
          d’échanger ? Envoyez-moi un message — je réponds rapidement.
        </p>

        {/*  FORMULAIRE */}
        <form onSubmit={handleSubmit} id="contact-form" aria-label="Formulaire de contact">
          <div className="field">
            <label htmlFor="contact-name" className="sr-only">
              Nom
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Nom"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="field">
            <label htmlFor="contact-email" className="sr-only">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              inputMode="email"
            />
          </div>

          <div className="field">
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          {/* Bouton  */}
          <button type="submit" disabled={isSending} aria-busy={isSending}>
            {isSending ? "Envoi..." : "Envoyer"}
          </button>
        </form>

        <p className="contact-links">
          Ou retrouvez-moi sur{" "}
          <a href="https://github.com/Mattgllrm" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>

      {/* MODALE */}
      {isSent && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            onClick={(e) => e.stopPropagation()} // empêche fermeture si clic dedans
          >
            <div className="modal-icon" aria-hidden="true">
              ✓
            </div>

            <h3 id="modal-title" className="modal-title">
              Message envoyé !
            </h3>

            <p id="modal-desc" className="modal-desc">
              Merci, je reviens vers vous dès que possible.
            </p>

            <div className="modal-actions">
              <button
                ref={closeBtnRef}
                className="btn primary"
                type="button"
                onClick={closeModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}