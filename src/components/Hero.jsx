import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    "/herosection-images/unnamed.png",
    "/herosection-images/anton-y-bjqTUUw2Q-unsplash.png",
    "/herosection-images/giorgio-trovato-5TXz228u4eo-unsplash.png",
    "/herosection-images/puroclean-of-fort-worth--dc38HdQR1M-unsplash.png",
    "/herosection-images/toon-lambrechts-0FTI9ceTUOc-unsplash.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 bg-[#0a192f]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in shadow-xl">
            <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-ping"></span>
            <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">{t('Premium Reinigung Schweiz', 'Premium Cleaning Switzerland')}</span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.05] mb-8 drop-shadow-2xl">
            {t('Schweizer Präzision', 'Swiss Precision')} <br />
            <span className="text-secondary inline-block hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">
              {t('in jeder Reinigung', 'in Every Cleaning')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t('Vertrauen, Zuverlässigkeit und erstklassiger Service. Wir sorgen für strahlende Sauberkeit in Ihrem Zuhause oder Büro – schnell und umweltfreundlich.', 'Trust, reliability, and first-class service. We ensure radiant cleanliness in your home or office – fast and eco-friendly.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link to="/contact" className="group relative px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:scale-110 transition-all shadow-2xl shadow-primary/40 active:scale-95 flex items-center justify-center overflow-hidden">
               <span className="relative z-10">{t('Jetzt buchen', 'Book Now')}</span>
               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Link>
            <Link to="/services" className="px-10 py-5 bg-white/10 text-white backdrop-blur-lg border border-white/20 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center">
              {t('Angebot erhalten', 'Get a Quote')}
            </Link>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-secondary/20 rounded-[40px] blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-700 animate-pulse pointer-events-none"></div>
          
          <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white/10 backdrop-blur-sm animate-float bg-slate-800">
            {images.map((src, index) => (
               <img 
                 key={index}
                 alt={t('Professionelle Reinigung', 'Professional Cleaning')}
                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} 
                 src={src}
               />
            ))}
            
            {/* Visual Progress Dots */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
               {images.map((_, index) => (
                 <div 
                   key={index} 
                   onClick={() => setCurrentImg(index)}
                   className={`h-2 rounded-full cursor-pointer transition-all duration-500 shadow-lg ${index === currentImg ? 'w-10 bg-secondary' : 'w-2 bg-white/40 hover:bg-white/80'}`}
                 />
               ))}
            </div>
          </div>
          
          {/* Experience Badge */}
          <div className="absolute -top-10 -left-10 bg-white p-6 rounded-[32px] shadow-2xl border border-slate-100 animate-float hidden lg:block">
            <div className="text-center">
              <p className="text-4xl font-black text-primary leading-tight">15+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('Jahre Erfahrung', 'Years Experience')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
