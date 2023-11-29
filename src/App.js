import { useState, useEffect } from 'react';
import './styles/app.scss';
import FullScreenMap from './components/fullScreanMap';
import Nav from './components/Nav';
import 'leaflet/dist/leaflet.css';
import Footer from './components/Footer';

const App = () => {
  // Stan dla przechowywania współrzędnych mapy
  const [cityCoordinates, setCityCoordinates] = useState(null);
  //Stan dla wartości mocy pierwszego pocisku.
  const [selectedWarhead, setSelectedWarhead] = useState('20t');
  
  const [shouldDrawCircle, setShouldDrawCircle] = useState(false);

  // Funkcja, która zostanie wywołana po "detonacji" - czyli po znalezieniu współrzędnych miasta
  const handleDetonate = (coordinates) => {
    setCityCoordinates([coordinates.lat, coordinates.lon]);
    setShouldDrawCircle(true);
  };

  const handleCityChange = (newCity) => {
    setShouldDrawCircle(false);
    setCityCoordinates(null);
    // resetCircle();
  };

  // const resetCircle = () => {
  //   setCityCoordinates(null);       // Reset współrzędnych miasta
  //   setShouldDrawCircle(false);     // Wyłącz rysowanie okręgu
  // };

  useEffect(() => {
    console.log("App - City Coordinates:", cityCoordinates);
    console.log("App - Selected Warhead:", selectedWarhead);
  }, [cityCoordinates, selectedWarhead]);
  

  return (
    <div>
      <Nav 
        onDetonate={handleDetonate} 
        setSelectedWarhead={setSelectedWarhead} 
        handleCityChange={handleCityChange}
        /> {/* Przekazujemy funkcję handleDetonate do komponentu Nav */}
      <FullScreenMap 
        cityCoordinates={cityCoordinates} 
        selectedWarhead={selectedWarhead}
        shouldDrawCircle={shouldDrawCircle} /> {/* Przekazujemy współrzędne do komponentu mapy */}
      <Footer />
    </div>
  );
};

export default App;