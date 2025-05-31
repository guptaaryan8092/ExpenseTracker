import React, { useState } from 'react';
import { addTransaction } from '../../api/transactionService';
import { motion } from 'framer-motion';

const TransactionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    type: 'expense',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category || !formData.amount || !formData.date) {
      alert('Please fill all fields');
      return;
    }

    try {
      await addTransaction({
        ...formData,
        amount: parseFloat(formData.amount),
      });
      setFormData({ type: 'expense', category: '', amount: '', date: '' });
      onAdd(); // reload the list
    } catch (error) {
      console.error(error);
      alert('Error adding transaction');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-emerald-100 dark:bg-gray-900 p-6 rounded-xl shadow-md mb-6 w-full max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
        ➕ Add Transaction
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Groceries, Salary"
            className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Amount (₹)
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
      </div>

      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Add
        </motion.button>
      </div>
    </motion.form>
  );
};

export default TransactionForm;
