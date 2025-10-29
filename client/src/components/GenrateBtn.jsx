import React from 'react'
import { assets } from '../assets/assets'

const GenrateBtn = () => {
  return (
    <div className="pb-16 text-center">
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-neutral-800 py-6 md:py-16'>
            see the magic
        </h1>  
        <button className='inline-flex items-center gap2 px-12 py-3 rounded-full bg-black text-white
        m-auto hover:scale-105 transition-all duration-500'>Genrate

        
            <img src={assets.star_group} 
            className='h-6'
            alt="" />
        </button>
    </div>
  )
}

export default GenrateBtn