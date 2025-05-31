import React, { useEffect, useState } from 'react';
import { getTransactions, deleteTransaction } from '../api/transactionService';
import { motion, AnimatePresence } from 'framer-motion';

const TransactionList = ({ onReload }) => {
  const [transactions, setTransactions] = useState([]);

  const loadTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    onReload(); // trigger parent reload
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">📋 Transaction List</h2>

      {transactions.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No transactions found.</p>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {transactions.map((txn) => (
              <motion.li
                key={txn._id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow rounded-lg px-4 py-3"
              >
                <span className="text-sm sm:text-base">
                  <span className={`font-semibold ${txn.type === 'income' ? 'text-green-500' : 'text-red-400'}`}>
                    {txn.type.toUpperCase()}
                  </span>{' '}
                  - {txn.category} - ₹{txn.amount}
                </span>

                <button
                  onClick={() => handleDelete(txn._id)}
                  className="text-sm px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-semibold transition duration-200 shadow"
                >
                  Delete
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
