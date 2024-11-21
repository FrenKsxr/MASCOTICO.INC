import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import footerLogo from '../assets/footer-logo.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const Footer = () => {
    return (
        <footer className="py-12 bg-gray-100 px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
                {/* Primera Columna: Logo, Texto, Iconos Sociales */}
                <div className="space-y-6 mr-14">
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex items-center space-x-2"
                    >
                        <img src={footerLogo} alt="Logo" className="w-32 h-auto" />
                    </motion.div>
                    <motion.p
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-para"
                    >
                        Es la app que te permite encontrar veterinarios cercanos y reservar citas con ellos de forma rápida y sencilla. Además, puedes comprar productos para tus mascotas, acceder a blogs informativos y obtener todo lo necesario para su cuidado en un solo lugar.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex space-x-4"
                    >
                        <a
                            href="#"
                            className="bg-gray-200 text-[#2B7A77] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#3b5998] hover:text-white transition-colors"
                        >
                            <FaFacebookF className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gray-200 text-[#2B7A77] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors"
                        >
                            <FaTwitter className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gray-200 text-[#2B7A77] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C13584] hover:text-white transition-colors"
                        >
                            <FaInstagram className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gray-200 text-[#2B7A77] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-colors"
                        >
                            <FaLinkedinIn className="text-xl" />
                        </a>
                    </motion.div>
                </div>

                {/* Segunda Columna: Enlaces Rápidos */}
                <motion.div
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
                    <ul className="space-y-3">
                        <li><a href="#home" className="hover:underline text-gray-700">Inicio</a></li>
                        <li><a href="#about" className="hover:underline text-gray-700">Sobre Nosotros</a></li>
                        <li><a href="#services" className="hover:underline text-gray-700">Servicios</a></li>
                        <li><a href="#contact" className="hover:underline text-gray-700">Contáctanos</a></li>
                    </ul>
                </motion.div>

                {/* Tercera Columna: Soporte */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Soporte</h3>
                    <ul className="space-y-3">
                        <li><a href="#faq" className="hover:underline text-gray-700">Preguntas Frecuentes</a></li>
                        <li><a href="#terms" className="hover:underline text-gray-700">Términos de Servicio</a></li>
                        <li><a href="#privacy" className="hover:underline text-gray-700">Política de Privacidad</a></li>
                        <li><a href="#support" className="hover:underline text-gray-700">Centro de Soporte</a></li>
                    </ul>
                </motion.div>

                {/* Cuarta Columna: Información de Contacto */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-[#2B7A77]" />
                            <p className="text-gray-700">Calle 60, Mérida, Yucatán, México</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-[#2B7A77]" />
                            <p className="text-gray-700">+52 999 123 4567</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-[#2B7A77]" />
                            <p className="text-gray-700">contacto@appmascotas.com</p>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
