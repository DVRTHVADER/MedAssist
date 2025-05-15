import React, { useState } from "react";
import "./Navbar.css";
import toggle_light from "../../assets/night.png";
import { FaBars, FaTimes } from "react-icons/fa"; // icons for open/close

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#acceuil" onClick={() => setIsMenuOpen(false)}>
            Acceuil
          </a>
        </li>
        <li>
          <a href="#apropos" onClick={() => setIsMenuOpen(false)}>
            À propos
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Nos services
          </a>
        </li>
      </ul>

      <div className="icons">
        <img src={toggle_light} alt="toggle" className="toggle-icon" />
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
