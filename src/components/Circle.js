import React, { useEffect, useRef, useCallback } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ReactDOMServer from 'react-dom/server';
import warheadRadii from '../ulilities/warheadRadii';

const Circle = ({ cityCoordinates, selectedWarhead = '20t', effects, explosionType, setCircleInfo, effectColors, onEffectClick, selectedEffect }) => {
    const map = useMap();
    const circlesRef = useRef(new Map());  // Dodana referencja do przechowywania okręgów

    const customMarkerIcon = L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />),
        className: 'my-custom-pin',
        iconAnchor: [12, 24],
        popupAnchor: [0, -36]
    });

    // Funkcja obliczająca odległość przy użyciu formuły Haversine
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371e3; // metry
        const φ1 = lat1 * Math.PI / 180; // φ, λ w radianach
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                  Math.cos(φ1) * Math.cos(φ2) *
                  Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        console.log(`Obliczona odległość dla lat1=${lat1}, lon1=${lon1}, lat2=${lat2}, lon2=${lon2}:`, (R * c) / 1000);
        return (R * c) / 1000; // Wynik w kilometrach
    };

    const calculateCircleArea = (r) => {
        console.log(`Obliczona powierzchnia koła dla promienia ${r}:`, Math.PI * r * r);
        return Math.PI * r * r;
    };

    const generateCircleData = useCallback(() => {
        let circleData = [];
        console.log("Wywołanie generateCircleData");
        console.log("Wygenerowane circleData:", circleData);
        L.marker(cityCoordinates, { icon: customMarkerIcon }).addTo(map);


        console.log('Rozpoczęcie generowania danych koła');
        Object.entries(effects).forEach(([effect, isActive]) => {
            if (isActive) {
                const effectRadius = warheadRadii[explosionType]?.[selectedWarhead]?.[effect];
                if (effectRadius !== undefined) {
                    const borderColor = effectColors[effect];
                    const circle = L.circle(cityCoordinates, {
                        color: borderColor,
                        fillColor: effectColors[effect],
                        fillOpacity: 0.2,
                        radius: effectRadius
                    }).addTo(map);
    
                    const edgeCoordinates = circle.getBounds().getNorthEast();
                    const distance = calculateDistance(cityCoordinates[0], cityCoordinates[1], edgeCoordinates.lat, edgeCoordinates.lng);
                    const circleArea = calculateCircleArea(distance);
    
                    circleData.push({
                        effect: effect,
                        distance: distance.toFixed(2),
                        circleArea: circleArea.toFixed(2)
                    });
    
                    // Zapisywanie okręgu w referencji
                    circlesRef.current.set(effect, circle);
                }
            }
        });
    
        return circleData;
    }, [cityCoordinates, selectedWarhead, effects, explosionType, customMarkerIcon, map, effectColors]);
// eslint-disable-next-line react-hooks/exhaustive-deps    
    useEffect(() => {
        const circleData = generateCircleData();
        if (circleData && circleData.length > 0) {
            console.log("Generated circleData in Circle:", circleData);
            setCircleInfo(circleData);
        }
    }, [cityCoordinates, selectedWarhead, effects, explosionType, setCircleInfo]);
    

    useEffect(() => {
        if (selectedEffect !== null) {
          circlesRef.current.forEach((circle, key) => {
            circle.setStyle({ color: key === selectedEffect ? 'blue' : effectColors[key] });
          });
        }
      }, [selectedEffect, effectColors]);

    return null;
};

export default Circle;
