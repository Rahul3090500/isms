import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  chartData: ChartData<'bar', number[], string>;
}

const BarChart: React.FC<BarChartProps> = ({ chartData }) => {
  // Function to determine font size based on screen width
  const getResponsiveFontSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) { // Mobile
      return 14;
    } else if (screenWidth < 900) { // Tablet
      return 18;
    } else { // Desktop and larger devices
      return 24;
    }
  };

  const options:any = {
    responsive: true,
    indexAxis: 'y', 
    plugins: {
      legend: {
        position:false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          font: {
            size: getResponsiveFontSize(), // Using the function to set the font size dynamically
          },
        },
      },
    },
  };

  return <Bar options={options} data={chartData} />;
};

export default BarChart;
