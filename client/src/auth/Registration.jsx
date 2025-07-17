import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rocket } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name is too short'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const Registration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const inputStyles =
    'w-full px-4 py-2 mt-3 placeholder:text-sm rounded-lg border-gray-200 border focus:outline-none focus:ring-2 focus:ring-gray-500';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const submitData = async (data) => {
    setLoading(true);
    const { confirmPassword, ...formData } = data; // remove confirmPassword

    try {
      const res = await axios.post('http://localhost:5000/register', formData);
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
        onSubmit={handleSubmit(submitData)}
        className="bg-white p-6 rounded-xl shadow-lg sm:shadow-md w-full max-w-md space-y-5"
      >
        <div className="text-2xl sm:text-3xl font-bold text-center text-gray-800 space-y-2">
          <Rocket className="inline-block mb-2 text-red-700 " size={35} />
          <h1>Create an account</h1>
          <span className="text-xs font-light flex items-center justify-center">
            Register below to join the adject <Rocket className="mx-0.5 text-red-700" size={12} /> platform
          </span>
        </div>

        <label className="text-sm text-neutral-900">Full Name</label>
        <input
          type="text"
          placeholder="your_name"
          className={inputStyles}
          {...register('name')}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

        <label className="text-sm text-neutral-900">Email</label>
        <input
          type="email"
          placeholder="your-email@gmail.com"
          className={inputStyles}
          {...register('email')}
        />
        {errors.email && <p className="text-red-500 text-xs ">{errors.email.message}</p>}

        <label className="text-sm text-neutral-900">Password</label>
        <input
          type="password"
          placeholder="......."
          className={inputStyles}
          {...register('password')}
        />
        {errors.password && <p className="text-red-500 text-xs ">{errors.password.message}</p>}

        <label className="text-sm text-neutral-900">Confirm Password</label>
        <input
          type="password"
          placeholder="......."
          className={inputStyles}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 duration-200 cursor-pointer ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Registering...' : 'Create an account'}
        </button>

        <div className="text-center flex justify-center items-center text-sm">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/login" className="ml-2 text-green-800 hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
