// Nav.js
import React, { useState } from 'react';
import Settings from './Settings';

const Nav = ({ onDetonate, setSelectedWarhead, handleCityChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSettings = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <h1>Nuke<span>Pol</span></h1>
        <button onClick={toggleSettings}>Ustawienia Detonacji</button>
      </nav>

      <div className={`settings ${isOpen ? 'active' : ''}`}>
        <Settings 
          isOpen={isOpen} 
          onDetonate={onDetonate} 
          setIsOpen={setIsOpen}
          setSelectedWarhead={setSelectedWarhead} 
          handleCityChange={handleCityChange}
        />
      </div>
    </>
  );
};

export default Nav;
