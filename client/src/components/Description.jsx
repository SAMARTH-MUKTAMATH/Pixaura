import React from 'react'
import { assets } from '../assets/assets'

export const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
            Create Ai Images
        </h1>
        <p className='mb-8 text-gray-500'> Use AI to create images from text prompts  </p>
        
<div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
    <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />


<div className='text 3xl font-medium max-w-lg mb-4'>
<h2>Introducing the Ai Image Generator</h2>
<p className='text-gray-600 mb-4'>
    Our Ai Image Generator is a powerful tool that allows you to create stunning images from text prompts.
 Whether you need a simple image or a complex one, our generator has got you covered.
</p>
<p className='text-gray-600'>
    With our Ai Image Generator, you can create images from text prompts in just a few simple steps. Simply type in your text prompt, and our generator will create the image for you.
</p>

</div>
</div>


    </div>

    
  )
}
export default Description