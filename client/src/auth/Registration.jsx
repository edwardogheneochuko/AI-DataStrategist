
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rocket } from 'lucide-react';

// 🔐 Register page

const Registration = () => {
  const inputStyles = 'w-full px-4 py-2 mt-3 placeholder:text-sm rounded-lg border-gray-200 border focus:outline-none focus:ring-2 focus:ring-gray-500';

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
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <ToastContainer position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg sm:shadow-md w-full max-w-md space-y-5"
      >
        <div className="text-2xl sm:text-3xl font-bold text-center text-gray-800
        space-y-2">
                  <Rocket className="inline-block mb-2 text-red-700 " size={35} />
                  <h1>Create an account</h1>
                  <span className='text-xs font-light flex items-center justify-center'>
                    Register below to join the adject 
                    <Rocket className='mx-0.5 text-red-700' size={12} /> platform
                  </span>
        </div>
        <label className='text-sm text-neutral-900 '>Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="your_name"
          value={formData.name}
          onChange={handleChange}
          className={inputStyles}
          required
        />
        <label className='text-sm text-neutral-900 '>Email</label>
        <input
          name="email"
          type="email"
          placeholder="your-email@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className={inputStyles}
          required
        />
        <label className='text-sm text-neutral-900 '>Password</label>
        <input
          name="password"
          type="password"
          placeholder="......."
          value={formData.password}
          onChange={handleChange}
          className={inputStyles}
          required
        />
        <label className='text-sm text-neutral-900 '>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="......."
          value={formData.confirmPassword}
          onChange={handleChange}
          className={inputStyles}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-700 text-white py-3 
            rounded-lg hover:bg-green-700 duration-200 cursor-pointer 
             ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Registering...' : 'Create an account'}
        </button>

        <div className="text-center flex justify-center items-center text-sm ">
          <p className=" text-gray-600">Already have an account?</p>
          <Link to='/login' className="ml-2 text-green-800 hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
