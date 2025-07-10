import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      axios.get('http://localhost:5000/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGreeting(res.data.message); // e.g., "Welcome, name"
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
    toast.success('Logged out!');
    setTimeout(() => navigate('/login'), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          {loading ? 'Loading...' : greeting}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Log out
        </button>
      </header>

      <main>
        <Outlet /> {/* Nested routes like /dashboard/settings will render here */}
      </main>
    </div>
  );
};

export default Dashboard;
