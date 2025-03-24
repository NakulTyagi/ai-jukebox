import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to AI Automation Hub</h1>
      <div className="features-grid">
        <div className="feature-card">
          <h2>Image Generation</h2>
          <p>Create and manipulate images using AI</p>
          <Link to="/image-ai">Get Started</Link>
        </div>
        <div className="feature-card">
          <h2>Document Processing</h2>
          <p>Analyze and extract information from documents</p>
          <Link to="/document-ai">Get Started</Link>
        </div>
        <div className="feature-card">
          <h2>Voice Assistant</h2>
          <p>Control your automation with voice commands</p>
          <Link to="/voice-assistant">Get Started</Link>
        </div>
        <div className="feature-card">
          <h2>Automation Dashboard</h2>
          <p>Manage and monitor your automations</p>
          <Link to="/automation">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 