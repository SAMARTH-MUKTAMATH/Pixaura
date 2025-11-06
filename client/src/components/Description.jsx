import React from 'react'
import { assets } from '../assets/assets'

export const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
            Create Ai Images
        </h1>
        <p className='mb-8 text-gray-500'> Use AI to create images from text prompts  </p>
        
        <div className='max-w-6xl'>
            <h2 className='text-2xl md:text-3xl font-medium mb-8 text-center'>
                Introducing the AI Image Generator
            </h2>
            
            <div className='text-gray-600 leading-relaxed text-justify space-y-6'>
                {/* Text above image */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                    <p>
                        Our AI Image Generator empowers you to transform words into breathtaking visuals within seconds. Whether you're crafting product designs, concept art, or creative moodboards, our tool makes imagination instantly visible.
                    </p>
                    <p>
                        Designed for creators, developers, and visionaries, it delivers precision, speed, and artistic quality — all in one intuitive platform. From cinematic scenes to minimalist compositions, generate images that truly capture your idea's essence.
                    </p>
                </div>

                {/* Center section with image and side text - BIGGER IMAGE */}
                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 my-12'>
                    {/* Left text */}
                    <div className='flex-1 text-justify order-1 lg:order-1'>
                        <p>
                            With advanced AI models and smart rendering, every detail is refined — lighting, texture, and depth work harmoniously to produce professional-grade results. The technology adapts to your creative vision, ensuring each generated image meets professional standards while maintaining artistic integrity.
                        </p>
                    </div>

                    {/* Center image - MUCH BIGGER SIZE */}
                    <div className='flex-shrink-0 w-full lg:w-auto flex justify-center order-2 lg:order-2'>
                        <img 
                            src={assets.panda} 
                            alt="AI Generated Panda" 
                            className='w-full max-w-md sm:max-w-lg lg:w-[32rem] xl:w-[36rem] 2xl:w-[40rem] h-auto rounded-lg object-cover shadow-lg'
                        />
                    </div>

                    {/* Right text */}
                    <div className='flex-1 text-justify order-3 lg:order-3'>
                        <p>
                            Simply type your prompt, select your desired style, and watch your imagination come to life. No design skills required — just creativity. The intuitive interface guides you through the process, making professional image generation accessible to everyone.
                        </p>
                    </div>
                </div>

                {/* Text below image */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                    <p>
                        Whether you're a filmmaker visualizing scenes, a designer exploring concepts, or a hobbyist experimenting with art, our AI Image Generator is your creative companion for stunning visual storytelling.
                    </p>
                    <p>
                        Experience the future of digital creativity today. Transform your ideas into professional-quality images with just a few clicks and unleash your creative potential like never before.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description
