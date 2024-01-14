import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DataSettings = () => {
  const downloadPdfDocument = () => {
    const input = document.body;
    html2canvas(input, { scale: 2 }) // scale może być dostosowane do potrzeb
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save("raport.pdf");  
      });
  }
  

  return (
    <div className="settings-container-element">
      <h2>GENERUJ RAPORT</h2>
      <label>
        <h3>Wykres zależności dawki promieniowania<br />pomiędzy odległością a centrum wybuchu</h3>
          <input type="checkbox" name=""/>
      </label>
      <label>
        <h3>Wykres zależności nadciśnienia <br />a odległością centrum wybuchu</h3>
          <input type="checkbox" name=""/>
      </label>
      <label>
        <h3>Tabela zależności dawki promieniowania<br />pomiędzy odległością a centrum wybuchu</h3>
          <input type="checkbox" name=""/>
      </label>
      <label>
        <h3>Tabela zależności nadciśnienia <br />a odległością centrum wybuchu</h3>
          <input type="checkbox" name=""/>
      </label>
      <label>
        <h3>Wymiary chmury grzyba atomowego</h3>
          <input type="checkbox" name=""/>
      </label>
      <button className="generate" onClick={downloadPdfDocument}>Pobierz Raport</button>
    </div>
  );
};

export default DataSettings;
