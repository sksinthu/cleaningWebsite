import React from 'react';
import { useLanguage } from '../LanguageContext';

const Terms = () => {
    const { t } = useLanguage();

    const sections = [
        {
            icon: 'assignment',
            title: t('1. Geltungsbereich', '1. Scope'),
            content: t('Für die Geschäftsbeziehung zwischen SwissClean und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.', 'For the business relationship between SwissClean and the customer, the following General Terms and Conditions apply exclusively in the version valid at the time of the order.')
        },
        {
            icon: 'handyman',
            title: t('2. Leistungen', '2. Services'),
            content: t('SwissClean erbringt Dienstleistungen im Bereich der Gebäude- und Spezialreinigung. Der genaue Umfang der Leistungen ergibt sich aus dem jeweiligen Angebot oder der Auftragsbestätigung.', 'SwissClean provides services in the field of building and special cleaning. The exact scope of the services results from the respective offer or order confirmation.')
        },
        {
            icon: 'payments',
            title: t('3. Preise und Zahlungsbedingungen', '3. Prices and terms of payment'),
            content: t('Es gelten die zum Zeitpunkt des Vertragsschlusses vereinbarten Preise. Sofern nicht anders vereinbart, sind Rechnungen innerhalb von 10 Tagen nach Erbringung der Dienstleistung ohne Abzug zur Zahlung fällig.', 'The prices agreed at the time of the conclusion of the contract apply. Unless otherwise agreed, invoices are due for payment within 10 days after the provision of the service without deduction.')
        },
        {
            icon: 'verified',
            title: t('4. Haftung', '4. Liability'),
            content: t('SwissClean haftet für Schäden, die nachweislich durch ihre Mitarbeiter bei der Ausführung der Reinigungsarbeiten verursacht wurden. Eine Haftung für Mangelfolgeschäden ist ausgeschlossen.', 'SwissClean is liable for damages demonstrably caused by its employees during the execution of cleaning work. Liability for consequential damages is excluded.')
        },
        {
            icon: 'apartment',
            title: t('5. Gerichtsstand und Recht', '5. Place of Jurisdiction & Law'),
            content: t('Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Bern, Schweiz. Es gilt ausschließlich schweizerisches Recht unter Ausschluss des UN-Kaufrechts.', 'Place of jurisdiction for all disputes arising from this contract is Bern, Switzerland. Swiss law applies exclusively, following the exclusion of the UN Sales Law.')
        }
    ];

    return (
        <div className="pt-0 min-h-screen bg-slate-50">
            {/* High-End Split-Screen Header */}
            <div className="bg-primary relative overflow-hidden pt-12 md:pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a192f]"></div>
                
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28 relative z-10 grid lg:grid-cols-2 gap-12 items-center text-left">
                   <div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-black/20">
                        <span className="material-symbols-outlined text-[14px]">gavel</span>
                        {t('Rechtliches', 'Legal')}
                      </span>
                      <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.95]">
                        {t('AGB &', 'TERMS &')} <br />
                        <span className="text-secondary-fixed decoration-secondary underline decoration-8 underline-offset-8">{t('BEDINGUNGEN', 'CONDITIONS')}</span>
                      </h1>
                      <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                        {t('Hier finden Sie unsere allgemeinen Geschäftsbedingungen für eine faire und transparente Zusammenarbeit.', 'Here you will find our general terms and conditions for a fair and transparent cooperation.')}
                      </p>
                   </div>

                   <div className="relative hidden lg:block">
                      <div className="relative rounded-[40px] overflow-hidden border-[10px] border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 aspect-video bg-slate-800">
                         <img 
                           src="/privacy/term.jpeg" 
                           alt="Terms and Conditions" 
                           className="w-full h-full object-cover"
                         />
                      </div>
                   </div>
                </div>
            </div>

            {/* Content Cards */}
            <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-8">
                {sections.map((section, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 hover:shadow-2xl transition-all group hover:-translate-y-1"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 shrink-0">
                                <span className="material-symbols-outlined text-4xl">{section.icon}</span>
                            </div>
                            <div>
                                <h2 className="font-headline text-2xl md:text-3xl font-black text-primary mb-6 uppercase tracking-tight">
                                    {section.title}
                                </h2>
                                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Terms;
