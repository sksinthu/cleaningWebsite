import React from 'react';
import { useLanguage } from '../LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
    { 
      icon: 'home_work', 
      title: t('Hauswartung & Reinigung', 'Facility Management & Cleaning'), 
      desc: t('Umfassende Pflege Ihrer Liegenschaft für langfristigen Werterhalt und ein gepflegtes Erscheinungsbild.', 'Comprehensive care of your property for long-term value retention and a well-kept appearance.'), 
      image: '/service/facility.jpeg',
      features: [
        t('Liegenschaftspflege', 'Property Maintenance'),
        t('Treppenhausreinigung', 'Staircase Cleaning'),
        t('Technische Checks', 'Technical Checks'),
        t('Umgebungspflege', 'Exterior Maintenance')
      ]
    },
    { 
      icon: 'living', 
      title: t('Wohnungsreinigung', 'Apartment Cleaning'), 
      desc: t('Regelmässige Reinigung für Ihr Wohlbefinden zu Hause.', 'Regular cleaning for your well-being at home.'), 
      image: '/service/home.jpeg',
      features: [
        t('Bodenreinigung', 'Floor Cleaning'),
        t('Küchenreinigung', 'Kitchen Deep Clean'),
        t('Badezimmer-Hygiene', 'Bathroom Hygiene'),
        t('Staubwischen', 'Dusting')
      ]
    },
    { 
      icon: 'window', 
      title: t('Fensterreinigung', 'Window Cleaning'), 
      desc: t('Streifenfreier Glanz für alle Glasflächen und Rahmen.', 'Streak-free shine for all glass surfaces and frames.'), 
      image: '/service/window.jpeg',
      features: [
        t('Glasreinigung', 'Glass Cleaning'),
        t('Rahmenpflege', 'Frame Care'),
        t('Simsenreinigung', 'Sills Cleaning'),
        t('Wintergärten', 'Conservatory Cleaning')
      ]
    },
    { 
      icon: 'cleaning_services', 
      title: t('Unterhaltsreinigung', 'Maintenance Cleaning'), 
      desc: t('Präzise Intervalle für dauerhafte Sauberkeit.', 'Precise intervals for lasting cleanliness.'), 
      image: '/service/maintain.jpeg',
      features: [
        t('Reinigungsintervalle', 'Regular Intervals'),
        t('Oberflächenpflege', 'Surface Care'),
        t('Müllentsorgung', 'Trash Disposal'),
        t('Desinfektion', 'Disinfection')
      ]
    },
    { 
      icon: 'corporate_fare', 
      title: t('Büroreinigung', 'Office Cleaning'), 
      desc: t('Saubere Arbeitswelten für motivierte Teams.', 'Clean workspaces for motivated teams.'), 
      image: '/service/office.jpeg',
      features: [
        t('Arbeitsplatzreinigung', 'Desk Cleaning'),
        t('Tech-Equipment Pflege', 'Tech Equipment Care'),
        t('Kaffee-Ecken Hygiene', 'Common Areas Hygiene'),
        t('Konferenzraum-Check', 'Conference Room Check')
      ]
    },
  ];

  const additionalServices = [
    { 
      icon: 'local_shipping', 
      title: t('Umzugsreinigung', 'Move-out Cleaning'), 
      image: '/service/moveout.jpeg',
      desc: t('Gründliche Endreinigung mit Abnahmegarantie für Ihren stressfreien Umzug.', 'Thorough final cleaning with handover guarantee for your stress-free move.')
    },
    { 
      icon: 'delete_sweep', 
      title: t('Wohnungsräumung', 'Apartment Clearance'), 
      image: '/service/Apartment.jpeg',
      desc: t('Fachgerechte Pack- und Räumarbeiten bei Wohnungswechsel oder Wohnungsauflösung.', 'Professional packing and clearing during move or apartment dissolution.')
    },
    { 
      icon: 'inventory', 
      title: t('Kellerräumung', 'Basement Clearance'), 
      image: '/service/basement.jpeg',
      desc: t('Wir schaffen Platz in Ihrem Keller. Zuverlässige Räumung und Entsorgung.', 'We make room in your basement. Reliable clearing and disposal.')
    },
    { 
      icon: 'architecture', 
      title: t('Estrichräumung', 'Attic Clearance'), 
      image: '/service/attic.jpeg',
      desc: t('Professionelle Entrümpelung Ihres Estrichs – effizient und diskret.', 'Professional decluttering of your attic – efficient and discrete.')
    },
    { 
      icon: 'garage', 
      title: t('Garagenräumung', 'Garage Clearance'), 
      image: '/service/gargage.jpeg',
      desc: t('Komplette Leerung und Reinigung Ihrer Garage für neue Projekte.', 'Complete clearing and cleaning of your garage for new projects.')
    },
  ];

  return (
    <section className="bg-slate-50 py-12 md:py-20 px-4 md:px-8" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            {t('Unsere Kompetenzen', 'Our Expertise')}
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tighter">
            {t('PROFESSIONELLE', 'PROFESSIONAL')} <span className="text-secondary">{t('SERVICES', 'SERVICES')}</span>
          </h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {mainServices.map((service, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="material-symbols-outlined text-3xl mb-1">{service.icon}</span>
                  <h3 className="font-headline text-lg font-black uppercase tracking-tight">{service.title}</h3>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <p className="text-slate-500 font-medium mb-4 text-sm line-clamp-2">{service.desc}</p>
                <div className="mt-auto">
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-3 opacity-40">{t('Leistungen inkl.', 'Includes')}</h4>
                    <ul className="space-y-2">
                        {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-3 text-slate-700 font-bold text-[13px]">
                                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-End All-New Clearances Section */}
        <div className="mt-32">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-4">{t('Spezialaufgaben', 'Specialized Tasks')}</span>
            <h4 className="font-headline text-4xl md:text-5xl font-black text-primary uppercase tracking-tight">
                {t('RÄUMUNGEN &', 'CLEARANCES &')} <span className="text-secondary">{t('ENTSORGUNG', 'DISPOSAL')}</span>
            </h4>
            <div className="h-1 w-20 bg-primary mt-6"></div>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {additionalServices.map((service, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-0 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500 md:h-[450px] ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Image Section - Large & Clear */}
                <div className="w-full md:w-3/5 h-64 md:h-full overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                
                {/* Content Section - Clean & Boutique */}
                <div className="w-full md:w-2/5 p-8 md:p-12 bg-white flex flex-col justify-center items-start text-left h-full">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm border border-slate-100">
                      <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">{service.icon}</span>
                    </div>
                    <h3 className="font-headline text-2xl font-black text-primary uppercase tracking-tight leading-none mb-4">
                        {service.title}
                    </h3>
                    <div className="h-1 w-8 bg-secondary rounded-full mb-6"></div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        {service.desc}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
