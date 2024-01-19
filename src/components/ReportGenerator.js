import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ReportGenerator = ({ basicSettings, circleData, dataSettings = {}}) => {
  // Przygotowanie danych dla wykresów
  console.log({basicSettings, circleData, dataSettings})
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
      ],
    };
  };

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

  const renderCharts = () => {
    const pressureChartData = prepareChartData('overpressure', 'Nadciśnienie', 'rgb(53, 162, 235)', 'rgba(53, 162, 235, 0.5)');
    const ionizingChartData = prepareChartData('ionizing', 'Dawka Promieniowania', 'rgb(255, 99, 132)', 'rgba(255, 99, 132, 0.5)');
    return (
      <div>
        <div className='chartsContainer'>
          <div>
            <h3>Wykres nadciśnienia a odległości</h3>
            <div style={{ position: "relative", height: "25vh", width: "15vw" }}>
              <Line data={pressureChartData} options={options} />
            </div>
          </div>
          <div>
            <h3>Wykres dawki promieniowania a odległości</h3>
            <div style={{ position: "relative", height: "25vh", width: "15vw" }}>
              <Line data={ionizingChartData} options={options} />
            </div>
          </div>
        </div>
      </div>
    );
  };
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
            <th>Efekt 1</th>
            <th>Promień 1</th>
            <th>Efekt 2</th>
            <th>Promień 2</th>
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

  const renderExplosionTypeDescription = () => {
    if (basicSettings.explosionType === 'AirExplosion') {
      return '150m';
    } else if (basicSettings.explosionType === 'SurfaceExplosion') {
      return 'Powierzchnia Ziemi';
    } else {
      return 'Nie określono';
    }
  };

  return (
    <div className='RaportContainer'>
      <h1>Raport Symulacji</h1>
      <h2>Miasto: {basicSettings.city || 'Nie określono'}</h2>
      <p>Wysokość wybuchu: {renderExplosionTypeDescription()}</p>
      <p>Moc głowicy: {basicSettings.selectedWarhead || 'Nie określono'}</p>
      <div>
        <h2>Wykresy</h2>
        {renderCharts()}
        <img src='../imgs/Cloud.png'></img>
      </div>
      <div>
        <h2>Tabele</h2>
        <RenderTable circleData={circleData} />
      </div>
</div>
);
};

export default ReportGenerator;