import React from 'react';
import './Footer.css';

// Your social media links
const socialLinks = {
  github: "https://github.com/kaushik-chariya",
  linkedin: "https://www.linkedin.com/in/kaushik-chariya",
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>© 2026 Kaushik Chariya.</p>
      </div>
    </footer>
  );
};

// THIS IS THE LINE THAT WAS MISSING
export default Footer;