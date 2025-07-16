import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rocket } from 'lucide-react';


const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputStyles = 'w-full px-4 py-2 mt-3 placeholder:text-sm rounded-lg border-gray-200 border focus:outline-none focus:ring-2 focus:ring-gray-500';

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
        className="space-y-4 max-w-md mx-auto mt-12 bg-white p-6 shadow-lg sm:shadow-md rounded-lg"
      >
        <div className="text-2xl sm:text-3xl font-bold text-center text-gray-800
                space-y-2">
                  <Rocket className="inline-block mb-2 text-red-700 " size={35} />
                <h1>Reset your password</h1>
                <span className='text-xs font-light flex items-center justify-center'>
                    Enter your email and new password and confirm password below to reset your password
                </span>
        </div>
        <label className='text-sm text-neutral-900 '>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          placeholder="your-email@gmail.com"
          className={inputStyles}
          onChange={handleChange}
          required
        />
        <label className='text-sm text-neutral-900 '>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          placeholder="--------"
          className={inputStyles}
          onChange={handleChange}
          required
        />
        <label className='text-sm text-neutral-900 '>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          placeholder="--------"
          className={inputStyles}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-800 text-white py-2 sm:py-3  hover:bg-green-900 
            transition cursor-pointer rounded-md  ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Submitting...' : 'Reset Password'}
        </button>
        <div className="text-center flex justify-center items-center text-sm mt-4">
              <p className=" text-gray-600">Remember your password?</p>
              <Link to='/login' className="ml-2 text-green-800 hover:underline">
                    Sign in
              </Link>
        </div>
      </form>
       
    </>
  );
};

export default ForgotPassword;
