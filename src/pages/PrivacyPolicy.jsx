import React from 'react';
import { useLanguage } from '../LanguageContext';

const PrivacyPolicy = () => {
    const { t } = useLanguage();

    const sections = [
        {
            icon: 'security',
            title: t('1. Überblick zum Datenschutz', '1. Data protection at a glance'),
            content: t('Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.', 'The following notes provide a simple overview of what happens to your personal data when you visit our website.')
        },
        {
            icon: 'account_circle',
            title: t('2. Datenerfassung auf unserer Website', '2. Data collection on our website'),
            content: t('Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.', 'Data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website. Your data is collected, on the one hand, by you communicating it to us. This could, for example, be data that you enter into a contact form.')
        },
        {
            icon: 'analytics',
            title: t('3. Analyse-Tools und Tools von Drittanbietern', '3. Analysis tools and tools from third-party providers'),
            content: t('Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Dies geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.', 'When visiting our website, your surfing behavior can be statistically evaluated. This happens primarily with cookies and with so-called analysis programs. The analysis of your surfing behavior is usually anonymous; the surfing behavior cannot be traced back to you.')
        },
        {
            icon: 'cloud_sync',
            title: t('4. Hosting und Content Delivery Networks (CDN)', '4. Hosting and Content Delivery Networks (CDN)'),
            content: t('Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Vercel / Netlify. Dies ist ein Anbieter von Cloud-Computing-Diensten, der uns das Hosting der Website ermöglicht.', 'We host the content of our website with the following provider: Vercel / Netlify. This is a provider of cloud computing services that enables us to host the website.')
        },
        {
            icon: 'gavel',
            title: t('5. Ihre Rechte', '5. Your rights'),
            content: t('Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.', 'You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data. You also have a right to request the correction or deletion of this data.')
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
                        <span className="material-symbols-outlined text-[14px]">lock</span>
                        {t('Rechtliches', 'Legal')}
                      </span>
                      <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.95]">
                        {t('DATEN', 'DATA')} <br />
                        <span className="text-secondary-fixed decoration-secondary underline decoration-8 underline-offset-8">{t('SCHUTZ', 'PRIVACY')}</span>
                      </h1>
                      <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                        {t('Ihre Privatsphäre ist uns wichtig. Wir behandeln Ihre Daten mit höchster Sorgfalt und modernsten Sicherheitsstandards.', 'Your privacy is important to us. We handle your data with the utmost care and states-of-the-art security standards.')}
                      </p>
                   </div>

                   <div className="relative hidden lg:block">
                      <div className="relative rounded-[40px] overflow-hidden border-[10px] border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 aspect-video bg-slate-800">
                         <img 
                           src="/privacy/privacy.jpeg" 
                           alt="Privacy Policy" 
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

                <div className="text-center pt-8">
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                        {t('Stand: April 2024', 'Last updated: April 2024')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
