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

const WaveChart = () => {
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
            data: [2,4,7,3,8],
            borderColor: 'rgb(0, 176, 255, 1)',
            backgroundColor: 'rgba(0, 176, 255, 1)',
            fill: true,
            pointStyle : false,
            tension:'0.4'
          }
        ],
      };
      return(
        <div style={{width:'220px'}}>
      <Line data={data} options={options} />
    </div>
      );
};

export default WaveChart;