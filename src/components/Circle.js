import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ReactDOMServer from 'react-dom/server';

const Circle = ({ cityCoordinates, selectedWarhead = '20t', effects, explosionType }) => {
    const map = useMap();

    const customMarkerIcon = L.divIcon({
        html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />),
        className: 'my-custom-pin',
        iconAnchor: [12, 24],
        popupAnchor: [0, -36]
    });

    useEffect(() => {
        // Definicje stałych wartości dla różnych efektów w zależności od typu wybuchu i wybranej głowicy
        const warheadRadii = {
          SurfaceExplosion: {
              '20t': {
                  overpressure3000psi: 200,
                  overpressure200psi: 500,
                  overpressure20psi: 1000,
                  overpressure5psi: 1500,
                  overpressure1psi: 2000,
                  ionizing50Sv: 2500,
                  ionizing10Sv: 3000,
                  ionizing6Sv: 3500,
                  ionizing1Sv: 4000,
                  Pierwszego: 4500,
                  Drugiego: 5000,
                  Trzeciego: 5500,
                  Czwartego: 6000,
                  fireball: 100
              },
              '15kt': {
                  overpressure3000psi: 1500,
                  overpressure200psi: 2000,
                  overpressure20psi: 3000,
                  overpressure5psi: 4000,
                  overpressure1psi: 5000,
                  ionizing50Sv: 6000,
                  ionizing10Sv: 7000,
                  ionizing6Sv: 8000,
                  ionizing1Sv: 9000,
                  Pierwszego: 10000,
                  Drugiego: 11000,
                  Trzeciego: 12000,
                  Czwartego: 13000,
                  fireball: 1000
              },
              '100Mt': {
                  overpressure3000psi: 5000,
                  overpressure200psi: 10000,
                  overpressure20psi: 15000,
                  overpressure5psi: 20000,
                  overpressure1psi: 25000,
                  ionizing50Sv: 30000,
                  ionizing10Sv: 35000,
                  ionizing6Sv: 40000,
                  ionizing1Sv: 45000,
                  Pierwszego: 50000,
                  Drugiego: 55000,
                  Trzeciego: 60000,
                  Czwartego: 65000,
                  fireball: 4000
              }
          },
          AirExplosion: {
              '20t': {
                  overpressure3000psi: 300,
                  overpressure200psi: 600,
                  overpressure20psi: 1200,
                  overpressure5psi: 1800,
                  overpressure1psi: 2400,
                  ionizing50Sv: 350,
                  ionizing10Sv: 650,
                  ionizing6Sv: 2000,
                  ionizing1Sv: 4800,
                  Pierwszego: 5400,
                  Drugiego: 6000,
                  Trzeciego: 6600,
                  Czwartego: 7200,
                  fireball: 200
              },
              '15kt': {
                  overpressure3000psi: 1200,
                  overpressure200psi: 2400,
                  overpressure20psi: 3600,
                  overpressure5psi: 4800,
                  overpressure1psi: 6000,
                  ionizing50Sv: 7200,
                  ionizing10Sv: 8400,
                  ionizing6Sv: 9600,
                  ionizing1Sv: 10800,
                  Pierwszego: 12000,
                  Drugiego: 13200,
                  Trzeciego: 14400,
                  Czwartego: 15600,
                  fireball: 1000
              },
              '100Mt': {
                  overpressure3000psi: 25000,
                  overpressure200psi: 30000,
                  overpressure20psi: 35000,
                  overpressure5psi: 40000,
                  overpressure1psi: 45000,
                  ionizing50Sv: 32000,
                  ionizing10Sv: 45000,
                  ionizing6Sv: 57000,
                  ionizing1Sv: 65000,
                  Pierwszego: 50000,
                  Drugiego: 55000,
                  Trzeciego: 60000,
                  Czwartego: 67000,
                  fireball: 15000
              }
          }
      };
      

        const currentRadii = warheadRadii[explosionType][selectedWarhead];

        // Definicja kolorów dla różnych efektów
        const effectColors = {
          overpressure3000psi: '#000000',
          overpressure200psi: '#222222',
          overpressure20psi: '#444444',
          overpressure5psi: '#666666',
          overpressure1psi: '#888888',
          ionizing50Sv: '#044b00',
          ionizing10Sv: '#077201',
          ionizing6Sv: '#089601',
          ionizing1Sv: '#0dff00',
          Pierwszego: '#fffb00',
          Drugiego: '#fffc3a',
          Trzeciego: '#fffd7d',
          Czwartego: '#faf8a4',
          fireball: 'red'
      };

        // Dodawanie markera na mapie
        L.marker(cityCoordinates, { icon: customMarkerIcon }).addTo(map);

        // Rysowanie kół na mapie dla aktywnych efektów
        Object.entries(effects).forEach(([effect, isActive]) => {
            if (isActive && currentRadii[effect]) {
                L.circle(cityCoordinates, {
                    color: effectColors[effect],
                    fillColor: effectColors[effect],
                    fillOpacity: 0.1,
                    radius: currentRadii[effect]
                }).addTo(map);
            }
        });
    }, [cityCoordinates, selectedWarhead, effects, explosionType, customMarkerIcon, map]);

    return null;
};

export default Circle;
