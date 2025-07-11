import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Rocket } from 'lucide-react'
import RespNav from './RespNav'
import { Link } from 'react-scroll'

const Navbar = () => {
    const navigate = useNavigate()

    const styles = 'cursor-pointer hover:scale-110 duration-300 hover:text-red-400'

  return (
    <div>
        <div className='hidden md:fixed md:flex w-1/2 left-1/2 -translate-x-1/2 justify-between items-center text-gray-800 
p-2 md:px-3 bg-white rounded-2xl shadow-md md:z-50 top-4'>

      <Link to='home' spy={true} smooth={true} offset={50} duration={500}
      className='font-extrabold text-base lg:text-2xl text-black flex items-center'> 
         <span className='text-red-400 hover:scale-150 duration-300'>
            <Rocket />
            </span>
             adject
         </Link>
      <ul className=' flex gap-x-2 
       md:gap-x-5 lg:gap-x-7 text-xs  lg:text-base  text-gray-600'>
        <Link className={styles} to='platform' spy={true} smooth={true} offset={50} duration={500} > Platform </Link>
        <Link className={styles} to='marketing' spy={true} smooth={true} offset={50} duration={500} >Marketing</Link>
        <Link className={styles} to='contact' spy={true} smooth={true} offset={50} duration={500} >Contacts</Link>
      </ul>
      <button className='bg-gray-100 text-xs px-3 py-2 md:px-4 lg:px-5
      lg:text-lg rounded-md cursor-pointer hover:bg-red-300 duration-200
       text-gray-600 '
      onClick={() => navigate('/login')}>
        Log in
      </button>
    </div>
    <RespNav />
    </div>
  )
}

export default Navbar
