import React from 'react';
import effectFontColors from '../ulilities/effectFontColors';
import processEffect from '../ulilities/processEffect';

const AboutCircle = ({ data, changeEffectColor, currentEffectColors }) => {
  const circleData = data && data[0] ? data[0] : [];

  return (
    <div className="about-circle-info">
      <h2>Informacje o wybuchu</h2>
      {circleData.map((item, index) => (
        <div key={index} onClick={() => changeEffectColor(item.effect)}>
          <div style={{
            backgroundColor: currentEffectColors[item.effect],
            color: effectFontColors[item.effect],
            padding: '10px',
            margin: '10px',
            borderRadius: '20px'
          }}>
            <p><b>Efekt {index + 1}</b>: {processEffect(item.effect)}</p>
            <p><b>Odległość od miejsca wybuchu:</b> {item.distance} km</p>
            <p><b>Pole powierzchni wybuchu:</b> {item.circleArea} km²</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCircle;
