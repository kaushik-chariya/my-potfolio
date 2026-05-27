import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

const Hero = () => {
  const container = useRef();
  
  const words = [
    "AI Enthusiast",
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Science Enthusiast",
    "MLOps Engineer",
    "NLP Enthusiast",
    "Computer Vision Enthusiast",
    "Analytics Engineer",
    "AI/ML Developer",
    "Data Analyst",
    "Cloud & AI Enthusiast",
    "Open Source Learner",
    "Tech Explorer"
  ];
  
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const currentFullText = words[wordIndex];
      
      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        setTypingSpeed(80); // Speed of typing
        
        if (currentText === currentFullText) {
          setTypingSpeed(2000); // Wait before deleting
          setIsDeleting(true);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        setTypingSpeed(40); // Faster delete speed
        
        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500); // Pause before next word
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

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

    // --- ANIMATION FOR THE AI MASCOT IMAGE ---
    // 1. The initial "pop-in" animation
    gsap.from(".hero-image-container", {
      delay: 1.0,
      duration: 1.5,
      scale: 0.8,
      opacity: 0,
      ease: 'power4.out'
    });
    
    // 2. The continuous "floating" animation
    gsap.to(".hero-image-wrapper", {
      y: -20, // Moves up and down by 20px
      duration: 3,
      repeat: -1, // Repeats forever
      yoyo: true, // Reverses the animation smoothly
      ease: 'sine.inOut'
    });

  }, { scope: container });

  return (
    <section id="hero" ref={container} className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title-container">
            <h1 className="hero-title">
              <div className="line"><span>Kaushik Chariya</span></div>
            </h1>
          </div>

          <p className="hero-subtitle">
            <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </p>
          <a href="/#projects" className="hero-button"> View My Work </a>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src="/robo-ai.png" alt="Robo AI Mascot" className="hero-image" />
            <a 
              href="https://wa.me/919016883191?text=Hello Kaushik" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-whatsapp-btn"
              title="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.019 14.12 1.002 11.993 1.002c-5.442 0-9.87 4.372-9.874 9.802-.001 1.761.47 3.479 1.365 5.011L2.398 21.14l5.438-1.41c1.54.85 3.097 1.298 4.805 1.298zM17.11 14.1c-.27-.133-1.597-.788-1.846-.879-.25-.09-.43-.134-.61.134-.18.27-.7.879-.857 1.06-.158.18-.316.2-.587.067-.27-.133-1.14-.42-2.17-1.34-.802-.715-1.343-1.6-1.5-1.87-.158-.27-.017-.417.118-.551.121-.12.27-.316.406-.473.135-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.61-1.471-.837-2.013-.22-.53-.44-.457-.61-.466-.156-.008-.337-.01-.518-.01s-.473.067-.72.337c-.25.27-.954.934-.954 2.279s.977 2.641 1.11 2.82c.134.18 1.92 2.932 4.654 4.113.65.28 1.157.447 1.554.573.652.207 1.246.178 1.714.108.522-.078 1.597-.652 1.82-1.25.223-.6.223-1.113.157-1.222-.067-.11-.25-.2-.52-.333z"/>
              </svg>
              <span className="wa-btn-text">Say Hello...</span>
              <span className="wa-btn-cursor">|</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;