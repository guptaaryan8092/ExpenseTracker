import React, { useState } from 'react';
import TransactionList from '../TransactionList';
import TransactionForm from '../TransactionForm/TransactionForm.jsx';
import TransactionChart from '../TransactionChart/TransactionChart.jsx';
import MonthlySummary from '../MonthlySummary/MonthlySummary.jsx';
import ExportCSV from '../ExportCSV.jsx';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [reload, setReload] = useState(false);
  const triggerReload = () => setReload((prev) => !prev);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Financial Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track, analyze, and optimize your spending
          </p>
        </motion.div>

        <div className="space-y-8">
          <TransactionForm onAdd={triggerReload} />
          <ExportCSV />
          <div className="grid lg:grid-cols-2 gap-8">
            <MonthlySummary key={reload + '-summary'} />
            <TransactionChart key={reload + '-chart'} />
          </div>
          <TransactionList key={reload + '-list'} onReload={triggerReload} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
