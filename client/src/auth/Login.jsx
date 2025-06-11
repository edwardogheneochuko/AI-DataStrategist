import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import homepage from "../assets/homepage.jpg"
// Axios config
axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    axios.post('http://localhost:3001/login', { email, password })
      .then((res) => {
        if (res.data.Login) {
          navigate('/dashboard');
        } else {
          setError(res.data.Message || 'Login failed. Please try again.');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Something went wrong. Please try again later.');
      })
      .finally(() => setLoading(false));
  };
  

  return (
    <div 
    className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Log In
        </h2>

        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <button
            type="button"
            className="mt-1 text-blue-600 hover:underline"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
