import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Scrollspy logic to determine active menu item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'preise', 'winterdienst', 'einsatzgebiet', 'kontakt'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      
      if (window.scrollY < 100) {
          current = '';
      }
      
      setActiveSegment(current);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-7xl mx-auto">
        <a href="#" className="flex items-center">
          <img src="/Logo.jpg" alt="SwissClean" className="h-8 md:h-12 w-auto object-contain rounded-sm" />
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-manrope text-sm font-medium tracking-tight">
          <a className={`transition-all ${activeSegment === 'services' ? 'text-blue-600 font-bold scale-105' : 'text-slate-600 hover:text-blue-600'}`} href="#services">{t('Services', 'Services')}</a>
          <a className={`transition-all ${activeSegment === 'preise' ? 'text-blue-600 font-bold scale-105' : 'text-slate-600 hover:text-blue-600'}`} href="#preise">{t('Preise', 'Pricing')}</a>
          <a className={`transition-all ${activeSegment === 'winterdienst' ? 'text-blue-600 font-bold scale-105' : 'text-slate-600 hover:text-blue-600'}`} href="#winterdienst">{t('Winterdienst', 'Winter Service')}</a>
          <a className={`transition-all ${activeSegment === 'einsatzgebiet' ? 'text-blue-600 font-bold scale-105' : 'text-slate-600 hover:text-blue-600'}`} href="#einsatzgebiet">{t('Einsatzgebiet', 'Service Area')}</a>
          <a className={`transition-all ${activeSegment === 'kontakt' ? 'text-blue-600 font-bold scale-105' : 'text-slate-600 hover:text-blue-600'}`} href="#kontakt">{t('Kontakt', 'Contact')}</a>
        </nav>

        {/* Action Elements */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-slate-100 p-1 rounded-full border border-slate-200/50">
            <button 
              onClick={() => setLanguage('DE')}
              className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider transition-all focus:outline-none ${language === 'DE' ? 'font-extrabold bg-white text-primary shadow-sm' : 'font-bold text-slate-500 hover:text-primary'}`}
            >
                DE
            </button>
            <button 
              onClick={() => setLanguage('EN')}
              className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider transition-all focus:outline-none ${language === 'EN' ? 'font-extrabold bg-white text-primary shadow-sm' : 'font-bold text-slate-500 hover:text-primary'}`}
            >
                EN
            </button>
          </div>
          <a className="hidden md:inline-block bg-secondary text-on-secondary px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-on-secondary-container transition-all active:scale-95" href="#kontakt">
            {t('Jetzt buchen', 'Book Now')}
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden material-symbols-outlined text-primary text-4xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'close' : 'menu_open'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 flex flex-col p-6 space-y-4">
          <a className={`text-lg transition-colors ${activeSegment === 'services' ? 'text-blue-600 font-bold' : 'text-slate-800 font-medium'}`} href="#services" onClick={() => setIsMobileMenuOpen(false)}>{t('Services', 'Services')}</a>
          <a className={`text-lg transition-colors ${activeSegment === 'preise' ? 'text-blue-600 font-bold' : 'text-slate-800 font-medium'}`} href="#preise" onClick={() => setIsMobileMenuOpen(false)}>{t('Preise', 'Pricing')}</a>
          <a className={`text-lg transition-colors ${activeSegment === 'winterdienst' ? 'text-blue-600 font-bold' : 'text-slate-800 font-medium'}`} href="#winterdienst" onClick={() => setIsMobileMenuOpen(false)}>{t('Winterdienst', 'Winter Service')}</a>
          <a className={`text-lg transition-colors ${activeSegment === 'einsatzgebiet' ? 'text-blue-600 font-bold' : 'text-slate-800 font-medium'}`} href="#einsatzgebiet" onClick={() => setIsMobileMenuOpen(false)}>{t('Einsatzgebiet', 'Service Area')}</a>
          <a className={`text-lg transition-colors ${activeSegment === 'kontakt' ? 'text-blue-600 font-bold' : 'text-slate-800 font-medium'}`} href="#kontakt" onClick={() => setIsMobileMenuOpen(false)}>{t('Kontakt', 'Contact')}</a>
          
          <div className="pt-6 mt-2 border-t border-slate-100 flex flex-col gap-6">
            <div className="flex items-center justify-center bg-slate-100 p-1 rounded-full border border-slate-200/50 w-max mx-auto shadow-sm">
              <button 
                onClick={() => { setLanguage('DE'); setIsMobileMenuOpen(false); }}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${language === 'DE' ? 'font-extrabold bg-white text-primary shadow-sm' : 'font-bold text-slate-500 hover:text-primary'}`}
              >
                  DE
              </button>
              <button 
                onClick={() => { setLanguage('EN'); setIsMobileMenuOpen(false); }}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${language === 'EN' ? 'font-extrabold bg-white text-primary shadow-sm' : 'font-bold text-slate-500 hover:text-primary'}`}
              >
                  EN
              </button>
            </div>
            <a className="bg-secondary text-on-secondary px-6 py-4 rounded-xl text-center font-bold text-lg shadow-md" href="#kontakt" onClick={() => setIsMobileMenuOpen(false)}>
              {t('Jetzt buchen', 'Book Now')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
