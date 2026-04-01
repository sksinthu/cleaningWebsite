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
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        
        {/* Card 1 */}
        <div className="group relative bg-surface-container-lowest p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col gap-6 overflow-hidden border border-outline-variant/20">
          <div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
            <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
          </div>
          <div className="flex flex-col gap-1 relative z-10">
            <span className="font-headline text-4xl font-extrabold text-primary tracking-tighter">
              <Counter end={15} suffix="+" />
            </span>
            <span className="font-label text-sm font-semibold text-on-surface-variant uppercase tracking-wider">{t('Jahre Erfahrung', 'Years of Experience')}</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-surface-container-lowest p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col gap-6 overflow-hidden border border-outline-variant/20">
          <div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
            <span className="material-symbols-outlined text-primary text-3xl">home</span>
          </div>
          <div className="flex flex-col gap-1 relative z-10">
            <span className="font-headline text-4xl font-extrabold text-primary tracking-tighter">
              <Counter end={10} suffix="k+" />
            </span>
            <span className="font-label text-sm font-semibold text-on-surface-variant uppercase tracking-wider">{t('Gereinigte Objekte', 'Homes & Offices Cleaned')}</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </div>

        {/* Card 3 */}
        <div className="group relative bg-surface-container-lowest p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col gap-6 overflow-hidden border border-outline-variant/20">
          <div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <div className="flex flex-col gap-1 relative z-10">
            <span className="font-headline text-4xl font-extrabold text-primary tracking-tighter">
              <Counter end={99} suffix="%" />
            </span>
            <span className="font-label text-sm font-semibold text-on-surface-variant uppercase tracking-wider">{t('Kundenzufriedenheit', 'Client Satisfaction')}</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </div>

        {/* Card 4 */}
        <div className="group relative bg-surface-container-lowest p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col gap-6 overflow-hidden border border-outline-variant/20">
          <div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
            <span className="material-symbols-outlined text-primary text-3xl">groups</span>
          </div>
          <div className="flex flex-col gap-1 relative z-10">
            <span className="font-headline text-4xl font-extrabold text-primary tracking-tighter">
              <Counter end={12} suffix="+" />
            </span>
            <span className="font-label text-sm font-semibold text-on-surface-variant uppercase tracking-wider">{t('Reinigungsexperten', 'Trained Cleaning Experts')}</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
