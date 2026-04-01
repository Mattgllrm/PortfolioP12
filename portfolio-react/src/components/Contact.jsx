import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const closeBtnRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const closeModal = () => setIsSent(false);

  useEffect(() => {
    if (!isSent) return;

    // focus sur le btn fermer
    closeBtnRef.current?.focus();

    // bloque scroll derrière
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Echap pour fermer
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isSent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await new Promise((r) => setTimeout(r, 450));

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
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
          <strong> Toulouse </strong> afin d’intégrer une équipe dynamique, contribuer à des
          projets web ambitieux et approfondir mes compétences. Une opportunité, une question
          ou juste envie d’échanger ? Envoyez-moi un message — je réponds rapidement.
        </p>

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

      {isSent && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            onClick={(e) => e.stopPropagation()}
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
