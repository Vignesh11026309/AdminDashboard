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
// import faker from 'faker';

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

const WaveChart2 = () => {
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
                display: false, // Disable x-axis
            },
            y: {
                display: false, // Disable y-axis
                beginAtZero: true,
            },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [4,5,2,2,8],
            borderColor: 'rgba(255, 196, 0, 1)',
            backgroundColor: 'rgba(255, 196, 0, 1)',
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

export default WaveChart2;