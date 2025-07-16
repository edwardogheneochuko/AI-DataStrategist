
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rocket } from 'lucide-react';

// 🔐 Login page
const Login = () => {
  const inputStyles = 'w-full px-4 py-2 mt-3  placeholder:text-sm rounded-lg border-gray-200 border focus:outline-none focus:ring-2 focus:ring-gray-500';

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
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      
      <ToastContainer position="top-center" />
      
      <form onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg sm:shadow-lg w-full max-w-md space-y-9">
        <div className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          <Rocket className="inline-block mb-2 text-red-700 " size={35} />
          <h1>Sign in to your <br /> account</h1>
          <span className='text-xs  font-light'>Enter your email below 
            to access your  account</span>
        </div>
        <label className=' text-sm text-neutral-900'>Email</label>
        <input
          name="email"
          type="email"
          placeholder="your-email@gmail.com"
          className={inputStyles}
          onChange={handleChange}
          value={formData.email}
          required />
        <div className='flex items-center justify-between mt-2 mb-1'>
        <label className=' text-sm text-neutral-900'>Password</label>
        <Link to="/forgot-password" 
          className=" text-xs text-green-700">
            Forgot password?
          </Link>
        </div>
        <input
          name="password"
          type="password"
          placeholder="........"
          className={inputStyles}
          onChange={handleChange}
          value={formData.password}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-800 text-white py-2 sm:py-3 rounded-md cursor-pointer
             hover:bg-green-900 transition duration-200 text-sm ${
            loading ? 'opacity-50 cursor-not-allowed' : '' }`}>
          {loading ? 'Sign in...' : 'Sign in'}
        </button>
          <div className='flex items-center justify-center gap-x-2'>
          <p className="text-sm text-gray-600">I don't have an account?</p>
          <Link to='/register' 
          className="text-green-600 text-sm">
            Register now
          </Link>
          </div>
      </form>
    </div>
  );
};

export default Login;
