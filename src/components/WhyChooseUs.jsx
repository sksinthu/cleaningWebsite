import React from 'react';
import { useLanguage } from '../LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: 'verified',
      title: t('Abnahmegarantie', '100% Satisfaction Guarantee'),
      desc: t('Stressfreie Wohnungsübergabe dank unserer garantierten Reinigungsstandards.', 'Stress-free apartment handover thanks to our guaranteed cleaning standards.'),
      img: '/Whychoose-us/photo-1527515637462-cff94eecc1ac.png'
    },
    {
      icon: 'eco',
      title: t('Umweltfreundlich', 'Eco-Friendly Products'),
      desc: t('Wir verwenden nachhaltige, biologisch abbaubare Produkte für Ihre Gesundheit.', 'We use sustainable, biodegradable products for your health.'),
      img: '/Whychoose-us/photo-1610557892470-55d9e80c0bce.png'
    },
    {
      icon: 'security',
      title: t('Versichert & Geprüft', 'Fully Insured & Vetted'),
      desc: t('Unser Personal ist fest angestellt, geschult und selbstverständlich voll versichert.', 'Our staff is permanently employed, trained, and fully insured.'),
      img: '/Whychoose-us/photo-1584622650111-993a426fbf0a.avif'
    },
    {
      icon: 'price_check',
      title: t('Transparente Preise', 'Transparent Pricing'),
      desc: t('Keine versteckten Kosten. Sie zahlen nur das, was wir vorher schriftlich vereinbart haben.', 'No hidden costs. You only pay what we agreed upon in writing beforehand.'),
      img: '/Whychoose-us/photo-1554224155-8d04cb21cd6c.avif'
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-slate-50 relative overflow-hidden" id="warum-wir">
      {/* Dynamic Color Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-primary/20 border border-white/10">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            {t('Warum SwissClean?', 'Why SwissClean?')}
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
            {t('Qualität, der Sie vertrauen können', 'Quality You Can Trust')}
          </h2>
          <div className="h-2 w-24 bg-secondary mx-auto rounded-full mb-8 shadow-lg"></div>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            {t('Wir setzen auf Zuverlässigkeit, Präzision und nachhaltige Sauberkeit in jedem Detail. Ihr Partner für erstklassige Resultate.', 'We focus on reliability, precision, and sustainable cleanliness in every detail. Your partner for first-class results.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(10,25,47,0.05)] border border-slate-100 flex flex-col overflow-hidden hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(10,25,47,0.12)] transition-all duration-500 group">
              <div className="h-56 w-full relative overflow-hidden">
                <img src={reason.img} alt={reason.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-8 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center translate-y-3 group-hover:translate-y-0 transition-all duration-500 animate-float">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{reason.icon}</span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col items-start">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">{reason.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
