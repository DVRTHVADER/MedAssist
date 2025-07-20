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
            <i className="fas fa-home"></i> 21 rue de grand-pre, St Jacques
          </p>
          <p>
            <i className="fas fa-envelope"></i> info.proxyb@gmail.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +1 438 922 1290
          </p>
          <p>
            <i className="fas fa-print"></i> +1 438 924 7012
          </p>
        </div>
      </section>

      <div className="footer-bottom">
        <p>
          © 2025 Copyright: <a href="#"> Hartexh companies</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
