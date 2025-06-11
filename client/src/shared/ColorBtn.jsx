

import React from 'react'

const ColorBtn = ({name}) => {
  return (
    <>
    <button className='bg-black text-white rounded-lg px-3 py-2 border-2 cursor-pointer
duration-300 hover:bg-transparent hover:text-black mr-4'>
    {name}
</button>
    </>
  )
}

export default ColorBtn

