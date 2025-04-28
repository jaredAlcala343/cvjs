"use client";

import React from 'react';
import './contact.css';
import { 
  FaFacebook, 
  FaLinkedin, 
  FaInstagram, 
  FaGithub, 
  FaEnvelope, 
  FaWhatsapp 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    id: 1,
    icon: <FaEnvelope />,
    text: 'Correo',
    url: 'mailto:jalcalaing@gmail.com',
    color: '#EA4335'
  },
  {
    id: 2,
    icon: <FaFacebook />,
    text: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61569188361917',
    color: '#1877F2'
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jared-helaman-alcal%C3%A1-alvarado-955816195/',
    color: '#0A66C2'
  },
  {
    id: 4,
    icon: <FaInstagram />,
    text: 'Instagram',
    url: 'https://www.instagram.com/jared.alcala.902',
    color: '#E4405F'
  },
  {
    id: 5,
    icon: <FaWhatsapp />,
    text: 'WhatsApp',
    url: 'https://wa.me/+526142426290',
    color: '#25D366'
  },
  {
    id: 6,
    icon: <FaGithub />,
    text: 'GitHub',
    url: 'https://github.com/jaredAlcala343',
    color: '#181717'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 className="contact-title">Contáctame</h2>
          <p className="contact-subtitle">
            Conéctate conmigo a través de estas plataformas o envíame un mensaje directo
          </p>
        </motion.div>

        <motion.ul
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((link) => (
            <motion.li 
              key={link.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="contact-card"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                style={{ '--icon-color': link.color }}
              >
                <span className="contact-icon">{link.icon}</span>
                <span className="contact-text">{link.text}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}