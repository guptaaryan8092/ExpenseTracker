import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm/TransactionForm.jsx';
import TransactionChart from './components/TransactionChart/TransactionChart.jsx';
import MonthlySummary from './components/MonthlySummary/MonthlySummary.jsx';
import ExportCSV from './components/ExportCSV.jsx';
import { motion } from 'framer-motion';
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx';

function App() {
  const [reload, setReload] = useState(false);
  const triggerReload = () => setReload((prev) => !prev);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-blue-50 via-white to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <motion.div
        className="max-w-3xl w-full bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-xl p-6 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-extrabold text-amber-400 dark:text-amber-300 text-center">
            💰 Expense Tracker
          </h1>
        </motion.div>
          <ThemeToggle />

        <TransactionForm onAdd={triggerReload} />
        <ExportCSV />
        <MonthlySummary key={reload + '-summary'} />
        <TransactionChart key={reload + '-chart'} />
        <TransactionList key={reload + '-list'} onReload={triggerReload} />
      </motion.div>
    </div>
  );
}

export default App;
