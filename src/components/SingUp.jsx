import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../assets/google.svg';
import imageSrc from '../assets/image.jpg';

function Signup() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fullname, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/usuarios/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: fullname,
          email,
          contraseña: password,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert('Usuario registrado exitosamente');
        navigate('/');
      } else {
        alert(result.mensaje);
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Create an Account</span>
          <span className="font-light text-gray-400 mb-8">
            Join PawZenith! Please enter your details
          </span>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <span className="mb-2 text-md">Full Name</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-gray-500"
                name="fullname"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-gray-500"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-gray-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-gray-500"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
              Sign up
            </button>
          </form>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src={googleIcon} alt="Google Icon" className="w-6 h-6 inline mr-2" />
            Sign up with Google
          </button>
          <div className="text-center text-gray-400">
            Already have an account?{' '}
            <span className="font-bold text-black">Sign in</span>
          </div>
        </div>
        {/* Right side */}
        <div className="relative">
          <img
            src={imageSrc} 
            alt="Main Image"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* Text on image */}
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            <span className="text-white text-xl">
              Join our community and together<br />we elevate the quality of life for 
              <br />our pets to new heights
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
