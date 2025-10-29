import React from 'react'
import { testimonialsData } from '../assets/assets'
import { assets } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12">
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
           Customer Testimonials
        </h1>
        <p className=' text-gray-500 mb-12'> Customrs love our services</p>

<div className='flex flex-wrap gap-6'>
    {testimonialsData.map((testimonial,index)=>(
        <div className=
        'border w-80 p-12 rounded-lg shadow-md bg-white/20 m-auto cursor-pointer hover:scle-[1.02] transition-all' key={index}>
          <img src={testimonial.image} alt="" className='w-14 rounded-full'/>
          <h2>{testimonial.name}</h2>
          <p className='text-gray-500'>{testimonial.role}</p>
          <div className='flex mb-4'>
            {Array(testimonial.stars).fill().map((item,index)=>
            <img src={assets.star_icon} alt="" className='w-4' key={index}/>
            )}

          </div>
          <p className='text-gray-500'>{testimonial.text}</p>
        </div>
    ))}

</div>

    </div>
  )
}

export default Testimonials