import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation of success for UI purposes
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-sky-50 relative overflow-hidden" id="kontakt">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(10,25,47,0.12)] border border-slate-100 flex flex-col md:flex-row relative z-10">
 {/* Contact Form Side */}
        <div className="p-10 md:p-16 md:w-3/5 bg-white md:border-r border-slate-100">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-12">
               <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <span className="material-symbols-outlined text-5xl">check_circle</span>
               </div>
               <h3 className="font-headline text-3xl font-black text-primary mb-4 uppercase tracking-tighter">{t('Vielen Dank!', 'Thank You!')}</h3>
               <p className="text-slate-500 font-medium mb-10 max-w-sm">{t('Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.', 'Your message has been successfully sent. We will get back to you as soon as possible.')}</p>
               <button 
                 onClick={() => setSubmitted(false)}
                 className="px-8 py-3 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
               >
                 {t('Neue Nachricht', 'New Message')}
               </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary ml-1">{t('Name', 'Name')}</label>
                  <input
                    required
                    className="w-full bg-white px-6 py-4 rounded-2xl border border-slate-200 ring-0 focus:ring-1 focus:ring-secondary transition-all outline-none font-medium placeholder:text-slate-300"
                    placeholder={t('Ihr Vorname', 'Your Name')}
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-secondary ml-1">{t('Email', 'Email')}</label>
                  <input
                    required
                    className="w-full bg-white px-6 py-4 rounded-2xl border border-slate-200 ring-0 focus:ring-1 focus:ring-secondary transition-all outline-none font-medium placeholder:text-slate-300"
                    placeholder={t('ihre@mail.ch', 'your@mail.ch')}
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary ml-1">{t('Nachricht', 'Message')}</label>
                <textarea
                  required
                  className="w-full bg-white px-6 py-4 rounded-2xl border border-slate-200 ring-0 focus:ring-1 focus:ring-secondary transition-all outline-none font-medium placeholder:text-slate-300 min-h-[160px] resize-none"
                  placeholder={t('Wie können wir Ihnen helfen?', 'How can we help you?')}
                  rows="5"
                ></textarea>
              </div>

              <button
                className="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] bg-secondary text-white shadow-2xl transition-all active:scale-95 hover:shadow-secondary/20 hover:-translate-y-1 flex items-center justify-center gap-4"
                type="submit"
              >
                {t('Senden', 'Send Message')}
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
            </form>
          )}
        </div>
        {/* Contact Info Side */}
        <div className="p-10 md:p-16 md:w-2/5 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>

          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase leading-none">
                {t('KONTAKT', 'CONTACT')} <br />
                <span className="text-secondary">{t('AUFNEHMEN', 'US')}</span>
            </h2>
            <p className="text-white/70 mb-12 font-medium leading-relaxed">{t('Haben Sie Fragen oder möchten Sie direkt buchen? Unser Team steht Ihnen gerne zur Verfügung.', 'Do you have questions or would you like to book directly? Our team is happy to assist you.')}</p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{t('Adresse', 'Address')}</div>
                  <div className="font-bold text-lg leading-tight">Kohlenweg 12<br/>3097 Liebefeld</div>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    <span className="material-symbols-outlined">phone</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{t('Telefon', 'Phone')}</div>
                  <div className="font-bold text-lg leading-tight">079 781 14 00</div>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{t('E-Mail', 'Email')}</div>
                  <div className="font-bold text-lg break-all">pktopclean99@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
};

export default Contact;
