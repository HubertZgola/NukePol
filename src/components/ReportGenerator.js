import React from 'react';
// Importowanie komponentu wykresu liniowego z biblioteki Chart.js
import { Line } from 'react-chartjs-2'; 
// Importowanie elementów z biblioteki Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
 // Import obrazka chmury atomowej
import cloud from '../imgs/Cloud.png';

// Rejestracja komponentów wykresów w ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 // Funkcja pomocnicza do konwersji nazwy głowicy na jej moc w kilotonach
 const warheadToKilotons = {
  "20t": 0.02, // 20 ton = 0.02 kiloton
  "300t": 0.3, // 300 ton = 0.3 kiloton
  "15kt": 15, // 15 kiloton
  "100kt": 100, // 100 kiloton
  "300kt": 300, // 300 kiloton
  "800kt": 800, // 800 kiloton
  "5Mt": 5000, // 5 Megaton = 5000 kiloton
  "100Mt": 100000, // 100 Megaton = 100000 kiloton
};

// Funkcja obliczająca wymiary chmury atomowej
// Na podstawie artykułu Prediction and Analysis of Nuclear Explosion Radioactive Pollutant Diffusion Model 2023
// Yang Zheng, Wei Liu, Xiaoqiang Li, Ming Yang, Peng Li, Yunhui Wu * and Xiaolei Chen
const calculateNuclearCloudDimensions = (selectedWarhead) => {
  const W = warheadToKilotons[selectedWarhead] || 0;
  let a, b, c, d;

  // Przypisanie wartości a i b
  if (W <= 4.07) {
    a = 2228;
    b = 0.3463;
  } else {
    a = 2661;
    b = 0.2198;
  }

  // Przypisanie wartości c i d
  if (W < 2.29) {
    c = 3597;
    d = 0.2553;
  } else if (W >= 2.29 && W < 19) {
    c = 3170;
    d = 0.4077;
  } else {
    c = 6474;
    d = 0.1650;
  }

  const Hb = a * Math.pow(W, b);
  const Ht = c * Math.pow(W, d);
  const logW = Math.log10(W); // Logarytm dziesiętny mocy głowicy
  const Rc = W > 0 ? Math.exp(6.7553 + 0.32055 * logW + 0.0113748 * logW * logW) : 0;

  return { Hb, Ht, Rc };
};

// Główny komponent ReportGenerator
const ReportGenerator = ({ 
    basicSettings, 
    circleData, 
    dataSettings 
    = {}}) => {


  // Obliczenie wymiarów chmury atomowej
  const cloudDimensions = calculateNuclearCloudDimensions(basicSettings.selectedWarhead);
  
  // Przygotowanie danych dla wykresów
  const prepareChartData = (effectTypePattern, label, borderColor, backgroundColor) => {
  
  // Filtrujemy dane do tylko tych, które zawierają podany wzorzec w polu 'effect'
  const filteredData = circleData.filter(item => item.effect.includes(effectTypePattern));
  const labels = filteredData.map(item => item.effect.replace(effectTypePattern, '').trim()); // Etykiety osi Y
  const data = filteredData.map(item => parseFloat(item.distance)); // Wartości osi X

  // Mapujemy przefiltrowane dane do formatu wymaganego przez wykres
  return {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
      },
    ],};
  };

    // Ustawienia wykresów
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 0.01,
          callback: function(value, index, values) {
            return value + ' km';}
           
        }
      }
    },

    maintainAspectRatio: false
  };

  // Renderowanie wykresów
  const renderCharts = () => {
    // Tworzenie danych do wykresów i ich renderowanie
    const pressureChartData = prepareChartData('overpressure', 'Nadciśnienie', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 0.5)');
    const ionizingChartData = prepareChartData('ionizing', 'Dawka Promieniowania', 'rgb(0, 190, 0)', 'rgba(0, 190, 0, 0.5)');
    return (
      <div>
        <div className='chartsContainer'>
          <div className='chartsContainerItem'>
            <h3>Wykres nadciśnienia a odległości</h3>
            <div style={{height: "200px", width: "260px" }}>
              <Line data={pressureChartData} options={options} />
            </div>
          </div>
          <div className='chartsContainerItem'>
            <h3>Wykres dawki promieniowania a odległości</h3>
            <div style={{height: "200px", width: "260px" }}>
              <Line data={ionizingChartData} options={options} />
            </div>
          </div>
          <div>
            <h3>Wymiary chmury atomowej</h3>
            <img alt='cloudSize' src={cloud} />
          </div>
        </div>
      </div>
    );
  };
   // Komponent renderujący tabelę z danymi
  const RenderTable = ({ circleData }) => {
    // Filtrujemy dane do pierwszego typu efektu (np. overpressure)
    const circleData1 = circleData.filter(item => item.effect.includes('overpressure'));
  
    // Filtrujemy dane do drugiego typu efektu (np. ionizing)
    const circleData2 = circleData.filter(item => item.effect.includes('ionizing'));
  
    // Maksymalna długość obu zestawów danych
    const maxLength = Math.max(circleData1.length, circleData2.length);
    
    
    return (
      <table>
        <thead>
          <tr>
            <th>Fala uderzeniowa</th>
            <th>Promień</th>
            <th>Promieniowanie Jonizujące</th>
            <th>Promień</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(maxLength)].map((_, index) => (
            <tr key={index}>
              <td>{circleData1[index] ? circleData1[index].effect : ''}</td>
              <td>{circleData1[index] ? `${circleData1[index].distance} km` : ''}</td>
              <td>{circleData2[index] ? circleData2[index].effect : ''}</td>
              <td>{circleData2[index] ? `${circleData2[index].distance} km` : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Funkcja wyświetlająca opis typu wybuchu
  const renderExplosionTypeDescription = () => {
    if (basicSettings.explosionType === 'AirExplosion') {
      return '150m';
    } else if (basicSettings.explosionType === 'SurfaceExplosion') {
      return 'Powierzchnia Ziemi';
    } else {
      return 'Nie określono';
    }
  };

  // Renderowanie głównego kontenera raportu
  return (
    <div className='RaportContainer'>
      <h1>Raport Symulacji</h1>
      <h2>Miasto: {basicSettings.city || 'Nie określono'}</h2>
      <p>Wysokość wybuchu: {renderExplosionTypeDescription()}</p>
      <p>Moc głowicy: {basicSettings.selectedWarhead || 'Nie określono'}</p>
      <div>
        <h2>Wykresy:</h2>
        {renderCharts()}
      </div>
      <h2>Tabela:</h2>
      <div className='tablesSection'>
        <RenderTable circleData={circleData} />
        <div className='cloudDatas'>
          <p>R<sub>C</sub>: {(cloudDimensions.Rc/1000).toFixed(2)} km</p>
          <p>H<sub>B</sub>: {(cloudDimensions.Hb/1000).toFixed(2)} km</p>
          <p>H<sub>t</sub>: {(cloudDimensions.Ht/1000).toFixed(2)} km</p>
        </div>
      </div>
</div>
);
};

export default ReportGenerator;