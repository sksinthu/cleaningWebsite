import React from 'react';
import { useLanguage } from '../LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    { src: '/gallery/1000167239.jpg', alt: 'Cleaning Service 1' },
    { src: '/gallery/1000167245.jpg', alt: 'Cleaning Service 2' },
    { src: '/gallery/1000167249.png', alt: 'Cleaning Service 3' },
    { src: '/gallery/1000167253.png', alt: 'Cleaning Service 4' },
    { src: '/gallery/1000167255.png', alt: 'Cleaning Service 5' },
    { src: '/gallery/1000167257.png', alt: 'Cleaning Service 6' },
  ];

  return (
    <section className="py-20 md:py-32 bg-white" id="galerie">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4 inline-block">{t('Unsere Einblicke', 'Our Insights')}</span>
          <h2 className="font-headline text-3xl md:text-5xl font-black text-primary mb-6 uppercase tracking-tighter">
            {t('GALERIE UNSERER ARBEIT', 'GALLERY OF OUR WORK')}
          </h2>
          <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[4/3] shadow-xl border-4 border-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                  <span className="material-symbols-outlined text-3xl">zoom_in</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
