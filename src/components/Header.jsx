import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <span className="logo-icon"><i className="fas fa-user"></i></span>
        PORTFOLIO
      </div>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="https://github.com/prasadraj26" target="_blank" rel="noopener noreferrer" className="github-btn">Github</a>
      </nav>
    </header>
  );
}

export default Header;