"use client";

import React from 'react';
import './profile.css';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCode, FaUser } from 'react-icons/fa';
import Image from 'next/image';

export default function Profile() {
    const trabajos = [
        { 
          puesto: 'Ingeniero de Automatización', 
          empresa: 'Cubylam Chalet', 
          periodo: '2024 - Presente',
          descripcion: 'Desarrollo e implementación de sistemas de automatización para procesos hoteleros utilizando IoT y sistemas embebidos. Creación de dashboards interactivos para monitoreo en tiempo real, mejorando la eficiencia operativa en un 35%.'
        },
        { 
          puesto: 'Ingeniero de Sistemas', 
          empresa: 'Fiesta Inn', 
          periodo: '2024 - 2024',
          descripcion: 'Administración y optimización de la infraestructura TI para la cadena hotelera. Implementación de sistemas de gestión de huéspedes y automatización de procesos de reservación, reduciendo tiempos de espera en un 25%.'
        },
        { 
          puesto: 'Ingeniero de Software', 
          empresa: 'Acxiom', 
          periodo: '2024 - 2024',
          descripcion: 'Desarrollo de soluciones de marketing digital basadas en datos. Implementación de algoritmos de segmentación de clientes que incrementaron la efectividad de campañas en un 18%.'
        },
        { 
          puesto: 'Interno de Sistemas', 
          empresa: 'Bombardier', 
          periodo: '2024 - 2024',
          descripcion: 'Soporte técnico especializado en sistemas ERP para manufactura aeronáutica. Participación en el desarrollo de módulos de control de calidad que redujeron defectos en un 12%.'
        },
        { 
          puesto: 'Ingeniero de Soporte', 
          empresa: 'Soho Square', 
          periodo: '2023 - 2024',
          descripcion: 'Gestión de la infraestructura tecnológica para empresa de bienes raíces. Implementación de sistema de tickets que mejoró la resolución de incidencias en un 40%.'
        },
        { 
          puesto: 'Ingeniero de Software', 
          empresa: 'TGC', 
          periodo: '2021 - 2023',
          descripcion: 'Desarrollo de aplicaciones web para gestión educativa. Lideré el equipo que creó un sistema de aprendizaje en línea con aumento del 30% en retención estudiantil.'
        },
        { 
          puesto: 'Ingeniero de Soporte', 
          empresa: 'Jabil', 
          periodo: '2020 - 2021',
          descripcion: 'Soporte técnico nivel 2 para sistemas de manufactura. Automatización de reportes que redujo tiempos de generación de KPIs de 4 horas a 15 minutos.'
        }
      ];

  const educacion = [
    { 
      titulo: 'Ingenieria en Tecnologías de la Información', 
      institucion: 'Universidad Tecnológica De Chihuahua', 
      periodo: '2020 - 2024',
      destacado: 'Graduado con honores'
    },
    { 
      titulo: 'TSU en Tecnologías de la Información', 
      institucion: 'Universidad Tecnológica De Chihuahua', 
      periodo: '2018 - 2020' 
    },
    { 
      titulo: 'Bachillerato en Soporte y Mantenimiento de Equipo de Cómputo',
      institucion: 'Centro de Bachillerato Tecnológico Industrial y de Servicios No. 1',
      periodo: '2012 - 2015' 
    }
  ];

  const certificados = [
    {
      nombre: ' Introduction to Cybersecurity',
      institucion: 'Cisco Networking Academy',
      año: '2019'
    },
    {
      nombre: ' Cybersecurity Essentials',
      institucion: 'Cisco Networking Academy',
      año: '2019'
    },
    {
      nombre: 'Get Connected',
      institucion: 'Cisco Networking Academy',
      año: '2020'
    },
    {
      nombre: ' Introduction to Cybersecurity (updated)',
      institucion: 'Cisco Networking Academy',
      año: '2023'
    },
  ];

  const habilidades = {
    "Frontend": ['React.js', 'TypeScript', 'Next.js', 'HTML5/CSS3', 'Tailwind CSS'],
    "Backend": ['Node.js', 'Python', 'Express', 'Django', 'GraphQL'],
    "Bases de Datos": ['MySQL', 'PostgreSQL', 'SQL Server', 'PL/SQL'],
    "Idiomas": ['Inglés (Avanzado)', 'Español (Nativo)'],
    "Otros": ['Git', 'Scrum', 'Agile', 'Adobe Photoshop', 'Premiere Pro', 'After Effects', 'lightroom', 'Audition', 'Blender' ]
  };

  return (
    <section id="profile" className="profile-section">
      <div className="profile-container">
        <h2 className="profile-title">
          Perfil Profesional
        </h2>

        {/* Sección "Quién Soy" con foto */}
        <div className="about-me-card">
          <div className="about-me-content">
            <div className="about-me-text">
              <div className="section-header">
                <FaUser className="section-icon" />
                <h3 className="section-title">Quién Soy</h3>
              </div>
              <p className="about-me-description">
                ¡Hola! Soy Jared Alcalá, un apasionado Ingeniero de Software con más de 7 años de experiencia 
                en desarrollo web y soluciones tecnológicas. Me especializo en crear aplicaciones escalables 
                y eficientes que resuelven problemas reales.
              </p>
              <p className="about-me-description">
                Cuando no estoy programando, me gusta contribuir a proyectos open source, aprender nuevas 
                tecnologías y compartir mis conocimientos con la comunidad tech. Creo firmemente en el poder 
                de la tecnología para transformar vidas y negocios.
              </p>
              <div className="personal-details">
                <p><strong>Ubicación:</strong> Chihuahua, Mexico</p>
                <p><strong>Email:</strong> jalcalaing@gmail.com</p>
                <p><strong>Disponibilidad:</strong> Inmediata - Remoto</p>
              </div>
            </div>
            <div className="profile-image-container">
              <Image
                src="/perfil.jpg"
                alt="Jared Alcalá - Ingeniero de Software"
                width={350}
                height={350}
                className="profile-image"
                priority
              />
            </div>
          </div>
        </div>

        {/* Experiencia Laboral */}
        <div className="profile-card">
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h3 className="section-title">Experiencia Laboral</h3>
          </div>
          <div className="timeline">
            {trabajos.map((trabajo, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="job-title">{trabajo.puesto}</h4>
                  <div className="job-meta">
                    <span className="company">{trabajo.empresa}</span>
                    <span className="period">{trabajo.periodo}</span>
                  </div>
                  <p className="job-description">{trabajo.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educación */}
        <div className="profile-card">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h3 className="section-title">Educación</h3>
          </div>
          <div className="education-list">
            {educacion.map((edu, index) => (
              <div key={index} className="education-item">
                <h4 className="degree">{edu.titulo}</h4>
                <div className="education-meta">
                  <span className="institution">{edu.institucion}</span>
                  <span className="period">{edu.periodo}</span>
                </div>
                {edu.destacado && <span className="badge">{edu.destacado}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Certificados */}
        <div className="profile-card">
          <div className="section-header">
            <FaCertificate className="section-icon" />
            <h3 className="section-title">Certificaciones</h3>
          </div>
          <div className="certificates-grid">
            {certificados.map((cert, index) => (
              <div key={index} className="certificate-card">
                <h4 className="certificate-name">{cert.nombre}</h4>
                <p className="certificate-issuer">{cert.institucion}</p>
                <span className="certificate-year">{cert.año}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades */}
        <div className="profile-card">
          <div className="section-header">
            <FaCode className="section-icon" />
            <h3 className="section-title">Habilidades Técnicas</h3>
          </div>
          <div className="skills-container">
            {Object.entries(habilidades).map(([categoria, skills]) => (
              <div key={categoria} className="skill-category">
                <h4 className="skill-category-title">{categoria}</h4>
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}