import React from 'react';
import CardSelection from './CardSelection.tsx';

const Home = ({ title, imageUrl, redirectTo }) => {
  const titleStyle = {
    fontSize:  '2em',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    // Add more styles as needed
  };
  return (
    <div>
        <h1 style={titleStyle}>
          AI Juke Box
        </h1>
        <div style={{display:'flex', flexWrap:'wrap'}}>
          <CardSelection title="Translate AI" gradient="linear-gradient(45deg, #2193b0, #6dd5ed)" redirectTo="/translate" />
          <CardSelection title="Chat Bot" gradient="linear-gradient(45deg, #2193b0, #6dd5ed)" redirectTo="/chatbot" />
        </div>
    </div>
  );
};

export default Home;
