import React from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const doughnutData = {
  labels: ['Year Group 5', 'Year Group 6', 'Year Group 7+'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'right',
      align: 'start', // Aligns the legends to start vertically
      labels: {
        boxWidth: 20,
        boxHeight: 20,
      },
    },
  },
};
const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    },
  ],
};


const DashboardCard = ({ icon, value, label, bgColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor}`}>
        {icon}
      </div>
      <div className="text-right">
        <p className="text-2xl font-semibold">{value}</p>
        <p className="text-gray-500">{label}</p>
      </div>
    </div>
  );
};
const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <DashboardCard icon={<svg className="w-24 h-24 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V8l-6-6H9a2 2 0 00-2 2v4H7v-4a2 2 0 012-2h2V2zm6 0v4h4M9 14h6M9 10h6m-3 4h3m-9 4h3"
        /></svg>}
          value="574" label="Total Tests" bgColor="bg-purple-100" />
        <DashboardCard icon={<svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>}
          value="984" label="Total Teachers" bgColor="bg-green-100" />
        <DashboardCard icon={<svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>}
          value="12.5%" label="Total Schools" bgColor="bg-yellow-100" />
        <DashboardCard icon={<svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>}
          value="12.5%" label="Total Pupil" bgColor="bg-pink-100" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-2">Number of Pupil Taken Test</h3>
          <div className="border-t-2 border-gray-200 mt-3" />
          <div className="mt-5" style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Bar data={barData} options={options} />
          </div>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-bold mb-2">Pupil Year Groups</h3>
          <div className="border-t-2 border-gray-200 mt-3" />
          <div className="mt-5" style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Doughnut data={doughnutData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
