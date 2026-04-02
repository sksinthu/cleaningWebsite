import React from 'react';
import Contact from '../components/Contact';
import { useLanguage } from '../LanguageContext';

const ContactPage = () => {
    const { t } = useLanguage();
    return (
       <div className="pt-0 min-h-screen flex flex-col">
            {/* High-End Split-Screen Header */}
            <div className="bg-primary relative overflow-hidden pt-12 md:pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a192f]"></div>
                
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
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
