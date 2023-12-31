import React from 'react';

const BasicSettings = ({ city, setCity, handleDetonateClick, setSelectedWarhead, handleCityChange, setExplosionType }) => {

  const handleWarheadChange = (e) => {
    setSelectedWarhead(e.target.value);
  };

  const onCityInputChange = (e) => {
    setCity(e.target.value);
    handleCityChange(e.target.value);
  };

  const handleExplosionTypeChange = (e) => {
    setExplosionType(e.target.value);
  };

  return (
    <div className="settings-container-element">
      <h2>PODSTAWOWE USTAWIENIA</h2>
      <h3>Wybierz lokalizację wybuchu</h3>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={onCityInputChange}
        placeholder="Wpisz miasto..."
      />
      <h3>Wybierz sposób wybuchu</h3>
      <div>
        <label>
          <p>Na powierzchni</p>
          <input 
            type="radio" 
            name="explosionType" 
            value="SurfaceExplosion"
            onChange={handleExplosionTypeChange}
            defaultChecked // Domyślnie zaznaczone
          />
        </label>
        <label>
          <p>W powietrzu</p>
          <input 
            type="radio" 
            name="explosionType" 
            value="AirExplosion"
            onChange={handleExplosionTypeChange}
          />
        </label>
      </div>
      <h3>Wybierz rodzaj głowicy</h3>
      <select onChange={handleWarheadChange}>
        <option value="20t">„Davy Crockett” – USA (20 t)</option>
        <option value="15kt">„Little Boy” – bomba w Hiroszimie (15 kt)</option>
        <option value="100Mt">„Car Bomba” - największa zaprojektowana bomba ZSRR (100 Mt)</option>
      </select>
      <label>
        <h3>Wyświetl ilość ofiar</h3>
        <input type="checkbox" name="displayCasualties"/>
      </label>
      <button className="danger" onClick={handleDetonateClick}>Detonuj</button>
    </div>
  );
};

export default BasicSettings;
