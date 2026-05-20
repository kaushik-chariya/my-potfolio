import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Achievements.css';

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  {
    title: "Machine Learning Specialization",
    skills: ["Supervised Learning", "Regression", "Decision Trees", "Neural Networks", "Unsupervised Learning"],
    link: "https://www.coursera.org"
  },
  {
    title: "Deep Learning Specialization",
    skills: ["CNN", "RNN & LSTM", "TensorFlow", "Hyperparameter Tuning", "Sequence Models"],
    link: "https://www.coursera.org"
  },
  {
    title: "Data Science Professional Certificate",
    skills: ["Python", "SQL", "Data Analysis (Pandas)", "Data Visualization (Seaborn)"],
    link: "https://www.coursera.org"
  },
  {
    title: "SQL for Data Science",
    skills: ["Database Design", "Joins & Subqueries", "PL/SQL", "Query Optimization"],
    link: "https://www.coursera.org"
  },
  {
    title: "Python for Everybody",
    skills: ["Python OOP", "Data Structures", "Web Scraping", "XML/JSON Processing"],
    link: "https://www.coursera.org"
  },
  {
    title: "Data Visualization with Tableau",
    skills: ["Interactive Dashboards", "Visual Storytelling", "Data Blending", "BI Analytics"],
    link: "https://www.coursera.org"
  },
  {
    title: "MLOps and Production Pipelines",
    skills: ["Docker", "Model Deployment", "FastAPI", "GitHub Actions", "CI/CD"],
    link: "https://www.coursera.org"
  },
  {
    title: "Computer Vision Basics",
    skills: ["OpenCV", "Image Processing", "Object Detection", "YOLOv8"],
    link: "https://www.coursera.org"
  },
  {
    title: "Natural Language Processing (NLP)",
    skills: ["Transformers", "BERT", "Hugging Face", "Sentiment Analysis"],
    link: "https://www.coursera.org"
  },
  {
    title: "Data Structures & Algorithms in Python",
    skills: ["Dynamic Programming", "Sorting", "Graph Algorithms", "Search Algorithms"],
    link: "https://www.coursera.org"
  },
  {
    title: "Git & GitHub Version Control",
    skills: ["Version Control", "Pull Requests", "Merge Conflict Resolution", "Branching Workflows"],
    link: "https://www.google.com"
  }
];

const Achievements = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".achievement-card", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: "play none none none"
      },
      duration: 0.6,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="achievements" ref={container}>
      <h2 className="section-title">Achievements & Certifications</h2>
      <div className="achievements-container">
        {achievementsData.map((cert, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-header">
              <h3>🏆 {cert.title}</h3>
            </div>
            <div className="achievement-body">
              <ul className="achievements-list">
                {cert.skills.map(skill => (
                  <li className="achievement-item" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="achievement-footer">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
