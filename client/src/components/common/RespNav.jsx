import React, { useState } from 'react';
import { Menu, Rocket, XIcon } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RespNav = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setToggle((prev) => !prev);

  const scrollProps = {
    spy: true,
    smooth: true,
    offset: 50,
    duration: 500,
  };

  const navItemStyles =
    'group relative px-4 py-3 font-medium text-gray-700 cursor-pointer text-lg hover:text-red-400 duration-300 rounded-md';

  return (
    <div className='block md:hidden'>
      {/* Top Bar */}
      <div className='flex items-center justify-between p-5 shadow-md fixed w-full bg-gray-200 z-30'>
        <h1 className='flex items-center font-bold text-2xl text-gray-700'>
          <span className='text-red-400 hover:scale-150 duration-300'>
            <Rocket />
          </span>
          adject
        </h1>
        <button
          onClick={handleToggle}
          aria-label={toggle ? 'Close menu' : 'Open menu'}
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
            <ul className='flex flex-col items-center py-4 divide-y divide-gray-300 shadow-md'>
              {['platform', 'marketing', 'contact'].map((item) => (
                <li key={item} className='w-full flex justify-center'>
                  <Link
                    to={item}
                    {...scrollProps}
                    onClick={handleToggle}
                    className={
                      navItemStyles +
                      ' hover:bg-gray-200 transition-colors w-full text-center'
                    }
                  >
                    <span className='relative z-10'>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                    {/* Animated underline */}
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full'></span>
                  </Link>
                </li>
              ))}
              <li className='w-full flex justify-center'>
                <button
                  onClick={() => {
                    navigate('/login');
                    setToggle(false);
                  }}
                  className='w-full text-center bg-gray-200 px-4 py-3 cursor-pointer
                   rounded-md text-gray-700 font-semibold hover:bg-red-300
                    hover:text-white transition-colors duration-200 shadow'
                >
                  Log in
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RespNav;
