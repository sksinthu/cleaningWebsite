import React from 'react';
import { useLanguage } from '../LanguageContext';

const WinterService = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-0 py-16 md:py-24 px-4 md:px-8 overflow-hidden" id="winterdienst">
      <div className="absolute inset-0 bg-primary/95 -z-10"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-white">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">{t('Saisonal', 'Seasonal')}</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t('Professioneller Winterdienst', 'Professional Winter Service')}</h2>
          <p className="text-white/80 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
            {t('Sicherheit bei Eis und Schnee. Wir sorgen für geräumte Wege und sichere Zufahrten, damit Sie unbeschwert durch den Winter kommen.', 'Safety on ice and snow. We ensure cleared paths and safe driveways so you can get through winter carefree.')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-4xl">ac_unit</span>
              <div>
                <h4 className="font-bold mb-1">{t('Schneeräumung', 'Snow Clearing')}</h4>
                <p className="text-xs text-white/70">{t('Manuell & maschinell für Gehwege und Parkplätze.', 'Manual & mechanical for walkways and parking lots.')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-4xl">grain</span>
              <div>
                <h4 className="font-bold mb-1">{t('Salz- & Splittservice', 'Salt & Grit Service')}</h4>
                <p className="text-xs text-white/70">{t('Präventiv gegen Glatteis für maximale Sicherheit.', 'Preventive against black ice for maximum safety.')}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative z-0">
          <img 
            alt="Winter Service" 
            className="rounded-3xl object-cover h-80 w-full shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3psMiZOTaDM2w35YRzADs7QgvWqvtsgZUh_8-AcyFk24DpEUeylM5ArGjPhXab3ahpUt_8HkfakyT8TPQ5Sf_6E6Vj9K7CvpKWBu7lJNpUQ8TZkARhIQ6OHdQWqODKdwjkFDDiHmVco16TnCc7Gl5T5Wk8LYd9hYwUaN5IC-4c0Pz9YFUunUrUPx1OIbDTQi9Ea9VNe7Gph-l1gWc6gvSsRWzkD7vtUrMTxA5nIWhmKdUN1ONPHm7BMAoHmU4NvbXRXK7n428ZZpi"
          />
        </div>
      </div>
    </section>
  );
};

export default WinterService;
