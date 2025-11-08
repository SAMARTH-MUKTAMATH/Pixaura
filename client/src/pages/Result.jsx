import React, { useState, useContext, useRef, useEffect } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/app-context';


const Result = () => {
  const [image, setImage] = useState(assets.animals)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const textareaRef = useRef(null)


  const { generateImage } = useContext(AppContext);


  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [input])


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    
    if (!input.trim()) return
    
    setLoading(true)
    
    try {
      const imageUrl = await generateImage(input);
      if (imageUrl) {
        setIsImageLoaded(true);
        setImage(imageUrl);
      }
    } catch (error) {
      console.error('Error generating image:', error)
    } finally {
      setLoading(false);
    }
  }


  // Fixed download function for base64 images
  const handleDownload = () => {
    try {
      if (image.startsWith('data:image')) {
        // For base64 images from Clipdrop
        const link = document.createElement('a');
        link.href = image;
        link.download = `generated-image-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // For regular URLs
        const link = document.createElement('a');
        link.href = image;
        link.download = `generated-image-${Date.now()}.png`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
        <div className='relative'>
          <img 
            src={image} 
            alt="Generated or sample image" 
            className='max-w-sm rounded'
          />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-[10s] ${loading ? 'w-full' : 'w-0'}`} />
        </div>
        <p className={!loading ? 'hidden' : 'text-center mt-2'}>Loading...</p>
      </div>


      {!isImageLoaded && (
        <div className='flex items-start w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-3xl'>
          <textarea 
            ref={textareaRef}
            onChange={(e) => setInput(e.target.value)} 
            value={input}
            placeholder='Describe the image'
            rows={1}
            className='flex-1 bg-transparent outline-none ml-8 mr-4 placeholder-gray-300 resize-none overflow-hidden py-3 min-h-[40px] max-h-[200px]'
          />
          <button 
            type='submit' 
            disabled={loading || !input.trim()}
            className='bg-zinc-900 sm:px-16 py-3 px-4 text-white rounded-full hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex-shrink-0'
          >
            Generate
          </button>
        </div>
      )}


      {isImageLoaded && (
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.6 mt-10 rounded-full'>
          <p 
            onClick={() => {
              setIsImageLoaded(false)
              setInput('')
              setImage(assets.animals)
            }} 
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors'
          >
            Generate Another
          </p>
          <button 
            onClick={handleDownload}
            className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer hover:bg-zinc-800 transition-colors text-white'
          >
            Download
          </button>
        </div>
      )}
    </form>
  )
}


export default Result
