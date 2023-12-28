import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardSelection = ({ title, gradient, redirectTo }) => {
    const navigate = useNavigate();

    const navigateToContacts = () => {
      navigate(redirectTo);
    };

  const cardStyle = {
    position: 'relative',
    width: '400px',
    height: '300px',
    backgroundImage: `url(https://assets.gatesnotes.com/8a5ac0b3-6095-00af-c50a-89056fbe4642/11eeb7f9-7512-49aa-abdc-a27001dd123e/AI_20230215_article-hero_1200x564.jpg)`,
    borderRadius: '10px',
    backgroundSize:'cover',
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
