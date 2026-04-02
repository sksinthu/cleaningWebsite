import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-slate-50 py-10 md:py-12 border-t-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <img src="/Logo.png" alt="SwissClean" className="h-12 w-auto object-contain rounded-sm" />
          <p className="text-slate-500 font-plus-jakarta text-sm leading-relaxed">
            {t('Ihr Partner für professionelle Sauberkeit und Werterhalt in der gesamten Schweiz.', 'Your partner for professional cleanliness and value retention throughout Switzerland.')}
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-800 shadow-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-800 shadow-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-blue-800">{t('Quick Links', 'Quick Links')}</h4>
          <nav className="flex flex-col gap-2 font-plus-jakarta text-sm leading-relaxed">
            <a className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all" href="#services">{t('Services', 'Services')}</a>
            <a className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all" href="#preise">{t('Preise', 'Pricing')}</a>
            <a className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all" href="#winterdienst">{t('Winterdienst', 'Winter Service')}</a>
            <a className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all" href="#kontakt">{t('Jetzt buchen', 'Book Now')}</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-blue-800">{t('Rechtliches', 'Legal')}</h4>
          <nav className="flex flex-col gap-2 font-plus-jakarta text-sm leading-relaxed">
            <a className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all" href="#">{t('Impressum', 'Imprint')}</a>
            <a className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all" href="#">{t('Datenschutz', 'Privacy Policy')}</a>
            <a className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all" href="#">{t('AGB', 'Terms & Conditions')}</a>
            <a className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all" href="#">{t('Karriere', 'Careers')}</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-blue-800">{t('Sprache', 'Language')}</h4>
          <div className="flex gap-2">
            <button 
              onClick={() => setLanguage('DE')}
              className={`font-plus-jakarta text-sm leading-relaxed ${language === 'DE' ? 'text-blue-700 underline' : 'text-slate-500 hover:text-blue-600'}`}>
              {t('Deutsch', 'German')}
            </button>
            <span className="text-slate-300">|</span>
            <button 
              onClick={() => setLanguage('EN')}
              className={`font-plus-jakarta text-sm leading-relaxed ${language === 'EN' ? 'text-blue-700 underline' : 'text-slate-500 hover:text-blue-600'}`}>
              {t('Englisch', 'English')}
            </button>
          </div>
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-400">© 2024 SwissClean & Maintenance. {t('Alle Rechte vorbehalten.', 'All Rights Reserved.')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
