// api/transactionService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Add axios interceptor for auth token
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/transactions`);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

export const addTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${API_URL}/api/transactions`, transaction);
    return response.data;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

export const deleteTransaction = async (id) => {
  try {
    await axios.delete(`${API_URL}/api/transactions/${id}`);
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};
