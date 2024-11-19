import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../assets/google.svg';
import imageSrc from '../assets/image.jpg';

function Login() {
  const navigate = useNavigate(); // Hook para navegar entre páginas
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = () =>  navigate('/Menu')

  const handleSignUp = () => navigate('/signup'); // Navegar a la página de registro

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Formulario de inicio de sesión */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome to MascoTico</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>

          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-gray-500"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-gray-500"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-between w-full py-4">
            <div>
              <input type="checkbox" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md cursor-pointer">Forgot password</span>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src={googleIcon} alt="Google Icon" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?{' '}
            <span
              className="font-bold text-black cursor-pointer"
              onClick={handleSignUp}
            >
              Sign up for free
            </span>
          </div>
        </div>

        {/* Imagen decorativa */}
        <div className="relative">
          <img
            src={imageSrc}
            alt="Main Image"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            <span className="text-white text-xl">
              Únete a nuestra comunidad y juntos<br />
              elevemos la calidad de vida de nuestras mascotas a nuevas alturas.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
