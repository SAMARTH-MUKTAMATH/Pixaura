/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { stepsData } from '../assets/assets'
import { motion, useAnimation } from 'framer-motion';

const Steps = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Force scroll position reset and trigger animations
    window.scrollTo(0, window.scrollY);
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      controls.start("visible");
    }, 100);
  }, [controls]);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center my-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
    >
      <motion.h1 
        className='text-3xl sm:text-4xl font-semibold mb-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, margin: "0px 0px -50px 0px" }}
      >
        How it works
      </motion.h1>
      
      <motion.p 
        className='text-lg text-gray-500 mb-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, margin: "0px 0px -50px 0px" }}
      >
        Transform Words Into Stunning Images
      </motion.p>

      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-xl"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6 + (index * 0.2) 
            }}
            viewport={{ once: false, amount: 0.3, margin: "0px 0px -100px 0px" }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)"
            }}
          >
            <motion.img 
              width={40} 
              src={item.icon} 
              alt=""
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8 + (index * 0.2) 
              }}
              viewport={{ once: false }}
            />
            <div>
              <motion.h2 
                className="text-xl font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.0 + (index * 0.2) 
                }}
                viewport={{ once: false }}
              >
                {item.title}
              </motion.h2>
              <motion.p 
                className="text-gray-500"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.2 + (index * 0.2) 
                }}
                viewport={{ once: false }}
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
