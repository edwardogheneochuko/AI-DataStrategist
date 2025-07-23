
import React from 'react'
import {AlertCircleIcon } from 'lucide-react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='dark:text-white space-y-3'>
        <h1 className='text-2xl font-semibold hidden md:flex'>Dashboard</h1>
        <div className='flex gap-x-2 border w-full  dark:bg-neutral-800
         sm:w-fit px-3 py-2 text-sm rounded-full border-b-4'>
            <AlertCircleIcon size={20}/>
            <h1>Grow your earnings</h1>
        </div>
        <div className='px-3 py-5 border w-full rounded-lg border-b-4 text-sm bg-green-200
        dark:bg-neutral-800 tracking-wider'>
        Welcome to Epoch 9! On the dashboard you will see your earnings for this epoch.
         To view your total number of points, Your point will be equivalent to your earnings in
         the crypto space, Navigate to {' '}<Link to='help' className='hover:bg-black underline duration-200
         hover:text-white '> help </Link> 
         for assistance.
        </div>
    </div>
  )
}

export default Header