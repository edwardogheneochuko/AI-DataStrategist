import React from 'react';
import './css/Button.css'; 

const TransparentBtn = ({ name }) => {
  return (
    <>
    <button className="relative overflow-hidden border border-black text-black  
    px-10 py-3 rounded-lg sm:px-4 md:px-6  lg:py-2 group cursor-pointer">
      <span className="relative z-10 group-hover:text-white duration-300 
      text-lg sm:text-sm md:text-base lg:text-lg">{name}</span>
      <span className="absolute inset-0 bg-red-400 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-200 ease-in-out z-0" />
    </button>
    </>
  );
};

export default TransparentBtn;
