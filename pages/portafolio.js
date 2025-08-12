"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import './portafolio.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('edicion');

  // Datos del portafolio
  const portfolioData = {
    edicion: {
      title: "Proyectos de Edición",
      description: "Trabajos profesionales de retoque y composición fotográfica",
      photos: [
        {
          id: 'edit-1',
          src: '/edicion.jpg', // Asegúrate de que esta imagen exista
          alt: 'Retrato profesional editado',
          title: 'Retoque de retrato',
          year: 2023
        },
        {
          id: 'edit-2',
          src: '/composicion.jpg', // Asegúrate de que esta imagen exista
          alt: 'Manipulación creativa',
          title: 'Composición digital',
          year: 2023
        },
        {
          id: 'edit-3',
          src: '/publicidad.jpg', // Asegúrate de que esta imagen exista
          alt: 'Creación de publicidad',
          title: 'Edición de publicidad',
          year: 2025
        },
        {
          id: 'edit-4',
          src: '/Diseno-logo.jpg', // Asegúrate de que esta imagen exista
          alt: 'Creacion de logotipos',
          title: 'creacion de logotipos',
          year: 2024
        },
        {
          id: 'edit-5',
          src: '/paisaje.jpg', // Asegúrate de que esta imagen exista
          alt: 'Edición fotográfica paisaje',
          title: 'Edición fotográfica paisaje',
          year: 2022
        }, 
        {
          id: 'edit-6',
          src: '/avanzada.jpg', // Asegúrate de que esta imagen exista
          alt: 'Edición fotográfica avanzada',
          title: 'Edicion avanzada',
          year: 2024
        }
      ]
    },
    desarrollo: {
      title: "Proyectos de Desarrollo Web",
      description: "Sitios web y aplicaciones desarrolladas",
      websites: [
        {
          id: 'dev-1',
          name: 'Landing con envio de correos y contactos',
          url: 'https://kzstudioscuu.vercel.app/', 
          description: 'Aplicación para el estudio KZStudios',
          technologies: ['Next.js', 'Node.js', 'sql-server'],
          image: '/kzstudioscuu.jpg' 
        },
        {
          id: 'dev-2',
          name: 'Control de Vacunaciones',
          url: 'https://vacunaciones.vercel.app/', 
          description: 'Aplicación para gestionar el control de vacunaciones',
          technologies: ['React', 'Node.js', 'postgreSQL'],
          image: '/vacunaciones.jpg' 
        },
        {
          id: 'dev-3',
          name: 'Landing Page Next.js',
          url: 'https://hero-it.vercel.app/', 
          description: 'Landing page optimizada para SEO y conversiones',
          technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
          image: '/landing.jpg' 
        },
        {
          id: 'dev-4',
          name: 'Punto de Venta',
          url: 'https://store-ten-tawny.vercel.app/', 
          description: 'punto de venta sin necesidad de base de datos o backend',
          technologies: ['Reactjs'],
          image: '/punto_venta.jpg'
        } ,
        {
          id: 'dev-5',
          name: 'Portafolio Profesional',
          url: 'https://jaredcv.vercel.app/', 
          description: 'Portafolio profesional con proyectos destacados',
          technologies: ['Next.js', 'React', 'CSS'],
          image: '/portafolio.jpg' 
        },
        {
          id: 'dev-6',
          name: 'Sistema de Gestión de Flotillas Vehiculares',
          url: 'https://crm-flotillas2.vercel.app/', 
          description: 'Aplicación para gestionar Flotillas Vehiculares',
          technologies: ['Next.js', 'Node.js', 'MongoDB'],
          image: '/crm-flotillas.jpg' 
        },
        {
          id: 'dev-7',
          name: 'Sistema Acortador de URLs',
          url: 'https://acortadorurlkz.vercel.app/', 
          description: 'Aplicación para cambiar URLs largas a cortas',
          technologies: ['Next.js', 'Node.js', 'supabase', 'postgreSQL', 'tailwind'],
          image: '/acortador.jpg' 
        }
      ],
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h2 className="portfolio-title">Portafolio Profesional</h2>
          <p className="portfolio-subtitle">
            Una selección de mis mejores trabajos
          </p>
        </header>

        {/* Navegación por pestañas */}
        <nav className="portfolio-tabs" aria-label="Secciones del portafolio">
          <button
            className={`tab-button ${activeSection === 'edicion' ? 'active' : ''}`}
            onClick={() => setActiveSection('edicion')}
            aria-selected={activeSection === 'edicion'}
            aria-controls="edicion-content"
          >
            Edición Fotográfica
          </button>
          <button
            className={`tab-button ${activeSection === 'desarrollo' ? 'active' : ''}`}
            onClick={() => setActiveSection('desarrollo')}
            aria-selected={activeSection === 'desarrollo'}
            aria-controls="desarrollo-content"
          >
            Desarrollo Web
          </button>
        </nav>

        {/* Contenido dinámico */}
        <div className="portfolio-content">
          {activeSection === 'edicion' && (
            <section 
              id="edicion-content"
              aria-labelledby="edicion-tab"
              className="gallery-container"
            >
              <h3 className="section-title">{portfolioData.edicion.title}</h3>
              <p className="section-description">{portfolioData.edicion.description}</p>
              
              <div className="responsive-grid">
                {portfolioData.edicion.photos.map((photo) => (
                  <article key={photo.id} className="gallery-item">
                    <div className="image-wrapper">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={600}
                        height={400}
                        className="portfolio-image"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzk5OSI+Q2FyZ2FuZG8uLi48L3RleHQ+PC9zdmc+"
                      />
                    </div>
                    <figcaption className="image-caption">
                      <h4>{photo.title}</h4>
                      {photo.year && <span className="year-badge">{photo.year}</span>}
                    </figcaption>
                  </article>
                ))}
              </div>
            </section>
          )}

          {activeSection === 'desarrollo' && (
            <section
              id="desarrollo-content"
              aria-labelledby="desarrollo-tab"
              className="projects-container"
            >
              <h3 className="section-title">{portfolioData.desarrollo.title}</h3>
              <p className="section-description">{portfolioData.desarrollo.description}</p>
              
              <ul className="projects-list">
                {portfolioData.desarrollo.websites.map((project) => (
                  <li key={project.id} className="project-card">
                    <div className="project-image">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={`Captura de ${project.name}`}
                          width={400}
                          height={250}
                          className="project-screenshot"
                        />
                      )}
                    </div>
                    <div className="project-details">
                      <h4 className="project-name">
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          {project.name}
                        </a>
                      </h4>
                      <p className="project-description">{project.description}</p>
                      {project.technologies && (
                        <div className="technologies">
                          <span className="tech-label">Tecnologías:</span>
                          <ul className="tech-tags">
                            {project.technologies.map((tech, index) => (
                              <li key={index} className="tech-tag">{tech}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-button"
                      >
                        Ver Proyecto
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}