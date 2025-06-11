

import React from 'react'
import Navbar from './components/common/Navbar'
import homepage from './assets/homepage.jpg'
import Homepage from './components/HomePage/Homepage'
import Data from './components/HomePage/Data'

const Home = () => {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${homepage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        width: '100%',
      }}>
      <Navbar />
      <Homepage />
      <Data />
      </div>
    </div>
  )
}

export default Home
