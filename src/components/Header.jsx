import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <div className="logo">
            <h2>Portfolio</h2>
          </div>

          {/* MENU */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
            <li><a href="#education" className="nav-link" onClick={closeMenu}>Education</a></li>
            <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>

            {/* SOCIALS INSIDE MENU */}
            <li className="mobile-socials">
              <div className="header-socials">
                <a href="https://github.com/prasadraj26"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/prasadraj-v-500277394?utm_source=share_via&utm_content=profile&utm_medium=member_android"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/prasad__v_?igsh=YzJ3dzUwcWhveG51"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </li>
          </ul>

          {/* DESKTOP SOCIALS */}
          <div className="header-socials desktop-socials">
            <a href="https://github.com/prasadraj26"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/prasadraj-v-500277394?utm_source=share_via&utm_content=profile&utm_medium=member_android"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/prasad__v_?igsh=YzJ3dzUwcWhveG51"><i className="fa-brands fa-instagram"></i></a>
          </div>

          {/* HAMBURGER */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;