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

const LineChart2 = () => {
    const options = {
        // responsive: true,
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
                },
                
            },
            y: {
                
                display: true, 
                position: 'right',
                            
            },
        },
      };
      
      const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [12,19,3,5,2,3],
            borderColor: 'rgb(255, 255, 255, 1)',
            backgroundColor: 'rgba(255, 255, 255, 1)',
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

export default LineChart2;