import React from 'react';
import { useLanguage } from '../LanguageContext';

const ServiceArea = () => {
  const { t } = useLanguage();

  const regions = [
    { title: t('Bern', 'Bern'), subtitle: t('MITTELLAND', 'MITTELLAND') },
    { title: t('Solothurn', 'Solothurn'), subtitle: t('MITTELLAND', 'MITTELLAND') },
    { title: t('Fribourg', 'Fribourg'), subtitle: t('WESTSCHWEIZ', 'WESTSCHWEIZ') },
    { title: t('Neuchâtel', 'Neuchâtel'), subtitle: t('WESTSCHWEIZ', 'WESTSCHWEIZ') },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white" id="service-area">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Content */}
          <div className="space-y-10 flex flex-col justify-between">
            <div className="space-y-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-[#0062ff]">
                    <span className="material-symbols-outlined text-[14px]">map</span>
                    {t('LOCAL & REGIONAL', 'LOCAL & REGIONAL')}
                </div>

                <div>
                  <h2 className="font-headline text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">
                    <span className="text-[#0062ff] block">{t('OUR', 'OUR')}</span>
                    <span className="text-[#0a3622] block decoration-[#2eb872] underline decoration-8 underline-offset-8">
                      {t('SERVICE AREA', 'SERVICE AREA')}
                    </span>
                  </h2>
                  <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                    {t('We operate throughout Western Switzerland and the Mittelland. Punctuality, reliability, and local presence are our hallmarks.', 'We operate throughout Western Switzerland and the Mittelland. Punctuality, reliability, and local presence are our hallmarks.')}
                  </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              {regions.map((region, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-slate-50/50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-primary leading-tight">{region.title}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{region.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Map Image Only (Aligned with Left Column height) */}
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[16px] border-white shadow-2xl h-full min-h-[400px]">
                <img 
                   src="/servicearea.jpeg" 
                   alt="Service Area Map" 
                   className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-primary/5"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
