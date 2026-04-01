import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-4 md:px-8 pt-6 pb-12 md:pt-10 md:pb-20 lg:pt-8 lg:pb-28 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-primary leading-tight mb-4 md:mb-6">
            {t('Professionelle Reinigungsdienste in Ihrer Region', 'Professional Cleaning Services in Your Area')}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-on-surface-variant mb-8 md:mb-10 max-w-xl leading-relaxed">
            {t('Vertrauen, Zuverlässigkeit und erstklassiger Service. Wir sorgen für strahlende Sauberkeit in Ihrem Zuhause oder Büro – schnell und umweltfreundlich.', 'Trust, reliability, and first-class service. We ensure radiant cleanliness in your home or office – fast and eco-friendly.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#kontakt" className="w-full sm:w-auto bg-secondary text-on-secondary px-6 md:px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-on-secondary-container transition-all editorial-shadow flex items-center justify-center">
              {t('Jetzt buchen', 'Book Now')}
            </a>
            <a href="#kontakt" className="w-full sm:w-auto bg-surface-container-lowest text-primary px-6 md:px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-surface-container-low transition-all flex items-center justify-center">
              {t('Angebot erhalten', 'Get a Quote')}
            </a>
          </div>
        </div>
        <div className="relative z-0">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10"></div>
          <img 
            alt={t('Professionelle Reinigungskraft', 'Professional Cleaner')}
            className="rounded-3xl object-cover aspect-[4/5] shadow-2xl w-full h-full" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZz_UoGfbds1gCb_v6O1Vb5D8SXrGhFGB8Bjk_cdLRwK7od0zeoTvtCWeRT6MUNBkXtI411MqzqEHT8Q0Clf9PdPxGL8iFv8QlDWSbQebwTo_UxybuB77pSC77A11wDNQqQTmPsKL3c0N66re7PTKrPPqPv5t4cXPd2e4E3EnboU2ZOvhKYuIqPNdUT85p89PoSMShuCajtPxRmfiHG5keVl7ooub7Sfk6P3Ty2-e5KAKBzKnL34Cz_8X-IMFCF0Qa3jjW3fmHS1Ux"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
