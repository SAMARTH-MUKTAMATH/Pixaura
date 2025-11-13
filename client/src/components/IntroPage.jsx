// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


const IntroPage = () => {
  return (
    <motion.div 
      className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-[9999] overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #1a3a4a 0%, #0d1f2d 50%, #000000 100%)'
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute w-96 h-96 bg-[#E5E4E4] rounded-full opacity-5 blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{
          duration: 2,
          ease: "easeOut"
        }}
      />
      
      {/* Main text with split animation */}
      <div className="relative">
        <motion.h1
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] text-[#E5E4E4] m-0 relative z-10"
          style={{ 
            fontFamily: 'Viora, serif',
            fontWeight: '500',
            letterSpacing: '0.05em'
          }}
          initial={{ 
            opacity: 0,
            y: 100,
            filter: "blur(10px)"
          }}
          animate={{ 
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}
          transition={{ 
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }}
        >
          Pixaura
        </motion.h1>
        
        {/* Underline animation */}
        <motion.div
          className="h-1 bg-[#E5E4E4] absolute bottom-0 left-0"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 1
          }}
        />
      </div>


      {/* Subtitle */}
      <motion.p
        className="text-[#E5E4E4] text-sm sm:text-base md:text-lg mt-6 tracking-wide opacity-70 text-center max-w-2xl px-4"
        style={{ 
          fontFamily: 'Viora, serif',
          fontWeight: '300',
          lineHeight: '1.6'
        }}
        initial={{ 
          opacity: 0,
          y: 20
        }}
        animate={{ 
          opacity: 0.7,
          y: 0
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 1.2
        }}
      >
        Type a prompt, get a masterpiece. Create stunning visuals powered by AI magic.
      </motion.p>
    </motion.div>
  );
};


export default IntroPage;
