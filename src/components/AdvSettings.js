import React from 'react';

const AdvSettings = () => {
  return (
    <div className="settings-container-element">
        <h2>ZAAWANSOWANE USTAWIENIA</h2>
      <h3>Efekty Symulacji</h3>
      <label>
        <p>Pierścienie Nadciśnieniowe</p>
        <input type="checkbox" name="overpressure"/>
      </label>
      <label>
        <p>Pierścienie promieniowania jonizującego</p>
        <input type="checkbox" name="ionizing"/>
      </label>
      <label>
        <p>Pierścienie promieniowania cieplnego</p>
        <input type="checkbox" name="thermal"/>
      </label> 
      <label>
        <p>Kula Ognia</p>
        <input type="checkbox" name="fireball"/>
      </label>
    </div>
  );
};

export default AdvSettings;