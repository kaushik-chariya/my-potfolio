import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Achievements from '../components/Achievements/Achievements';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <About />
      </div>
      <Experience />
      <div className="container">
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </>
  );
};

// THIS IS THE CRUCIAL LINE THAT WAS MISSING
export default HomePage;