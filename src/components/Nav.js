// Nav.js
import React, { useState } from 'react';
import Settings from './Settings';

const Nav = ({ onDetonate, setSelectedWarhead, handleCityChange, onEffectsChange, isDetonated, clearDetonation, setExplosionType, setSimulationEffects }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSettings = () => {
    setIsOpen(!isOpen);
    
    if(!isOpen){
      resetSettings();
    }
  };

  const resetSettings = () => {
    setSelectedWarhead('20t');
    setExplosionType('SurfaceExplosion');
    setSimulationEffects({
      ionizing1Sv: false,
      ionizing6Sv: false,
      ionizing10Sv: false,
      ionizing50Sv: false,
      overpressure1psi: false,
      overpressure5psi: false,
      overpressure20psi: false,
      overpressure200psi: false,
      overpressure3000psi: false,
      Pierwszego: false,
      Drugiego: false,
      Trzeciego: false,
      fireball: false
    });
  };

  return (
    <>
      <nav className="navbar">
        <h1>Nuke<span>Pol</span></h1>
        <button onClick={toggleSettings}>Ustawienia Detonacji</button>
        {isDetonated && <button onClick={clearDetonation}>Wyczyść Detonacje</button>}
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
        />
      </div>
    </>
  );
};

export default Nav;
