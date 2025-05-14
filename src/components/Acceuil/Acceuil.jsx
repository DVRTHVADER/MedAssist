import React from "react";
import "./Acceuil.css";

const Acceuil = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="acceuil-container">
        <div className="acceuil-overlay">
          <div className="acceuil-content">
            <h1 className="acceuil-title">
              Bienvenue chez <span className="highlight">MedAssis</span>
            </h1>
            <p className="acceuil-description">
              Pour toutes reservations contactez-nous ou ecrivez nous
            </p>
            <div className="acceuil-buttons">
              <button className="btn btn-primary">Contacts</button>
              <button className="btn btn-secondary">Email</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acceuil;
