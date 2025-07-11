// feature

import React from 'react'
import Navbar from '../components/common/Navbar'
import homepage from '../assets/homepage.jpg'
import Homepage from '../components/HomePage/Homepage'
import Platform from '../components/HomePage/Platform'
import Marketing from '../components/HomePage/Marketing'
import Contact from '../components/HomePage/Contact'
import Footer from '../components/common/Footer'


const Home = () => {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${homepage})`, minHeight: '100vh' }}
    >
      <div className="pt-2 md:pt-3"> {/* ✅ Added top padding here */}
        <Navbar />
        <Homepage />
      </div> 
      <Platform />
      <Marketing />
      <Contact />
      <Footer />
    </div>
  )
}
export default Home
