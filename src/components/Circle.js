import React, { useEffect, useRef, useCallback } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ReactDOMServer from 'react-dom/server';
import warheadRadii from '../ulilities/warheadRadii';

const Circle = ({ cityCoordinates, selectedWarhead = '20t', effects, explosionType, setCircleInfo, effectColors }) => {
    const map = useMap();
    const previousDataRef = useRef();

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

    const calculateCircleArea = (r) => Math.PI * r * r;

    const generateCircleData = useCallback(() => {
        let circleData = [];
        L.marker(cityCoordinates, { icon: customMarkerIcon }).addTo(map);

        Object.entries(effects).forEach(([effect, isActive]) => {
            if (isActive && warheadRadii[explosionType][selectedWarhead][effect]) {
                const circle = L.circle(cityCoordinates, {
                    color: effectColors[effect],
                    fillColor: effectColors[effect],
                    fillOpacity: 0.2,
                    radius: warheadRadii[explosionType][selectedWarhead][effect]
                }).addTo(map);

                const edgeCoordinates = circle.getBounds().getNorthEast();
                const distance = calculateDistance(cityCoordinates[0], cityCoordinates[1], edgeCoordinates.lat, edgeCoordinates.lng);
                const circleArea = calculateCircleArea(distance);

                circleData.push({
                    effect: effect,
                    distance: distance.toFixed(2),
                    circleArea: circleArea.toFixed(2)
                });
            }
        });

        return circleData;
    }, [cityCoordinates, selectedWarhead, effects, explosionType, customMarkerIcon, map, effectColors]);

    useEffect(() => {
        const circleData = generateCircleData();

        if (JSON.stringify(circleData) !== JSON.stringify(previousDataRef.current)) {
            setCircleInfo(circleData);
            previousDataRef.current = circleData;
        }
    }, [cityCoordinates, selectedWarhead, effects, explosionType, generateCircleData, setCircleInfo]);

    return null;
};

export default Circle;
