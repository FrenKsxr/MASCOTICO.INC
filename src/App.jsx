import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import SignUp from './components/SingUp.jsx';
import Main from './components/MobMenu.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Main/>}/>
        <Route path="/signup" element={<SignUp />} /> {/* Ruta para la página de registro */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
