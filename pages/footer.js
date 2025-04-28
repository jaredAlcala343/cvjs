"use client";

import React, { useState, useEffect } from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: 'https://github.com/jaredAlcala343',
    color: '#181717',
    name: 'GitHub'
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/jared-helaman-alcal%C3%A1-alvarado-955816195/',
    color: '#0A66C2',
    name: 'LinkedIn'
  },
  {
    id: 3,
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/jared.alcala.902',
    color: '#E4405F',
    name: 'Instagram'
  }
];

export default function Footer() {
  const [visits, setVisits] = useState(0);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Simulación de contador de visitas con animación
    const targetVisits = parseInt(localStorage.getItem('visits') || 0);
    const increment = Math.ceil(targetVisits / 100);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetVisits) {
        current = targetVisits;
        clearInterval(timer);
      }
      setVisits(current);
    }, 10);

    // Actualizar en localStorage
    const newVisits = targetVisits + 1;
    localStorage.setItem('visits', newVisits);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        <div className="footer-content">
          <motion.p 
            className="footer-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            © {currentYear} Jared Alcalá. Todos los derechos reservados.
          </motion.p>
          
          <motion.div 
            className="footer-message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hecho con <FaHeart className="heart-icon" /> en México
          </motion.div>

          <motion.div 
            className="social-icons"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--icon-color': link.color }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="footer-counter"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="counter">{visits.toString().padStart(6, '0')}</span>
          <span className="counter-label">Visitas</span>
        </motion.div>
      </div>
    </motion.footer>
  );
}