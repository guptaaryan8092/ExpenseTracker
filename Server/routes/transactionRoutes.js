// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

// Protect all transaction routes
router.use(authMiddleware);

router.get('/', getTransactions);
router.post('/', addTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
