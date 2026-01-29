/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AppContext } from '../context/app-context';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();


  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  }


  return (
    <motion.div
      className='flex flex-col items-center justify-between text-center my-20'
      initial={{ opacity: 0.2, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <p>best image generator</p>
        <motion.img
          src={assets.star_icon}
          alt=""
          animate={{
            opacity: [0.2, 1, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>


      <motion.h1
        className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Type the text, watch <span className='text-blue-600 text-8xl'>what's</span> next
      </motion.h1>


      <motion.p
        className='text-center max-w-xl mx-auto mt-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Discover the power of AI with our image generator. Create stunning images from text in just a few simple steps.
      </motion.p>


      <motion.button onClick={onClickHandler}
        className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-10 rounded-full'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
        <motion.img
          className="h-6"
          src={assets.star_group}
          alt=""
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>


      {/* Larger Width Infinite Scrolling Images */}
      <motion.div
        className='flex justify-center mt-16 overflow-hidden max-w-4xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <motion.div
          className='flex gap-4'
          animate={{ x: [0, -816] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Create multiple sets for seamless loop */}
          {Array(12).fill('').map((item, index) => {
            const images = [assets.robot, assets.dog, assets.parot, assets.type, assets.alien, assets.cartoon];

            return (
              <motion.div
                key={`image-${index}`}
                className="relative group flex-shrink-0"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  zIndex: 10
                }}
              >
                <img
                  className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-16"
                  src={images[index % 6]}
                  alt=""
                  width={120}
                  style={{
                    imageRendering: 'crisp-edges',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>


      <motion.p
        className='mt-2 text-neutral-600'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        Generated images
      </motion.p>
    </motion.div>
  )
}


export default Header
