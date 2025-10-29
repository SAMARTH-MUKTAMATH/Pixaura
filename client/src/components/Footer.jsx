import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between  gap-4 py-3 mt-20'>
       <div className="flex items-center gap-2 group">
         <img 
           src={assets.favicon} 
           alt="Pixaura" 
           className='w-14 sm:w-16 md:w-20 lg:w-24 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] transform-gpu'
         />
         <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 tracking-tight">
           Pixaura
         </h1>
       </div>
       <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>@2025 Pixaura. All rights reserved</p>
       <div className='flex gap-2.5'>
        <img src={assets.twitter_icon} alt="" width={35} />
       </div>
    </div>
  )
}

export default Footer
