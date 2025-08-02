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
        {/* Left side - image + short desc */}
        <div className="project-left">
          <img src={stockPredictionImg} alt="Stock Price Prediction Project" className="project-details-img" />
          <div className="short-description">
            A machine learning model for predicting stock prices using historical data analysis.
          </div>
          <div className="project-links">
            <a 
              href="https://github.com/rixavvvvv/StockPricePrediction.git" 
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
              <li>Python</li>
              <li>TensorFlow</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
            </ul>
          </div>

          {/* Project Description Section */}
          <div className="project-description-section">
            <h2>📈 Stock Price Prediction — ML Analytics Platform</h2>
            <p>
              An advanced machine learning system that analyzes historical stock market data to predict future price movements. 
              The platform uses sophisticated algorithms and data analysis techniques to provide insights for investment decisions, 
              featuring real-time data processing and interactive visualizations.
            </p>
            {showFullText && (
              <>
                <div className="project-features">
                  <h4>🔬 Data Analysis Pipeline:</h4>
                  <ul>
                    <li>Historical stock data collection and preprocessing</li>
                    <li>Feature engineering and technical indicator calculation</li>
                    <li>Time series analysis and pattern recognition</li>
                    <li>Machine learning model training and validation</li>
                    <li>Real-time prediction and confidence scoring</li>
                  </ul>
                </div>
                
                <div className="project-structure">
                  <h4>📁 Technical Architecture:</h4>
                  <ul>
                    <li><strong>Data Processing:</strong> Pandas for data manipulation and analysis</li>
                    <li><strong>ML Framework:</strong> TensorFlow for deep learning models</li>
                    <li><strong>Numerical Computing:</strong> NumPy for mathematical operations</li>
                    <li><strong>Visualization:</strong> Matplotlib for data visualization</li>
                    <li><strong>API Integration:</strong> Real-time stock data feeds</li>
                  </ul>
                </div>
                
                <div className="project-features">
                  <h4>🚀 Key Features:</h4>
                  <ul>
                    <li>📊 Advanced data visualization and charts</li>
                    <li>🤖 Machine learning prediction models</li>
                    <li>📈 Technical indicator analysis</li>
                    <li>⚡ Real-time data processing</li>
                    <li>📱 Interactive dashboard interface</li>
                  </ul>
                </div>
                
                <div className="project-database">
                  <h4>📊 Data Sources & Models:</h4>
                  <p><strong>Data Sources:</strong> Historical stock prices, volume, technical indicators, market sentiment</p>
                  <p><strong>ML Models:</strong> LSTM networks, Random Forest, Linear Regression, ARIMA</p>
                  <p><strong>Features:</strong> Moving averages, RSI, MACD, Bollinger Bands, price momentum</p>
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