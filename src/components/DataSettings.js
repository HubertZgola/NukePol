import React from 'react';

const DataSettings = () => {
  return (
    <div className="settings-container-element">
        <h2>USTAWIENIA DANYCH</h2>
      <h3>Generuj Wykres</h3>
      <label>
        <p>Wykres w przeglądarce</p>
        <input type="checkbox" name=""/>
      </label>
      <label>
        <p>Wykres eksportowany do pliku .csv</p>
        <input type="checkbox" name=""/>
      </label>
      <label>
        <p>Wykres eksportowany do pliku .xltm</p>
        <input type="checkbox" name=""/>
      </label>
      <h3>Generuj Tabelę</h3>
      <label>
        <p>Tabela w przeglądarce</p>
        <input type="checkbox" name=""/>
      </label>
      <label>
        <p>Tabela eksportowana do pliku .xltm</p>
        <input type="checkbox" name=""/>
      </label>
      <h3>Wizualizacja</h3>
      <label>
        <p>Wymiary chmury grzybowej</p>
        <input type="checkbox" name="cloud"/>
      </label>
      <label>
        <p>Krater</p>
        <input type="checkbox" name="crater"/>
      </label>
    </div>
  );
};

export default DataSettings;