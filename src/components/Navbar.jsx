import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const menuItems = [
    { name: t('Home', 'Home'), path: '/' },
    { name: t('Preise', 'Pricing'), path: '/pricing' },
    { name: t('Galerie', 'Gallery'), path: '/gallery' },
    { name: t('Kontakt', 'Contact'), path: '/contact' },
    { name: t('Warum wir?', 'Why Us?'), path: '/whyus' },
  ];

  const handleNavClick = (path, e) => {
    const isActive = (p) => location.pathname === p;
    if (isActive(path)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* desktop navbar - Transparent/Dark Theme */}
      <header className="hidden lg:block absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-1 h-24 flex items-center justify-between">
          <Link to="/" onClick={(e) => handleNavClick('/', e)} className="flex items-center gap-3">
             <img src="/Logo.png" alt="Logo" className="h-14 w-auto brightness-0 invert" />
          </Link>

          <nav className="flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavClick(item.path, e)}
                className={`text-sm font-black uppercase tracking-[0.2em] transition-all hover:text-white ${
                  isActive(item.path) ? 'text-green-400 font-black' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 border-2 rounded-[2.5rem] p-1 px-3 border-white/20">
                <button onClick={() => setLanguage('DE')} className={`text-xs font-black uppercase transition-all px-2 py-1 ${language === 'DE' ? 'text-green-400' : 'text-white/60 hover:text-white'}`}>DE</button>
                <span className="text-white/10 uppercase font-black text-[10px]">|</span>
                <button onClick={() => setLanguage('EN')} className={`text-xs font-black uppercase transition-all px-2 py-1 ${language === 'EN' ? 'text-green-400' : 'text-white/60 hover:text-white'}`}>EN</button>
            </div>
            <Link to="/contact" className="bg-[#0062ff] text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0062ff] transition-all duration-300 shadow-2xl shadow-[#0062ff]/20">
               {t('Kostenloses Angebot', 'Get A Quote')}
            </Link>
            <span className="text-white font-light opacity-20">|</span>
            <a href="tel:0797811400" className="flex items-center gap-2 text-white font-black text-sm hover:text-secondary group transition-all">
                <span className="material-symbols-outlined text-xl text-white">call</span>
                <span>079 781 14 00</span>
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE NAVBAR (Matching sample.jpg) */}
      <header className="lg:hidden absolute top-0 left-0 right-0 z-50">
        <div className="relative px-6 py-10 flex flex-col items-center justify-center">
            {/* Dark gradient for readability */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a192f] to-transparent -z-10 opacity-60"></div>
            
            {/* Logo Area (Centered) */}
            <Link to="/" onClick={(e) => handleNavClick('/', e)} className="flex flex-col items-center text-center">
              <div className="relative mb-2">
                <img 
                   src="/Logo.png" 
                   alt="Logo" 
                   className="h-40 w-auto brightness-0 invert" 
                />
              </div>
            </Link>

            {/* Menu Trigger (Top Right) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="absolute top-6 right-8 text-white focus:outline-none"
            >
              <div className="flex flex-col gap-1.5 p-2 pb-3">
                <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
        </div>

        {/* Full Screen Menu Tray - Restored Original Design & Animation */}
        <div className={`fixed inset-0 bg-primary/95 backdrop-blur-2xl transition-all duration-500 z-[60] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
             <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 text-white p-4"
             >
                <span className="material-symbols-outlined text-4xl">close</span>
             </button>
             
             <div className="h-full flex flex-col items-center justify-center p-8 space-y-2">
                {/* Logo at the Top */}
                <img src="/Logo.png" alt="Logo" className="h-40 w-auto brightness-0 invert mb-6" />

                {/* Integration of Language Toggle BETWEEN Logo and Menu Links */}
                <div className="flex items-center gap-6 mb-10 border border-white/10 rounded-full px-5 py-2 hover:border-white/30 transition-all">
                    <button onClick={() => setLanguage('DE')} className={`text-lg font-black tracking-widest ${language === 'DE' ? 'text-green-400' : 'text-white/40'}`}>DE</button>
                    <span className="text-white/10 uppercase font-black text-[18px]">|</span>
                    <button onClick={() => setLanguage('EN')} className={`text-lg font-black tracking-widest ${language === 'EN' ? 'text-green-400' : 'text-white/40'}`}>EN</button>
                </div>
                
                {/* Menu Items */}
                <div className="flex flex-col items-center w-full">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        handleNavClick(item.path, e);
                      }}
                      className={`w-full text-center text-2xl font-black uppercase tracking-[0.2em] transition-all py-2 ${
                        isActive(item.path) ? 'text-green-400' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
             </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
