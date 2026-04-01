import React from 'react';
import { useLanguage } from '../LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  const prices = [
    { 
      title: t('1–1.5 Zimmer', '1–1.5 Rooms'), 
      price: '450 CHF', 
      features: [t('Inkl. Abgabegarantie', 'Incl. handover guarantee'), t('Professionelle Reinigungsmittel', 'Professional cleaning supplies')]
    },
    { 
      title: t('2–2.5 Zimmer', '2–2.5 Rooms'), 
      price: '550 CHF', 
      features: [t('Inkl. Abgabegarantie', 'Incl. handover guarantee'), t('Erfahrenes Reinigungsteam', 'Experienced cleaning team')]
    },
    { 
      title: t('3–3.5 Zimmer', '3–3.5 Rooms'), 
      price: '750 CHF', 
      features: [t('Inkl. Abgabegarantie', 'Incl. handover guarantee'), t('Komplette Fensterreinigung', 'Complete window cleaning')]
    },
    { 
      title: t('4–4.5 Zimmer', '4–4.5 Rooms'), 
      price: '950 CHF', 
      features: [t('Inkl. Abgabegarantie', 'Incl. handover guarantee'), t('Intensive Grundreinigung', 'Intensive deep cleaning')]
    },
    { 
      title: t('5–5.5 Zimmer', '5–5.5 Rooms'), 
      price: '1050–1250 CHF', 
      features: [t('Inkl. Abgabegarantie', 'Incl. handover guarantee'), t('Beliebte Option für Häuser', 'Popular choice for houses')]
    },
    { 
      title: t('6–6.5 Zimmer', '6–6.5 Rooms'), 
      price: '1250–1400 CHF', 
      features: [t('Inkl. Abgabegarantie', 'Incl. handover guarantee'), t('Individuelle Beratung vor Ort', 'Individual on-site consultation')]
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto" id="preise">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">{t('Transparente Preise', 'Transparent Pricing')}</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">{t('Wohnungsreinigungen mit Abgabegarantie zum fairen Pauschalpreis.', 'Apartment cleaning with handover guarantee at a fair flat rate.')}</p>
        <div className="md:hidden mt-4 text-xs font-bold text-secondary uppercase animate-pulse flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">swipe_left</span>
            Wischen für mehr
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible relative -mx-4 md:mx-0 px-4 md:px-0">
        {prices.map((plan, idx) => {
          return (
            <div key={idx} className="snap-center min-w-[85vw] md:min-w-0 group bg-surface-container-lowest hover:bg-primary p-8 rounded-3xl border border-outline-variant/10 hover:border-primary hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              {/* Hover highlight background flare */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 z-0"></div>
              
              <div className="relative z-10 w-full">
                <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors duration-300">{plan.title}</h3>
                <div className="text-3xl font-extrabold text-primary group-hover:text-white mb-4 transition-colors duration-300">{plan.price}</div>
                
                <div className="space-y-3 text-sm text-on-surface-variant mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 group-hover:text-white/90 transition-colors duration-300">
                      <span className="material-symbols-outlined text-secondary group-hover:text-white text-base transition-colors duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="group-hover:text-white/90 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-slate-100 group-hover:bg-white text-primary py-3 rounded-full font-bold text-sm hover:bg-slate-200 group-hover:hover:bg-surface-bright transition-colors duration-300 mt-auto relative z-10">
                {t('Jetzt anfragen', 'Request now')}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
