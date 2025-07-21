import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/Dashboard/Sidebar';
import ThemeToggleButton from '../context/ThemeToggleButton';
// import ThemeToggleButton from '../context/ThemeToggleButton';

const Dashboard = () => {
  const [greeting, setGreeting] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      toast.error('Unauthorized!...Please log in');
      navigate('/login');
    } else {
      axios
        .get('http://localhost:5000/api/user/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setGreeting(res.data.message);
          setLoading(false);
        })
        .catch((err) => {
          toast.error('Session expired. Please login again');
          localStorage.removeItem('token');
          navigate('/login');
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.warning('Logged out!');
    setTimeout(() => navigate('/login'), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      <header className="flex justify-between items-center mb-2 p-4 border-b dark:border-gray-700">
        <h1 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
          {loading ? 'Loading...' : greeting}
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggleButton />
          <button
            onClick={handleLogout}
            title="Log out"
            aria-label="Log out"
            className="flex items-center gap-2 bg-red-500 dark:bg-red-800 text-white text-sm cursor-pointer
             px-4 py-2 rounded hover:bg-red-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 
                   01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex gap-4 px-4 md:px-0">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
