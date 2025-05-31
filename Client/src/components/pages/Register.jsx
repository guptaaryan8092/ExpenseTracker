import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', form);
      setMsg('Registered successfully! You can now log in.');
    } catch (err) {
      setMsg(err.response.data.msg || 'Error registering');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} className="w-full p-2 border" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-2 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
      {msg && <p className="mt-2 text-sm text-red-500">{msg}</p>}
    </div>
  );
};

export default Register;
