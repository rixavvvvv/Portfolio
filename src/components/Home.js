// src/components/Home.js
import React from 'react';
import './Home.css';
import minnionImg from '../assets/Minnion.jpg';

function Home() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="home-section" id="home">
            <div className="home-container">
                <div className="home-left">
                    <div className="minnion-container">
                        <img src={minnionImg} alt="Minnion" className="minnion-img" />
                    </div>
                </div>
                <div className="home-right">
                    <div className="intro-content">
                        <div className="intro-header">
                            <h1 className="intro-title">
                                Hello, I'm <span className="highlight">Rishabh</span> 👋
                            </h1>
                            <div className="intro-subtitle">
                                <span className="role-tag">Frontend Developer</span>
                                <span className="role-tag">Tech Enthusiast</span>
                                <span className="role-tag">Problem Solver</span>
                            </div>
                        </div>
                        <div className="intro-description">
                            <p className="intro-text">
                                A passionate <strong>Tech Enthusiast</strong> and <strong>Frontend Developer</strong> 
                                who loves crafting intuitive user experiences and solving complex challenges with data and code. 
                                I'm actively shaping the tech space through development, collaboration, and community leadership.
                            </p>
                            <p className="intro-text-secondary">
                                Currently focused on building modern web applications and exploring the latest technologies 
                                to create impactful digital solutions.
                            </p>
                        </div>
                        <div className="intro-cta">
                            <button className="cta-button primary" onClick={scrollToProjects}>View My Work</button>
                            <button className="cta-button secondary" onClick={scrollToContact}>Get In Touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

