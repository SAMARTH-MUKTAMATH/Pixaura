import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/app-context';

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-2 px-2 sm:px-4 mt-2 sm:-mt-4 relative'>
      {/* Logo Section - Increased mobile sizes */}
      <Link to="/" className="flex items-center gap-2 sm:gap-2 group m-0">
        <img 
          src={assets.favicon} 
          alt="Pixaura" 
          className='w-14 sm:w-16 md:w-20 lg:w-24 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] transform-gpu'
        />
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent tracking-tight m-0">
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
          <span className="block h-0.5 bg-gray-700 transition-all duration-300 group-hover:bg-blue-600 peer-checked:rotate-45 peer-checked:translate-y-1.5"></span>
          <span className="block h-0.5 bg-gray-700 transition-all duration-300 group-hover:bg-blue-600 peer-checked:opacity-0"></span>
          <span className="block h-0.5 bg-gray-700 transition-all duration-300 group-hover:bg-blue-600 peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></span>
        </div>
      </label>

      {/* Desktop Navigation */}
      <div className='hidden sm:block'>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-3 rounded-full hover:scale-105 transition-all duration-700'>
            <button onClick={() => navigate('/buy')} className="flex items-center gap-2 rounded-full bg-blue-100 px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-3 hover:bg-blue-200 transition-colors">
              <img className='w-4 sm:w-5' src={assets.credit_star} alt="" />
              <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left {credit}</p>
            </button>
            <p className='text-gray-600 max-md:hidden pl-2 sm:pl-4 text-sm'>{user.name}</p>
            <div className="relative group">
              <img src={assets.profile_icon} className='w-8 sm:w-10 drop-shadow hover:scale-110 transition-transform' alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm shadow-lg'>
                  <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10 hover:bg-gray-100 rounded transition-colors'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className='cursor-pointer text-sm sm:text-base hover:text-blue-600 transition-colors'>Pricing</p>
            <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-4 sm:px-7 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full hover:bg-zinc-700 transition-colors'>Login</button>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown - More gap added */}
      <div className='sm:hidden absolute top-16 left-4 right-4 bg-white border border-gray-200 shadow-lg rounded-lg z-40 transition-all duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 -translate-y-4 opacity-0 pointer-events-none peer-checked:pointer-events-auto'>
        <div className='flex flex-col p-3 space-y-2'>
          {user ? (
            <>
              <div className='flex items-center gap-2 pb-2 border-b border-gray-200'>
                <img src={assets.profile_icon} className='w-6' alt="" />
                <p className='text-gray-700 font-medium text-sm'>{user.name}</p>
              </div>
              <button 
                onClick={() => navigate('/buy')} 
                className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg w-full justify-center hover:bg-blue-200 transition-colors"
              >
                <img className='w-4' src={assets.credit_star} alt="" />
                <p className='text-sm font-medium text-gray-600'>Credits: {credit}</p>
              </button>
              <button 
                onClick={logout} 
                className='bg-red-500 hover:bg-red-600 text-white px-3 py-2 text-sm rounded-lg w-full transition-colors'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => navigate('/buy')} 
                className='text-gray-700 hover:text-blue-600 py-2 text-left text-sm transition-colors'
              >
                Pricing
              </button>
              <button 
                onClick={() => setShowLogin(true)} 
                className='bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-sm rounded-lg w-full transition-colors'
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
