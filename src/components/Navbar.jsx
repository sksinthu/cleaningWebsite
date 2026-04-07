import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('Home', 'Home'), path: '/' },
    { name: t('Services', 'Services'), path: '/services' },
    { name: t('Preise', 'Pricing'), path: '/pricing' },
    { name: t('Galerie', 'Gallery'), path: '/gallery' },
    { name: t('Kontakt', 'Contact'), path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-lg py-2 border-b border-primary/10 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Logo.png" alt="SwissClean" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Links (Menu Bar) */}
        <div className="hidden lg:flex items-center gap-8 md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-secondary ${isActive(link.path) ? 'text-secondary' : 'text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Global Action Section */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* 3. Toggle Button (Language) */}
          <div className="hidden sm:flex bg-slate-100 rounded-full p-1 border border-slate-200 shadow-inner">
            <button 
              onClick={() => setLanguage('DE')}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${language === 'DE' ? 'bg-primary text-white shadow-sm' : 'text-primary/40 hover:text-primary'}`}
            >
              DE
            </button>
            <button 
              onClick={() => setLanguage('EN')}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${language === 'EN' ? 'bg-primary text-white shadow-sm' : 'text-primary/40 hover:text-primary'}`}
            >
              EN
            </button>
          </div>

          {/* 4. Get a Quote Button & 5. Phone Number */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-full font-black text-xs hover:bg-secondary transition-all shadow-lg shadow-primary/20 uppercase tracking-widest active:scale-95">
              {t('Jetzt anfragen', 'Get a Quote')}
            </Link>
            
            <span className="text-primary/10 font-light text-2xl">|</span>
            
            <a href="tel:0797811400" className="flex items-center gap-2 text-primary font-black text-sm hover:text-secondary hover:scale-105 transition-all">
              <span className="material-symbols-outlined text-xl">call</span>
              <span className="tracking-tighter">079 781 14 00</span>
            </a>
          </div>

          <button 
            className="lg:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-outline-variant/20 p-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-6 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-bold uppercase tracking-widest ${isActive(link.path) ? 'text-secondary' : 'text-primary'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
             <div className="flex bg-surface-container-low rounded-2xl p-1.5 overflow-hidden">
                <button 
                  onClick={() => { setLanguage('DE'); setIsMobileMenuOpen(false); }}
                  className={`flex-1 py-3 rounded-xl font-bold transition-all ${language === 'DE' ? 'bg-primary text-white shadow-md' : 'text-primary/60'}`}
                >
                  DEUTSCH
                </button>
                <button 
                  onClick={() => { setLanguage('EN'); setIsMobileMenuOpen(false); }}
                  className={`flex-1 py-3 rounded-xl font-bold transition-all ${language === 'EN' ? 'bg-primary text-white shadow-md' : 'text-primary/60'}`}
                >
                  ENGLISH
                </button>
             </div>
             <Link to="/contact" className="w-full py-4 rounded-full bg-primary text-white font-bold text-center shadow-lg active:scale-95 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                {t('Jetzt anfragen', 'Get a Quote')}
             </Link>
             <a 
               href="tel:0797811400" 
               className="w-full py-4 rounded-full border-2 border-primary text-primary font-bold text-center flex items-center justify-center gap-2 active:scale-95 transition-all"
               onClick={() => setIsMobileMenuOpen(false)}
             >
                <span className="material-symbols-outlined">call</span>
                079 781 14 00
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
