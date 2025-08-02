import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetails.css';
import kscentsImg from '../assets/K-scents.jpg';

const Kscents = () => {
  const [showFullText, setShowFullText] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="project-details-container">
      <button 
        onClick={() => navigate('/')} 
        className="back-button"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease'
        }}
      >
        ← Back to Projects
      </button>
      <div className="project-details">
        {/* Left side - image + short desc */}
        <div className="project-left">
          <img src={kscentsImg} alt="K-Scents Project" className="project-details-img" />
          <div className="short-description">
            An e-commerce platform for premium fragrances with advanced features.
          </div>
          <div className="project-links">
            <a 
              href="https://github.com/rixavvvvv/K-scents.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Right side - tech stack and description */}
        <div className="project-right">
          {/* Tech Stack Section */}
          <div className="project-top-right">
            <h3>Tech Stack</h3>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Stripe</li>
            </ul>
          </div>

          {/* Project Description Section */}
          <div className="project-description-section">
            <h2>🌸 K-Scents — Premium Fragrance E-Commerce</h2>
            <p>
              A comprehensive e-commerce platform specializing in premium fragrances and perfumes. The platform features 
              a modern, user-friendly interface with advanced shopping capabilities, secure payment processing, and 
              robust inventory management system.
            </p>
            {showFullText && (
              <>
                <div className="project-features">
                  <h4>🛒 E-Commerce Features:</h4>
                  <ul>
                    <li>Product catalog with advanced filtering and search</li>
                    <li>Shopping cart and wishlist functionality</li>
                    <li>Secure payment processing with Stripe integration</li>
                    <li>User authentication and profile management</li>
                    <li>Order tracking and history</li>
                  </ul>
                </div>
                
                <div className="project-structure">
                  <h4>📁 Technical Architecture:</h4>
                  <ul>
                    <li><strong>Frontend:</strong> React.js with responsive design</li>
                    <li><strong>Backend:</strong> Node.js with Express framework</li>
                    <li><strong>Database:</strong> MongoDB for flexible data storage</li>
                    <li><strong>Payment:</strong> Stripe API integration</li>
                    <li><strong>Authentication:</strong> JWT-based user management</li>
                  </ul>
                </div>
                
                <div className="project-features">
                  <h4>🚀 Key Features:</h4>
                  <ul>
                    <li>🛍️ Advanced product search and filtering</li>
                    <li>💳 Secure payment processing</li>
                    <li>👤 User account management</li>
                    <li>📱 Responsive mobile design</li>
                    <li>📊 Admin dashboard for inventory</li>
                  </ul>
                </div>
                
                <div className="project-database">
                  <h4>📊 Database Schema:</h4>
                  <p><strong>Users Collection:</strong> User profiles, authentication data, order history</p>
                  <p><strong>Products Collection:</strong> Product details, pricing, inventory, categories</p>
                  <p><strong>Orders Collection:</strong> Order tracking, payment status, shipping information</p>
                </div>
              </>
            )}
            <button onClick={() => setShowFullText(!showFullText)} className="read-more-btn">
              {showFullText ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kscents;


