'use client';

import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Script from 'next/script'; // 👈 AÑADIDO
import Head from 'next/head';


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

  // Evitar scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Cerrar menú móvil al hacer click
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
    <Head>
  <title>César Llano Datos</title>
  <meta name="description" content="Portafolio profesional de César Llano, experto en análisis de datos, visualización y economía." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon1.ico" />
</Head>
     {/* Google Tag Manager Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NHZ39CL7');
        `}
      </Script>
            {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NHZ39CL7"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
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
            {['Home', 'formacion', 'Expertise', 'contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} // IDs en minúsculas
                  className="px-3 py-2 mx-1 rounded hover:bg-white/20 flex items-center text-white text-md transition"
                >
                  <i
                    className={`fas ${
                      item === 'Home'
                        ? 'fa-circle'
                      :item === 'formacion'
                        ? 'fa-graduation-cap'
                        : item === 'Expertise'
                        ? 'fa-briefcase'
                        : 'fa-envelope'
                    } mr-2 w-4 h-4`}
                  />
                  {item === 'Home'
                    ? 'Home'
                    : item === 'formacion'
                    ? 'Role'
                    : item === 'Expertise'
                    ? 'Expertise'
                    : 'contact'}
                </button>
              )
            )}
          </nav>
          {/* Mantenemos el botón aquí para el estado inicial de FaBars */}
          <button
            className="md:hidden text-white text-xl z-[500]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-blue-900 z-[999] transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          {/* MUEVE EL BOTÓN DE CERRAR AQUÍ, DENTRO DEL OVERLAY, Y POSICIONALO */}
          <div className="absolute top-4 right-4"> {/* Ajusta top/right según sea necesario */}
             <button
                className="text-white text-3xl" // Clase para hacerlo más grande y visible
                onClick={() => setIsMenuOpen(false)} // Siempre cerrar
                aria-label="Cerrar menú"
            >
                <FaTimes />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-full pt-20 pb-10 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 bg-opacity-100">
            {['Home', 'formacion', 'Expertise', 'contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="w-4/5 max-w-xs py-4 my-2 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg font-semibold transition transform hover:scale-105"
                >
                  <i
                    className={`fas ${
                      item === 'Home'
                        ? 'fa-circle'
                        : item === 'formacion'
                        ? 'fa-graduation-cap'
                        : item === 'Expertise'
                        ? 'fa-briefcase'
                        : 'fa-envelope'
                    } mr-3 w-5 h-5`}
                  />
                  {item === 'Home'
                    ? 'Home'
                    : item === 'formacion'
                    ? 'Educación'
                    : item === 'Expertise'
                    ? 'Expertise'
                    : 'contact'}
                </button>
              )
            )}
          </div>
        </div>
      </header>

      <main className="pt-20 bg-gradient-to-br from-blue-300 via-blue-700 to-slate-900 text-white">
        {/* Section: Home / Perfil (Hero Section) */}
        <section id="Home" className="min-h-screen flex flex-col items-center justify-center p-4 scroll-mt-20"> {/* AGREGADO scroll-mt-20 */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-xl animate-pulse"></div>
            <img 
              src="/Artboard 111@3x.png" 
              alt="Foto de perfil" 
              className="relative h-50 w-48 rounded-full border-4 border-white shadow-2xl z-10"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4 text-center px-4">
            Tim Oehme
          </h1>
          
          <h2 className="text-xl md:text-2xl text-blue-200 font-light text-center max-w-2xl px-4 mb-8">
            Interim Management with hands-on
          </h2>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contáctame
          </button>
        </section>

        {/* Section: Formacion (Education) */}
        <section id="formacion" className="py-16 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20"> {/* AGREGADO scroll-mt-20 */}
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8 text-center">
            Role
          </h1>
          
          <div className="flex flex-col gap-8"> {/* Use gap for spacing between education entries */}
            {/* Maestría en Economía */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-2">Crisis Management Release Management Delivery Lead</h3>
              

            </div>
          </div>
        </section>

        {/* Section: Expertise (Laboral & Proyectos) */}
        <section id="Expertise" className="py-16 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20"> {/* AGREGADO scroll-mt-20 */}
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8 text-center">
            Expertise 
          </h1>
          
          <div className="flex flex-col gap-12"> {/* Gap for spacing between experience entries */}
            {/* Análisis de datos propio (Video Project) */}
            <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Release Management for global eCommerce Platform

Several SAP BI & Analytics Projects

Product Owner & Business Development (Start-Up)

Sales & Pre-Sales</h3>
              
              
              
              </div>
            {/* Otro proyecto/Expertise si lo tienes */}
            {/* <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-2">Título de Otra Expertise</h3>
              <p className="text-lg font-light">Descripción de la otra Expertise o proyecto.</p>
            </div> */}
          </div>
        </section>

        {/* Section: contact (Example) */}
<section id="contact" className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-center scroll-mt-20"> {/* AGREGADO scroll-mt-20 */}
  <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8">
    contact
  </h1>
  <p className="text-xl mb-4">Puedes contactarme a través de:</p>

  {/* Enlace de Correo Electrónico */}
  <p className="text-2xl font-semibold">
    <a href="mailto:cllano21@gmail.com" className="text-blue-400 hover:underline">
      ssss
    </a>
  </p>

  {/* Enlace de WhatsApp */}
  <p className="text-2xl font-semibold">
    <a href="https://wa.me/593981972285" className="text-blue-400 hover:underline">
      aaaa
    </a>
  </p>

  {/* Aquí puedes agregar un formulario de contact o enlaces a redes sociales */}
</section>

      </main>
    </>
  );
}