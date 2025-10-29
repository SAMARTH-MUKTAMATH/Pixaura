import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
       <div className="flex items-center gap-2 group">
         <img 
           src={assets.favicon} 
           alt="Pixaura" 
           className='w-16 sm:w-20 lg:w-24 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] transform-gpu'
         />
         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
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
