import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';
import { FaDog, FaShoppingCart, FaTags } from 'react-icons/fa';

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center bg-working-img py-12'>
      <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500 opacity-80'></div>
      <div className='relative container mx-auto px-8 py-20'>
        {/* Animated Title and Description */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='text-center text-white mb-20'
        >
          <h2 className='text-4xl font-bold mb-6'>¿Cómo Trabaja Mascótico?</h2>
          <p className='text-lg md:w-3/4 mx-auto'>
            En Mascótico, hacemos que el cuidado de tus mascotas sea fácil y accesible. Descubre cómo nuestras herramientas pueden mejorar la calidad de vida de tu mejor amigo.
          </p>
        </motion.div>

        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-12'>
          {/* Animated Step 1 */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-8 flex-1 shadow-lg hover:shadow-2xl transition-shadow'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl'>
              <FaDog />
            </div>
            <h3 className='text-lg font-semibold mt-8 text-blue-700'>Veterinarias Cercanas</h3>
            <p className='my-4 text-gray-600'>
              Encuentra las veterinarias más cercanas a tu ubicación. Ofrecemos un listado completo con servicios, horarios y opciones de contacto, asegurando atención inmediata para cualquier emergencia.
            </p>
          </motion.div>

          {/* Animated Step 2 */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-8 flex-1 shadow-lg hover:shadow-2xl transition-shadow'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl'>
              <FaShoppingCart />
            </div>
            <h3 className='text-lg font-semibold mt-8 text-blue-700'>Productos y Juguetes</h3>
            <p className='my-4 text-gray-600'>
              Explora una amplia gama de productos y juguetes para tu mascota. Realiza todas tus compras en nuestra plataforma con facilidad y encuentra lo mejor para consentirlos.
            </p>
          </motion.div>

          {/* Animated Step 3 */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-8 flex-1 shadow-lg hover:shadow-2xl transition-shadow'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl'>
              <FaTags />
            </div>
            <h3 className='text-lg font-semibold mt-8 text-blue-700'>Promociones Atractivas</h3>
            <p className='my-4 text-gray-600'>
              Disfruta de promociones irresistibles en servicios, alimentos y accesorios. Mantente informado sobre las ofertas más recientes y ahorra mientras cuidas de tu mascota.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkingStep;
