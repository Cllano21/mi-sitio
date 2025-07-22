'use client';

import { useState, useEffect, useRef } from 'react';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
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
          className="flex justify-between items-center p-3 max-w-7xl mx-auto"
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

          <nav className="flex flex-wrap justify-center">
            {['Inicio', 'perfil', 'formacion', 'Experiencia', 'Contacto'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
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
        </div>
      </header>

     <main className="pt-20 min-h-screen bg-gradient-to-br from-blue-300 via-blue-700 to-slate-900 p-4 text-white">
  <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
    {/* Imagen con efecto de iluminación */}
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-xl animate-pulse"></div>
      <img 
        src="/Artboard 111@3x.png" 
        alt="Foto de perfil" 
        className="relative h-50 w-48 rounded-full border-4 border-white shadow-2xl z-10"
      />
    </div>
    
    {/* Título con efecto de gradiente */}
    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4 text-center px-4">
      César Llano Iza
    </h1>
    
    {/* Subtítulo profesional */}
    <h2 className="text-xl md:text-2xl text-blue-200 font-light text-center max-w-2xl px-4">
      Sociólogo y Master en Economía | Especialista en Análisis y visualización de Datos
    </h2>
    
    {/* Botón de acción */}
    <button 
      onClick={() => scrollToSection('Contacto')}
      className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      Contáctame
    </button>
  </div>
</main>
    </>
  );
}