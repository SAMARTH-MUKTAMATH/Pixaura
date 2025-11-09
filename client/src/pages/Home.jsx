import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenrateBtn from '../components/GenrateBtn'
  
const Home = () => {
  return (
    <div>
      {/* Components with padding */}
      <div className='px-4 sm:px-10 md:px-14 lg:px-28'>
        <Header />
      </div>

      {/* Full-width section */}
      <Steps />

      {/* Components with padding */}
      <div className='px-4 sm:px-10 md:px-14 lg:px-28'>
        <Description />
      </div>

      {/* Full-width section */}
      <Testimonials />

      {/* Components with padding */}
      <div className='px-4 sm:px-10 md:px-14 lg:px-28'>
        <GenrateBtn />
      </div>
    </div>
  )
}


export default Home
