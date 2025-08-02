import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

import stockPredictionImg from '../assets/StockPricePrediction.jpg';
import ecommerceImg from '../assets/K-scents.jpg';
import biomarkImg from '../assets/Biomark.jpg';

function Projects() {
  return (
    <div className="projects-section">
      <h2>Featured Projects</h2>
             <div className="projects-grid">
         <ProjectCard
           image={ecommerceImg}
           title="K-Scents"
           description="A full-stack shopping site using MERN stack."
           projectKey="kscents"
         />
         <ProjectCard
           image={biomarkImg}
           title="BioMark"
           description="Biometric system using Python and OpenCV."
           projectKey="biomark"
         />
         <ProjectCard
           image={stockPredictionImg}
           title="Stock Price Prediction"
           description="ML-powered stock price prediction using Python and Streamlit."
           projectKey="stock-prediction"
         />
       </div>
    </div>
  );
}

export default Projects;






