import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  useGSAP(() => {
    // Animation for the main content (photo and text paragraphs)
    gsap.from(".about-content-item", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      duration: 1,
      opacity: 0,
      x: -50,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Animation for the sticker
    gsap.from(".hii-sticker", {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      duration: 0.8,
      opacity: 0,
      x: -100,
      rotation: -45,
      delay: 0.5,
      ease: 'back.out(1.7)'
    });

  }, { scope: container });

  return (
    <section id="about" ref={container}>
      <h2 className="section-title">About</h2>
      <div className="about-text-center">
          <p className="about-content-item about-intro">
            Hi, I'm Kaushik Chariya.
          </p>
          <p className="about-content-item">
          I am currently pursuing a Master of Computer Applications (MCA) from Gujarat Technological University, having completed my Bachelor of Computer Applications from Bhakta Kavi Narsinh Mehta University. My core interests lie in Artificial Intelligence, Data Science, and MLOps — I don't just build models, I build systems that take them all the way to production.
          </p>
          <p className="about-content-item">
          My journey started with Python fundamentals and data analysis, but quickly evolved into end-to-end ML engineering. I've developed a strong foundation in the full data science stack — from exploratory data analysis and feature engineering to training and evaluating models using Scikit-learn, handling real-world challenges like missing values, class imbalance, and data drift along the way.

          </p>
          <p className="about-content-item">
          What sets my work apart is the MLOps layer. I've built production-grade pipelines with automated training, model evaluation, and deployment — integrating tools like MLflow for experiment tracking, DVC for data versioning, and Docker for containerization. My projects are deployed on AWS using EC2, ECR, and S3, with full CI/CD automation through GitHub Actions. Whether it's a spam detection engine with Gmail OAuth2 integration or a vehicle insurance prediction system with a self-hosted deployment runner — I focus on building things that actually work in the real world, not just in notebooks.
          </p>
          <p className="about-content-item">
  I'm currently working on something close to my heart — an AI system aimed at helping the agricultural community by making intelligent tools accessible to those who need them most. It's a project that combines my technical skills with a genuine desire to create real social impact.
</p>
      </div>
    </section>
  );
};

export default About;