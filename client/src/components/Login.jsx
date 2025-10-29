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
          
          // Set user and token first
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem('token', data.token);
          
          // Set credits if available in login response
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
          
          // Set user and token first
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem('token', data.token);
          
          // Set credits if available in register response
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
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-2xl text-center font-medium text-neutral-700'>{state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>

        {state !== 'login' && (
          <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.user_icon} alt="" />
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='outline-none text-sm' placeholder='Full Name' required />
          </div>
        )}

        <div className='border px-6 flex py-2 items-center gap-2 rounded-full mt-4'>
          <img src={assets.email_icon} alt="" />
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm' placeholder='Email id' required />
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.lock_icon} alt="" />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='outline-none text-sm' placeholder='Password' required />
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>

        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>
          {state === 'login' ? 'LOGIN' : 'CREATE ACCOUNT'}
        </button>

        {state === 'login' ? (
          <p className='mt-5 text-center'>
            Don't have an account?{' '}
            <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign up')}>
              SIGN UP
            </span>
          </p>
        ) : (
          <p className='mt-5 text-center'>
            Already have an account?{' '}
            <span className='text-blue-600 cursor-pointer' onClick={() => setState('login')}>
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className='absolute top-5 right-5 cursor-pointer'
        />
      </form>
    </div>
  );
};

export default Login;
