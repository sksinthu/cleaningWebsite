import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('Home', 'Home'), path: '/' },
    { name: t('Preise', 'Pricing'), path: '/pricing' },
    { name: t('Galerie', 'Gallery'), path: '/gallery' },
    { name: t('Kontakt', 'Contact'), path: '/contact' },
    { name: t('Warum wir?', 'Why Us?'), path: '/whyus' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-100">
      
      {/* --- DESKTOP NAVBAR (lg:flex) --- */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
            {/* Logo Left */}
            <Link to="/" className="flex items-center">
                <img src="/Logo.png" alt="SwissClean" className="h-12 w-auto" />
            </Link>

            {/* Menu Middle */}
            <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`text-[13px] font-black uppercase tracking-[0.15em] transition-all hover:text-secondary py-2 border-b-2 ${isActive(link.path) ? 'text-secondary border-secondary' : 'text-primary border-transparent'}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Utilities Right */}
            <div className="flex items-center gap-6">
                <div className="flex bg-slate-50 rounded-full p-0.5 border border-slate-200">
                    <button onClick={() => setLanguage('DE')} className={`px-2.5 py-0.5 rounded-full text-[9px] font-black transition-all ${language === 'DE' ? 'bg-primary text-white shadow-sm' : 'text-primary/40'}`}>DE</button>
                    <button onClick={() => setLanguage('EN')} className={`px-2.5 py-0.5 rounded-full text-[9px] font-black transition-all ${language === 'EN' ? 'bg-primary text-white shadow-sm' : 'text-primary/40'}`}>EN</button>
                </div>
                
                <div className="flex items-center gap-6">
                  <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-black text-[12px] uppercase tracking-widest hover:bg-secondary transition-all shadow-md active:scale-95">
                      {t('Jetzt anfragen', 'Get a Quote')}
                  </Link>
                  
                  <span className="text-slate-300 font-light">|</span>

                  <a href="tel:0797811400" className="flex items-center gap-2 text-primary font-black text-sm hover:text-secondary group transition-all">
                      <span className="material-symbols-outlined text-xl text-secondary">call</span>
                      <span>079 781 14 00</span>
                  </a>
                </div>
            </div>
        </div>
      </div>

      {/* --- MOBILE NAVBAR (lg:hidden) --- */}
      <div className="lg:hidden">
        <div className="h-20 bg-white px-6 flex justify-between items-center shadow-sm border-b border-slate-50">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center">
                <img 
                    src="/Logo.png" 
                    alt="SwissClean" 
                    className="h-10 w-auto object-contain" 
                />
            </Link>

            {/* Right: Menu Icon Only (Consolidated tools inside menu) */}
            <button 
              className="text-primary p-2 flex items-center justify-center active:scale-90 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl font-light">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl animate-fade-in overflow-hidden">
          <div className="p-6 space-y-8">
            {/* Language Selection at the top of menu */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('Sprache / Language', 'Language')}</span>
               <div className="flex bg-slate-50 rounded-full p-0.5 border border-slate-100">
                    <button onClick={() => setLanguage('DE')} className={`px-4 py-1.5 rounded-full text-[10px] font-black transition-all ${language === 'DE' ? 'bg-primary text-white shadow-sm' : 'text-primary/40'}`}>DEUTSCH</button>
                    <button onClick={() => setLanguage('EN')} className={`px-4 py-1.5 rounded-full text-[10px] font-black transition-all ${language === 'EN' ? 'bg-primary text-white shadow-sm' : 'text-primary/40'}`}>ENGLISH</button>
                </div>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-black uppercase tracking-widest p-2 rounded-xl transition-all ${isActive(link.path) ? 'bg-secondary/5 text-secondary pl-4' : 'text-primary'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
               <Link 
                 to="/contact" 
                 className="w-full py-4 rounded-2xl bg-primary text-white font-black text-center shadow-lg active:scale-95 transition-all text-sm uppercase tracking-widest"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                  {t('Jetzt anfragen', 'Get a Quote')}
               </Link>
               <a 
                 href="tel:0797811400" 
                 className="w-full py-4 rounded-2xl border-2 border-primary text-primary font-black text-center flex items-center justify-center gap-3 active:scale-95 transition-all text-sm"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                  <span className="material-symbols-outlined text-secondary">call</span>
                  079 781 14 00
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
