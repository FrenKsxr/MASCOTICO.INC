import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import WorkingStep from '../components/WorkingStep';

const Home = () => {
  return (
    <div className="home-container">
    <Navbar/>
    <Hero/> 
    <WorkingStep/> 
    <Testimonial/>
    <Footer/>
  </div>
  );
};

export default Home;
