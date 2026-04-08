import React from 'react';
import Pricing from '../components/Pricing';
import { useLanguage } from '../LanguageContext';

const PricingPage = () => {
    const { t } = useLanguage();
    return (
      <div className="pt-0 min-h-screen bg-surface">
         {/* Contact-Style Split-Screen Header */}
         <div className="bg-primary relative overflow-hidden pt-32 md:pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a192f]"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
               <div className="text-left">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-black/20">
                    <span className="material-symbols-outlined text-[14px]">payments</span>
                    {t('Ehrliche Werte', 'Honest Values')}
                  </span>
                  <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.95]">
                    {t('UNSERE', 'OUR')} <br />
                    <span className="text-secondary-fixed decoration-secondary underline decoration-8 underline-offset-8">{t('PREISE', 'PRICING')}</span>
                  </h1>
                  <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                    {t('Wir bieten transparente und faire Konditionen für jede Anforderung. Entdecken Sie unsere Pakete oder fordern Sie eine massgeschneiderte Offerte an – bei uns gibt es keine versteckten Kosten.', 'We offer transparent and fair conditions for every requirement. Discover our packages or request a tailored quote – with us, there are no hidden costs.')}
                  </p>
               </div>

               <div className="relative hidden lg:block">
                  <div className="relative rounded-[40px] overflow-hidden border-[10px] border-white/10 shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-700 aspect-video">
                     <img 
                       src="/pricing.avif" 
                       alt="Pricing Transparency" 
                       className="w-full h-full object-cover"
                     />
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white py-3 px-6 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-slate-100">
                     <span className="material-symbols-outlined text-primary text-xl">loyalty</span>
                     <span className="text-slate-600 font-bold text-sm tracking-tight">{t('Faire Konditionen', 'Fair Rates')}</span>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="mt-8 pb-16">
            <Pricing />
         </div>
      </div>
    );
};

export default PricingPage;
