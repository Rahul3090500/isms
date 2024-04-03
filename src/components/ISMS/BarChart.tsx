import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  chartData: ChartData<'bar', number[], string>;
}

const BarChart: React.FC<BarChartProps> = ({ chartData }) => {
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
      // Adding a custom plugin to draw the data values on top of each bar
      datalabels: {
        display: false,
        align: 'top',
        anchor: 'top',
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
            size: 24, 
          },
        },
      },
    },

  };

  return <Bar options={options} data={chartData} />;
};

export default BarChart;
