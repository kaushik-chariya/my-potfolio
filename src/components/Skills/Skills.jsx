import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const skills = {
  "Programming Languages": ["Python", "SQL", "JavaScript"],
  "Data Science & ML": ["NumPy", 'Pandas',"Scikit-Learn",'Statsmodels', "OpenCV"],
  "Databases": ["MySQL", "PostgreSQL"],
  'Data Visualization & Tools' : ["Matplotlib", "Seaborn",'Plotly', "Excel", "Tableau"],
  "Web Development": ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Reactjs"],
};

const Skills = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".skill-item", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: "play none none none"
      },
      duration: 0.5,
      opacity: 0,
      x: -30,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container}>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, list]) => (
          <div className="skills-category" key={category}>
            <h3>{category}</h3>
            <ul className="skills-list">
              {list.map(skill => (
                <li className="skill-item" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;