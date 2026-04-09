import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import { useLanguage } from '../LanguageContext';

const ContactPage = () => {
    const { t } = useLanguage();

    useEffect(() => {
        // Automatically scroll to the contact form after a short delay
        const timer = setTimeout(() => {
            const contactSection = document.getElementById('kontakt');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Small delay to ensure rendering is complete
        return () => clearTimeout(timer);
    }, []);

    return (
       <div className="pt-0 min-h-screen flex flex-col">
            {/* High-End Header Section - Restored */}
            <div className="bg-primary relative overflow-hidden pt-32 md:pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a192f]"></div>
                
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                   <div className="text-left">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-black/20">
                        <span className="material-symbols-outlined text-[14px]">mail</span>
                        {t('Sagen Sie Hallo', 'Get In Touch')}
                      </span>
                      <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.95]">
                        {t('KONTAKT', 'CONTACT')} <br />
                        <span className="text-secondary-fixed decoration-secondary underline decoration-8 underline-offset-8">{t('AUFNEHMEN', 'US TODAY')}</span>
                      </h1>
                      <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                        {t('Haben Sie Fragen oder möchten Sie direkt eine Buchung vornehmen? Unser Team steht Ihnen jederzeit zur Verfügung, um Ihnen die perfekte Reinigungslösung zu bieten.', 'Do you have questions or want to make a booking directly? Our team is always available to provide you with the perfect cleaning solution.')}
                      </p>
                      
                      {/* TikTok Button Restored */}
                      <div className="mt-10">
                        <a 
                          href="https://www.tiktok.com/@pk.top.clean?_r=1&_t=ZS-95MlYnWHUgB" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl group"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.02 1.4-.43 2.82-1.32 3.91-.95 1.25-2.45 2.01-4 2.15-1.54.14-3.15-.17-4.48-1.01-1.35-.85-2.31-2.28-2.61-3.83-.43-2.07.28-4.32 1.83-5.71 1.4-1.27 3.39-1.74 5.25-1.31v4.21c-.81-.24-1.72-.11-2.42.34-.73.45-1.16 1.34-1.16 2.19 0 1.25 1.05 2.3 2.35 2.3 1.21 0 2.23-.91 2.35-2.05.04-3.66.02-7.32.02-10.99 0-2.31 0-4.61.01-6.92Z"/>
                          </svg>
                          {t('TikTok Ergebnisse', 'TikTok Results')}
                        </a>
                      </div>
                   </div>

                   <div className="relative hidden lg:block">
                      <div className="relative rounded-[40px] overflow-hidden border-[10px] border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 aspect-video">
                         <img 
                           src="/contact.avif" 
                           alt="Contact Us" 
                           className="w-full h-full object-cover"
                         />
                      </div>
                      <div className="absolute bottom-6 right-6 bg-white py-3 px-6 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-slate-100">
                         <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                         <span className="text-slate-600 font-bold text-sm tracking-tight">{t('Wir sind online', 'We are online')}</span>
                      </div>
                   </div>
                </div>
            </div>
            
            <div className="flex-1 py-12 md:py-24 bg-slate-50">
                <Contact />
            </div>
       </div>
    );
};

export default ContactPage;
