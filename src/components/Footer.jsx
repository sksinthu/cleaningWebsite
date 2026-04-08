import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-slate-50 py-12 md:py-16 border-t border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link to="/">
            <img src="/Logo.png" alt="SwissClean" className="h-12 w-auto object-contain" />
          </Link>
          <p className="text-slate-500 font-medium text-sm leading-relaxed">
            {t('Ihr Partner für professionelle Sauberkeit und Werterhalt in der gesamten Schweiz.', 'Your partner for professional cleanliness and value retention throughout Switzerland.')}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-600">
              <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              <span className="text-sm font-semibold">Kohlenweg 12, 3097 Liebefeld</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <span className="material-symbols-outlined text-primary text-xl">call</span>
              <span className="text-sm font-bold">079 781 14 00</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-primary uppercase tracking-widest text-sm">{t('Quick Links', 'Quick Links')}</h4>
          <nav className="flex flex-col gap-3 font-bold text-sm">
            <Link className="text-slate-500 hover:text-secondary transition-colors" to="/services">{t('Services', 'Services')}</Link>
            <Link className="text-slate-500 hover:text-secondary transition-colors" to="/pricing">{t('Preise', 'Pricing')}</Link>
            <Link className="text-slate-500 hover:text-secondary transition-colors" to="/contact">{t('Kontakt', 'Contact')}</Link>
            <Link className="text-slate-500 hover:text-secondary transition-colors" to="/contact">{t('Jetzt buchen', 'Book Now')}</Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-primary uppercase tracking-widest text-sm">{t('Rechtliches', 'Legal')}</h4>
          <nav className="flex flex-col gap-3 font-bold text-sm">
            <Link className="text-slate-500 hover:text-secondary transition-colors" to="/privacy">{t('Datenschutz', 'Privacy Policy')}</Link>
            <Link className="text-slate-500 hover:text-secondary transition-colors" to="/terms">{t('AGB', 'Terms & Conditions')}</Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-primary uppercase tracking-widest text-sm">{t('Sprache', 'Language')}</h4>
          <div className="flex gap-4">
            <button 
              onClick={() => setLanguage('DE')}
              className={`font-bold text-sm transition-all ${language === 'DE' ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}>
              DE
            </button>
            <span className="text-slate-200">|</span>
            <button 
              onClick={() => setLanguage('EN')}
              className={`font-bold text-sm transition-all ${language === 'EN' ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}>
              EN
            </button>
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-4">
            <a 
              href="https://www.tiktok.com/@pk.top.clean?_r=1&_t=ZS-95MlYnWHUgB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all group"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.02 1.4-.43 2.82-1.32 3.91-.95 1.25-2.45 2.01-4 2.15-1.54.14-3.15-.17-4.48-1.01-1.35-.85-2.31-2.28-2.61-3.83-.43-2.07.28-4.32 1.83-5.71 1.4-1.27 3.39-1.74 5.25-1.31v4.21c-.81-.24-1.72-.11-2.42.34-.73.45-1.16 1.34-1.16 2.19 0 1.25 1.05 2.3 2.35 2.3 1.21 0 2.23-.91 2.35-2.05.04-3.66.02-7.32.02-10.99 0-2.31 0-4.61.01-6.92Z"/>
              </svg>
              {t('Folgen Sie uns', 'Follow Us')}
            </a>
            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">© 2024 SwissClean & Maintenance.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
