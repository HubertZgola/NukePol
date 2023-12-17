import React, {useState} from 'react';
import effectFontColors from '../ulilities/effectFontColors';
import processEffect from '../ulilities/processEffect';

const AboutCircle = ({data, currentEffectColors, onEffectClick }) => {
  // console.log("data:", data);
  // console.log("circleData:", circleData);
  
  const [selectedEffect, setSelectedEffect] = useState(null);

  const localHandleEffectClick = (effect, index) => {
    setSelectedEffect(index);
    onEffectClick(effect);
  };

  // Kopiowanie i sortowanie danych według 'circleArea'
  const sortedData = [...data].sort((a, b) => b.distance - a.distance);

  return (
    <div className="about-circle-info">
      <h2>Informacje o efektach:</h2>
      {sortedData.map((item, index) => (
        <div 
          key={index} 
          onClick={() => localHandleEffectClick(item.effect, index)} 
          style={{ 
            backgroundColor: selectedEffect === index ? 'blue' : currentEffectColors[item.effect],
            color: effectFontColors[item.effect],
            padding: '10px',
            margin: '10px',
            borderRadius: '20px'
          }}
        >
          <p><b>Efekt {index + 1}</b>: {processEffect(item.effect)}</p>
          <p><b>Odległość od miejsca wybuchu:</b> {item.distance} km</p>
          <p><b>Pole powierzchni wybuchu:</b> {item.circleArea} km²</p>
        </div>
      ))}
    </div>
  );
}

export default AboutCircle;