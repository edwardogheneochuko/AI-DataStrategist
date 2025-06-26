

import React from 'react'
import error from '../assets/error.jpg'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

const Error = () => {
  return (
    <div>
        <img src={error} alt="error_img" className='h-dvh'/>
        <Link to='/'
         className='absolute right-1/4 top-1/4 text-neutral-900'>
        <Home size={48}/>
        </Link>
    </div>
  )
}

export default Error