
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, House } from 'lucide-react'

// 🔐 Login page
const Login = () => {
  const inputStyles = 'w-full px-4 mt-3 rounded-lg  py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500';

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading when form submits

    try {
      const res = await axios.post('http://localhost:5000/login', formData);
      localStorage.setItem('token', res.data.token); // save token

      toast.success('Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <ToastContainer position="top-center" />
      
      <form onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-9">
        <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>
        <label className='font-semibold text-lg text-gray-700'>Email</label>
        <input
          name="email"
          type="email"
          placeholder="your-email@gmail.com"
          className={inputStyles}
          onChange={handleChange}
          value={formData.email}
          required />
        <label className='font-semibold text-lg text-gray-700'>Password</label>
        <input
          name="password"
          type="password"
          placeholder="---------"
          className={inputStyles}
          onChange={handleChange}
          value={formData.password}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gray-700 text-white py-3 rounded-full cursor-pointer
             hover:bg-green-700 transition duration-200 ${
            loading ? 'opacity-50 cursor-not-allowed' : '' }`}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center space-y-5 items-center text-sm font-medium">
          <Link to="/forgot-password" 
          className="text-red-700 hover:underline">
            Forgot password?
          </Link>
          <div>
          <div className='flex items-center justify-center gap-x-2'>
          <p className="text-sm text-gray-600">I don't have an account?</p>
          <Link to='/register' 
          className=" text-blue-600  text-sm font-semibold">
          Sign Up
          </Link>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
