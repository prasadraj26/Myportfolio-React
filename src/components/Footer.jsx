import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; 2026 Prasadraj V. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/prasadraj26" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;