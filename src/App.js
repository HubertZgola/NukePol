import React, { useState, useCallback } from 'react';
import './styles/app.scss';
import FullScreenMap from './components/fullScreanMap';
import Nav from './components/Nav';
import 'leaflet/dist/leaflet.css';
import Footer from './components/Footer';
import ReportGenerator from './components/ReportGenerator';
// import BasicSettings from './BasicSettings';
// import AdvSettings from './AdvSettings';
// import DataSettings from './DataSettings';
// import Circle from './components/Circle';
import { createRoot } from 'react-dom/client';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const App = () => {
  const [cityCoordinates, setCityCoordinates] = useState(null);
  const [selectedWarhead, setSelectedWarhead] = useState('20t');
  const [explosionType, setExplosionType] = useState('SurfaceExplosion');
  const [shouldDrawCircle, setShouldDrawCircle] = useState(false);
  const [isDetonated, setIsDetonated] = useState(false);
  const [mapKey, setMapKey] = useState(Date.now());
  const [basicSettings, setBasicSettings] = useState({});
  const [advancedSettings, setAdvancedSettings] = useState({});
  const [simulationEffects, setSimulationEffects] = useState({
    overpressure3000psi: false,
    overpressure200psi: false,
    overpressure20psi: false,
    overpressure5psi: false,
    overpressure1psi: false,
    ionizing20Sv: false,
    ionizing6Sv: false,
    ionizing1Sv: false,
    ionizing01Sv: false,
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
    // setCircleInfo(prevInfo => [...prevInfo, newInfo]);
  }, []);

  const handleDetonate = (coordinates) => {
    setCityCoordinates([coordinates.lat, coordinates.lon]);
    setShouldDrawCircle(true);
    setIsDetonated(true);
    setCircleInfo([]); // Resetowanie informacji o efektach przy detonacji
  };

  const handleCityChange = (newCity) => {
    setBasicSettings(prevSettings => ({ ...prevSettings, city: newCity }));
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
  const generateReport = () => {
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
    }, 1000); // Opóźnienie o 1000ms (1 sekunda)
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
        generateReport={generateReport}
        setBasicSettings={setBasicSettings}
        updateBasicSettings={updateBasicSettings}
        handleWarheadChange={handleWarheadChange}
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
