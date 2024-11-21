import React from 'react';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import review1 from '../assets/review1.webp';
import review2 from '../assets/review2.webp';
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const testimonials = [
  {
    name: 'Ana López',
    location: 'Ciudad de México, MX',
    review: 'Mascótico ha sido increíble para mi perro Max. Los consejos de bienestar y el servicio de adopción me ayudaron a encontrar el compañero perfecto para mi familia.',
    image: review1,
  },
  {
    name: 'Carlos Martínez',
    location: 'Monterrey, NL',
    review: 'Adoptar a mi gata Luna fue una experiencia maravillosa gracias a Mascótico. El equipo me orientó en cada paso, asegurándose de que Luna tuviera un hogar amoroso.',
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div className='bg-[#f7f8fc] py-12' id='testimonial'>
      <div className='container mx-auto px-8 pt-20 pb-12'>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='text-center mb-20'
        >
          <h2 className='text-4xl font-bold mb-3'>Lo que dicen nuestros clientes</h2>
          <p className='text-lg md:w-1/2 mx-auto'>
            Descubre cómo Mascótico ha transformado vidas, creando conexiones especiales entre mascotas y familias felices.
          </p>
        </motion.div>

        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className='bg-white rounded-lg p-6 shadow-lg flex-1 relative'
            >
              <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                <BsFillChatQuoteFill className='w-12 h-12 text-primary' />
              </div>
              <div className='flex flex-col space-y-3 mb-4'>
                <p className='text-lg mb-2'>{testimonial.review}</p>
                <div className='flex gap-1'>
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    className='w-16 h-16 rounded-full object-cover mr-4'
                  />
                  <div>
                    <p className='font-semibold'>{testimonial.name}</p>
                    <p className='text-gray-600'>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;