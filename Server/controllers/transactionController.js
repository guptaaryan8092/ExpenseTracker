// controllers/transactionController.js
const Transaction = require('../models/Transaction');

// Get all transactions
exports.getTransactions = async (req, res) => {
  const transactions = await Transaction.find().sort({ date: -1 });
  res.json(transactions);
};

// Add new transaction
exports.addTransaction = async (req, res) => {
  const { type, category, amount, date } = req.body;
  const transaction = new Transaction({ type, category, amount, date });
  await transaction.save();
  res.status(201).json(transaction);
};

// Delete transaction
exports.deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: 'Transaction deleted' });
};
