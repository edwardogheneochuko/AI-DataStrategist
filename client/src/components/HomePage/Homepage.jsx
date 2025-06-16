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
    <motion.div
      className='mt-32 px-1'
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
        <h1 className=' font-semibold font-mono text-4xl md:text-5xl
         text-ellipsis overflow-hidden lg:text-7xl'>
          We evolve marketing ecosystems <br />
          <p className='mt-3'>for consumer brands</p>
        </h1>
        <div className='text-gray-800 mx-auto space-y-5'>
          <p>
            Approach complex data goals with confidence. Seamlessly integrate your marketing, business,
            and customer data with AI-powered workflows that grows with your business
          </p>
          <ColorBtn name="Book A Demo" />
          <TransparentBtn name="Get Started Free" />
        </div>
      </motion.div>

      <motion.div
        className='flex flex-col items-center md:flex-row md:justify-between'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* Guaranteed Block */}
        <motion.div
          className='bg-gray-200 w-fit px-10 py-2 rounded-md shadow-md mt-10 md:ml-10'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className='flex justify-between text-gray-700'>
            <h1>Guaranteed</h1>
            <p><Clock /></p>
          </div>
          <div className='space-x-7 flex items-center mt-3'>
            <div className='text-3xl'><span className='text-lg'>+</span>{percentage}%</div>
            <span className='text-sm bg-green-500 px-2 py-1 rounded-md'>
              + {addRates} %
            </span>
          </div>
        </motion.div>

        {/* Risk Block */}
        <motion.div
          className=' bg-gray-200 md:w-fit px-10 py-2 rounded-md shadow-md mt-10 md:mr-10'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className='flex justify-between text-gray-700'>
            <h1>Risk </h1>
            <p className='text-red-600'><ArrowDown01 /></p>
          </div>
          <div className='space-x-7 flex items-center mt-3'>
            <div className='text-3xl'><span className='text-lg'>+</span>{addRates}%</div>
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
