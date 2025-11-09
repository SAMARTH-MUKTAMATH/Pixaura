import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BuyCredit from './pages/BuyCredit';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { AppContext } from './context/app-context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const { showLogin } = useContext(AppContext);


  return (
    <div className='min-h-screen bg-[#F5F5F5]'>
      <ToastContainer position="bottom-right" />
      <Navbar />
      {showLogin && <Login />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      
      <Footer />
    </div>
  );
};


export default App;
