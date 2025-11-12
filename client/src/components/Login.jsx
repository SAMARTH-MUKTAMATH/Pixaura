import React, { useState, useEffect, useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/app-context';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
  const [state, setState] = useState('login');
  const { showLogin, setShowLogin, backendUrl, setToken, setUser, setCredit } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === 'login') {
        const { data } = await axios.post(backendUrl + '/api/users/login', {
          email,
          password,
        });
        if (data.success) {
          console.log('Login response:', data);
          
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem('token', data.token);
          
          const creditsValue = data.credits || data.user?.credits || 0;
          console.log('Setting credits from login response:', creditsValue);
          setCredit(creditsValue);
          
          setShowLogin(false);
          toast.success('Login successful!');
        } else {
          toast.error(data.error);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/users/register', {
          name,
          email,
          password,
        });
        if (data.success) {
          console.log('Register response:', data);
          
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem('token', data.token);
          
          const creditsValue = data.credits || data.user?.credits || 0;
          console.log('Setting credits from register response:', creditsValue);
          setCredit(creditsValue);
          
          setShowLogin(false);
          toast.success('Account created successfully!');
        } else {
          toast.error(data.error);
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Something went wrong. Please try again.');
    }
  };


  useEffect(() => {
    if (!showLogin) return;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLogin]);


  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-md bg-black/40 flex justify-center items-center p-4'>
      <form onSubmit={onSubmitHandler} className='relative bg-[#F5F5F5] p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md'>
        <h1 className='text-3xl text-center font-semibold text-gray-800 mb-2' style={{ fontFamily: 'Viora, serif' }}>
          {state === 'login' ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className='text-sm text-center text-gray-600 mb-6'>
          {state === 'login' ? 'Please sign in to continue' : 'Sign up to get started'}
        </p>


        {state !== 'login' && (
          <div className='bg-white border-2 border-gray-300 px-4 py-3 flex items-center gap-3 rounded-xl mb-4 focus-within:border-gray-700 transition-colors'>
            <img src={assets.user_icon} alt="" className='w-5 h-5' />
            <input 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              type="text" 
              className='flex-1 outline-none text-sm bg-transparent text-gray-800' 
              placeholder='Full Name' 
              required 
            />
          </div>
        )}


        <div className='bg-white border-2 border-gray-300 px-4 py-3 flex items-center gap-3 rounded-xl mb-4 focus-within:border-gray-700 transition-colors'>
          <img src={assets.email_icon} alt="" className='w-5 h-5' />
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            type="email" 
            className='flex-1 outline-none text-sm bg-transparent text-gray-800' 
            placeholder='Email address' 
            required 
          />
        </div>


        <div className='bg-white border-2 border-gray-300 px-4 py-3 flex items-center gap-3 rounded-xl mb-4 focus-within:border-gray-700 transition-colors'>
          <img src={assets.lock_icon} alt="" className='w-5 h-5' />
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            type="password" 
            className='flex-1 outline-none text-sm bg-transparent text-gray-800' 
            placeholder='Password' 
            required 
          />
        </div>


        {state === 'login' && (
          <p className='text-sm text-gray-700 hover:text-gray-900 mb-6 cursor-pointer text-right transition-colors'>
            Forgot Password?
          </p>
        )}


        <button className='bg-gray-800 hover:bg-gray-900 w-full text-white py-3 rounded-xl font-semibold transition-colors shadow-lg mb-4'>
          {state === 'login' ? 'Sign In' : 'Create Account'}
        </button>


        {state === 'login' ? (
          <p className='text-center text-sm text-gray-600'>
            Don't have an account?{' '}
            <span className='text-gray-800 font-semibold cursor-pointer hover:underline' onClick={() => setState('Sign up')}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className='text-center text-sm text-gray-600'>
            Already have an account?{' '}
            <span className='text-gray-800 font-semibold cursor-pointer hover:underline' onClick={() => setState('login')}>
              Sign In
            </span>
          </p>
        )}


        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors'
        >
          <img src={assets.cross_icon} alt="" className='w-4 h-4' />
        </button>
      </form>
    </div>
  );
};


export default Login;
