import React from 'react';
import { useLanguage } from '../LanguageContext';

const BeforeAfter = () => {
    const { t } = useLanguage();

    return (
        <section className="py-16 md:py-24 px-4 bg-surface" id="vorher-nachher">
            <div className="text-center mb-12">
                <span className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] mb-4 inline-block">{t('Vergleich', 'Comparison')}</span>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">{t('Unsere Resultate', 'Our Results')}</h2>
                <p className="text-on-surface-variant max-w-2xl mx-auto font-medium">{t('Überzeugen Sie sich selbst von der Qualität unserer Arbeit.', 'See the quality of our work for yourself.')}</p>
            </div>

            <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] select-none group border-8 border-white bg-slate-200">

                {/* Underneath Container (After) */}
                <div className="absolute inset-0">
                    <img
                        src="/befor-after-cleaning/After-cleaning.jpg"
                        alt="Clean Space"
                        className="w-full h-full object-cover"
                        draggable="false"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-sm shadow text-primary uppercase tracking-wider">{t('Nachher', 'After')}</div>
                </div>

                {/* Top Container (Before) - This whole group will be clipped */}
                <div className="absolute inset-0 animate-slide-clip z-10 overflow-hidden">
                    <img
                        src="/befor-after-cleaning/befor-cleaning.jpeg"
                        alt="Dirty Space"
                        className="w-full h-full object-cover"
                        draggable="false"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-4 py-2 rounded-full font-bold text-sm shadow text-white uppercase tracking-wider">
                        {t('Vorher', 'Before')}
                    </div>
                </div>

                {/* Vertical Drag Handle */}
                <div className="absolute top-0 bottom-0 w-1 bg-white -translate-x-1/2 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 animate-slide-handle">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-full">
                        <span className="material-symbols-outlined font-bold text-xl" style={{ transform: 'rotate(90deg)' }}>unfold_more</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
