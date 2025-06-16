import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 🔐 Login page
const Login = () => {
  const inputStyles = 'w-full px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500';

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
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-5">
        <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className={inputStyles}
          onChange={handleChange}
          value={formData.email}
          required />
          
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          className={inputStyles}
          onChange={handleChange}
          value={formData.password}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gray-700 text-white p-2 rounded cursor-pointer
             hover:bg-green-700 transition duration-200 ${
            loading ? 'opacity-50 cursor-not-allowed' : '' }`}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center flex justify-center gap-x-5 items-center">
          <Link to="/forgot-password" className="text-red-700 hover:underline ">
            Forgot password?
          </Link>
          <div>
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <Link to='/register' className="mt-1 text-blue-600 hover:underline">
          Register
          </Link>
          </div>
        </div>
       
      </form>
    </div>
  );
};

export default Login;
