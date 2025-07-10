// feature

import React from 'react'
import Navbar from '../components/common/Navbar'
import homepage from '../assets/homepage.jpg'
import Homepage from '../components/HomePage/Homepage'
import Platform from '../components/HomePage/Platform'


const Home = () => {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${homepage})`, minHeight: '100vh' }}
    >
      <div className="pt-2 md:pt-3"> {/* ✅ Add top padding here */}
        <Navbar />
        <Homepage />
      </div>
      <Platform />
      
    </div>
  )
}
export default Home
