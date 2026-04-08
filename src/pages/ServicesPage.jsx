import React from 'react';
import Services from '../components/Services';
import WinterService from '../components/WinterService';
import ServiceArea from '../components/ServiceArea';
import { useLanguage } from '../LanguageContext';

const ServicesPage = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-0">
      {/* Contact-Style Split-Screen Header */}
      <div className="bg-primary relative overflow-hidden pt-12 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a192f]"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-black/20">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              {t('Was wir bieten', 'What We Offer')}
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.95]">
              {t('UNSERE', 'OUR')} <br />
              <span className="text-secondary-fixed decoration-secondary underline decoration-8 underline-offset-8">{t('SERVICES', 'SERVICES')}</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              {t('Wir bieten flächendeckende Reinigungsdienstleistungen an und bringen professionelle Expertise direkt zu Ihrem Standort. Von der regelmässigen Unterhaltsreinigung bis hin zu komplexen Spezialaufgaben – wir sind für Sie da.', 'We provide comprehensive cleaning services, bringing professional expertise directly to your location. From routine maintenance cleaning to complex specialty tasks – we’ve got you covered.')}
            </p>
          </div>

          <div className="relative hidden lg:block">
             <div className="relative rounded-[40px] overflow-hidden border-[10px] border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 aspect-video">
                <img 
                  src="/service/service.png" 
                  alt="Professional Service" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute bottom-6 right-6 bg-white py-3 px-6 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-slate-100">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <span className="text-slate-600 font-bold text-sm tracking-tight">{t('Profi-Qualität', 'Pro Quality')}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Services />
        <div className="py-12">
           <WinterService />
        </div>
        <ServiceArea />
      </div>
    </div>
  );
};

export default ServicesPage;
