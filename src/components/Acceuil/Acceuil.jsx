import React from "react";
import "./Acceuil.css";

const Acceuil = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="acceuil" className="acceuil-container">
        <div className="acceuil-overlay">
          <div className="acceuil-content">
            <h1 className="acceuil-title">
              Bienvenue chez <span className="highlight">Proxy B </span>
            </h1>
            <p className="acceuil-description">
              Des soins à domicile de confiance, adaptés à vos besoins –
              aujourd'hui et demain.
            </p>
            <div className="acceuil-buttons">
              <a href="#contact-footer" className="btn btn-primary">
                Contactez-nous
              </a>
              <a href="#services" className="btn btn-secondary">
                Nos Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acceuil;
