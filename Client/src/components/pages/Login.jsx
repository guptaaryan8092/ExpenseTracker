import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [msg, setMsg] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', form);
      login(res.data.token);
      navigate('/');
    } catch (err) {
      setMsg(err.response.data.msg || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} className="w-full p-2 border" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-2 border" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
      </form>
      {msg && <p className="mt-2 text-sm text-red-500">{msg}</p>}
    </div>
  );
};

export default Login;
