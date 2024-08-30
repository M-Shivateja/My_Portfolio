import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
      <div className="myName">
        <Link to="/" className="navbar-brand">
          <span>
            <i class="bi bi-house-door-fill"></i>MST
          </span>
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </div>
      <div className="mylinks">
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
