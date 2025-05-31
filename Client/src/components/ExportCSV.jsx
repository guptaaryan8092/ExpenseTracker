import React from 'react';
import { getTransactions } from '../api/transactionService';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { motion } from 'framer-motion';

const ExportCSV = () => {
  const handleExport = async () => {
    try {
      const transactions = await getTransactions();

      const csv = Papa.unparse(
        transactions.map(({ _id, __v, ...rest }) => rest) // remove Mongo fields
      );

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'transactions.csv');
    } catch (err) {
      console.error(err);
      alert('Failed to export transactions');
    }
  };

  return (
    <motion.div
      className="flex justify-center mb-6 px-4 sm:px-0"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.button
        onClick={handleExport}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base font-medium dark:bg-green-700 dark:hover:bg-green-800"
      >
        <span role="img" aria-label="export">📤</span>
        <span>Export to CSV</span>
      </motion.button>
    </motion.div>
  );
};

export default ExportCSV;
