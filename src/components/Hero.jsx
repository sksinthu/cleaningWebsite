import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    "/herosection-images/unnamed.png",
    "/herosection-images/anton-y-bjqTUUw2Q-unsplash.jpg",
    "/herosection-images/giorgio-trovato-5TXz228u4eo-unsplash.jpg",
    "/herosection-images/puroclean-of-fort-worth--dc38HdQR1M-unsplash.jpg",
    "/herosection-images/toon-lambrechts-0FTI9ceTUOc-unsplash.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
        <div className="relative z-0 animate-float w-full aspect-square rounded-3xl shadow-2xl overflow-hidden bg-surface-variant">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10"></div>
          
          {images.map((src, index) => (
             <img 
               key={index}
               alt={t('Professionelle Reinigungskraft', 'Professional Cleaner')}
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
               src={src}
             />
          ))}
          
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
             {images.map((_, index) => (
               <div 
                 key={index} 
                 onClick={() => setCurrentImg(index)}
                 className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 shadow-sm ${index === currentImg ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
               />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
