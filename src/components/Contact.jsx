import React from 'react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low" id="kontakt">
      <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">

        {/* Contact Info Side */}
        <div className="p-8 md:p-12 md:w-2/5 bg-primary text-white">
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-6 md:mb-8">{t('Kontaktieren Sie uns', 'Contact Us')}</h2>
          <p className="text-white/80 mb-8 md:mb-12">{t('Haben Sie Fragen oder möchten Sie direkt buchen? Unser Team steht Ihnen gerne zur Verfügung.', 'Do you have questions or would you like to book directly? Our team is happy to assist you.')}</p>

          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary-container">location_on</span>
              <div>
                <div className="text-sm text-white/60">{t('Adresse', 'Address')}</div>
                <div className="font-bold text-lg">Kohlenweg 12, 3097 Liebefeld</div>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary-container">phone</span>
              <div>
                <div className="text-sm text-white/60">{t('Telefon', 'Phone')}</div>
                <div className="font-bold text-lg">079 781 14 00</div>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary-container">mail</span>
              <div>
                <div className="text-sm text-white/60">{t('E-Mail', 'Email')}</div>
                <div className="font-bold">pktopclean99@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="p-8 md:p-12 md:w-3/5">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{t('Name', 'Name')}</label>
                <input
                  className="w-full bg-surface px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-primary transition-all outline-none"
                  placeholder={t('Ihr Vorname', 'Your First Name')}
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{t('Email', 'Email')}</label>
                <input
                  className="w-full bg-surface px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-primary transition-all outline-none"
                  placeholder={t('ihre@mail.ch', 'your@mail.ch')}
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{t('Nachricht', 'Message')}</label>
              <textarea
                className="w-full bg-surface px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-primary transition-all outline-none"
                placeholder={t('Wie können wir Ihnen helfen?', 'How can we help you?')}
                rows="4"
              ></textarea>
            </div>
            <button
              className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:bg-on-secondary-container transition-all editorial-shadow"
              type="submit"
            >
              {t('Absenden', 'Submit')}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
