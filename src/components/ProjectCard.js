import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, projectKey }) => {
  const navigate = useNavigate();

  // Mapping project keys to their respective route paths
  const projectRoutes = {
    biomark: '/project/biomark',
    kscents: '/project/kscents',
    'stock-prediction': '/project/stock-prediction',
  };

  const route = projectRoutes[projectKey] || '/projects'; // fallback

  const handleReadMore = () => {
    navigate(route);
  };

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <button className="read-more-button" onClick={handleReadMore}>
        Read More
      </button>
    </div>
  );
};

export default ProjectCard;




