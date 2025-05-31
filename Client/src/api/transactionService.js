import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Get all transactions

export const getTransactions = async () => {
    const res = await axios.get(API_URL);
    return res.data;
}

// Add a transaction
export const addTransaction = async (transaction) => {
    const res = await axios.post(API_URL, transaction);
    return res.data;
  };
  
  // Delete a transaction
  export const deleteTransaction = async (id) => {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  };