import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2025 - Present",
    title: "Master of Computer Applications (MCA)",
    company: "Gujarat Technological University",
    description: "At Gujarat Technological University, I built a solid understanding of Machine Learning techniques and core algorithms through practical implementation."
  },
  {
    year: "2025 - 2026",
    title: "Completed Machine Learning training...",
    company: "QSpiders | Empowering IT & Software Careers with...",
    description: "Gained hands-on experience in data Analysis, contributing to real-world projects and enhancing analytical skills."
  },
  {
    year: "2022 - 2025",
    title: "Bachelor of Computer Applications (B.C.A)",
    company: "Bhakta Kavi Narsinh Mehta University.",
    description: "Completed a Bachelor of Computer Applications (B.C.A) with a CGPA of 7.89, focusing on core areas like Python, SQL, and web development."
  },
];

const Experience = () => {
  const container = useRef();

  useGSAP(() => {
    // Animate the timeline items on scroll
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section id="experience" ref={container}>
      <h2 className="section-title">My Journey</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-year">{item.year}</p>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-company">{item.company}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;