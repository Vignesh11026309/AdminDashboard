import React, { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend
  );

const WaveChart3 = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {  
            position: '',
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
        scales: {
            x: {
                display: false, 
            },
            y: {
                beginAtZero: true,
                display: false, 
            },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [6,4,2,5,5],
            borderColor: 'rgb(255, 64, 129, 1)',
            backgroundColor: 'rgba(255, 64, 129, 1)',
            fill: true,
            pointStyle : false,
            tension:'0.5'
          }
        ],
      };
      return(
        <div style={{width:'220px'}}>
      <Line data={data} options={options} />
    </div>
      );
};

export default WaveChart3;