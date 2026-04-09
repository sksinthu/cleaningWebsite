import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const ServiceCard = ({ service, t }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
      <div className="h-64 relative overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-6 text-white">
          <span className="material-symbols-outlined text-3xl mb-1">{service.icon}</span>
          <h3 className="font-headline text-lg font-black uppercase tracking-tight">{service.title}</h3>
        </div>
      </div>
      <div className="p-7 pb-24 flex-1 flex flex-col">
        <div className="relative mb-4">
          <p className={`text-slate-500 font-medium text-sm transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
            {service.desc}
          </p>
          <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-secondary font-black text-lg hover:scale-110 transition-transform mt-1 flex items-center gap-1"
              title={isExpanded ? t('Weniger anzeigen', 'Show Less') : t('Mehr anzeigen', 'Read More')}
          >
              <span className="material-symbols-outlined text-2xl">
                  {isExpanded ? 'more_horiz' : 'more_horiz'}
              </span>
          </button>
        </div>
        
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

      {/* Book Now Button - Bottom Right */}
      <div className="absolute bottom-6 right-6">
          <Link to="/contact" className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-primary/20 flex items-center gap-2 group/btn">
             {t('JETZT BUCHEN', 'BOOK NOW')}
             <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward_ios</span>
          </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
   { 
      icon: 'task_alt', 
      title: t('Endreinigung ', 'Final Cleaning '), 
desc: t(
  'Wir bieten professionelle Endreinigung für Wohnungsabgaben, damit Ihre Immobilie makellos und bereit zur Übergabe ist. Unser Service umfasst die gründliche Reinigung aller Räume, Küche, Badezimmer, Fenster, Böden sowie die vollständige Staubentfernung.\n\nWir verwenden professionelle Geräte und umweltfreundliche Produkte nach Schweizer Standards, damit Sie Ihre Kaution stressfrei und pünktlich zurückerhalten.',
  'We provide professional end of tenancy cleaning to make your property spotless and ready for handover. Our service covers deep cleaning of all rooms, kitchen, bathroom, windows, floors, and complete dust removal.\n\nWe use professional equipment and eco-friendly products to meet Swiss standards and help you secure your full deposit—stress-free and on time.'
),      image: '/service/moveout.jpeg',
      features: [
        t('Tiefenreinigung aller Räume', 'Deep cleaning of all rooms'),
        t('Küchen- & Bad-Spezialreinigung', 'Kitchen & Bathroom Special Cleaning'),
        t('Schweizer Abgabestandards', 'Swiss handover standards'),
        t('Depotgarantie-Sicherheit', 'Deposit security')
      ]
    }, { 
      icon: 'living', 
      title: t('Regelmäßige Wohnungsreinigung', 'Regular Apartment Cleaning'), 
      desc: t('Regelmässige Reinigung für Ihr Wohlbefinden zu Hause.', 'Regular cleaning for your well-being at home.'), 
      image: '/service/home.jpeg',
      features: [
        t('Bodenreinigung', 'Floor cleaning'),
        t('Küchenreinigung', 'Kitchen cleaning'),
        t('Badezimmerreinigung', 'Bathroom cleaning'),
        t('Staubwischen', 'Wipe the dust')
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
    }, { 
      icon: 'home_work', 
      title: t('Hauswartung & Reinigung', 'Facility Management & Cleaning'), 
      desc: t('Umfassende Pflege Ihrer Liegenschaft für langfristigen Werterhalt und ein gepflegtes Erscheinungsbild.', 'Comprehensive care of your property for long-term value retention and a well-kept appearance.'), 
      image: '/service/facility.jpeg',
      features: [
        t('Liegenschaftspflege', 'Property Maintenance'),
        t('Treppenhausreinigung', 'Staircase Cleaning'),
        t('Umgebungspflege', 'Exterior Maintenance')
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
      desc: t('Wir schafffen Platz in Ihrem Keller. Zuverlässige Räumung und Entsorgung.', 'We make room in your basement. Reliable clearing and disposal.')
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
      image: '/service/garage.jpeg',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 max-w-6xl mx-auto">
          {mainServices.map((service, idx) => (
            <ServiceCard key={idx} service={service} t={t} />
          ))}
        </div>

        {/* High-End All-New Clearances Section */}
        <div className="mt-32">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-4">{t('Spezialaufgaben', 'Specialized Tasks')}</span>
            <h4 className="font-headline text-4xl md:text-5xl font-black text-primary uppercase tracking-tight">
                {t('RÄUMUNGEN &', 'CLEARANCES &')} <span className="text-secondary">{t('ENTSORGUNG', 'DISPOSAL')}</span>
            </h4>
            <div className="h-1 w-20 bg-primary mt-6"></div>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {additionalServices.map((service, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-0 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500 md:h-[400px] relative ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Image Section - Large & Clear */}
                <div className="w-full md:w-3/5 h-64 md:h-full overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                
                {/* Content Section - Clean & Boutique */}
                <div className="w-full md:w-2/5 p-8 md:p-12 bg-white flex flex-col justify-center items-start text-left h-full pb-28 md:pb-12">
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

                    {/* Book Now for Clearances (Bottom Right of content on md, or bottom right of card on mobile) */}
                    <div className="absolute bottom-6 left-8 md:static mt-8">
                        <Link to="/contact" className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-primary/20 flex items-center gap-2 group/btn">
                            {t('JETZT BUCHEN', 'BOOK NOW')}
                            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward_ios</span>
                        </Link>
                    </div>
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
