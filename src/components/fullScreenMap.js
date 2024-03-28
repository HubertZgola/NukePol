import React, { useState, useEffect, useMemo, useCallback } from 'react';
// Importowanie komponentów mapy z biblioteki react-leaflet
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
// Komponent do wyświetlania kręgów na mapie
import Circle from './Circle';
// Komponent wyświetlający informacje o kręgach
import AboutCircle from './AboutCircle';
// Kolory odpowiadające różnym efektom
import effectColors from '../ulilities/effectColors';
// Stylowanie mapy
import 'leaflet/dist/leaflet.css';
// Informacje szczegółowe
import InfoAlert from './InfoAlert';
// Profilaktyka w przypadku danego efektu
import preventionInfo from '../ulilities/preventionInfo';
// Funkcja do przetwarzania efektów
import processEffect from '../ulilities/processEffect';

// Komponent do zmiany widoku mapy
const ChangeView = ({ center, zoom }) => {
  // Użycie hooka do uzyskania dostępu do mapy
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
    // Aktualizacja widoku mapy
  }, [center, zoom, map]);
  return null;
};

const FullScreenMap = ({
  cityCoordinates, 
  selectedWarhead, 
  shouldDrawCircle, 
  simulationEffects, 
  explosionType,
  isDetonated,
  setCircleInfo,
  circleInfo
}) => {

  const zoomLevel = 10;
  // Domyślny poziom zoomu
  const defaultPosition = useMemo(() => [52.0693, 19.4803], []); 
  // Domyślna pozycja mapy
  const [selectedEffect, setSelectedEffect] = useState(null);
  // Wybrany efekt
  const [mapCenter, setMapCenter] = useState(defaultPosition);
  // Centrum mapy
  const [mapZoom, setMapZoom] = useState(7);
  // Poziom zoomu mapy
  const [showInfoAlert, setShowInfoAlert] = useState(false);
  // Stan dla alertu informacyjnego
  const [infoAlertData, setInfoAlertData] = useState(null);
  // Dane dla alertu informacyjnego
  
  const handleTouchMove = (e) => {
    e.stopPropagation();
  };

   // Funkcja wywoływana po kliknięciu na efekt
  const onEffectClick = useCallback((selectedEffect) => {
    setSelectedEffect(selectedEffect);
    const selectedData = circleInfo.find(item => item.effect === selectedEffect);
    if (selectedData) {
      setInfoAlertData({
        ...selectedData,
        effectName: processEffect(selectedEffect),
        prophylaxisInfo: preventionInfo[selectedEffect] || "Brak dostępnych informacji."
      });
      setShowInfoAlert(true);
    }
  }, [circleInfo]);

  useEffect(() => {
    // Aktualizacja centrum mapy i poziomu zoomu gdy zmieniają się współrzędne miasta
    if (cityCoordinates) {
      setMapCenter(cityCoordinates);
      setMapZoom(zoomLevel);
    }
  }, [cityCoordinates, zoomLevel]);

  return (
    <MapContainer 
      className="fullscreen-map" 
      center={mapCenter} 
      zoom={mapZoom} 
      whenCreated={setMapCenter}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {/* Wyświetlanie alertu z informacjami */}
      {showInfoAlert && infoAlertData && (
        <InfoAlert data={infoAlertData} handleTouchMove={handleTouchMove}/>
      )}
      {/* Zmiana widoku mapy */}
      {cityCoordinates && <ChangeView center={cityCoordinates} zoom={mapZoom} />}
      {/* Rysowanie kręgów na mapie */}
      {cityCoordinates && selectedWarhead && shouldDrawCircle && (
        <Circle
          cityCoordinates={cityCoordinates}
          selectedWarhead={selectedWarhead}
          effects={simulationEffects}
          explosionType={explosionType}
          setCircleInfo={setCircleInfo}
          effectColors={effectColors}
          onEffectClick={onEffectClick}
          selectedEffect={selectedEffect}
        />
      )}
      {isDetonated && (
        <AboutCircle 
          data={circleInfo}
          currentEffectColors={effectColors}
          onEffectClick={onEffectClick}
          selectedEffect={selectedEffect}
          handleTouchMove={handleTouchMove}
        />
      )}
    </MapContainer>
  );
};

export default FullScreenMap;
