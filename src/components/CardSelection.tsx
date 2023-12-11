import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CardSelection = ({ title, gradient, redirectTo }) => {
    const navigate = useNavigate();

    const navigateToContacts = () => {
      // 👇️ navigate to /contacts
      navigate(redirectTo);
    };
  
    const navigateHome = () => {
      // 👇️ navigate to /
      navigate('/');
    };
  const cardStyle = {
    position: 'relative',
    width: '300px',
    height: '200px',
    background: gradient || 'linear-gradient(45deg, #FF8C00, #FFD700)',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor:'pointer'
  };

  const titleStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div onClick={navigateToContacts} style={linkStyle}>
      <div style={cardStyle}>
        <div style={titleStyle}>{title}</div>
      </div>
    </div>
  );
};

export default CardSelection;
