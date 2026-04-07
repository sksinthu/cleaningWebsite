import React from 'react';
import Gallery from '../components/Gallery';
// import BeforeAfter from '../components/BeforeAfter';
import { useLanguage } from '../LanguageContext';

const GalleryPage = () => {
    const { t } = useLanguage();
    return (
        <div className="pt-0 min-h-screen">
            {/* Split-Screen Header (Following the new standard) */}
            <div className="bg-primary relative overflow-hidden pt-12 md:pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a192f]"></div>
                
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                   <div className="text-left">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-black/20">
                        <span className="material-symbols-outlined text-[14px]">photo_library</span>
                        {t('Unsere Arbeit', 'Our Work')}
                      </span>
                      <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.95]">
                        {t('GALERIE &', 'GALLERY &')} <br />
                        <span className="text-secondary-fixed decoration-secondary underline decoration-8 underline-offset-8">{t('RESULTATE', 'RESULTS')}</span>
                      </h1>
                      <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                        {t('Überzeugen Sie sich selbst von der Qualität unserer Arbeit. Hier finden Sie eine Auswahl unserer erfolgreichsten Projekte und beeindruckende Vorher-Nachher-Vergleiche.', 'See for yourself the quality of our work. Here you will find a selection of our most successful projects and impressive before-and-after comparisons.')}
                      </p>
                   </div>

                   <div className="relative hidden lg:block">
                      <div className="relative rounded-[40px] overflow-hidden border-[10px] border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 aspect-video">
                         <img 
                           src="/gallery/1000167239.jpg" 
                           alt="Professional Cleaning Gallery" 
                           className="w-full h-full object-cover"
                         />
                      </div>
                   </div>
                </div>
            </div>

            <div className="bg-white">
                <Gallery />
                {/* <div className="bg-slate-50">
                    <BeforeAfter />
                </div> */}
            </div>
        </div>
    );
};

export default GalleryPage;
