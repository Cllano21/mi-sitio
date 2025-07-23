'use client';

import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Close mobile menu when a section link is clicked
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'shadow-lg bg-[rgba(30,58,138,0.8)] backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <div 
          className="flex justify-between items-center p-3 max-w-5xl mx-auto"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
        >
          <div className="flex items-center">
            <img
              src="/Artboard 112@4x.png"
              alt="Logo"
              className="h-8 w-auto mr-3 rounded"
            />
          </div>

          <nav className="hidden md:flex flex-wrap justify-center"> 
            {['Inicio', 'perfil', 'formacion', 'Experiencia', 'Contacto'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} // Use lowercase for IDs
                  className="px-3 py-2 mx-1 rounded hover:bg-white/20 flex items-center text-white text-md transition"
                >
                  <i
                    className={`fas ${
                      item === 'Inicio'
                        ? 'fa-circle'
                        : item === 'perfil'
                        ? 'fa-user'
                        : item === 'formacion'
                        ? 'fa-graduation-cap'
                        : item === 'Experiencia'
                        ? 'fa-briefcase'
                        : 'fa-envelope'
                    } mr-2 w-4 h-4`}
                  />
                  {item === 'Inicio'
                    ? 'Inicio'
                    : item === 'perfil'
                    ? 'Perfil'
                    : item === 'formacion'
                    ? 'Educación'
                    : item === 'Experiencia'
                    ? 'Experiencia'
                    : 'Contacto'}
                </button>
              )
            )}
          </nav>
           <button 
            className="md:hidden text-white text-xl z-[500]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed top-0 left-0 w-full h-full bg-[rgba(30,58,138,0.95)] backdrop-blur-lg z-[999] transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full pt-20 pb-10">
            {['Inicio', 'perfil', 'formacion', 'Experiencia', 'Contacto'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} // Use lowercase for IDs
                  className="w-4/5 max-w-xs py-4 my-2 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg transition transform hover:scale-105"
                >
                  <i
                    className={`fas ${
                      item === 'Inicio'
                        ? 'fa-circle'
                        : item === 'perfil'
                        ? 'fa-user'
                        : item === 'formacion'
                        ? 'fa-graduation-cap'
                        : item === 'Experiencia'
                        ? 'fa-briefcase'
                        : 'fa-envelope'
                    } mr-3 w-5 h-5`}
                  />
                  {item === 'Inicio'
                    ? 'Inicio'
                    : item === 'perfil'
                    ? 'Perfil'
                    : item === 'formacion'
                    ? 'Educación'
                    : item === 'Experiencia'
                    ? 'Experiencia'
                    : 'Contacto'}
                </button>
              )
            )}
          </div>
        </div>
      </header>

      <main className="pt-20 bg-gradient-to-br from-blue-300 via-blue-700 to-slate-900 text-white">
        {/* Section: Inicio / Perfil (Hero Section) */}
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-xl animate-pulse"></div>
            <img 
              src="/Artboard 111@3x.png" 
              alt="Foto de perfil" 
              className="relative h-50 w-48 rounded-full border-4 border-white shadow-2xl z-10"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4 text-center px-4">
            César Llano Iza
          </h1>
          
          <h2 className="text-xl md:text-2xl text-blue-200 font-light text-center max-w-2xl px-4 mb-8">
            Sociólogo y Master en Economía | Especialista en Análisis y visualización de Datos
          </h2>
          
          <button 
            onClick={() => scrollToSection('contacto')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contáctame
          </button>
        </section>

        {/* Section: Formacion (Education) */}
        <section id="formacion" className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8 text-center">
            Educación
          </h1>
          
          <div className="flex flex-col gap-8"> {/* Use gap for spacing between education entries */}
            {/* Maestría en Economía */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-2">Maestría en Economía</h3>
              <p className="text-lg font-light mb-1">
                <span className="font-medium">Centro Universitario:</span> Facultad Latinoamericana de Ciencias Sociales FLACSO
              </p>
              <p className="text-lg font-light mb-1">
                <span className="font-medium">Tesis:</span> Diferencias salariales por género en el Ecuador periodo 2007- 2016
              </p>
              <p className="text-lg font-light">
                <span className="font-medium">Materias de especialidad:</span> Economía de la innovación
              </p>
            </div>

            {/* Sociología */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-2">Sociología</h3>
              <p className="text-lg font-light mb-1">
                <span className="font-medium">Universidad:</span> Pontificia Universidad Católica del Ecuador
              </p>
              <p className="text-lg font-light">
                <span className="font-medium">Tesis:</span> Lo político en la comunidad andina Caso de estudio Comuna Andina Cocotog
              </p>
            </div>
          </div>
        </section>

        {/* Section: Experiencia (Laboral & Proyectos) */}
        <section id="experiencia" className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8 text-center">
            Experiencia Laboral y Proyectos Propios
          </h1>
          
          <div className="flex flex-col gap-12"> {/* Gap for spacing between experience entries */}
            {/* Análisis de datos propio (Video Project) */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Proyecto: Dashboard de utilidades automotrices</h3>
              
              <div className="video-container mb-6"> {/* Added mb-6 for spacing below video */}
                <video controls muted autoPlay playsInline className="object-cover w-full max-w-xl mx-auto h-[280px] rounded-lg shadow-xl"> {/* Adjusted height example */}
                  <source src="video/Diseño sin título (2).mp4" type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>

              <p className="mb-4 text-lg">
                Evolución histórica de las utilidades de las empresas automotrices ecuatorianas! 🚗📊
                ¡Usando Python y SQL se puede crear gráficos dinámicos e interactivos maniuplando millones de datos🎨📊
              </p>
              </div>
<div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Proyecto: Ranking dinámico</h3>
              
              <div className="video-container mb-6"> {/* Added mb-6 for spacing below video */}
                <video controls muted autoPlay playsInline className="object-cover w-full max-w-xl mx-auto h-[280px] rounded-lg shadow-xl"> {/* Adjusted height example */}
                  <source src="video/GSIS.mp4" type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>

              <p className="mb-4 text-lg">
                Evolución histórica de las utilidades de las empresas automotrices ecuatorianas! 🚗📊
                ¡Usando Python y SQL se puede crear gráficos dinámicos e interactivos maniuplando millones de datos🎨📊
              </p>
              </div>
            {/* Otro proyecto/experiencia si lo tienes */}
            {/* <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-2">Título de Otra Experiencia</h3>
              <p className="text-lg font-light">Descripción de la otra experiencia o proyecto.</p>
            </div> */}
          </div>
        </section>

        {/* Section: Contacto (Example) */}
        <section id="contacto" className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8">
            Contacto
          </h1>
          <p className="text-xl mb-4">Puedes contactarme a través de:</p>
          <p className="text-2xl font-semibold">tucorreo@example.com</p>
          <p className="text-2xl font-semibold">+593 999 999 999</p>
          {/* Aquí puedes agregar un formulario de contacto o enlaces a redes sociales */}
        </section>

      </main>
    </>
  );
}