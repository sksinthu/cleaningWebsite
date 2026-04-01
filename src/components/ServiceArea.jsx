import React from 'react';
import { useLanguage } from '../LanguageContext';

const ServiceArea = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white" id="einsatzgebiet">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="flex-1 w-full order-2 md:order-1">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8 text-center md:text-left">{t('Einsatzgebiet', 'Service Area')}</h2>
          <p className="text-on-surface-variant mb-8 md:mb-12 text-center md:text-left">
            {t('Wir sind in der gesamten Westschweiz und im Mittelland für Sie im Einsatz. Pünktlichkeit und lokale Präsenz sind unser Markenzeichen.', 'We operate throughout Western Switzerland and the Mittelland. Punctuality and local presence are our hallmarks.')}
          </p>
          <div className="grid grid-cols-2 gap-y-6 max-w-sm mx-auto md:mx-0">
            {['Bern', 'Solothurn', 'Fribourg', 'Neuchâtel'].map((city, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="font-bold text-lg">{city}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full aspect-square bg-surface-container-low rounded-3xl overflow-hidden shadow-inner border border-outline-variant/10 flex items-center justify-center p-2 md:p-4 order-1 md:order-2">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-200">
            <img 
              className="w-full h-full object-cover opacity-40 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvSb_evzlPAFyD5iDY-my25zBU19czx8wXxZolf3bvu96fs0P91SLq3M6cUf6MELGb09vKTiJNFLa-XYXeDuM34unvy-L0OS0vfZHvj7Pm_Yyy67xEtwhjHKJbDedoioMrIl5mscPIrxbddUmTY6bRFvCYi2_LL8_eFHIDkFmzYtlJizqr7A8s8xA1UnN0oH9Bgh7n_pQx-9mJWB_PoHqTRZxe_e5UpxQeJHj44gZqW8STWNx6lhjnq8wVHt4hSsVVa2HTQlk_HqX4" 
              alt="Switzerland map"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-12 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10">
                  <span className="material-symbols-outlined text-white text-xs">location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
