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

const LineChart = () => {
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
                display: true, // Disable x-axis
                grid:{
                    display:false
                }
            },
            y: {
                // beginAtZero: true,
                position:'right',
                display: true, // Disable y-axis
            },
        },
      };
      
      const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [1200,940,1340,1440,420,1100,670],
            borderColor: 'rgb(0, 0, 0, 1)',
            backgroundColor: 'rgba(0, 0, 0, 1)',
            pointStyle : false,
            tension:'0'
          }
        ],
      };
      return(
        <div>
      <Line data={data} options={options} />
    </div>
      );
};

export default LineChart;