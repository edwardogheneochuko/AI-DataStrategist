

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// pages

// images
import platform from '../../assets/platform.jpg';

const Data = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
      <div id='platform' className='mt-10 text-2xl relative'>
        {/* Background Image with Opacity */}
        <div
          className='absolute inset-0 bg-cover bg-center opacity-40'
          style={{ backgroundImage: `url(${platform})`, zIndex: 0 }}
        ></div>

        {/* Foreground Content */}
        <div
          ref={ref}
          className='relative z-10 py-22 text-center mx-auto min-h-screen px-5 md:px-0'
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1
              variants={textVariants}
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-20 font-semibold'
            >
              Consolidate every marketing and <br />
              commerce signal into one trusted source. <br />
              Power AI that can surface issues and <br />
              opportunities as they happen.
            </motion.h1>

            <motion.p variants={textVariants} className="text-lg md:text-xl mb-3 text-gray-700">
              <strong>Ask. Automate. Act.</strong>
            </motion.p>

            <motion.p variants={textVariants} className="text-base md:text-lg mb-2 text-gray-600">
              Type a question or task – ember delivers answers or creates
            </motion.p>

            <motion.p variants={textVariants} className="text-base md:text-lg mb-2 text-gray-600">
              recurring tasks, all connected directly to your data.
            </motion.p>

            <motion.p variants={textVariants} className="text-base md:text-lg text-gray-600">
              No dashboards to build, no tickets to file.
            </motion.p>
          </motion.div>
        </div>
      </div>
  );
};

export default Data;
