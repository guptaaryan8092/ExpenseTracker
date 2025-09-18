// controllers/transactionController.js
const Transaction = require('../models/Transaction');

// Get transactions for the authenticated user only
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user }).sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Failed to fetch transactions', message: error.message });
  }
};

// Add new transaction for the authenticated user
exports.addTransaction = async (req, res) => {
  try {
    const { type, category, amount, date } = req.body;
    
    if (!type || !category || !amount || !date) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create transaction with user ID from auth middleware
    const transaction = new Transaction({ 
      user: req.user,  // This comes from authMiddleware
      type, 
      category, 
      amount, 
      date 
    });
    
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.status(500).json({ error: 'Failed to add transaction', message: error.message });
  }
};

// Delete transaction (only if it belongs to the authenticated user)
exports.deleteTransaction = async (req, res) => {
  try {
    const result = await Transaction.findOneAndDelete({ 
      _id: req.params.id, 
      user: req.user  // Only delete if transaction belongs to user
    });
    
    if (!result) {
      return res.status(404).json({ error: 'Transaction not found or access denied' });
    }
    
    res.json({ message: 'Transaction deleted' });
  } catch (error) {
    console.error('Error deleting transaction:', error);
    res.status(500).json({ error: 'Failed to delete transaction', message: error.message });
  }
};
