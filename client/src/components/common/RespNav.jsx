import { Menu, Rocket, XIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const RespNav = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const handleToggle = () => setToggle((prev) => !prev)

  const navItemStyles = 'py-2 text-gray-600 cursor-pointer hover:text-2xl duration-300 hover:text-red-400'

  return (
    <div className='block md:hidden '>
      {/* Top Bar */}
      <div className='flex items-center justify-between p-5 shadow-md fixed w-full
       bg-gray-200 z-30'>
        <h1 className='flex items-center font-bold text-2xl text-gray-700'>
          <span className='text-red-400 hover:scale-150 duration-300'>
            <Rocket />
          </span>
          adject
        </h1>
        <button
          onClick={handleToggle}
          aria-label='Toggle menu'
          className='cursor-pointer'
        >
          {toggle ? <XIcon size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key='menu'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='pt-[72px] w-full fixed top-0 left-0 z-20 bg-gray-100'
          >
            <ul className='flex flex-col items-center py-3 text-lg shadow-md'>
              {['platform', 'marketing', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy
                    smooth
                    offset={50}
                    duration={500}
                    onClick={handleToggle}
                    className={navItemStyles}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    navigate('/login')
                    setToggle(false)
                  }}
                  className='my-2 bg-gray-200 px-3 py-2 rounded-md text-gray-600 font-semibold hover:bg-gray-50 hover:text-red-400 duration-200'
                >
                  Log in
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default RespNav
