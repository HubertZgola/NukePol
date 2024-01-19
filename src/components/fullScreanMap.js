import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import Circle from './Circle';
import AboutCircle from './AboutCircle';
import effectColors from '../ulilities/effectColors';
import 'leaflet/dist/leaflet.css';
import InfoAlert from './InfoAlert';
import preventionInfo from '../ulilities/preventionInfo';
import processEffect from '../ulilities/processEffect';

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
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
  // console.log('Renderowanie FullScreenMap');
  const zoomLevel = 10;
  const defaultPosition = useMemo(() => [52.0693, 19.4803], []);
  const [selectedEffect, setSelectedEffect] = useState(null);
  const [mapCenter, setMapCenter] = useState(defaultPosition);
  const [mapZoom, setMapZoom] = useState(7);
  const [showInfoAlert, setShowInfoAlert] = useState(false);
  const [infoAlertData, setInfoAlertData] = useState(null);
  
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
    // console.log("Aktualizacja współrzędnych miasta:", cityCoordinates);
    // console.log("Poziom zoomu:", zoomLevel);
    if (cityCoordinates) {
      setMapCenter(cityCoordinates);
      setMapZoom(zoomLevel);
    }
  }, [cityCoordinates, zoomLevel]);

  return (
    <MapContainer className="fullscreen-map" center={mapCenter} zoom={mapZoom} whenCreated={setMapCenter}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {showInfoAlert && infoAlertData && (
        <InfoAlert data={infoAlertData}/>
      )}
      {cityCoordinates && <ChangeView center={cityCoordinates} zoom={mapZoom} />}
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
        />
      )}
    </MapContainer>
  );
};

export default FullScreenMap;
