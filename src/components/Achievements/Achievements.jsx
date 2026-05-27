import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Achievements.css';

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  {
    title: "🚀 MLOps",
    icon: "https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?utm_source=chatgpt.com",
    provider: "AWS Foundations",
    providerLink: "https://olympus.mygreatlearning.com/courses/102980/modules/items/4889358",
    skills: ["MLflow", "DVC", "Docker", "GitHub Actions", "AWS EC2 | AWS ECR | AWS S3",'CI/CD Pipelines'],
    link: "https://olympus.mygreatlearning.com/courses/102980/modules/items/4889358"
  },
  {
    title: "🧠 Machine Learning",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    provider: "AWS Foundations",
    providerLink: "https://aws.amazon.com/certification/",
    skills: ["Supervised Learning", "Regression", "Decision Trees", "Neural Networks", "Unsupervised Learning"],
    link: "/ml.pdf"
  },
  {
    title: "📊 Data Science & Analytics",
    icon: "https://cdn.simpleicons.org/hp/0096D6",
    provider: "HP Foundation",
    providerLink: "https://www.life-global.org",
    skills: ["Python", "SQL", "Data Analysis (np, pd)", "Data Visualization (plt, sns)", 'Fundamentals of ML'],
    link: "/Data Science & Analytics.pdf"
  },
  {
    title: "🐍 Data Analysis with Python",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    provider: "IBM",
    providerLink: "https://cognitiveclass.ai",
    skills: ["Python", "NumPy", "Pandas",'Data Cleaning','Data Visualization','Exploratory Data Analysis'],
    link: "/data-analysis.pdf"
  },
  {
    title: "📈 Data Visualisation",
    icon: "https://cdn.simpleicons.org/tata",
    provider: "Tata Group",
    providerLink: "https://www.theforage.com/",
    skills: ["Data Visualization", "Exploratory Data Analysis", "Visual Storytelling",'Data Communication'],
    link: "/data-visulation.pdf"
  },
  {
    title: "🗄️ SQL & Relational Databases",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    provider: "IBM",
    providerLink: "https://cognitiveclass.ai/",
    skills: ["SQL", "Database Design", "Relational Databases",'Joins and Subqueries','Query Optimization'],
    link: "/sql-certificate.pdf"
  }
];

const Achievements = () => {
  const container = useRef();
  
  useGSAP(() => {
    gsap.from(".achievement-item", {
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
    <section id="achievements" ref={container}>
      <h2 className="section-title">Achievements & Certifications</h2>
      <div className="achievements-container">
        {achievementsData.map((cert, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-header">
              <h3> {cert.title}
              </h3>
              <div className="provider-row">
                <img 
                src={cert.icon} 
                alt={cert.provider} 
                className="provider-icon" />

                <a 
                href={cert.providerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="provider view-cert-btn"
                >
                {cert.provider}
                </a>
              </div>
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
