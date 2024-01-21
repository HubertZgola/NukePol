import React, { useEffect, useRef, useCallback } from 'react';
import { useMap } from 'react-leaflet'; // Hook do uzyskiwania dostępu do mapy Leaflet
import L from 'leaflet'; // Import biblioteki Leaflet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import ikon z FontAwesome
import ReactDOMServer from 'react-dom/server';
import warheadRadii from '../ulilities/warheadRadii'; // Dane o promieniach głowic

// Komponent Circle służy do rysowania okręgów na mapie
const Circle = ({ 
        cityCoordinates, 
        selectedWarhead = '20t', 
        effects, 
        explosionType, 
        setCircleInfo, 
        effectColors, 
        onEffectClick, 
        selectedEffect 
    }) => {
    
    const map = useMap(); // Uzyskanie dostępu do instancji mapy
    const circlesRef = useRef(new Map()); // Referencja do przechowywania okręgów

    // Tworzenie niestandardowej ikony markera
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
        return (R * c) / 1000; // Wynik w kilometrach
    };

    // Funkcja obliczająca powierzchnię koła
    const calculateCircleArea = (r) => {
        return Math.PI * r * r;
    };

    // Funkcja generująca dane o okręgach
    const generateCircleData = useCallback(() => {
        let circleData = [];
        // Dodanie markera na mapie
        L.marker(cityCoordinates, { icon: customMarkerIcon }).addTo(map);
        
        // Generowanie okręgów na podstawie aktywnych efektów
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
                        distance: distance.toFixed(3),
                        circleArea: circleArea.toFixed(3)
                    });
    
                    // Zapisywanie okręgu w referencji
                    circlesRef.current.set(effect, circle);
                }
            }
        });
    
        return circleData;
    }, [cityCoordinates, selectedWarhead, effects, explosionType, customMarkerIcon, map, effectColors]);
    
    // Efekt aktualizujący dane okręgów
    useEffect(() => {
        const circleData = generateCircleData();
        if (circleData && circleData.length > 0) {
            // Aktualizacja informacji o okręgach
            setCircleInfo(circleData);
        }
    }, [cityCoordinates, selectedWarhead, effects, explosionType, setCircleInfo]);
    
    // Efekt aktualizujący styl okręgów
    useEffect(() => {
        if (selectedEffect !== null) {
        // Aktualizacja stylu okręgów na podstawie wybranego efektu
        circlesRef.current.forEach((circle, key) => {
            circle.setStyle({ color: key === selectedEffect ? 'blue' : effectColors[key] });
          });
        }
      }, [selectedEffect, effectColors]);

    return null;
};

export default Circle;
