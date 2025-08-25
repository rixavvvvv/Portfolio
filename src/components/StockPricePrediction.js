import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetails.css';
import stockPredictionImg from '../assets/StockPricePrediction.jpg';

const StockPricePrediction = () => {
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
        
        <div className="project-left">
          <img src={stockPredictionImg} alt="Stock Price Prediction Project" className="project-details-img" />
          <div className="short-description">
            A POS Billing System project that streamlines sales, inventory, and customer transactions with an intuitive interface and efficient billing process.
          </div>
          <div className="project-links">
            <a 
              href="https://github.com/rixavvvvv/Pos-Billing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </div>
        </div>

        
        <div className="project-right">
          {/* Tech Stack Section */}
          <div className="project-top-right">
            <h3>Tech Stack</h3>
            <ul>
              <li>React</li>
              <li>NextJS</li>
              <li>TypeScript</li>
              <li>Postgresql</li>
              <li>RestFull API</li>
            </ul>
          </div>

          {/* Project Description Section */}
          <div className="project-description-section">
            <h2>📈 POS-billing   — Efficient Sales and Inventory Management.</h2>
            <p>
              A POS Billing System built with Next.js and TypeScript that streamlines sales,
              billing, and inventory management. It enables quick transactions, secure data handling,
              and an intuitive interface for businesses to manage operations efficiently while ensuring accuracy and scalability..
            </p>
            {showFullText && (
              <>
                <div className="project-features">
                  <h4>🔬 Pipeline & Working :</h4>
                  <ul>
                    <li>Customers/cashiers interact with the POS via a responsive Next.js UI</li>
                    <li>API routes in Next.js process billing, product search, and cart updates.</li>
                    <li>PostgreSQL stores and retrieves products, invoices, and transaction records</li>
                    <li>JWT verifies user sessions before allowing billing or admin actions.</li>
                    <li>Final bill generated, stored in DB, and displayed in UI.</li>
                  </ul>
                </div>
                
                <div className="project-structure">
                  <h4>📁 Technical Architecture:</h4>
                  <ul>
                    <li><strong>Frontend:</strong> React.js with TypeScript for responsive UI</li>
                    <li><strong>Backend:</strong> Node.js + Express.js for RESTful APIs</li>
                    <li><strong>Database:</strong> PostgreSQL for secure and scalable data storage</li>
                    <li><strong>Visualization:</strong> Matplotlib for data visualization</li>
                    <li><strong>Authentication:</strong> JWT-based user authentication and role management</li>
                  </ul>
                </div>
                
                <div className="project-features">
                  <h4>🚀 Key Features:</h4>
                  <ul>
                    <li>🛒 Seamless Billing & Checkout – Fast and accurate invoice generation with tax and discount handling.</li>
                    <li>📦 Inventory Management – Real-time product tracking with stock updates.</li>
                    <li>👤 Role-Based Access – Secure authentication for admin, cashier, and staff.</li>
                    <li>📑 Invoice History & Reports – Easy access to past transactions with export options.</li>
                    <li>⚡ Responsive & Fast UI – Built with Next.js for smooth, device-friendly experience.</li>
                  </ul>
                </div>
                
                <div className="project-database">
                  <h4>📊 Data Sources & Models:</h4>
                  <p><strong>👤 Users Collection: </strong>Stores user profiles, authentication credentials, and role-based access (Admin, Cashier, Staff).</p>
                  <p><strong>📦 Products Collection: </strong>Contains product details such as name, price, SKU, stock quantity, and category.</p>
                  <p><strong>🧾 Orders Collection: </strong>Tracks orders with invoice details, purchased products, total amount, payment method, and status.</p>
                  <p><strong>💳 Payments Collection: </strong> Manages transaction records including payment type (cash, card, UPI), amount, and confirmation status.</p>
                  <p><strong>📈 Report Collection: </strong> Stores sales analytics, daily summaries, and performance insights for business tracking.</p>
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

export default StockPricePrediction; 