import React from 'react';

const HappyPlace: React.FC = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: '#000' }}>
      <img 
        src="https://i.imgur.com/ameZRJZ.png" 
        alt="Happy Place" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          display: 'block' 
        }} 
      />
    </div>
  );
};

export default HappyPlace;
