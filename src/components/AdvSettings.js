import React, { useState } from 'react';

const AdvSettings = ({ onEffectsChange }) => {
  const [effects, setEffects] = useState({
    overpressure3000psi: false,
    overpressure200psi: false,
    overpressure20psi: false,
    overpressure5psi: false,
    overpressure1psi: false,
    ionizing20Sv: false,
    ionizing6Sv: false,
    ionizing1Sv: false,
    ionizing01Sv: false,
    Pierwszego: false,
    Drugiego: false,
    Trzeciego: false,
    fireball: false
  });

  const toggleEffect = (effectName) => {
    const updatedEffects = {
      ...effects,
      [effectName]: !effects[effectName]
    };
    setEffects(updatedEffects);
    onEffectsChange(updatedEffects);
  };

  return (
    <div className="settings-container-element">
      <h2>ZAAWANSOWANE USTAWIENIA</h2>
      <h3>Efekty Symulacji</h3>
      <label>
        <p>Kula Ognia</p>
        <input 
          type="checkbox" 
          name="fireball"
          checked={effects.fireball}
          onChange={() => toggleEffect('fireball')}
        />
      </label>
      <h4>Fala Uderzeniowa</h4>
      {['3000psi', '200psi', '20psi', '5psi', '1psi'].map((psi) => (
        <label key={psi}>
          <p>{`Pierścienie Nadciśnieniowe ${psi}`}</p>
          <input 
            type="checkbox" 
            name={`overpressure${psi}`}
            checked={effects[`overpressure${psi}`]}
            onChange={() => toggleEffect(`overpressure${psi}`)}
          />
        </label>
      ))}
      <h4>Pierścienie promieniowania jonizującego</h4>
      {['20Sv', '6Sv', '1Sv', '01Sv'].map((Sv) => (
        <label key={Sv}>
          <p>{`Dawka Promieniowania ${Sv === '01Sv' ? '0.1Sv' : Sv}`}</p>
          <input 
            type="checkbox" 
            name={`ionizing${Sv}`}
            checked={effects[`ionizing${Sv}`]}
            onChange={() => toggleEffect(`ionizing${Sv}`)}
          />
        </label>
      ))}
      <h4>Pierścienie promieniowania cieplnego</h4>
      {['Pierwszego', 'Drugiego', 'Trzeciego'].map((degree) => (
        <label key={degree}>
          <p>{`Oparzenia ${degree} Stopnia`}</p>
          <input 
            type="checkbox" 
            name={`${degree}`}
            checked={effects[`${degree}`]}
            onChange={() => toggleEffect(`${degree}`)}
          />
        </label>
      ))}
    </div>
  );
};

export default AdvSettings;
