import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [greeting, setGreeting] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token){
      toast.error('Unauthorized!...Please log in')
      navigate('/login')
    } else {
      axios.get('http://localhost:5000/protected', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        setGreeting(res.data.message)   // ✅ Save "Welcom, name"
      })
      .catch(err => {
        toast.err('Session expired. Please login again')
        localStorage.removeItem('token')
        navigate('/login')
      })
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('token')
    toast.success('Logged out!')
    setTimeout(() => navigate('/login'), 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <ToastContainer position='top-center' />
      <div className="text-2xl font-semibold text-gray-800">
        {greeting || 'Loading...'}
      </div>
      <button onClick={handleLogout}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded
       hover:bg-red-700 transition">
        log out
      </button>
    </div>
  );
};

export default Dashboard;
