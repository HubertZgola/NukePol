import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ReactDOMServer from 'react-dom/server';

const Circle = ({ cityCoordinates, selectedWarhead }) => {
  const map = useMap();

  const customMarkerIcon = L.divIcon({
    html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />),
    className: 'my-custom-pin',
    iconAnchor: [12, 24],
    popupAnchor: [0, -36]
  });

  useEffect(() => {
    console.log("City Coordinates:", cityCoordinates);
    console.log("Selected Warhead:", selectedWarhead);
    if (cityCoordinates && selectedWarhead) {
      const warheadRanges = {
        '20t': 2000,
        '15kt': 15000,
        '100Mt': 100000
      };

      L.marker(cityCoordinates, { icon: customMarkerIcon }).addTo(map);

      L.circle(cityCoordinates, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.1,
        radius: warheadRanges[selectedWarhead]
      }).addTo(map);
    }
  }, [cityCoordinates, selectedWarhead, customMarkerIcon, map]);

  return null;
};

export default Circle;