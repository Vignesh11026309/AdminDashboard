import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Filler,
  Tooltip,
  Legend
);

const DoughnutChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          labels:{
            pointStyle:'circle'
          }
         
         
        },
        cutout: 80,
       
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
           
          },
          y: {
            display: false,
            position: "right",
            grid: {
                display: false,
              },
           
          },
        },
      };

  const labels = ["Phone", "Tablet", "Laptop", "Desktop"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [12,19,3,5],
        backgroundColor: [
           " rgba(255, 64, 129, 1)",
        "rgba(0, 176, 255, 1)", 
        "rgba(255, 196, 0, 1)",
        "rgba(112, 190, 116, 1)", 
    ],
    
    
      },
      
    ],
  };
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Doughnut  options={options} data={data} />
    </div>
  );
};

export default DoughnutChart;
