import React, { useState } from 'react'

const GenrateBtn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    feedback: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRating = (rating) => {
    setFormData({ ...formData, rating: rating })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const data = new FormData()
    // ✅ For Vite: import.meta.env.VITE_
    data.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('rating', `${formData.rating} stars`)
    data.append('message', formData.feedback)
    data.append('subject', 'New Feedback from Pixaura')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      })
      
      const result = await res.json()
      
      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', rating: 0, feedback: '' })
        }, 3000)
      }
    } catch {
      alert('Failed to send. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#102837] mb-3'>
            Share Your Experience
          </h2>
          <p className='text-[#102837]/70'>
            We'd love to hear your feedback
          </p>
        </div>

        <div className='bg-white rounded-2xl p-8 border border-[#102837]/10'>
          {isSubmitted ? (
            <div className='text-center py-12'>
              <div className='w-20 h-20 bg-[#102837] rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-[#102837] mb-2'>Thank You!</h3>
              <p className='text-[#102837]/70'>Your feedback has been sent</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label className='block text-sm font-semibold text-[#102837] mb-2'>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className='w-full px-4 py-3 border border-[#102837]/20 rounded-xl focus:outline-none focus:border-[#102837]'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-[#102837] mb-2'>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className='w-full px-4 py-3 border border-[#102837]/20 rounded-xl focus:outline-none focus:border-[#102837]'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-[#102837] mb-3'>
                  Rate Your Experience *
                </label>
                <div className='flex gap-2'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRating(star)}
                      className='text-3xl transition-transform hover:scale-110'
                    >
                      {star <= formData.rating ? (
                        <span className='text-[#102837]'>★</span>
                      ) : (
                        <span className='text-[#102837]/20'>★</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className='block text-sm font-semibold text-[#102837] mb-2'>
                  Your Feedback *
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your experience..."
                  className='w-full px-4 py-3 border border-[#102837]/20 rounded-xl focus:outline-none focus:border-[#102837] resize-none'
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || formData.rating === 0}
                className='w-full bg-[#102837] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50'
              >
                {isLoading ? 'Sending...' : 'Submit Feedback'}
              </button>
            </form>
          )}
        </div>

        <div className='mt-8 text-center'>
          <p className='text-sm text-[#102837]/60 mb-2'>Or email us at</p>
          <a href="mailto:samarth8bit@gmail.com" className='text-[#102837] font-semibold hover:underline'>
            samarth8bit@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default GenrateBtn
