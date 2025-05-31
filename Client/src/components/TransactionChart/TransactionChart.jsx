import React, { useEffect, useState } from 'react';
import { getTransactions } from '../../api/transactionService';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionChart = () => {
  const [data, setData] = useState({ income: 0, expense: 0 });

  const fetchData = async () => {
    const transactions = await getTransactions();

    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    setData({ income, expense });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: '₹',
        data: [data.income, data.expense],
        backgroundColor: ['#34d399', '#f87171'],
        borderColor: ['#059669', '#dc2626'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-lg mb-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">📊 Income vs Expense</h2>
      <div className="flex justify-center items-center">
        <div className="w-full sm:w-80 md:w-96">
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default TransactionChart;
