import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rocket } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Schema outside the component
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  const inputStyles = 'w-full px-4 py-2 mt-3 placeholder:text-sm rounded-lg border-gray-200 border focus:outline-none focus:ring-2 focus:ring-gray-500';

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/user/login', data);
      localStorage.setItem('token', res.data.token);
      toast.success('Login successful!', {
        onClose: () => navigate('/dashboard'),
        autoClose: 1500
      });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <ToastContainer position="top-center" />
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-9">
        <div className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          <Rocket className="inline-block mb-2 text-red-700" size={35} />
          <h1>Sign in to your <br /> account</h1>
          <span className='text-xs font-light'>Enter your email below to access your account</span>
        </div>

        <label className='text-sm text-neutral-900'>Email</label>
        <input type="email" placeholder="your-email@gmail.com" className={inputStyles} {...register('email')} />
        {errors.email && <p className="text-red-500 text-xs ">{errors.email.message}</p>}

        <div className=''>
        <span className='flex justify-between'>
        <label className='text-sm text-neutral-900'>Password</label>
        <Link to='/forgot-password' 
        className='text-xs text-green-500 hover:underline'>forgot Password</Link>
        </span>
        <input type="password" placeholder="........" className={inputStyles} {...register('password')} />
        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>


        <button type="submit" disabled={loading} className={`w-full bg-green-800 text-white py-2 sm:py-3 rounded-md hover:bg-green-900 transition duration-200 text-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>

        <div className='flex items-center justify-center gap-x-2'>
          <p className="text-sm text-gray-600">I don't have an account?</p>
          <Link to="/register" className="text-green-600 text-sm">Register now</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
