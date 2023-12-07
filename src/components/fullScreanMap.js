import { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import Circle from './Circle';
import 'leaflet/dist/leaflet.css';

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const FullScreenMap = ({ cityCoordinates, selectedWarhead, shouldDrawCircle, simulationEffects, explosionType }) => {
  const zoomLevel = 10;
  const defaultPosition = useMemo(() => [52.0693, 19.4803], []);

  const [mapCenter, setMapCenter] = useState(defaultPosition);
  const [mapZoom, setMapZoom] = useState(7);

  useEffect(() => {
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
      {cityCoordinates && <ChangeView center={cityCoordinates} zoom={mapZoom} />}
      {cityCoordinates && selectedWarhead && shouldDrawCircle && 
        <Circle cityCoordinates={cityCoordinates} selectedWarhead={selectedWarhead} effects={simulationEffects} explosionType={explosionType} />}
    </MapContainer>
  );
};

export default FullScreenMap;
