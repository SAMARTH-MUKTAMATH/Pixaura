import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './app-context'; 
import axios from 'axios';
import { toast } from 'react-toastify';

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credit, setCredit] = useState(0);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const loadCreditsData = async () => {
    if (!token) return;
    
    try {
      // ✅ Fixed: Changed POST to GET (matches your backend)
      const { data } = await axios.get(backendUrl + '/api/users/credits', {
        headers: { token: token }
      });
      
      console.log('=== CREDIT LOADING DEBUG ===');
      console.log('Full backend response:', data);
      console.log('Credits found:', data.credits || data.credit || data.creditBalance || data.user?.creditBalance);
      console.log('==========================');
      
      if (data.success) {
        const creditsValue = data.credits || data.credit || data.creditBalance || data.user?.creditBalance || 0;
        console.log('Setting credits to:', creditsValue);
        setCredit(creditsValue);
        setUser(data.user);
      }
    } catch (error) {
      console.log('Credits loading error:', error.response?.data);
      
      if (error.response?.data?.message === 'Invalid token' || 
          error.response?.status === 401) {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        setCredit(0);
        toast.error('Session expired. Please login again.');
      }
    }
  };

  const generateImage = async (prompt) => {
    try {
      console.log('=== FRONTEND IMAGE GENERATION DEBUG ===');
      console.log('Current credits before generation:', credit);
      console.log('Token value:', token);
      console.log('Backend URL:', backendUrl);
      
      const headers = { token: token };
      console.log('Headers being sent:', headers);
      console.log('==========================================');
      
      const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, {
        headers: headers
      });

      if (data.success) {
        console.log('Image generated successfully');
        console.log('Credits remaining from response:', data.creditsRemaining);
        
        // ✅ Fixed: Update credit immediately from response
        if (data.creditsRemaining !== undefined) {
          setCredit(data.creditsRemaining);
          console.log('Updated credits to:', data.creditsRemaining);
        } else {
          // ✅ Fixed: Deduct 1 credit immediately if no creditsRemaining in response
          setCredit(prevCredit => {
            const newCredit = Math.max(0, prevCredit - 1);
            console.log('Deducted 1 credit, new total:', newCredit);
            return newCredit;
          });
        }
        
        return data.imageUrl;
      } else {
        console.log('Image generation failed:', data.message);
        toast.error(data.message);
        
        // Handle insufficient credits case
        if (data.message && data.message.toLowerCase().includes('insufficient')) {
          console.log('Insufficient credits detected, navigating to /buy');
          toast.error('You have insufficient credits to generate an image. Please top up your credits.');
          navigate('/buy');
          return null;
        }
        
        // Also check if creditBalance is 0 from backend response
        if (data.creditBalance === 0) {
          console.log('Credit balance is 0, navigating to /buy');
          toast.error('You have run out of credits. Please purchase more credits to continue.');
          navigate('/buy');
          return null;
        }
      }
    } catch (error) {
      console.log('=== FRONTEND IMAGE GENERATION ERROR ===');
      console.log('Status:', error.response?.status);
      console.log('Error data:', error.response?.data);
      console.log('Error message:', error.message);
      console.log('=========================================');
      
      // Check if error response indicates insufficient credits
      if (error.response?.data?.message && 
          error.response.data.message.toLowerCase().includes('insufficient')) {
        console.log('Insufficient credits from error response, navigating to /buy');
        toast.error('You have insufficient credits to generate an image. Please top up your credits.');
        navigate('/buy');
        return null;
      }
      
      toast.error(error.response?.data?.message || 'Failed to generate image');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setCredit(0);
    navigate('/');
    toast.success('Logged out successfully');
  };

  useEffect(() => {
    if (token && token !== null && token.trim() !== '' && token !== 'null') {
      if (!user) {
        loadCreditsData();
      }
    } else {
      setUser(null);
      setCredit(0);
    }
  }, [token]);

  const value = { 
    user, 
    setUser, 
    showLogin, 
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
