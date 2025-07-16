import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ColorBtn from '../../shared/ColorBtn'
import TransparentBtn from '../../shared/TransparentBtn'
import { ArrowDown01, Clock } from 'lucide-react'
import Animate from './Animate'

const Homepage = () => {
  const [percentage, setPercentage] = useState(0)
  const [addRates, setAddRates] = useState(0)

  
  useEffect(() => {
    const firstInterval = setInterval(() => {
      setPercentage(prev => {
        if (prev < 72) return prev + 1
        clearInterval(firstInterval)
        return 72
      })
    }, 50)

    const secondInterval = setInterval(() => {
      setAddRates(prev => {
        if (prev < 18) return prev + 1
        clearInterval(secondInterval)
        return 18
      })
    }, 50)

    return () => {
      clearInterval(firstInterval)
      clearInterval(secondInterval)
    }
  }, [])

  return (
    <motion.div id='home'
      className='mt-30 md:mt-48 px-1'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className='md:w-2/3 text-center mx-auto space-y-5'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className=' font-semibold font-mono text-2xl md:text-3xl
         text-ellipsis overflow-hidden lg:text-6xl text-neutral-900'>
          We evolve marketing ecosystems <br />
          <p className='mt-3'>for consumer brands</p>
        </h1>
        <div className='mx-10 sm:mx-auto  
        sm:w-1/2 md:w-2/3 text-sm md:text-sm lg:text-lg space-y-5'>
  <p className='text-gray-500 font-serif'>
    Approach complex data goals with confidence. Seamlessly integrate your marketing, business,
    and customer data with AI-powered workflows that grow with your business.
  </p>
</div>

        <div className='flex flex-col sm:flex-row justify-center w-fit mx-auto space-x-0
         sm:space-x-5 sm:space-y-0 space-y-4'>
  <ColorBtn name="BookADemo" />
  <TransparentBtn name="GetStartedFree" />
</div>

      </motion.div>

      <motion.div
        className='flex justify-between mx-10 sm:mx-20 md:mx-32 space-x-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* Guaranteed Block */}
        <motion.div
          className='bg-gray-200 w-fit px-5 
           sm:px-10 py-2 rounded-md shadow-md mt-10 '
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className='flex justify-between text-gray-700 text-xs sm:text-base'>
            <h1>Guaranteed</h1>
            <p><Clock /></p>
          </div>
          <div className='space-x-7 flex items-center mt-3'>
            <div className='text-lg sm:text-3xl'><span className='text-lg'>+</span>{percentage}%</div>
            <span className='text-sm bg-green-500 px-2 py-1 rounded-md'>
              + {addRates} %
            </span>
          </div>
        </motion.div>

        {/* Risk Block */}
        <motion.div className=' bg-gray-200 md:w-fit px-5
        sm:px-10 py-2 rounded-md shadow-md mt-10 '
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}>
          <div className='flex justify-between text-gray-700'>
            <h1>Risk </h1>
            <p className='text-red-600'><ArrowDown01 /></p>
          </div>
          <div className='space-x-7 flex items-center mt-3'>
            <div className='text-lg sm:text-3xl'><span className='text-lg'>+</span>{addRates}%</div>
            <span className='text-sm bg-red-600 px-2 py-1 rounded-md'>
              - {percentage} %
            </span>
          </div>
        </motion.div>
      </motion.div>
      {/*  Animate scroll infinite  */}
      <Animate />
    </motion.div>
  )
}

export default Homepage
