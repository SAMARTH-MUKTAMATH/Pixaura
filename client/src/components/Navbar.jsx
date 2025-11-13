import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/app-context';

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  return (
    <div className='flex items-center justify-between py-0 px-3 sm:px-8 md:px-12 lg:px-24 relative bg-[#102837] shadow-md rounded-b-xl'>
      {/* Logo Section */}
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
          <span className="block h-0.5 bg-[#E5E4E4] transition-all duration-300 peer-checked:rotate-45 peer-checked:translate-y-1.5"></span>
          <span className="block h-0.5 bg-[#E5E4E4] transition-all duration-300 peer-checked:opacity-0"></span>
          <span className="block h-0.5 bg-[#E5E4E4] transition-all duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></span>
        </div>
      </label>

      {/* Desktop Navigation */}
      <div className='hidden sm:block'>
        {user ? (
          <div className='flex items-center gap-3 sm:gap-4'>
            {/* Credits Badge */}
            <button 
              onClick={() => navigate('/buy')} 
              style={{ border: '2px solid #102837' }}
              className="flex items-center gap-2 bg-[#E5E4E4] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
            >
              <img className='w-4 sm:w-5' src={assets.credit_star} alt="" />
              <span className='text-xs sm:text-sm font-semibold text-[#102837]'>{credit}</span>
              <span className='text-xs text-[#102837]/70 max-sm:hidden'>credits</span>
            </button>

            {/* Profile Dropdown with #102837 background */}
            <div className="relative">
              <div 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ border: '2px solid #102837' }}
                className='flex items-center gap-2 cursor-pointer bg-[#E5E4E4] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md'
              >
                {/* Profile icon with navbar color #102837 background */}
                <div 
                  className='w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center overflow-hidden p-0.5'
                  style={{ backgroundColor: '#102837' }}
                >
                  <img 
                    src={assets.profile_icon} 
                    className='w-full h-full object-cover rounded-full' 
                    alt="Profile" 
                  />
                </div>
                <span className='text-xs sm:text-sm font-semibold text-[#102837] max-md:hidden'>
                  {user.name}
                </span>
                <svg 
                  className={`w-3 h-3 sm:w-4 sm:h-4 text-[#102837] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className='absolute top-full right-0 z-50 mt-2 w-56'>
                  <div className='bg-[#E5E4E4] rounded-xl shadow-2xl border border-[#102837]/10 overflow-hidden'>
                    {/* User Info Header */}
                    <div className='px-4 py-3 bg-[#102837]/5 border-b border-[#102837]/10'>
                      <p className='text-sm font-semibold text-[#102837]'>{user.name}</p>
                      <p className='text-xs text-[#102837]/60'>{credit} credits remaining</p>
                    </div>

                    {/* Menu Items */}
                    <div className='py-2'>
                      <button 
                        onClick={() => {
                          navigate('/buy');
                          setIsDropdownOpen(false);
                        }}
                        className='w-full px-4 py-2.5 text-left text-sm text-[#102837] hover:bg-[#102837]/10 transition-colors flex items-center gap-3'
                      >
                        <img className='w-4' src={assets.credit_star} alt="" />
                        <span>Buy Credits</span>
                      </button>
                      <button 
                        onClick={handleLogout}
                        className='w-full px-4 py-2.5 text-left text-sm text-[#102837] hover:bg-[#102837]/10 transition-colors flex items-center gap-3 border-t border-[#102837]/10 mt-1 font-semibold'
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-4 sm:gap-5'>
            <button 
              onClick={() => navigate('/buy')} 
              className='text-sm sm:text-base text-[#E5E4E4] hover:text-[#E5E4E4]/80 transition-colors font-medium'
            >
              Pricing
            </button>
            <button 
              onClick={() => setShowLogin(true)} 
              className='bg-[#E5E4E4] text-[#102837] px-5 sm:px-7 py-2 sm:py-2.5 text-sm rounded-full hover:bg-[#E5E4E4]/90 hover:scale-105 transition-all font-semibold shadow-lg'
            >
              Login
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      <div className='sm:hidden absolute top-full left-3 right-3 mt-2 bg-[#E5E4E4] border border-[#102837]/10 shadow-2xl rounded-xl z-40 transition-all duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 -translate-y-4 opacity-0 pointer-events-none peer-checked:pointer-events-auto overflow-hidden'>
        <div className='flex flex-col'>
          {user ? (
            <>
              {/* Mobile User Header */}
              <div className='flex items-center gap-3 px-4 py-4 bg-[#102837]/5 border-b border-[#102837]/10'>
                <div 
                  className='w-12 h-12 rounded-full flex items-center justify-center overflow-hidden p-0.5'
                  style={{ backgroundColor: '#102837' }}
                >
                  <img src={assets.profile_icon} className='w-full h-full object-cover rounded-full bg-white' alt="" />
                </div>
                <div className='flex-1'>
                  <p className='text-sm font-semibold text-[#102837]'>{user.name}</p>
                  <p className='text-xs text-[#102837]/60'>{credit} credits left</p>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <div className='p-3 space-y-2'>
                <button 
                  onClick={() => navigate('/buy')} 
                  className="flex items-center gap-3 bg-[#102837] hover:bg-[#102837]/90 px-4 py-3 rounded-lg w-full transition-all"
                >
                  <img className='w-5' src={assets.credit_star} alt="" />
                  <span className='text-sm font-semibold text-[#E5E4E4]'>Buy Credits</span>
                </button>
                <button 
                  onClick={logout} 
                  className='flex items-center gap-3 bg-[#102837]/10 hover:bg-[#102837]/20 text-[#102837] px-4 py-3 rounded-lg w-full transition-all'
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className='text-sm font-semibold'>Logout</span>
                </button>
              </div>
            </>
          ) : (
            <div className='p-3 space-y-2'>
              <button 
                onClick={() => navigate('/buy')} 
                className='text-[#102837] hover:bg-[#102837]/10 py-3 px-4 text-left text-sm transition-all rounded-lg w-full font-medium'
              >
                Pricing
              </button>
              <button 
                onClick={() => setShowLogin(true)} 
                className='bg-[#102837] hover:bg-[#102837]/90 text-[#E5E4E4] px-4 py-3 rounded-lg w-full transition-all font-semibold'
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Click Outside to Close Dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
