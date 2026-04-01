import React from 'react';
import { useLanguage } from '../LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
    { 
      icon: 'home_work', 
      title: t('Hauswartung & Reinigung', 'Facility Management & Cleaning'), 
      desc: t('Umfassende Pflege Ihrer Liegenschaft für langfristigen Werterhalt und ein gepflegtes Erscheinungsbild.', 'Comprehensive care of your property for long-term value retention and a well-kept appearance.'), 
      colSpan: 'md:col-span-2' 
    },
    { 
      icon: 'living', 
      title: t('Wohnungsreinigung', 'Apartment Cleaning'), 
      desc: t('Regelmässige Reinigung für Ihr Wohlbefinden zu Hause.', 'Regular cleaning for your well-being at home.'), 
      colSpan: 'md:col-span-1' 
    },
    { 
      icon: 'window', 
      title: t('Fensterreinigung', 'Window Cleaning'), 
      desc: t('Streifenfreier Glanz für alle Glasflächen und Rahmen.', 'Streak-free shine for all glass surfaces and frames.'), 
      colSpan: 'md:col-span-1' 
    },
    { 
      icon: 'cleaning_services', 
      title: t('Unterhaltsreinigung', 'Maintenance Cleaning'), 
      desc: t('Präzise Intervalle für dauerhafte Sauberkeit.', 'Precise intervals for lasting cleanliness.'), 
      colSpan: 'md:col-span-1' 
    },
    { 
      icon: 'corporate_fare', 
      title: t('Büroreinigung', 'Office Cleaning'), 
      desc: t('Saubere Arbeitswelten für motivierte Teams.', 'Clean workspaces for motivated teams.'), 
      colSpan: 'md:col-span-1' 
    },
  ];

  const additionalServices = [
    { icon: 'local_shipping', title: t('Umzugsreinigung', 'Move-out Cleaning') },
    { icon: 'delete_sweep', title: t('Wohnungsräumung', 'Apartment Clearance') },
    { icon: 'inventory', title: t('Kellerräumung', 'Basement Clearance') },
    { icon: 'architecture', title: t('Estrichräumung', 'Attic Clearance') },
    { icon: 'garage', title: t('Garagenräumung', 'Garage Clearance') },
  ];

  return (
    <section className="bg-surface-container-low py-16 md:py-24 px-4 md:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">{t('Unsere Services', 'Our Services')}</h2>
          <div className="h-1.5 w-16 md:w-24 bg-secondary rounded-full"></div>
        </div>

        {/* Main Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {mainServices.map((service, idx) => (
            <div key={idx} className={`${service.colSpan} bg-surface-container-lowest p-8 rounded-3xl editorial-shadow group hover:bg-primary transition-colors duration-300`}>
              <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:text-white">{service.icon}</span>
              <h3 className="font-headline text-2xl font-bold mb-3 group-hover:text-white">{service.title}</h3>
              <p className="text-on-surface-variant group-hover:text-white/80">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="bg-surface-container-high/50 p-6 md:p-8 rounded-3xl">
          <h4 className="font-headline text-xl font-bold text-primary mb-6 md:mb-8">{t('Zusatzleistungen & Räumungen', 'Additional Services & Clearances')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">{service.icon}</span>
                </div>
                <span className="text-sm font-semibold">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
