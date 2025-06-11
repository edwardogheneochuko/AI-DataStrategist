import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/dashboard')
      .then((res) => {
        if (res.data.valid) {
          setMessage(res.data.message);
        } else {
          navigate('/');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Something went wrong. Redirecting to login...');
        setTimeout(() => navigate('/'), 2000);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  if (loading) return <div className="p-4">Loading Dashboard...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-2xl font-semibold text-gray-800">
        Dashboard: {message}
      </div>
    </div>
  );
};

export default Dashboard;
