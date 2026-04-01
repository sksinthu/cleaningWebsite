import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const BottomNav = () => {
  const [activeSegment, setActiveSegment] = useState('');
  const { t } = useLanguage();

  // Scrollspy logic for mobile bottom navigation focus
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'preise', 'winterdienst', 'einsatzgebiet', 'kontakt'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element crosses the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      
      if (window.scrollY < 100) {
          current = '';
      }
      
      setActiveSegment(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed Service Area icon due to mobile width limitations (max 4 icons usually fits best comfortably)
  const navItems = [
    { id: 'services', icon: 'home_work', label: t('Services', 'Services') },
    { id: 'preise', icon: 'payments', label: t('Preise', 'Pricing') },
    { id: 'winterdienst', icon: 'ac_unit', label: t('Winter', 'Winter') },
    { id: 'kontakt', icon: 'mail', label: t('Kontakt', 'Contact') }
  ];

  return (
    <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-200 rounded-2xl flex justify-around items-center px-2 py-3 pb-safe">
      {navItems.map((item) => {
        const isActive = activeSegment === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex flex-col items-center justify-center w-16 gap-1 transition-all ${
              isActive ? 'text-blue-600 scale-110 translate-y-[-4px]' : 'text-slate-500 hover:text-blue-600'
            }`}
          >
            <span 
              className="material-symbols-outlined text-2xl" 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className={`text-[10px] font-bold ${isActive ? 'opacity-100' : 'opacity-70'}`}>
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default BottomNav;
