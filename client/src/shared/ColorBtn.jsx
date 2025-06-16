
import React from 'react'
import './css/Button.css'; 

const ColorBtn = ({name}) => {
  return (
    <>
    <button className="relative overflow-hidden border-2 border-black  px-3 
    py-2 md:px-10 md:py-4 rounded-2xl group cursor-pointer mr-4 bg-black text-white">
      <span className="relative z-10 group-hover:text-white duration-300">{name}</span>
      <span className="absolute inset-0 bg-orange-300 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-200 ease-in-out z-0" />
    </button>
    </>
  )
}

export default ColorBtn

