// api/transactionService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Add axios interceptor to include auth token in all requests
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
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return [];
  }
};

export const addTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${API_URL}/api/transactions`, transaction);
    return response.data;
  } catch (error) {
    console.error('Error adding transaction:', error);
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    throw error;
  }
};

export const deleteTransaction = async (id) => {
  try {
    await axios.delete(`${API_URL}/api/transactions/${id}`);
  } catch (error) {
    console.error('Error deleting transaction:', error);
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    throw error;
  }
};
