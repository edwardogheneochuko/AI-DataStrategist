import React, { useEffect } from 'react'
import { Facebook, Instagram, Linkedin, Rocket, Twitter } from 'lucide-react'
import { Link } from 'react-scroll'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Footer = () => {
  const listStyles = 'cursor-pointer hover:scale-110 duration-300 hover:text-red-400 text-xs md:text-sm font-light'
  const iconStyles = 'bg-neutral-900 text-white p-1 rounded-md hover:bg-red-400 duration-300 cursor-pointer'

  // Animation setup
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className='px-4 sm:px-10 lg:px-30'>
     <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className=' my-10 w-full border-y border-gray-300 py-10'>
      <div className='flex justify-between'>
        <div className='space-y-3'>
          <h1 className='flex text-lg md:text-2xl font-semibold'>
            <span className='text-red-400 hover:scale-150 duration-300'>
              <Rocket size={30} />
            </span>
            adject
          </h1>
          <p className='text-xs text-gray-400'>
            Integrated marketing 
            intelligence.<br /> Expert media management.
          </p>
        </div>
        <div>
          <div className='space-x-1 md:space-x-5'>
            <Link className={listStyles} to='platform' spy={true} smooth={true} offset={50} duration={500}>Platform</Link>
            <Link className={listStyles} to='marketing' spy={true} smooth={true} offset={50} duration={500}>Marketing</Link>
            <Link className={listStyles} to='contact' spy={true} smooth={true} offset={50} duration={500}>Contacts</Link>
          </div>
          <div className='flex justify-end gap-x-1 md:gap-x-3 mt-10 items-end'>
    <Instagram className={iconStyles} />
  <Linkedin className={iconStyles} />
  <Facebook className={iconStyles} />
  <Twitter className={iconStyles} />
  </div>

        </div>
      </div>
      <div>
      </div>
    </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            className='flex gap-x-3 pb-10'>
            <div className='text-xs text-gray-400 '>
                &copy; {new Date().getFullYear()} Adject. All rights reserved.</div>
            <div className='text-xs text-gray-400 hover:text-red-400 cursor-pointer'>
                Terms & Conditions</div>
            <div className='text-xs text-gray-400 hover:text-red-400 cursor-pointer'>
                Privacy
                </div>
        </motion.div>
    </div>
  )
}

export default Footer
