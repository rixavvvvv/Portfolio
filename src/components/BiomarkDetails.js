import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetails.css';
import biomarkImg from '../assets/Biomark.jpg';

const Biomark = () => {
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
          <img src={biomarkImg} alt="BioMark Project" className="project-details-img" />
          <div className="short-description">
            A biometric attendance system using Python and OpenCV for facial recognition.
          </div>
          <div className="project-links">
            <a 
              href="https://github.com/rixavvvvv/Biomark.git" 
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
              <li>OpenCV</li>
              <li>LBPH Algorithm</li>
              <li>NumPy</li>
              <li>Tkinter</li>
            </ul>
          </div>

          {/* Project Description Section */}
          <div className="project-description-section">
            <h2>🔍 BioMark — Advanced Biometric Attendance System</h2>
            <p>
              BioMark is a facial recognition-based attendance management system developed using Django, OpenCV, and SQLite. 
              The system captures facial data from a webcam, trains it using the LBPH (Local Binary Pattern Histogram) algorithm, 
              and automates attendance tracking in real time. This eliminates the need for manual logins or biometric devices 
              like fingerprint scanners, ensuring a contactless, secure, and efficient experience.
            </p>
            {showFullText && (
              <>
                <div className="project-features">
                  <h4>🔄 Workflow and Pipeline:</h4>
                  <ol>
                    <li><strong>User Registration and Face Data Collection:</strong> Students register via Django form, system captures multiple facial images using webcam</li>
                    <li><strong>Model Training:</strong> Images train facial recognition model using LBPH algorithm for accuracy in varied lighting</li>
                    <li><strong>Real-Time Face Recognition:</strong> Webcam compares live facial input with trained images for attendance marking</li>
                    <li><strong>Attendance Dashboard:</strong> Admins view attendance records with filtering and export functionality</li>
                  </ol>
                </div>
                
                <div className="project-structure">
                  <h4>📁 Project Modules (Django App: attendance/):</h4>
                  <ul>
                    <li><strong>models.py:</strong> Student and Attendance models for database</li>
                    <li><strong>forms.py:</strong> Django forms for user input</li>
                    <li><strong>views.py:</strong> Controls logic for registration, training, recognition, and attendance</li>
                    <li><strong>urls.py:</strong> Maps frontend URLs to views</li>
                    <li><strong>migrations/:</strong> Django ORM migration scripts for setting up DB tables</li>
                  </ul>
                </div>
                
                <div className="project-features">
                  <h4>🚀 Key Features:</h4>
                  <ul>
                    <li>👤 Contactless biometric attendance</li>
                    <li>📷 Face capture, training, and recognition</li>
                    <li>📅 Auto-recording of timestamped entries</li>
                    <li>🧠 Model training using LBPH</li>
                    <li>📑 Admin dashboard for attendance management</li>
                  </ul>
                </div>
                
                <div className="project-database">
                  <h4>📊 Database Structure:</h4>
                  <p><strong>Student Table:</strong> ID, Name, Roll Number, Images (file paths)</p>
                  <p><strong>Attendance Table:</strong> ID, Student ID (Foreign Key), Date, Time, Status</p>
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

export default Biomark;
