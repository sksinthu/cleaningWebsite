import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('Home', 'Home'), path: '/' },
    { name: t('Services', 'Services'), path: '/services' },
    { name: t('Preise', 'Pricing'), path: '/pricing' },
    { name: t('Kontakt', 'Contact'), path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-1' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Logo.jpg" alt="SwissClean" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-secondary hover:translate-y-[-2px] ${isActive(link.path) ? 'text-secondary' : 'text-primary/80'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex bg-surface-container-lowest rounded-full p-1 border border-outline-variant/30">
            <button 
              onClick={() => setLanguage('DE')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'DE' ? 'bg-primary text-white shadow-sm' : 'text-primary/60 hover:text-primary'}`}
            >
              DE
            </button>
            <button 
              onClick={() => setLanguage('EN')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'EN' ? 'bg-primary text-white shadow-sm' : 'text-primary/60 hover:text-primary'}`}
            >
              EN
            </button>
          </div>
          
          <Link to="/contact" className="hidden md:inline-block bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-on-primary-container transition-all editorial-shadow uppercase tracking-wider">
            {t('Jetzt anfragen', 'Get a Quote')}
          </Link>

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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
