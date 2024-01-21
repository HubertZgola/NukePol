import React, { useState, useCallback } from 'react';
import './styles/app.scss';
import FullScreenMap from './components/fullScreenMap';
import Nav from './components/Nav';
import 'leaflet/dist/leaflet.css'; // Importowanie stylów dla Leaflet, biblioteki map.
import Footer from './components/Footer';
import ReportGenerator from './components/ReportGenerator';
import { createRoot } from 'react-dom/client'; // Import do renderowania komponentów React.
import jsPDF from 'jspdf'; // Biblioteka do generowania dokumentów PDF.
import html2canvas from 'html2canvas';  // Biblioteka do konwersji HTML na canvas, używana w generowaniu raportu.

// Główny komponent aplikacji.
const App = () => {
  // Hooki useState do zarządzania stanem aplikacji.
  // Przechowują różne informacje o symulacji i UI.
  const [cityCoordinates, setCityCoordinates] = useState(null);
  const [selectedWarhead, setSelectedWarhead] = useState('20t');
  const [explosionType, setExplosionType] = useState('SurfaceExplosion');
  const [shouldDrawCircle, setShouldDrawCircle] = useState(false);
  const [isDetonated, setIsDetonated] = useState(false);
  const [mapKey, setMapKey] = useState(Date.now());
  const [basicSettings, setBasicSettings] = useState({});
  const [advancedSettings, setAdvancedSettings] = useState({});
  const [simulationEffects, setSimulationEffects] = useState({
    // Objekt do przechowywania efektów symulacji.
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
  const [circleInfo, setCircleInfo] = useState([]);

  const updateBasicSettings = (type, value) => {
    setBasicSettings(prevSettings => ({ ...prevSettings, [type]: value }));
  };
  
  // W App.js
const handleWarheadChange = (newWarhead) => {
  setBasicSettings(prevSettings => ({ ...prevSettings, selectedWarhead: newWarhead }));
};


  const updateCircleInfo = useCallback((newInfo) => {
    setCircleInfo(newInfo);
  }, []);

  const handleDetonate = (coordinates) => {
    // Funkcja wywoływana przy detonacji, aktualizująca stan aplikacji.
    setCityCoordinates([coordinates.lat, coordinates.lon]);
    setShouldDrawCircle(true);
    setIsDetonated(true);
    setCircleInfo([]); // Resetowanie informacji o efektach przy detonacji
  };

  const handleCityChange = (newCity) => {
    // Funkcja wywoływana przy zmianie miasta w UI, resetuje część stanu.
    setBasicSettings(prevSettings => ({ ...prevSettings, city: newCity }));
    setShouldDrawCircle(false);
    setCityCoordinates(null);
    setCircleInfo([]); // Resetowanie informacji o efektach przy zmianie miasta
  };
  
  const handleEffectsChange = (newEffects) => {
    setSimulationEffects(prevEffects => ({ ...prevEffects, ...newEffects }));
  };

  const clearDetonation = () => {
     // Resetuje stan aplikacji do stanu początkowego.
    setShouldDrawCircle(false);
    setIsDetonated(false);
    setCityCoordinates(null);
    setMapKey(Date.now());
    setCircleInfo([]);
  };
  const generateReport = () => {
    // Funkcja generująca raport w formacie PDF.
    const reportData = { 
      basicSettings, 
      advancedSettings, 
      dataSettings: {}, 
      circleData: circleInfo
    };
  
    const reportElement = document.createElement('div');
    document.body.appendChild(reportElement);
  
    const root = createRoot(reportElement);
    root.render(<ReportGenerator {...reportData} />);
  
    setTimeout(() => {
      html2canvas(reportElement, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: 'a3',
        });
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('RaportSymulacyjny.pdf');
  
        root.unmount();
        document.body.removeChild(reportElement);
      }).catch(error => {
        console.error('Error generating canvas:', error);
        root.unmount();
        document.body.removeChild(reportElement);
      });
    }, 1000); // Opóźnienie jest potrzebne, aby zapewnić czas na wyrenderowanie komponentów.
  };
 // Renderowanie głównych komponentów UI.
  return (
    <div>
      <Nav 
       // Przekazywanie funkcji jako props do komponentów.
        onDetonate={handleDetonate}
        setSelectedWarhead={setSelectedWarhead}
        setExplosionType={setExplosionType}
        handleCityChange={handleCityChange}
        onEffectsChange={handleEffectsChange}
        isDetonated={isDetonated}
        clearDetonation={clearDetonation}
        setSimulationEffects={setSimulationEffects}
        generateReport={generateReport}
        setBasicSettings={setBasicSettings}
        updateBasicSettings={updateBasicSettings}
        handleWarheadChange={handleWarheadChange}
      />
      <FullScreenMap 
      // Przekazywanie stanu i funkcji do komponentu mapy.
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
