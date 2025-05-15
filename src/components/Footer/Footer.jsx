import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-top">
        <p>Connectez-vous avec nous sur nos Reseaux: </p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-google"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="footer-main">
        <div className="footer-col">
          <h1>PROXY B</h1>
          <p>
            est une entreprise québécoise offrant de l'aide et des soins à
            domicile personnalisés à travers l’ensemble du Québec.
          </p>
        </div>
        <div className="footer-col">
          <h6>Nos-Services</h6>
          <p>
            <a href="#">Entretient- Menager</a>
          </p>
          <p>
            <a href="#">Soins a domicile</a>
          </p>
          <p>
            <a href="#">Services de Transport </a>
          </p>
          <p>
            <a href="#">Tarification</a>
          </p>
        </div>
        <div className="footer-col">
          <h6>Autres</h6>
          <p>
            <a href="#">Carrieres</a>
          </p>
          <p>
            <a href="#">Blogues</a>
          </p>
        </div>
        <div className="footer-col">
          <h6>CONTACTS</h6>
          <p>
            <i className="fas fa-home"></i> New York, NY 10012, US
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@example.com
          </p>
          <p>
            <i className="fas fa-phone"></i> + 01 234 567 88
          </p>
          <p>
            <i className="fas fa-print"></i> + 01 234 567 89
          </p>
        </div>
      </section>

      <div className="footer-bottom">
        <p>
          © 2025 Copyright: <a href="#">Grelarn & Hartexh companies</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
