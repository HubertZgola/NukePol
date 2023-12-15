import React from 'react';

const InfoAlert = ({ effect }) => {
  return (
    <div style={{ position: 'fixed', left: '10px', top: '10px', zIndex: 900 }}>
      <h3>Informacje o efekcie</h3>
      <p>{effect}</p>
    </div>
  );
};

export default InfoAlert;