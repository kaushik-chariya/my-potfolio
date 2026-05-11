import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const headerRef = useRef(null);

  useGSAP(() => {
    // This part handles the scroll effect and is correct.
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top -50px',
      end: 'bottom bottom',
      toggleClass: {
        targets: headerRef.current,
        className: 'scrolled'
      }
    });

    // --- THIS IS THE CORRECTED ANIMATION ---
    // The selector now includes '.navbar-resume-button' to ensure it fades in.
    gsap.from('.navbar-logo, .navbar-link, .navbar-resume-button', {
      duration: 1,
      opacity: 0,
      y: -20,
      stagger: 0.1,
      delay: 0.5
    });
  });

  return (
    <header className="navbar" ref={headerRef}>
      <nav className="navbar-container">
        <a href="/" className="navbar-logo">CK</a>
        <ul className="navbar-menu">
          <li><a href="/#about" className="navbar-link">About</a></li>
          <li><a href="/#experience" className="navbar-link">My Journey</a></li>
          <li><a href="/#projects" className="navbar-link">Creations</a></li>
          <li><a href="/#skills" className="navbar-link">Abilities</a></li>
          <li><a href="/#skills" className="navbar-link">Achievements</a></li>
          <li><a href="/#contact" className="navbar-link">Contact</a></li>
          <li> <a href="/Kaushik_Chariya_DA.pdf" target="_blank" rel="noopener noreferrer" className="navbar-resume-button">My Resume</a></li>
        </ul>
       
      </nav>
    </header>
  );
};

export default Navbar;