import React from 'react';

const BasicSettings = ({city, handleWarheadChange, updateBasicSettings, setCity, handleDetonateClick, setSelectedWarhead, handleCityChange, setExplosionType }) => {

  // const handleWarheadChange = (e) => {
  //   const newWarhead = e.target.value;
  //   setSelectedWarhead(newWarhead); // Aktualizacja lokalnego stanu
  //   handleWarheadChange(newWarhead); // Aktualizacja globalnego stanu w App.js
  // };

  const onCityInputChange = (e) => {
    setCity(e.target.value);
    handleCityChange(e.target.value);
  };

  const handleExplosionTypeChange = (e) => {
    const newType = e.target.value;
    setExplosionType(newType); // Aktualizacja lokalnego stanu
    updateBasicSettings('explosionType', newType); // Aktualizacja globalnego stanu w App.js
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
      <select onChange={(e) => {
      setSelectedWarhead(e.target.value); // Aktualizacja lokalnego stanu
      handleWarheadChange(e.target.value); // Aktualizacja globalnego stanu w App.js
    }}>
        <option value="20t">„Davy Crockett” – Najmniejsza wyprodukowana bomba w USA (20 t)</option>
        <option value="300t">„B-61 Mod 3” – Najmniejsza obecnie posiadana bomba w arsenele USA (300 t)</option>
        <option value="15kt">„Little Boy” – Bomba zdetonowana w Hiroszimie (15 kt)</option>
        <option value="100kt">„W-76” – Posiadana w arsenele SLBM w USA i w Wielkiej Brytani (100 kt)</option>
        <option value="300kt">„TN 80/81” – Największa bomba posiadana w arsenale Francji (300kt)</option>
        <option value="800kt">„Topol (SS-25)” – Bomba w obecnym arsenale Rosyjskim (800kt)</option>
        <option value="5Mt">„Dong Feng-5” – Rakietowy pocisk balistyczny międzykontynentalnego zasięgu z obecnego arsenału Chin (5 Mt)</option>
        <option value="100Mt">„Car Bomba” – Największa zaprojektowana bomba ZSRR (100 Mt)</option>
      </select>
      <button className="danger" onClick={handleDetonateClick}>Detonuj</button>
    </div>
  );
};

export default BasicSettings;
