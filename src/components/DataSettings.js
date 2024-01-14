import React from 'react';

const DataSettings = ({ generateReport, settings, setSettings }) => {
  
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSettings({ ...settings, [name]: checked });
  };

  return (
    <div className="settings-container-element">
      <h2>GENERUJ RAPORT</h2>
      <label>
        <h3>Wykres zależności dawki promieniowania<br />pomiędzy odległością a centrum wybuchu</h3>
        <input
          type="checkbox"
          name="radiationChart"
          checked={settings.radiationChart || false}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        <h3>Wykres zależności nadciśnienia <br />a odległością centrum wybuchu</h3>
        <input
          type="checkbox"
          name="pressureChart"
          checked={settings.pressureChart || false}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        <h3>Tabela zależności dawki promieniowania<br />pomiędzy odległością a centrum wybuchu</h3>
        <input
          type="checkbox"
          name="radiationTable"
          checked={settings.radiationTable || false}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        <h3>Tabela zależności nadciśnienia <br />a odległością centrum wybuchu</h3>
        <input
          type="checkbox"
          name="pressureTable"
          checked={settings.pressureTable || false}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        <h3>Wymiary chmury grzyba atomowego</h3>
        <input
          type="checkbox"
          name="mushroomCloudDimensions"
          checked={settings.mushroomCloudDimensions || false}
          onChange={handleCheckboxChange}
          />
          </label>
          <button className="generate" onClick={generateReport}>Pobierz Raport</button>
          </div>
          );
          };
          
          export default DataSettings;
          
          