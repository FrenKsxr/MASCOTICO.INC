import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import SignUp from './components/SingUp.jsx';
import Main from './components/MobMenu.jsx'
import './index.css';

import Home from './page/Home/home.jsx';

import Contact from './page/contact/Contact.jsx';
import Map from './page/Map/Map.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Map />
   
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
