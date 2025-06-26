
import React from 'react'
import Registration from './auth/Registration'
import {Routes, Route, Link} from 'react-router-dom'

// auth and homepages
import Home from './pages/Home'
import Login from './auth/Login'
import ForgotPassword from './auth/ForgotPassword'
import ProtectedRoute from './shared/ProtectedRoute'
import Error from './auth/Error'

// main page
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/dashboard' element={<ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  )
}

export default App