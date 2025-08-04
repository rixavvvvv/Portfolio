// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent('New Collaboration Request from Portfolio');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
GitHub: ${formData.github || 'Not provided'}

Message:
${formData.message}

---
Sent from your portfolio website
    `);
    
    // Open email client with pre-filled content
    const mailtoLink = `mailto:shrivastavrishabh003@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    // Show success message
    alert('Thank you for your message! Your email client will open with a pre-filled message. Please send it to complete the process.');
    
    // Reset form
    setFormData({ name: '', email: '', github: '', message: '' });
    setShowForm(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Let's connect and create something amazing together!</p>
        
                 {/* Social Media Stickers */}
         <div className="social-stickers">
           <div 
             className="sticker gmail-sticker"
             onClick={() => window.open('mailto:shrivastavrishabh003@gmail.com', '_blank')}
           >
             <div className="sticker-icon">
               <img src={emailIcon} alt="Email" />
             </div>
             <div className="sticker-label">Gmail</div>
             <div className="sticker-id">shrivastavrishabh003@gmail.com</div>
           </div>
           
           <div 
             className="sticker linkedin-sticker"
             onClick={() => window.open('https://www.linkedin.com/in/rishabh-shrivastav-46592a231/', '_blank')}
           >
             <div className="sticker-icon">
               <img src={linkedinIcon} alt="LinkedIn" />
             </div>
             <div className="sticker-label">LinkedIn</div>
             <div className="sticker-id">rishabh-shrivastav-46592a231</div>
           </div>
           
           <div 
             className="sticker github-sticker"
             onClick={() => window.open('https://github.com/rixavvvvv', '_blank')}
           >
             <div className="sticker-icon">
               <img src={githubIcon} alt="GitHub" />
             </div>
             <div className="sticker-label">GitHub</div>
             <div className="sticker-id">rixavvvvv</div>
           </div>
         </div>

        {/* Collaboration Button */}
        <div className="collaboration-section">
          <button 
            className="collaboration-btn"
            onClick={() => setShowForm(true)}
          >
            🤝 Start Collaboration
          </button>
        </div>

        {/* Collaboration Form Modal */}
        {showForm && (
          <div className="form-overlay" onClick={() => setShowForm(false)}>
            <div className="form-modal" onClick={(e) => e.stopPropagation()}>
              <div className="form-header">
                <h3>Let's Collaborate!</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowForm(false)}
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="collaboration-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="github">GitHub Profile</label>
                  <input
                    type="url"
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    placeholder="https://github.com/yourusername"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project or collaboration idea..."
                    rows="5"
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
