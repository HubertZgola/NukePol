import React, { useState } from 'react';
import BasicSettings from './BasicSettings';
import AdvSettings from './AdvSettings';
import DataSettings from './DataSettings';

const Settings = ({ isOpen, onDetonate, setIsOpen, setSelectedWarhead, handleCityChange, onEffectsChange, setExplosionType }) => {
  const [city, setCity] = useState('');

  const findCityCoordinates = async (cityName) => {
    const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(cityName)}&format=json&addressdetails=1&limit=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        return {
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon)
        };
      } else {
        alert('Nie znaleziono miasta.');
        return null;
      }
    } catch (error) {
      console.error('Error during city lookup:', error);
      alert('Wystąpił błąd podczas wyszukiwania miasta.');
      return null;
    }
  };

  const handleDetonateClick = async () => {
    const coordinates = await findCityCoordinates(city);
    if (coordinates) {
      onDetonate(coordinates);
      setIsOpen(false);
    }
  };

  return isOpen && (
    <div className="settings-container">
      <BasicSettings 
        city={city} 
        setCity={setCity} 
        handleDetonateClick={handleDetonateClick}
        setSelectedWarhead={setSelectedWarhead} 
        handleCityChange={handleCityChange}
        setExplosionType={setExplosionType} // Przekazywanie setExplosionType do BasicSettings
      />
      <AdvSettings onEffectsChange={onEffectsChange}/>
      <DataSettings />
    </div>
  );
};

export default Settings;
