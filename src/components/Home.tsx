import React from 'react';
import CardSelection from './CardSelection.tsx';

const Home = ({ title, imageUrl, redirectTo }) => {
  const titleStyle = {
    fontSize:  '2em',
    // color: '#333',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: 100,
    marginBottom: 100
    // Add more styles as needed
  };
  return (
    <div
    style={{
      height: '100vh', // Adjust as needed
      // display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white', // Text color
      fontFamily: 'Arial, sans-serif', // Adjust the font family
    }}
    >
        <div style={titleStyle}>
          AI Juke Box
        </div>
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
          <CardSelection title="Translate AI" gradient="linear-gradient(45deg, #2193b0, #6dd5ed)" redirectTo="/translate" />
          <CardSelection title="Chat Bot (Mad AI)" gradient="linear-gradient(45deg, #2193b0, #6dd5ed)" redirectTo="/chatbot" />
        </div>
    </div>
  );
};

export default Home;
