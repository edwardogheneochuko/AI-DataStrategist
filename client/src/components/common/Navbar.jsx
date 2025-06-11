import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Rocket} from 'lucide-react'
import RespNav from './RespNav'
import { Link } from 'react-scroll'

const Navbar = () => {
    const navigate = useNavigate()

    const styles = 'cursor-pointer hover:scale-110 duration-300 hover:text-red-400'

  return (
    <div>
      <div className='text-gray-300 hidden md:flex '><Rocket /></div>
        <div className='hidden md:flex w-1/2 mx-auto  justify-between items-center  text-gray-800 
     p-3 bg-white rounded-2xl shadow-md'>
      <h1 className='font-bold text-md text-lg lg:text-2xl text-gray-700 flex items-center'> 
         <span className='text-red-400 hover:scale-150 duration-300'>
            <Rocket />
            </span>
             adject
         </h1>
      <ul className=' flex gap-x-2 lg:gap-x-7 text-sm  lg:text-base font-semibold text-gray-600'>
        <Link className={styles} to='data' spy={true} smooth={true} offset={50} duration={500} >Data</Link>
        <Link className={styles} to='platform' spy={true} smooth={true} offset={50} duration={500} >Platform</Link>
        <Link className={styles} to='marketing' spy={true} smooth={true} offset={50} duration={500} >Marketing</Link>
        <Link className={styles} to='contacts' spy={true} smooth={true} offset={50} duration={500} >Contacts</Link>
      </ul>
      <button className='bg-gray-100 text-sm px-3 py-2 lg:text-lg rounded-md cursor-pointer
      hover:bg-gray-50 hover:text-red-400 duration-200 text-gray-600 font-semibold'
      onClick={() => navigate('/login')}>
        Log in
      </button>
    </div>
    <RespNav />
    </div>
  )
}

export default Navbar
