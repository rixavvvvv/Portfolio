// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm a passionate <strong>Computer Science student</strong> with a deep love for technology and innovation. 
            My journey in the tech world began with curiosity and has evolved into a commitment to creating meaningful 
            digital solutions that make a difference.
          </p>
          <p className="about-text">
            With expertise in <strong>React</strong>, <strong>JavaScript</strong>, and <strong>C++</strong>, 
            I specialize in building modern, scalable applications that deliver exceptional user experiences. 
            My approach combines technical excellence with creative problem-solving, ensuring that every project 
            I work on is not just functional, but also intuitive and engaging.
          </p>
          <p className="about-subtitle">
            "Technology is best when it brings people together." - Matt Mullenweg
          </p>
          
          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-name">Frontend Development</div>
                <div className="skill-description">React, JavaScript, HTML5, CSS3, Modern UI/UX</div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Programming Languages</div>
                <div className="skill-description">C++, JavaScript, Python, Java</div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Development Tools</div>
                <div className="skill-description">Git, VS Code, Webpack, npm</div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Problem Solving</div>
                <div className="skill-description">Algorithms, Data Structures, System Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
