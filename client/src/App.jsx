import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// auth and homepages
import Home from './pages/Home';
import Login from './auth/Login';
import Registration from './auth/Registration';
import ForgotPassword from './auth/ForgotPassword';
import ProtectedRoute from './shared/ProtectedRoute'; 
import Error from './auth/Error';

// main pages
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Layout from './components/HomePage/Layout';
import Todolist from './pages/Todolist';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Trading from './pages/Trading';
import Help from './pages/Help';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  { 
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Registration />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Main />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'trading',
        element: <Trading />
      },
      {
        path: 'settings',  
        element: <Settings />,
      },
      {
        path: 'todolist',
        element: <Todolist />
      },
      {
        path: 'help',
        element: <Help />
      }
    ],
  },
]);

export default function App() {
  return (
    <>
      <ToastContainer position='top-center' />
      <RouterProvider router={router} />
    </>
  );
} 
