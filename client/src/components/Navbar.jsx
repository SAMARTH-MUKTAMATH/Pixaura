import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/app-context';


const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();


  return (
    <div className='flex items-center justify-between py-0 px-3 sm:px-8 md:px-12 lg:px-24 relative bg-[#102837] shadow-md rounded-b-xl'>
      {/* Logo Section - Increased mobile sizes */}
      <Link to="/" className="flex items-center gap-2 sm:gap-2 group m-0">
        <img 
          src={assets.favicon} 
          alt="Pixaura" 
          className='w-12 sm:w-14 md:w-16 lg:w-20 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] transform-gpu'
          style={{ filter: 'brightness(0) saturate(100%) invert(95%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)' }}
        />
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#E5E4E4] m-0"
          style={{ 
            fontFamily: 'Viora, serif',
            fontWeight: '500',
            letterSpacing: '0.01em'
          }}
        >
          Pixaura
        </h1>
      </Link>


      {/* Mobile Menu Checkbox (Hidden) */}
      <input type="checkbox" id="mobile-menu" className="peer hidden" />


      {/* Mobile Hamburger Menu Button */}
      <label 
        htmlFor="mobile-menu" 
        className="sm:hidden cursor-pointer p-2 group z-50 relative"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span className="block h-0.5 bg-[#E5E4E4] transition-all duration-300 group-hover:bg-[#E5E4E4] peer-checked:rotate-45 peer-checked:translate-y-1.5"></span>
          <span className="block h-0.5 bg-[#E5E4E4] transition-all duration-300 group-hover:bg-[#E5E4E4] peer-checked:opacity-0"></span>
          <span className="block h-0.5 bg-[#E5E4E4] transition-all duration-300 group-hover:bg-[#E5E4E4] peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></span>
        </div>
      </label>


      {/* Desktop Navigation */}
      <div className='hidden sm:block'>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-3 rounded-full hover:scale-105 transition-all duration-700'>
            <button onClick={() => navigate('/buy')} className="flex items-center gap-2 rounded-full bg-[#E5E4E4] px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 hover:bg-[#E5E4E4]/80 transition-colors">
              <img className='w-4 sm:w-5' src={assets.credit_star} alt="" />
              <p className='text-xs sm:text-sm font-medium text-[#102837]'>Credit Left {credit}</p>
            </button>
            <p className='text-[#E5E4E4] max-md:hidden pl-2 sm:pl-4 text-sm'>{user.name}</p>
            <div className="relative group">
              <img src={assets.profile_icon} className='w-8 sm:w-10 drop-shadow hover:scale-110 transition-transform' alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-[#E5E4E4] rounded-md border border-[#102837] text-sm shadow-lg'>
                  <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10 hover:bg-[#102837] hover:text-[#E5E4E4] rounded transition-colors text-[#102837]'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className='cursor-pointer text-sm sm:text-base text-[#E5E4E4] hover:text-[#E5E4E4]/80 transition-colors'>Pricing</p>
            <button onClick={() => setShowLogin(true)} className='bg-[#E5E4E4] text-[#102837] px-4 sm:px-7 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full hover:bg-[#E5E4E4]/80 transition-colors font-semibold'>Login</button>
          </div>
        )}
      </div>


      {/* Mobile Menu Dropdown - More gap added */}
      <div className='sm:hidden absolute top-8 left-3 right-3 bg-[#E5E4E4] border border-[#102837] shadow-lg rounded-lg z-40 transition-all duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 -translate-y-4 opacity-0 pointer-events-none peer-checked:pointer-events-auto'>
        <div className='flex flex-col p-3 space-y-2'>
          {user ? (
            <>
              <div className='flex items-center gap-2 pb-2 border-b border-[#102837]'>
                <img src={assets.profile_icon} className='w-6' alt="" />
                <p className='text-[#102837] font-medium text-sm'>{user.name}</p>
              </div>
              <button 
                onClick={() => navigate('/buy')} 
                className="flex items-center gap-2 bg-[#102837] px-3 py-2 rounded-lg w-full justify-center hover:bg-[#102837]/80 transition-colors"
              >
                <img className='w-4' src={assets.credit_star} alt="" />
                <p className='text-sm font-medium text-[#E5E4E4]'>Credits: {credit}</p>
              </button>
              <button 
                onClick={logout} 
                className='bg-[#102837] hover:bg-[#102837]/80 text-[#E5E4E4] px-3 py-2 text-sm rounded-lg w-full transition-colors font-semibold'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => navigate('/buy')} 
                className='text-[#102837] hover:text-[#102837]/70 py-2 text-left text-sm transition-colors font-medium'
              >
                Pricing
              </button>
              <button 
                onClick={() => setShowLogin(true)} 
                className='bg-[#102837] hover:bg-[#102837]/80 text-[#E5E4E4] px-3 py-2 text-sm rounded-lg w-full transition-colors font-semibold'
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


export default Navbar;
