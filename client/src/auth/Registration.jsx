import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 🔐 Register page

const Registration = () => {
  const inputStyles = 'w-full px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600';

  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/register', {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim()
      });

      toast.success(res.data.message || 'Registration successful! Redirecting...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <ToastContainer position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>

        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={inputStyles}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyles}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={inputStyles}
          required
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={inputStyles}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-green-700
             duration-200 cursor-pointer 
             ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Registering...' : 'Register'}
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link to='/login' className="mt-1 text-blue-600 hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
