import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Testimonial from '../../components/Testimonial';
import WorkingStep from '../../components/WorkingStep';
import Materials from '../../components/Materials';

const Home = () => {
  return (
    <div className="home-container">
    <Navbar/>
    <Hero/> 
    <WorkingStep/>
    <Materials/>
    <Testimonial/>
    <Footer/>
  </div>
  );
};

export default Home;
