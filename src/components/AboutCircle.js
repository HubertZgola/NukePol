import React, {useState} from 'react';
import effectFontColors from '../ulilities/effectFontColors';
import processEffect from '../ulilities/processEffect';

const AboutCircle = ({data, currentEffectColors, onEffectClick }) => {
  // const circleData = data && data[0] ? data[0] : [];
  console.log("data:", data);
  // console.log("circleData:", circleData);
  
  const [selectedEffect, setSelectedEffect] = useState(null);

  const localHandleEffectClick = (effect, index) => {
    setSelectedEffect(index);
    onEffectClick(effect);
  };

  return (
    <div className="about-circle-info">
      <h2>Informacje o efektach:</h2>
      {data.map((item, index) => (
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
