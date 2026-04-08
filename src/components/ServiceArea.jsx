import React from 'react';
import { useLanguage } from '../LanguageContext';

const ServiceArea = () => {
  const { t } = useLanguage();

  const cities = [
    { name: 'Bern', region: 'Mittelland' },
    { name: 'Solothurn', region: 'Mittelland' },
    { name: 'Fribourg', region: 'Westschweiz' },
    { name: 'Neuchâtel', region: 'Westschweiz' }
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden" id="einsatzgebiet">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
        <div className="flex-1 w-full order-2 lg:order-1 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-slate-50 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-slate-200">
            <span className="material-symbols-outlined text-[16px]">map</span>
            {t('Lokal & Regional', 'Local & Regional')}
          </span>
          
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-8 tracking-tighter uppercase leading-[0.95]">
            {t('UNSER', 'OUR')} <br />
            <span className="text-emerald-900 decoration-emerald-200 underline decoration-8 underline-offset-8">{t('EINSATZGEBIET', 'SERVICE AREA')}</span>
          </h2>
          
          <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
            {t('Wir sind in der gesamten Westschweiz und im Mittelland für Sie im Einsatz. Pünktlichkeit, Zuverlässigkeit und lokale Präsenz sind unser Markenzeichen.', 'We operate throughout Western Switzerland and the Mittelland. Punctuality, reliability, and local presence are our hallmarks.')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
            {cities.map((city, idx) => (
              <div key={idx} className="flex items-center gap-5 p-5 bg-slate-50 rounded-3xl border border-slate-100 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div className="text-left">
                    <div className="font-headline font-bold text-primary text-lg leading-none mb-1">{city.name}</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t(city.region, city.region)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43588.63675204423!2d7.1423!3d47.0500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sch!4v1700000000000!5m2!1sen!2sch" 
                  className="w-full h-full border-0 grayscale opacity-80" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SwissClean Service Area"
                ></iframe>
                
                {/* Visual Map Markers (Overlay) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <div className="absolute -inset-16 bg-white/20 rounded-full animate-ping"></div>
                    <div className="absolute -inset-8 bg-secondary/30 rounded-full animate-pulse"></div>
                    <div className="w-12 h-12 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center relative z-10 border-4 border-white">
                      <span className="material-symbols-outlined text-2xl animate-bounce">location_on</span>
                    </div>
                  </div>
                </div>

                {/* Region Tag */}
                <div className="absolute top-8 left-8 bg-primary/90 backdrop-blur-md text-white py-3 px-6 rounded-2xl shadow-xl flex flex-col gap-0.5">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60">{t('Region', 'Region')}</span>
                    <span className="text-sm font-bold tracking-tight text-secondary-fixed">{t('Westschweiz & Mittelland', 'Western Switzerland')}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
