import { Menu, Rocket, XIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const RespNav = () => {
  const styles =
    'shadow-md py-2 text-gray-600 cursor-pointer hover:text-2xl duration-300 hover:text-red-400'

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='block md:hidden'>
      {/* Top Bar */}
      <div className='flex items-center justify-between p-5 shadow-md'>
        <h1 className='font-bold text-md text-2xl text-gray-700 flex items-center'>
          <span className='text-red-400 hover:scale-150 duration-300'>
            <Rocket />
          </span>
          adject
        </h1>
        <div onClick={handleToggle} className='cursor-pointer'>
          {toggle ? <XIcon size={'30px'} /> : <Menu size={'30px'} />}
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ul className='text-center bg-gray-100 py-3 text-lg shadow-md flex flex-col'>
              <Link
                to='data'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleToggle}
                className={styles}
              >
                Data
              </Link>
              <Link
                to='platform'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleToggle}
                className={styles}
              >
                Platform
              </Link>
              <Link
                to='marketing'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleToggle}
                className={styles}
              >
                Marketing
              </Link>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleToggle}
                className={styles}
              >
                Contact
              </Link>
              <button
                className='my-2 bg-gray-200 px-3 py-2 mx-auto text-lg rounded-md cursor-pointer 
          hover:bg-gray-50 hover:text-red-400 duration-200 text-gray-600 font-semibold'
              >
                Log in
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default RespNav
