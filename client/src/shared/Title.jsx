

import React from 'react'

const Title = ({title, subTitle, description}) => {
  return (
    <div className='space-y-2'>
        <h1 className='text-xs text-pink-600 font-bold'>{title}</h1>
        <h2 className='text-lg sm:text-2xl text-neutral-800 font-medium'>{subTitle}</h2>
        <p className='text-sm text-gray-700'>{description}</p>
    </div>
  )
}

export default Title