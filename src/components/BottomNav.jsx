import React, { useState, useEffect } from 'react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = ['home', 'services', 'pricing']; // Ensure 'book' ties to 'pricing'
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getTabClass = (tabName) => {
    return `flex flex-col items-center justify-center px-4 py-1 active:scale-90 transition-transform cursor-pointer ${
      activeTab === tabName || (activeTab === '' && tabName === 'home')
        ? 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-2xl'
        : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600'
    }`;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_-10px_30px_rgba(0,88,191,0.04)] z-50 rounded-t-3xl">
      <div onClick={() => window.scrollTo(0,0)} className={getTabClass('home')}>
        <span className="material-symbols-outlined">home</span>
        <span className="font-plus-jakarta text-[10px] font-medium">Home</span>
      </div>
      <a href="#services" className={getTabClass('services')}>
        <span className="material-symbols-outlined">cleaning_services</span>
        <span className="font-plus-jakarta text-[10px] font-medium">Services</span>
      </a>
      <a href="#pricing" className={getTabClass('pricing')}>
        <span className="material-symbols-outlined">calendar_today</span>
        <span className="font-plus-jakarta text-[10px] font-medium">Book</span>
      </a>
      <div className={getTabClass('account')}>
        <span className="material-symbols-outlined">person</span>
        <span className="font-plus-jakarta text-[10px] font-medium">Account</span>
      </div>
    </nav>
  );
};

export default BottomNav;
