import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    // The main timeline for the text and button
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(".line span", {
      y: 150,
      skewY: 7,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power4.out'
    })
    .from(".hero-subtitle", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power4.out'
    }, "-=1")
    .from(".hero-button", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power4.out'
    }, "-=0.7");

    // --- NEW ANIMATION FOR THE STICKER ---
    // 1. The initial "pop-in" animation
    gsap.from(".hero-sticker", {
      delay: 1.5, // Appears after the name is revealed
      duration: 1,
      scale: 0,
      opacity: 0,
      rotation: -90,
      ease: 'elastic.out(1, 0.5)'
    });
    
    // 2. The continuous "floating" animation
    gsap.to(".hero-sticker", {
      y: -20, // Moves up and down by 20px
      rotation: 5, // Adds a slight wobble
      duration: 3,
      repeat: -1, // Repeats forever
      yoyo: true, // Reverses the animation smoothly
      ease: 'sine.inOut',
      delay: 2.5 // Starts after the pop-in
    });

  }, { scope: container });

  return (
    <section id="hero" ref={container} className="hero-section">
      {/* New wrapper for positioning */}
      <div className="hero-title-container">
        <h1 className="hero-title">
          <div className="line"><span>Kaushik Chariya</span></div>
        </h1>

      </div>

      <p className="hero-subtitle">AI , Data Science & Machine Learning Enthusiast</p>
      <a href="/#projects" className="hero-button"> View My Work </a>
    </section>
  );
};

export default Hero;