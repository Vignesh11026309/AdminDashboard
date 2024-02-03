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

const WaveChart4 = () => {
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
                beginAtZero: true,
                display: false, // Disable y-axis
            },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [8,2,6,4,3],
            borderColor: 'rgb(121, 190, 116, 1)',
            backgroundColor: 'rgba(121, 190, 116, 1)',
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

export default WaveChart4;