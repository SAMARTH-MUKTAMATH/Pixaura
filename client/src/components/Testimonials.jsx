import React from 'react'
import { testimonialsData } from '../assets/assets'
import { assets } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12">
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
        Customer Testimonials
      </h1>
      <p className='text-gray-500 mb-12'>
        Customers love our services
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4'>
        {testimonialsData.map((testimonial, index) => (
          <div 
            className='group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden'
            key={index}
          >
            {/* Decorative gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            
            {/* Quote icon */}
            <div className='absolute top-6 right-6 text-6xl text-blue-200 font-serif opacity-20 group-hover:opacity-40 transition-opacity duration-300'>
              "
            </div>
            
            {/* Content */}
            <div className='relative z-10'>
              {/* Profile section */}
              <div className='flex items-center mb-6'>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className='w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300'
                />
                <div className='ml-4'>
                  <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
                    {testimonial.name}
                  </h3>
                  <p className='text-sm text-gray-500 font-medium'>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Star rating */}
              <div className='flex mb-6 justify-center'>
                {Array(testimonial.stars).fill().map((item, starIndex) => (
                  <img 
                    src={assets.star_icon} 
                    alt="star" 
                    className='w-5 h-5 mx-0.5 hover:scale-125 transition-transform duration-200'
                    key={starIndex}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className='text-gray-700 leading-relaxed text-center italic relative z-10'>
                "{testimonial.text}"
              </blockquote>
            </div>

            {/* Bottom accent line */}
            <div className='absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500 rounded-full' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
