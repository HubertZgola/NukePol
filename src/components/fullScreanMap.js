import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import Circle from './Circle'; // Import komponentu Circle
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import ReactDOMServer from 'react-dom/server';

// const customMarkerIcon = L.divIcon({
//   html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />),
//   className: 'my-custom-pin',
//   iconAnchor: [12, 24],
//   popupAnchor: [0, -36]
// });

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const FullScreenMap = ({ cityCoordinates, selectedWarhead, shouldDrawCircle }) => {
  console.log("FullScreenMap - City Coordinates:", cityCoordinates);
  console.log("FullScreenMap - Selected Warhead:", selectedWarhead);
  const zoomLevel = 10; // Ustaw poziom zoomu po wybraniu miasta
  const defaultPosition = [52.0693, 19.4803]; // Domyślne współrzędne (środek Polski)

  const [mapCenter, setMapCenter] = useState(defaultPosition);
  const [mapZoom, setMapZoom] = useState(7); // Domyślny zoom mapy

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
      {/* {cityCoordinates && (
        // <Marker position={cityCoordinates} icon={customMarkerIcon} />
      )} */}
      {cityCoordinates && selectedWarhead && shouldDrawCircle && <Circle cityCoordinates={cityCoordinates} selectedWarhead={selectedWarhead} />}
    </MapContainer>
  );
};

export default FullScreenMap;
