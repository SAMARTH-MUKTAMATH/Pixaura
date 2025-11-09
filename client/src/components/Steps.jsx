/* eslint-disable no-unused-vars */
import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion';


const Steps = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center py-20 bg-[#F5F5F5]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h1 
        className='text-3xl sm:text-4xl font-semibold mb-2 text-[#102837]'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        How it works
      </motion.h1>
      
      <motion.p 
        className='text-lg text-gray-600 mb-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Transform Words Into Stunning Images
      </motion.p>


      <div className="space-y-4 w-full max-w-3xl text-sm px-4">
        {stepsData.map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-center gap-4 p-5 px-8 bg-white shadow-md border border-gray-200 cursor-pointer rounded-xl hover:border-[#102837] transition-colors"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15 
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.img 
              width={40} 
              src={item.icon} 
              alt=""
              whileHover={{ 
                scale: 1.1,
                rotate: 10,
                transition: { duration: 0.2 }
              }}
            />
            <div>
              <h2 className="text-xl font-medium text-[#102837]">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


export default Steps
