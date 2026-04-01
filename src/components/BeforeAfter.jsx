import React from 'react';
import { useLanguage } from '../LanguageContext';

const BeforeAfter = () => {
    const { t } = useLanguage();

    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low" id="resultate">
            <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">{t('Unsere Resultate', 'Our Results')}</h2>
                <p className="text-on-surface-variant max-w-2xl mx-auto">{t('Überzeugen Sie sich selbst von der Qualität unserer Arbeit.', 'See the quality of our work for yourself.')}</p>
            </div>
            
            <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] select-none group border-8 border-white">
                 
                 {/* Underneath image (After) */}
                 <img 
                    src="/befor-after-cleaning/After-cleaning.png" 
                    alt="Clean Space" 
                    className="absolute inset-0 w-full h-full object-cover" 
                    draggable="false" 
                 />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-sm shadow text-primary z-0">{t('Nachher', 'After')}</div>
                 
                 {/* Top image (Before) cropped by auto-scrub CSS keyframes */}
                 <img 
                    src="/befor-after-cleaning/befor-cleaning.jpeg" 
                    alt="Dirty Space" 
                    className="absolute inset-0 w-full h-full object-cover animate-slide-clip" 
                    draggable="false" 
                 />
                 <div 
                    className="absolute top-4 left-4 bg-black/80 backdrop-blur px-4 py-2 rounded-full font-bold text-sm shadow text-white z-10"
                 >
                    {t('Vorher', 'Before')}
                 </div>
                 
                 {/* Vertical Drag Handle auto-swept by CSS keyframes */}
                 <div className="absolute top-0 bottom-0 w-1 bg-white -translate-x-1/2 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 animate-slide-handle">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                         <span className="material-symbols-outlined font-bold text-xl" style={{ transform: 'rotate(90deg)' }}>unfold_more</span>
                     </div>
                 </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
