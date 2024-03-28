import React from 'react';

const InfoAlert = ({ data, handleTouchMove }) => {
  return (  
    <div className='alert-circle-info' onTouchMove={handleTouchMove}>
      <h3>Profilaktyka w momencie przebywania w strefie:</h3>
      <h4>{data.effectName}</h4>
      <p>{data.prophylaxisInfo}</p>
    </div>
  );
};

export default InfoAlert;