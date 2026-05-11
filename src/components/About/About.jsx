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
            I am currently pursuing a Master of Computer Applications (MCA) from Gujarat Technological University. I previously completed my Bachelor of Computer Applications from Bhakta Kavi Narsinh Mehta University. I have a strong interest in Artificial Intelligence, Data Science, and Machine Learning, and I enjoy working on real-world problems using data-driven approaches.
          </p>
          <p className="about-content-item">
            I started with the fundamentals of Python programming and gradually moved into data analysis using libraries such as Pandas, NumPy, and Matplotlib. Exploring datasets through Exploratory Data Analysis (EDA) helped me understand patterns, trends, and relationships within data. As I progressed, I learned various machine learning algorithms including Linear Regression, Logistic Regression, Decision Trees, and Random Forest. I also focused on understanding key concepts such as model evaluation, feature engineering, and handling real-world data challenges like missing values and outliers.
          </p>
          <p className="about-content-item">
            I'm passionate about listening to music and keeping up with new trends and emerging technologies, always curious to learn and explore beyond my comfort zone. I enjoy discovering innovative ideas, staying updated with the latest advancements in technology, and continuously enhancing my knowledge through self-learning and exploration.
          </p>
      </div>
    </section>
  );
};

export default About;