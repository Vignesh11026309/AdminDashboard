import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Filler,
  Tooltip,
  Legend
);

const StackedBarChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "",
          },
          title: {
            display: false,
            text: "Stacked Bar Chart",
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
            ticks: {
              color: "#fff",
            },
            stacked: true,
          },
          y: {
            display: true,
            position: "right",
            stacked: true,
            ticks: {
              color: "#fff",
            },
          },
        },
      };

  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(0, 176, 255, 1)",
      },
      {
        label: "Dataset 2",
        data: [4, 2, 1, 2, 4, 6],
        backgroundColor: "rgba(255, 196, 0, 1)",
      },
      {
        label: "Dataset 3",
        data: [5, 10, 8, 7, 4, 9],
        backgroundColor: "rgba(255, 64, 129, 1)",
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default StackedBarChart;
