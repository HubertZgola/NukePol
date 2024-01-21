import React, { useState } from 'react';
import BasicSettings from './BasicSettings';
import AdvSettings from './AdvSettings';

// Komponent Settings zarządza ustawieniami symulacji.
const Settings = ({ 
    isOpen, 
    handleWarheadChange, 
    updateBasicSettings, 
    setBasicSettings, 
    generateReport, 
    onDetonate, 
    setIsOpen, 
    setSelectedWarhead, 
    handleCityChange, 
    onEffectsChange, 
    setExplosionType 
  }) => {
  // Lokalny stan przechowujący nazwę miasta dla ustawień.
  const [city, setCity] = useState('');
  
  // Funkcja wyszukująca współrzędne miasta na podstawie jego nazwy.
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

  // Funkcja obsługująca kliknięcie przycisku detonacji.
  const handleDetonateClick = async () => {
    const coordinates = await findCityCoordinates(city);
    if (coordinates) {
       // Wywołanie funkcji z props naDetonate z znalezionymi współrzędnymi.
      onDetonate(coordinates);
      // Zamykanie panelu ustawień.
      setIsOpen(false);
    }
  };
  
   // Renderowanie komponentu tylko gdy jest otwarty (isOpen).
  return isOpen && (
    <div className="settings-container">
      <BasicSettings 
        city={city} 
        setCity={setCity} 
        handleDetonateClick={handleDetonateClick}
        setSelectedWarhead={setSelectedWarhead} 
        handleCityChange={handleCityChange}
        setExplosionType={setExplosionType}
        generateReport={generateReport}
        setBasicSettings={setBasicSettings}
        updateBasicSettings={updateBasicSettings}
        handleWarheadChange={handleWarheadChange}
      />
      <AdvSettings 
        onEffectsChange={onEffectsChange}
        generateReport={generateReport}
      />
    </div>
  );
};

export default Settings;
