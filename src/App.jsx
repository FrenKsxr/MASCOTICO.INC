import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import SignUp from './components/SingUp.jsx';
import Main from './components/MobMenu.jsx'
import './index.css';

import Home from './page/home.jsx';
import Footer from './page/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Home />


   
    {/* 


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Main/>}/>
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </BrowserRouter>
    

    */}

  </StrictMode>,
);
