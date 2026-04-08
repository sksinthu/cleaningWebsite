import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const Achievements = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-primary">
      {/* Vibrant Background Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-16 uppercase tracking-tighter opacity-90">
             {t('Unsere Erfolgsgeschichte in Zahlen', 'Our Success in Numbers')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Card 1 */}
          <div className="group relative flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-pull-full rounded-2xl flex items-center justify-center mb-6 border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary text-white">
              <span className="material-symbols-outlined text-4xl">schedule</span>
            </div>
            <span className="font-headline text-5xl md:text-6xl font-black text-white tracking-tighter mb-2 drop-shadow-lg">
              <Counter end={15} suffix="+" />
            </span>
            <span className="font-bold text-white/70 uppercase tracking-widest text-xs">{t('Jahre Erfahrung', 'Years of Experience')}</span>
          </div>

          {/* Card 2 */}
          <div className="group relative flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary text-white">
              <span className="material-symbols-outlined text-4xl">home</span>
            </div>
            <span className="font-headline text-5xl md:text-6xl font-black text-white tracking-tighter mb-2 drop-shadow-lg">
              <Counter end={10} suffix="k+" />
            </span>
            <span className="font-bold text-white/70 uppercase tracking-widest text-xs">{t('Gereinigte Objekte', 'Homes & Offices Cleaned')}</span>
          </div>

          {/* Card 3 */}
          <div className="group relative flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary text-white">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <span className="font-headline text-5xl md:text-6xl font-black text-white tracking-tighter mb-2 drop-shadow-lg">
              <Counter end={99} suffix="%" />
            </span>
            <span className="font-bold text-white/70 uppercase tracking-widest text-xs">{t('Kundenzufriedenheit', 'Client Satisfaction')}</span>
          </div>

          {/* Card 4 */}
          <div className="group relative flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary text-white">
              <span className="material-symbols-outlined text-4xl">groups</span>
            </div>
            <span className="font-headline text-5xl md:text-6xl font-black text-white tracking-tighter mb-2 drop-shadow-lg">
              <Counter end={4} />
            </span>
            <span className="font-bold text-white/70 uppercase tracking-widest text-xs">{t('Professionelles Personal', 'Professional Staff')}</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
