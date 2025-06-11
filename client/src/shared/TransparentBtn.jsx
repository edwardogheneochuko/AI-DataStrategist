

import React from 'react'

const TransparentBtn = ({name}) => {
  return (
    <>
        <button className='bg-transparent text-black rounded-lg px-3 py-2 border-2 cursor-pointer
        duration-300 hover:bg-black hover:text-white '>
            {name}
        </button>
    </>
  )
}

export default TransparentBtn