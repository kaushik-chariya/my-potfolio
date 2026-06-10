import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const skills = {
  "Data Science & ML": ["NumPy", 'Pandas',"Scikit-Learn",'Statsmodels', "Feature Engineering",'EDA',"NLP", "TF-IDF",],
  "Deep Learning": ["TensorFlow", 'Keras',"PyTorch",'YOLOv8', "U-Net",'OpenCV',"Computer Vision", "CNN",],
  "MLOps & Deployment" : ['MLflow','DVC','Docker','GitHub Actions','AWS EC2','AWS ECR | AWS S3',' CI/CD Pipelines'],
  "Programming Languages": ["Python", "SQL", "JavaScript"],
  "Databases": ["MySQL", "PostgreSQL"],
  'Monitoring & Visualization' : ["Matplotlib", "Seaborn",'Plotly', "Excel"],
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
