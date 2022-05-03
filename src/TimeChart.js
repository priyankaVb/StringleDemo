import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./TimeChart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TimeChart = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Vocabulory",
        data: [20, 30, 20, 40, 30, 10, 40],
        backgroundColor: "rgb(255, 99, 132)",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
      },
      {
        label: "Grammar",
        data: [10, 20, 10, 30, 40, 20, 30],
        backgroundColor: "rgb(75, 192, 192)",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
      },
      {
        label: "Listening",
        data: [40, 10, 30, 10, 20, 30, 20],
        backgroundColor: "rgb(153, 102, 255)",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
      },
      {
        label: "Writing",
        data: [30, 40, 40, 20, 10, 40, 10],
        backgroundColor: "rgb(201, 203, 207)",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
          boxWidth: 7,
          padding: 50,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        position: "top",
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          max: 100,
          stepSize: 0.5,
        },
        stacked: true,
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <div className="timechart-container">
        <div className="timechart-header">Time spent on learning</div>
        <div className="timechart-header-icon">
          Last week <AiOutlineArrowRight className="timechart-arrow-icon" />
        </div>
      </div>
      <div className="timechart-chart-view">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TimeChart;
