import React, { useEffect, useState } from 'react';
import { getTransactions } from '../../api/transactionService';

const MonthlySummary = () => {
  const [summary, setSummary] = useState({ income: 0, expense: 0 });

  const isCurrentMonth = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    return (
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth()
    );
  };

  const fetchSummary = async () => {
    const transactions = await getTransactions();
    const monthlyTxns = transactions.filter((t) => isCurrentMonth(t.date));

    const income = monthlyTxns
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = monthlyTxns
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    setSummary({ income, expense });
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-lg mb-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">📅 Monthly Summary</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg font-medium text-center">
        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
          <p className="text-green-600 dark:text-green-300">Income</p>
          <p>₹{summary.income}</p>
        </div>
        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
          <p className="text-red-600 dark:text-red-300">Expense</p>
          <p>₹{summary.expense}</p>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded">
          <p className="text-blue-600 dark:text-blue-300">Net</p>
          <p>₹{summary.income - summary.expense}</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlySummary;
