// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; 2025 <span className="highlight">Rishabh Srivastava</span> - Tech Enthusiast & Developer
        </p>
        <p className="footer-subtitle">
          Crafting digital experiences with passion and precision
        </p>
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
