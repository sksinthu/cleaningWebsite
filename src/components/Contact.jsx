import React from 'react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden" id="kontakt">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto bg-primary text-white rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(10,25,47,0.1)] relative z-10 border border-white/5">
        
        {/* Contact Info Side */}
        <div className="p-12 md:p-20 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase leading-none">
                {t('KONTAKT', 'CONTACT')} <br />
                <span className="text-secondary">{t('AUFNEHMEN', 'US')}</span>
            </h2>
            <p className="text-white/70 mb-16 font-medium text-lg leading-relaxed">{t('Haben Sie Fragen oder möchten Sie direkt buchen? Unser Team steht Ihnen gerne zur Verfügung.', 'Do you have questions or would you like to book directly? Our team is happy to assist you.')}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center gap-6 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">{t('Adresse', 'Address')}</div>
                  <div className="font-bold text-lg leading-tight uppercase tracking-tight">Kohlenweg 12<br/>3097 Liebefeld</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-6 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">phone</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">{t('Telefon', 'Phone')}</div>
                  <div className="font-bold text-xl leading-tight">079 781 14 00</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">{t('E-Mail', 'Email')}</div>
                  <div className="font-bold text-lg break-all tracking-tight">pktopclean99@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-white/10">
                <a 
                  href="tel:0797811400"
                  className="inline-flex items-center gap-4 bg-secondary text-white px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all"
                >
                    {t('Jetzt anrufen', 'Call Now')}
                    <span className="material-symbols-outlined text-[16px]">phone_enabled</span>
                </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
