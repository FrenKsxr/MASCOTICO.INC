import React from 'react'

import material3 from "../assets/material3.png"
import material1 from "../assets/material1.png"
import material2 from "../assets/material2.png"
import Button from './Button'

const Materials = () => {
  return (
    <section className='my-24 section-container flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
   
      <div className='md:w-1/2 mx-auto'>
          <h3 className='text-lg font-semibold text-black mb-4'>MascoTico</h3>
          <h2 className='text-4xl font-bold text-black mb-4 capitalize lg:w-1/2'>
            Cuidamos a tus mascotas como parte de tu familia
          </h2>
          <p className='text-black mb-5 lg:w-2/3'>
            En MascoTico te ayudamos a encontrar veterinarios cercanos, reservar citas fácilmente y ofrecer los mejores productos para tus fieles compañeros. Mantén a tus mascotas saludables y felices con nuestra ayuda.
          </p>
          <Button text="Más Información" />
      </div>

      <div className='md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center '>
          <div className=''>
              <img src={material1} alt="" className='' />
              <img src={material2} alt="" className='' />
          </div>
          <div className='md:col-span-2 col-span-1'>
              <img src={material3} alt="" className='w-full md:h-[547px]' />
          </div>
      </div>
      
    </section>
  )
}

export default Materials
