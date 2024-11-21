import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/Hero.jpg';
import { fadeIn } from "../utilis/animationVariants";

const Hero = () => {
    return (
        <section className="bg-heroBg text-black flex items-center pt-28 md:h-screen" id="home">
            <div className='container mx-auto flex flex-col md:flex-row-reverse items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>

                {/* Right Side */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-1/2 h-full"
                >
                    <img
                        src={heroImg}
                        alt="Hero"
                        className="w-full object-cover"
                    />
                </motion.div>

                {/* Left Side */}
                <div className="md:w-1/2">
                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
                        ¡Bienvenido a MASCOTICO!
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-lg mb-12 md:pr-8">
                        Nuestra misión es ser la app que te ayuda a encontrar veterinarios cercanos, reservar citas fácilmente y proporcionar todo lo que necesitas para cuidar de tus mascotas. Compra productos, accede a blogs informativos y mantén a tus fieles compañeros saludables y felices.
                    </motion.p>
                </div>

            </div>
        </section>
    );
};

export default Hero;
