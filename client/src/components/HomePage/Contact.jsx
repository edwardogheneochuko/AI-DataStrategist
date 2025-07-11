
import React from 'react'
import {Rocket} from 'lucide-react'
import ColorBtn from '../../shared/ColorBtn'
import TransparentBtn from '../../shared/TransparentBtn'

const Contact = () => {
  return (
    <div id='contact' className='px-4 sm:px-10 lg:px-30 my-10'>
        <h1 className='text-center my-5 text-2xl 
         text-neutral-900 mb-12 font-semibold'>
            Get In Touch
        </h1>
       <div className='p-10 border border-gray-200 rounded-lg shadow-lg space-y-5
       text-center'>
       <h2 className=' text-sm md:text-lg font-semibold text-white flex flex-col
       justify-center items-center w-fit mx-auto p-2 bg-neutral-900 rounded-md' > 
            <span className='text-red-400 hover:scale-150 duration-300'>
                 <Rocket size={40}/>
            </span>
            adject
        </h2>
        <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold'>
        Better inputs. Smarter AI.<br/>
        Stronger outcomes.</h3>
        <p className='text-xs text-gray-500'>
            Unified data powers recommendations you can trust <br />
        and execute-in minutes. Get in touch to learn more.</p>
        <ColorBtn name='Contact Us'/>  <TransparentBtn name='Contact Us' />
       </div>
    </div>
  )
}

export default Contact