import React from 'react';
import { useLanguage } from '../LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: 'verified',
      title: t('Abnahmegarantie', '100% Satisfaction Guarantee'),
      desc: t('Stressfreie Wohnungsübergabe dank unserer garantierten Reinigungsstandards.', 'Stress-free apartment handover thanks to our guaranteed cleaning standards.'),
      img: '/Whychoose-us/photo-1527515637462-cff94eecc1ac.avif'
    },
    {
      icon: 'eco',
      title: t('Umweltfreundlich', 'Eco-Friendly Products'),
      desc: t('Wir verwenden nachhaltige, biologisch abbaubare Produkte für Ihre Gesundheit.', 'We use sustainable, biodegradable products for your health.'),
      img: '/Whychoose-us/photo-1610557892470-55d9e80c0bce.avif'
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
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low relative overflow-hidden" id="warum-wir">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-primary rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 inline-flex items-center gap-1 border border-secondary/20"><span className="material-symbols-outlined text-[14px]">star</span> {t('Warum SwissClean?', 'Why SwissClean?')}</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">{t('Qualität, der Sie vertrauen können', 'Quality You Can Trust')}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">{t('Wir setzen auf Zuverlässigkeit, Präzision und nachhaltige Sauberkeit in jedem Detail.', 'We focus on reliability, precision, and sustainable cleanliness in every detail.')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-surface-container-lowest rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-outline-variant/20 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="h-48 w-full relative overflow-hidden">
                <img src={reason.img} alt={reason.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-6 w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{reason.icon}</span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col items-start bg-surface-container-lowest">
                <h3 className="font-headline text-xl font-bold text-primary mb-3 mt-1">{reason.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
