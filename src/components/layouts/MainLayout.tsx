import React from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="logo">AI Automation Hub</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/image-ai">Image Generation</Link></li>
          <li><Link to="/document-ai">Document Processor</Link></li>
          <li><Link to="/voice-assistant">Voice Assistant</Link></li>
          <li><Link to="/automation">Automation Dashboard</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 