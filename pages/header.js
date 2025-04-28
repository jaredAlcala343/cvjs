"use client";

import React, { useState, useEffect } from 'react';
import './header.css';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ['home', 'profile', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, name: 'Inicio', href: '#home' },
    { id: 2, name: 'Perfil', href: '#profile' },
    { id: 3, name: 'Portafolio', href: '#portfolio' },
    { id: 4, name: 'Contacto', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="brand">
          <h1 className="name">Jared Alcalá</h1>
          <p className="title">Ingeniero de Software</p>
        </div>
        
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <Link 
                  href={item.href}
                  className={`nav-link ${activeLink === item.href ? 'active' : ''}`}
                  onClick={() => {
                    setActiveLink(item.href);
                    setIsMenuOpen(false); // Cerrar el menú al hacer clic
                  }}
                >
                  {item.name}
                  <span className="underline"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}