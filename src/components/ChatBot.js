import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetails.css';
import chatbotImg from '../assets/Chatbot.jpg';

const ChatBot = () => {
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
          <img src={chatbotImg} alt="ChatBot Project" className="project-details-img" />
          <div className="short-description">
            An intelligent chatbot built with Python and natural language processing.
          </div>
          <div className="project-links">
            <a 
              href="https://github.com/rixavvvvv/Chatbot.git" 
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
              <li>NLTK</li>
              <li>TensorFlow</li>
              <li>Flask</li>
              <li>HTML/CSS</li>
            </ul>
          </div>

          {/* Project Description Section */}
          <div className="project-description-section">
            <h2>🤖 ChatBot — Intelligent Conversational AI</h2>
            <p>
              A sophisticated chatbot system that leverages natural language processing and machine learning to provide 
              intelligent responses to user queries. The system uses advanced NLP techniques to understand context, 
              maintain conversation flow, and deliver relevant information in a conversational manner.
            </p>
            {showFullText && (
              <>
                <div className="project-features">
                  <h4>🔄 Core Functionality:</h4>
                  <ul>
                    <li>Natural language understanding and processing</li>
                    <li>Context-aware conversation management</li>
                    <li>Machine learning-based response generation</li>
                    <li>Web-based user interface</li>
                    <li>Real-time chat capabilities</li>
                  </ul>
                </div>
                
                <div className="project-structure">
                  <h4>📁 Technical Architecture:</h4>
                  <ul>
                    <li><strong>NLP Engine:</strong> Natural language processing using NLTK</li>
                    <li><strong>ML Model:</strong> TensorFlow-based response generation</li>
                    <li><strong>Web Framework:</strong> Flask backend with RESTful API</li>
                    <li><strong>Frontend:</strong> Responsive HTML/CSS interface</li>
                    <li><strong>Data Processing:</strong> Text preprocessing and feature extraction</li>
                  </ul>
                </div>
                
                <div className="project-features">
                  <h4>🚀 Key Features:</h4>
                  <ul>
                    <li>💬 Intelligent conversation handling</li>
                    <li>🧠 Context-aware responses</li>
                    <li>🌐 Web-based chat interface</li>
                    <li>📊 Response accuracy tracking</li>
                    <li>🔧 Easy customization and training</li>
                  </ul>
                </div>
                
                <div className="project-database">
                  <h4>📊 System Components:</h4>
                  <p><strong>NLP Module:</strong> Text processing, tokenization, and semantic analysis</p>
                  <p><strong>ML Engine:</strong> Response generation and conversation modeling</p>
                  <p><strong>Web Interface:</strong> User-friendly chat interface with real-time updates</p>
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

export default ChatBot;


