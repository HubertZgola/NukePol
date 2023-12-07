import React, { useState, useEffect } from 'react';
import './styles/app.scss';
import FullScreenMap from './components/fullScreanMap';
import Nav from './components/Nav';
import 'leaflet/dist/leaflet.css';
import Footer from './components/Footer';

const App = () => {
  const [cityCoordinates, setCityCoordinates] = useState(null);
  const [selectedWarhead, setSelectedWarhead] = useState('20t');
  const [explosionType, setExplosionType] = useState('SurfaceExplosion');
  const [shouldDrawCircle, setShouldDrawCircle] = useState(false);
  const [isDetonated, setIsDetonated] = useState(false);
  const [mapKey, setMapKey] = useState(Date.now());
  const [simulationEffects, setSimulationEffects] = useState({
    overpressure3000psi: false,
    overpressure200psi: false,
    overpressure20psi: false,
    overpressure5psi: false,
    overpressure1psi: false,
    ionizing50Sv: false,
    ionizing10Sv: false,
    ionizing6Sv: false,
    ionizing1Sv: false,
    Pierwszego: false,
    Drugiego: false,
    Trzeciego: false,
    Czwartego: false,
    fireball: false
  });

  const handleDetonate = (coordinates) => {
    setCityCoordinates([coordinates.lat, coordinates.lon]);
    setShouldDrawCircle(true);
    setIsDetonated(true);
  };

  const handleCityChange = (newCity) => {
    setShouldDrawCircle(false);
    setCityCoordinates(null);
  };

  const handleEffectsChange = (newEffects) => {
    setSimulationEffects(prevEffects => ({ ...prevEffects, ...newEffects }));
  };

  const clearDetonation = () => {
    setShouldDrawCircle(false);
    setIsDetonated(false);
    setCityCoordinates(null);
    setMapKey(Date.now());
  };

  useEffect(() => {
    console.log("App - City Coordinates:", cityCoordinates);
    console.log("App - Selected Warhead:", selectedWarhead);
    console.log("App - Explosion Type:", explosionType);
    console.log("App - Simulation Effects:", simulationEffects);
  }, [cityCoordinates, selectedWarhead, explosionType, simulationEffects]);

  return (
    <div>
      <Nav 
        onDetonate={handleDetonate}
        setSelectedWarhead={setSelectedWarhead}
        setExplosionType={setExplosionType}
        handleCityChange={handleCityChange}
        onEffectsChange={handleEffectsChange}
        isDetonated={isDetonated}
        clearDetonation={clearDetonation}
        setSimulationEffects={setSimulationEffects}
      />
      <FullScreenMap 
        key={mapKey}
        cityCoordinates={cityCoordinates}
        selectedWarhead={selectedWarhead}
        explosionType={explosionType}
        shouldDrawCircle={shouldDrawCircle}
        simulationEffects={simulationEffects}
      />
      <Footer />
    </div>
  );
};

export default App;
