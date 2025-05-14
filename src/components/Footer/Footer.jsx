import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>📞 +1 (514) 123-4567</p>
        <p>📧 contact@medassist.ca</p>
        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/company/medassist"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="footer-right">
        <p>
          Développé par <strong>Hartexh</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
