

import React from 'react'

const Header = ({title, firstChildren, secondChildren, thirdChildren}) => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl
         text-neutral-900 font-semibold mb-5'>
            {title}
        </h1>
        <p className='text-sm lg:text-base text-gray-500'>
            {firstChildren} <br /> {secondChildren} 
        </p>
        <p  className='text-sm lg:text-base text-blue-600 font-semibold'>
            {thirdChildren}
        </p>
    </div>
  )
}

export default Header