import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const BottomNav = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { id: 'home', path: '/', icon: 'home', label: t('Home', 'Home') },
    { id: 'pricing', path: '/pricing', icon: 'payments', label: t('Preise', 'Pricing') },
    { id: 'gallery', path: '/gallery', icon: 'photo_library', label: t('Galerie', 'Gallery') },
    { id: 'contact', path: '/contact', icon: 'mail', label: t('Kontakt', 'Contact') },
    { id: 'services', path: '/whyus', icon: 'home_work', label: t('Warum wir', 'Why Us') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(30,58,138,0.15)] border border-slate-100 rounded-2xl flex justify-around items-center px-2 py-3 pb-safe">
      {navItems.map((item) => {
        const active = isActive(item.path);
        return (
          <Link
            key={item.id}
            to={item.path}
            className={`flex flex-col items-center justify-center w-16 gap-1 transition-all duration-300 ${
              active ? 'text-primary scale-110 translate-y-[-4px]' : 'text-slate-400'
            }`}
          >
            <span 
              className="material-symbols-outlined text-2xl" 
              style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className={`text-[10px] font-bold ${active ? 'opacity-100' : 'opacity-70'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
