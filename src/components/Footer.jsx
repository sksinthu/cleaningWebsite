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
          <div className="pt-6 border-t border-slate-200">
            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">© 2024 SwissClean & Maintenance.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
