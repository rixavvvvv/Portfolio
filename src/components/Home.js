// src/components/Home.js
import React from 'react';
import './Home.css';

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
            {/* Tech decorative elements */}
            <div className="tech-decoration"></div>
            <div className="tech-decoration"></div>
            <div className="tech-decoration"></div>
            
            <div className="home-container">
                <div className="hero-content">
                    <div className="hero-header">
                        <div className="hero-title">
                            <h1 className="main-title">
                                Hello, I'm <span className="highlight">Rishabh</span>
                            </h1>
                            <div className="title-subtitle">
                                <span className="role-tag">Frontend Developer</span>
                                <span className="role-tag">Tech Enthusiast</span>
                                <span className="role-tag">Problem Solver</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-description">
                        <p className="hero-text">
                            A passionate <strong>Tech Enthusiast</strong> and <strong>Mern Developer </strong> 
                            who loves crafting intuitive user experiences and solving complex challenges with data and code. 
                            I'm actively shaping the tech space through development, collaboration, and community leadership.
                        </p>
                        <p className="hero-text-secondary">
                            Currently focused on building modern web applications and exploring the latest technologies 
                            to create impactful digital solutions.
                        </p>
                    </div>
                    
                    {/* <div className="hero-stats">
                        <div className="stat-card">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Innovation</span>
                        </div>
                    </div> */}
                    
                    <div className="hero-cta">
                        <button className="cta-button primary" onClick={scrollToProjects}>
                            <span>View My Work</span>
                        </button>
                        <button className="cta-button secondary" onClick={scrollToContact}>
                            <span>Get In Touch</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

