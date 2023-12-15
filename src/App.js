import React, { useState, useCallback } from 'react';
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
    fireball: false
  });
  const [circleInfo, setCircleInfo] = useState([]);

  const updateCircleInfo = useCallback((newInfo) => {
    setCircleInfo(newInfo);
    // setCircleInfo(prevInfo => [...prevInfo, newInfo]);
  }, []);

  const handleDetonate = (coordinates) => {
    setCityCoordinates([coordinates.lat, coordinates.lon]);
    setShouldDrawCircle(true);
    setIsDetonated(true);
    setCircleInfo([]); // Resetowanie informacji o efektach przy detonacji
  };

  const handleCityChange = (newCity) => {
    setShouldDrawCircle(false);
    setCityCoordinates(null);
    setCircleInfo([]); // Resetowanie informacji o efektach przy zmianie miasta
  };

  const handleEffectsChange = (newEffects) => {
    setSimulationEffects(prevEffects => ({ ...prevEffects, ...newEffects }));
  };

  const clearDetonation = () => {
    setShouldDrawCircle(false);
    setIsDetonated(false);
    setCityCoordinates(null);
    setMapKey(Date.now());
    setCircleInfo([]); // Resetowanie informacji o efektach przy czyszczeniu detonacji
  };


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
        isDetonated={isDetonated}
        setCircleInfo={updateCircleInfo}
        circleInfo={circleInfo}
      />
      <Footer />
    </div>
  );
};

export default App;
