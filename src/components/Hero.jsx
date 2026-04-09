import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);

  const heroImages = [
    '/herosection-images/anton-y-bjqTUUw2Q-unsplash.png',
    '/herosection-images/giorgio-trovato-5TXz228u4eo-unsplash.png',
    '/herosection-images/puroclean-of-fort-worth--dc38HdQR1M-unsplash.png',
    '/herosection-images/unnamed.png',
    '/herosection-images/toon-lambrechts-0FTI9ceTUOc-unsplash.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[750px] lg:min-h-screen flex flex-col items-center lg:justify-center pt-32 lg:pt-42 pb-12 overflow-hidden bg-[#0a192f]">
      {/* Background with subtle gradient matching references */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1b33] via-[#0c2447] to-[#0a192f] -z-20"></div>
      
      {/* Decorative Blur and pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* --- MOBILE LAYOUT (lg:hidden) - Matching sample.jpg --- */}
        <div className="lg:hidden text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white/70 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2eb872]"></span>
                {t('PREMIUM CLEANING SWITZERLAND', 'PREMIUM CLEANING SWITZERLAND')}
            </span>

            <h2 className="font-headline text-[40px] font-black mb-8 leading-[1.1] tracking-tighter">
                <span className="text-white block">{t('Swiss Precision', 'Swiss Precision')}</span>
                <span className="text-[#2eb872] block">{t('in Every Cleaning', 'in Every Cleaning')}</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed font-medium max-w-sm mx-auto">
                {t('Trust, reliability, and first-class service. We ensure radiant cleanliness in your home or office – fast and eco-friendly.', 'Trust, reliability, and first-class service. We ensure radiant cleanliness in your home or office – fast and eco-friendly.')}
            </p>
            <div className="w-full flex flex-col gap-4 max-w-sm">
                <Link to="/contact" className="w-full bg-[#0062ff] text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-[#0062ff] transition-all shadow-2xl shadow-[#0062ff]/20 active:scale-95">
                    {t('Book Now', 'Book Now')}
                </Link>
                <Link to="/pricing" className="w-full bg-white/5 backdrop-blur-md text-white border border-white/20 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                    {t('Get a Quote', 'Get a Quote')}
                </Link>
            </div>
        </div>

        {/* --- DESKTOP LAYOUT (hidden lg:grid) - Matching oldherosection.png --- */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
            <div className="text-left">
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-white/70 mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#2eb872]"></span>
                    {t('PREMIUM CLEANING SWITZERLAND', 'PREMIUM CLEANING SWITZERLAND')}
                </span>
                
                <h2 className="font-headline text-7xl xl:text-8xl font-black mb-10 leading-[1.05] tracking-tighter">
                    <span className="text-white block">{t('Swiss Precision', 'Swiss Precision')}</span>
                    <span className="text-[#2eb872] block">{t('in Every Cleaning', 'in Every Cleaning')}</span>
                </h2>
                
                <p className="text-white/60 text-xl mb-12 leading-relaxed font-medium max-w-lg">
                    {t('Trust, reliability, and first-class service. We ensure radiant cleanliness in your home or office – fast and eco-friendly.', 'Trust, reliability, and first-class service. We ensure radiant cleanliness in your home or office – fast and eco-friendly.')}
                </p>
                
                <div className="flex items-center gap-6">
                    <Link to="/contact" className="bg-[#0062ff] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl shadow-[#0062ff]/20">
                        {t('Book Now', 'Book Now')}
                    </Link>
                    <Link to="/pricing" className="px-12 py-5 border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                        {t('Get a Quote', 'Get a Quote')}
                    </Link>
                </div>
            </div>

            <div className="relative h-[650px]">
                {/* Image Carousel matching oldherosection.png structure */}
                <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden border-[16px] border-white/5 shadow-2xl">
                    {heroImages.map((img, idx) => (
                        <div 
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIdx ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img 
                                src={img} 
                                alt={`Hero Slide ${idx}`} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
                </div>

                {/* Experience Badge matching oldherosection.png */}
                <div className="absolute -top-7 -left-12 bg-white p-6 rounded-[2.5rem] shadow-2xl z-20 flex flex-col items-center gap-1 border border-slate-100 animate-float translate-x-4 lg:translate-x-0">
                    <span className="text-[#0062ff] font-black text-5xl leading-none">5+</span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest text-center whitespace-nowrap">
                        {t('JAHRE ERFAHRUNG', 'YEARS EXPERIENCE')}
                    </span>
                </div>

                {/* Carousel Plate Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                    {heroImages.map((_, idx) => (
                        <div 
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-300 ${idx === currentIdx ? 'w-8 bg-[#2eb872]' : 'w-2 bg-white/30'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
