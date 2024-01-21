import React, { useState } from 'react';

// Komponent AdvSettings odpowiada za zaawansowane ustawienia symulacji.
const AdvSettings = ({ onEffectsChange }) => {
  // Stan przechowujący informacje o aktywnych efektach w symulacji.
  const [effects, setEffects] = useState({
    // Lista efektów z początkowymi wartościami true/false
    ionizing0025Sv: false,
    ionizing01Sv: false,
    ionizing1Sv: true,
    ionizing6Sv: true,
    ionizing20Sv: true,
    overpressure1psi: true,
    overpressure5psi: true,
    overpressure20psi: true,
    overpressure200psi: false,
    overpressure3000psi: false,
    Pierwszego: false,
    Drugiego: false,
    Trzeciego: false,
    fireball: false
  });

   // Funkcja do przełączania stanu poszczególnych efektów
  const toggleEffect = (effectName) => {
    // Aktualizacja stanu efektu oraz przekazanie zmian do komponentu nadrzędnego
    const updatedEffects = {
      ...effects,
      [effectName]: !effects[effectName]
    };
    setEffects(updatedEffects);
    onEffectsChange(updatedEffects);
  };
  
  // Renderowanie interfejsu użytkownika
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
      {['20Sv', '6Sv', '1Sv', '01Sv', '0025Sv'].map((Sv) => (
        <label key={Sv}>
          <p>{`Dawka Promieniowania ${Sv === '01Sv' ? '0.1Sv' : (Sv === '0025Sv' ? '0.025Sv' : Sv)}`}</p>
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
