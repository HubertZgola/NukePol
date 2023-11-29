import React from 'react';

const BasicSettings = ({city, setCity, handleDetonateClick, setSelectedWarhead, handleCityChange}) => {
  

  const handleWarheadChange = (e) => {
    console.log("Wybrana głowica:", e.target.value);
    setSelectedWarhead(e.target.value);
  };

  const onCityInputChange = (e) => {
    const newCity = e.target.value;
    setCity(newCity); // Aktualizuj stan lokalny
    handleCityChange(newCity); // Wywołaj funkcję z App.js, aby obsłużyć zmianę
  };

  return (
    <div className="settings-container-element">
      <h2>PODSTAWOWE USTAWIENIA</h2>
      <h3>Wybierz lokalizacje wybuchu</h3>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={onCityInputChange}
        placeholder="Wpisz miasto..."
      />
      <h3>Wybierz sposób wybuchu</h3>
      <label>
        <p>Na powierzchni</p>
        <input type="radio" name="ExplosionHeight"/>
      </label>
      <label>
        <p>W powietrzu</p>
        <input type="radio" name="ExplosionHeight"/>
      </label>
      <h3>Wybierz rodzaj głowicy</h3>
      <select onChange={handleWarheadChange}>
        <option value="20t">„Davy Crockett” – USA(20 t)</option>
        <option value="15kt">„Little Boy” – bomba w Hiroszimie (15 kt)</option>
        <option value="100Mt">„Car Bomba” - największa zaprojektowana bomba ZSRR (100 Mt)</option>
      </select>
      <label>
        <h3>Wyświetl ilość ofiar</h3>
        <input type="checkbox" name=""/>
      </label>
      <button className="danger" onClick={handleDetonateClick}>Detonuj</button>
    </div>
  );
};

export default BasicSettings;