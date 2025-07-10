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
        path: 'settings',   // resolves to /dashboard/settings
        element: <Settings />,
      },
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
