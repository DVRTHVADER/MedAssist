import React from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo_black.png";
import toggle_light from "../../assets/night.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Acceuil</li>
        <li>Services</li>
        <li className="contact">Contact</li>
      </ul>
      <img src={toggle_light} alt="" className="toggle-icon " />
    </div>
  );
};

export default Navbar;
