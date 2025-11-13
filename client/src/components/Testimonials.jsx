import React from 'react'
import { testimonialsData } from '../assets/assets'
import { FaQuoteLeft } from 'react-icons/fa'
import { BsStarFill } from 'react-icons/bs'
import { IoCheckmarkCircle } from 'react-icons/io5'

const Testimonials = () => {
  return (
    <section className="relative w-full my-20 py-16 px-4 bg-[#F5F5F5] overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#102837] rounded-full mb-6">
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          
          <h2 className='text-4xl sm:text-5xl font-bold mb-4 text-[#102837] leading-tight'>
            What Our Customers Say
          </h2>
          <p className='text-lg text-[#102837]/70 max-w-2xl'>
            Real stories from real people who love our services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {testimonialsData.map((testimonial, index) => (
            <article 
              className='group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#102837]/10'
              key={index}
            >
              {/* Quote icon */}
              <div className='absolute top-6 left-6 text-[#102837]/5 group-hover:text-[#102837]/10 transition-colors duration-300'>
                <FaQuoteLeft className='text-4xl' />
              </div>
              
              {/* Content */}
              <div className='relative z-10'>
                {/* Star rating */}
                <div className='flex gap-1 mb-6 justify-center'>
                  {Array.from({ length: 5 }).map((_, starIndex) => {
                    const isFullStar = starIndex < testimonial.stars
                    return (
                      <BsStarFill
                        key={starIndex}
                        className={`w-5 h-5 transition-all duration-200 ${
                          isFullStar 
                            ? 'text-[#102837]' 
                            : 'text-[#102837]/20'
                        }`}
                        aria-label={isFullStar ? "Filled star" : "Empty star"}
                      />
                    )
                  })}
                </div>

                {/* Testimonial text */}
                <blockquote className='text-[#102837]/80 leading-relaxed text-center mb-8 min-h-[100px] flex items-center justify-center'>
                  <p className='text-base sm:text-lg'>
                    "{testimonial.text}"
                  </p>
                </blockquote>

                {/* Divider */}
                <div className='w-16 h-0.5 bg-[#102837]/20 mx-auto mb-6' />

                {/* Profile section */}
                <div className='flex flex-col items-center'>
                  <div className='relative mb-4'>
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} - ${testimonial.role}`}
                      className='w-16 h-16 rounded-full object-cover border-2 border-[#102837]/10 shadow-md group-hover:scale-105 transition-transform duration-300'
                    />
                    {/* Verified badge */}
                    <div className='absolute -bottom-1 -right-1 bg-[#102837] rounded-full p-1'>
                      <IoCheckmarkCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className='text-center'>
                    <h3 className='text-lg font-bold text-[#102837] mb-1'>
                      {testimonial.name}
                    </h3>
                    <p className='text-sm text-[#102837]/60 font-medium'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className='absolute bottom-0 left-0 h-1 bg-[#102837] w-0 group-hover:w-full transition-all duration-500' />
            </article>
          ))}
        </div>

        {/* Trust indicators */}
        <div className='mt-16 flex flex-wrap justify-center items-center gap-12'>
          <div className='flex flex-col items-center'>
            <div className='text-4xl font-black text-[#102837] mb-1'>500+</div>
            <div className='text-sm text-[#102837]/70 font-semibold'>Happy Clients</div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-4xl font-black text-[#102837] mb-1'>4.6/5</div>
            <div className='text-sm text-[#102837]/70 font-semibold'>Average Rating</div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-4xl font-black text-[#102837] mb-1'>90%</div>
            <div className='text-sm text-[#102837]/70 font-semibold'>Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
