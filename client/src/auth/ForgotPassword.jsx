import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rocket } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputStyles =
    'w-full px-4 py-2 mt-1 rounded-lg border border-gray-300 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-gray-500';

  const forgotSchema = z
    .object({
      email: z.string().email('Invalid email address'),
      password: z.string().min(6, 'Password must be at least 6 characters'),
      confirmPassword: z
        .string()
        .min(6, 'Confirm Password must be at least 6 characters'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotSchema),
  });

  const submitData = async (data) => {
    setLoading(true);
    const { confirmPassword, ...formData } = data;

    try {
      const res = await axios.post(
        'http://localhost:5000/forgot-password',
        formData
      );

      toast.success(res.data.message || 'Password reset successful');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Issues... Try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <form
        onSubmit={handleSubmit(submitData)}
        className="space-y-4 max-w-md mx-auto mt-12 bg-white p-6 shadow-lg sm:shadow-md rounded-lg"
      >
        <div className="text-2xl sm:text-3xl font-bold text-center text-gray-800 space-y-2 mb-10">
          <Rocket className="inline-block mb-2 text-red-700" size={35} />
          <h1>Reset your password</h1>
          <span className="text-xs font-light flex items-center justify-center">
            Enter your email and new password below to reset your password
          </span>
        </div>

        {/* Email */}
        <label className="text-sm text-neutral-900">Email</label>
        <input
          type="email"
          placeholder="your-email@gmail.com"
          className={inputStyles}
          {...register('email')}
        />
        {errors.email && (
          <p className="text-red-600 text-xs ">{errors.email.message}</p>
        )}

        {/* Password */}
        <label className="text-sm text-neutral-900">Password</label>
        <input
          type="password"
          placeholder="--------"
          className={inputStyles}
          {...register('password')}
        />
        {errors.password && (
          <p className="text-red-600 text-xs ">{errors.password.message}</p>
        )}

        {/* Confirm Password */}
        <label className="text-sm text-neutral-900">Confirm Password</label>
        <input
          type="password"
          placeholder="--------"
          className={inputStyles}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-xs ">
            {errors.confirmPassword.message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-800 text-white py-2 sm:py-3 hover:bg-green-900 transition rounded-md ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Submitting...' : 'Reset Password'}
        </button>

        <div className="text-center flex justify-center items-center text-sm mt-4">
          <p className="text-gray-600">Remember your password?</p>
          <Link to="/login" className="ml-2 text-green-800 hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
