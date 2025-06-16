import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputStyles = 'w-full px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/forgot-password', {
        email,
        password
      });

      toast.success(res.data.message || 'Password reset successful');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Issues....Try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <form
        onSubmit={handleReset}
        className="space-y-4 max-w-md mx-auto mt-12 bg-white p-6 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>

        <input
          name="email"
          type="email"
          value={formData.email}
          placeholder="Email"
          className={inputStyles}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          value={formData.password}
          placeholder="New Password"
          className={inputStyles}
          onChange={handleChange}
          required
        />

        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          placeholder="Confirm New Password"
          className={inputStyles}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 
            transition cursor-pointer ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Submitting...' : 'Reset Password'}
        </button>
        <Link to='/login' className='justify-center flex mt-1 text-blue-600 hover:underline'>
           Login
       </Link>
      </form>
       
    </>
  );
};

export default ForgotPassword;
