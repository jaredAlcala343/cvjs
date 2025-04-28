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
      ]
    },
    desarrollo: {
      title: "Proyectos de Desarrollo Web",
      description: "Sitios web y aplicaciones desarrolladas",
      websites: [
        {
          id: 'dev-1',
          name: 'Control de Vacunaciones',
          url: 'https://vacunaciones.vercel.app/', // URL válida
          description: 'Aplicación para gestionar el control de vacunaciones',
          technologies: ['React', 'Node.js', 'MongoDB'],
          image: '/vacunaciones.jpg' // Asegúrate de que esta imagen exista
        },
        {
          id: 'dev-2',
          name: 'Landing Page Next.js',
          url: 'https://hero-it.vercel.app/', // URL válida
          description: 'Landing page optimizada para SEO y conversiones',
          technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
          image: '/landing.jpg' // Asegúrate de que esta imagen exista
        }
      ]
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