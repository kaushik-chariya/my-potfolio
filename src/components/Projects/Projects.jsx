import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projectsData } from '../../projectData';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
        toggleActions: "play none none reset"
      },
      duration: 0.8,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, { scope: container });

  return (
    <section id="projects" ref={container}>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              {/* This Link makes the image clickable */}
              <Link to={`/project/${project.slug}`}>
                <img src={project.imageUrl} alt={`${project.title} thumbnail`} className="project-image" />
              </Link>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => <li key={i}>{tech}</li>)}
              </ul>
              <Link to={`/project/${project.slug}`} className="case-study-button">
                View Case Study →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;