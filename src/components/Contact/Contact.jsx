import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();
  
  useGSAP(() => {
     gsap.from(container.current.children, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-text">
        I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      <a href="mailto:chariyakaushik1435@gmail.com" className="contact-button">Say Hello </a>
    </section>
  );
};

export default Contact;