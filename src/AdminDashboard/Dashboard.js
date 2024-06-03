import React from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Dashboard = () => {
  const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-2">Card 1</h3>
          <p>Content for card 1</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-2">Card 2</h3>
          <p>Content for card 2</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-2">Card 3</h3>
          <p>Content for card 3</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-2">Card 4</h3>
          <p>Content for card 4</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-2">Doughnut Chart</h3>
          <Doughnut data={doughnutData} class="w-full h-full"/>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-2">Bar Chart</h3>
          <Bar data={barData}  class="w-full h-full"/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
