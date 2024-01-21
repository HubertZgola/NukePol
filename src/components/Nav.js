// Nav.js
import React, { useState } from 'react';
// Import komponentu ustawień
import Settings from './Settings';

// Komponent Nav zarządza nawigacją i ustawieniami aplikacji.
const Nav = ({ 
    onDetonate, 
    handleWarheadChange, 
    updateBasicSettings, 
    setBasicSettings, 
    generateReport, 
    setSelectedWarhead, 
    handleCityChange, 
    onEffectsChange, 
    isDetonated, 
    clearDetonation, 
    setExplosionType, 
    setSimulationEffects 
  }) => {
  
  // Lokalny stan do zarządzania widocznością ustawień.
  const [isOpen, setIsOpen] = useState(false);
  
  // Funkcja do przełączania widoczności panelu ustawień.
  const toggleSettings = () => {
    setIsOpen(!isOpen);
    // Resetowanie ustawień przy otwieraniu panelu
    if(!isOpen){
      resetSettings();
    }
  };

  // Funkcja resetująca ustawienia symulacji do wartości domyślnych.
  const resetSettings = () => {
    setSelectedWarhead('20t');
    setExplosionType('SurfaceExplosion');
    // Resetowanie efektów symulacji
    setSimulationEffects({
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
  };

  // Renderowanie komponentu
  return (
    <>
      <nav className="navbar">
        <h1>Nuke<span>Pol</span></h1>
        <button onClick={toggleSettings}>Ustawienia Detonacji</button>
        {isDetonated && <button onClick={clearDetonation}>Wyczyść Detonacje</button>}
        {isDetonated && <button onClick={generateReport}>Pobierz Raport</button>}
      </nav>

      <div className={`settings ${isOpen ? 'active' : ''}`}>
        <Settings 
          isOpen={isOpen} 
          onDetonate={onDetonate} 
          setIsOpen={setIsOpen}
          setSelectedWarhead={setSelectedWarhead} 
          handleCityChange={handleCityChange}
          onEffectsChange={onEffectsChange}
          setExplosionType={setExplosionType}
          generateReport={generateReport}
          setBasicSettings={setBasicSettings}
          updateBasicSettings={updateBasicSettings}
          handleWarheadChange={handleWarheadChange}
        />
      </div>
    </>
  );
};

export default Nav;
