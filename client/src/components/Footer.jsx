import React from 'react'
import { assets } from '../assets/assets'
import { FaLinkedin, FaBriefcase } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-1 mt-20 bg-[#f0f0ec] px-3 sm:px-8 md:px-12 lg:px-24'>
       <div className="flex items-center gap-2 group">
         <img 
           src={assets.favicon} 
           alt="Pixaura" 
           className='w-14 sm:w-16 md:w-20 lg:w-24 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] transform-gpu'
         />
         <h1 
           className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 tracking-tight"
           style={{ 
             fontFamily: 'Viora, serif',
             fontWeight: '500',
             letterSpacing: '0.01em'
           }}
         >
           Pixaura
         </h1>
       </div>
       <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-600 max-sm:hidden'>@2025 Pixaura. All rights reserved</p>
       <div className='flex gap-3'>
         <a 
           href="https://www.linkedin.com/in/samarthmuktamath" 
           target="_blank" 
           rel="noopener noreferrer"
           className='w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-900 hover:bg-gray-100 transition-all'
         >
           <FaLinkedin className='text-gray-700 text-lg hover:text-gray-900' />
         </a>
         <a 
           href="https://port-folio-sam.vercel.app/" 
           target="_blank" 
           rel="noopener noreferrer"
           className='w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-900 hover:bg-gray-100 transition-all'
         >
           <FaBriefcase className='text-gray-700 text-lg hover:text-gray-900' />
         </a>
       </div>
    </div>
  )
}

export default Footer
