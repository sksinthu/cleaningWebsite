import React, { useState, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

const BeforeAfter = () => {
    const { t } = useLanguage();
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef();

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPos((x / rect.width) * 100);
    };

    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low" id="resultate">
            <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">{t('Unsere Resultate', 'Our Results')}</h2>
                <p className="text-on-surface-variant max-w-2xl mx-auto">{t('Überzeugen Sie sich selbst von der Qualität unserer Arbeit – Schieben Sie den Regler.', 'See the quality of our work for yourself – drag the slider.')}</p>
            </div>
            
            <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] select-none touch-none group"
                 ref={containerRef}
                 onMouseMove={(e) => handleMove(e.clientX)}
                 onTouchMove={(e) => handleMove(e.touches[0].clientX)}>
                 
                 {/* Underneath image (After) */}
                 <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
                    alt="Clean Space" 
                    className="absolute inset-0 w-full h-full object-cover" 
                    draggable="false" 
                 />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-sm shadow text-primary z-0">{t('Nachher', 'After')}</div>
                 
                 {/* Top image (Before) cropped by clip-path */}
                 <img 
                    src="https://images.unsplash.com/photo-1584622781867-0cbf834c8928?auto=format&fit=crop&q=80&w=2000" 
                    alt="Dirty Space" 
                    className="absolute inset-0 w-full h-full object-cover grayscale blur-[2px]" 
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }} 
                    draggable="false" 
                 />
                 <div 
                    className="absolute top-4 left-4 bg-black/80 backdrop-blur px-4 py-2 rounded-full font-bold text-sm shadow text-white z-10"
                    style={{ opacity: sliderPos > 20 ? 1 : 0, transition: 'opacity 0.2s' }}
                 >
                    {t('Vorher', 'Before')}
                 </div>
                 
                 {/* Vertical Drag Handle */}
                 <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize -translate-x-1/2 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 hover:w-2 transition-all" style={{ left: `${sliderPos}%` }}>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center text-primary border-4 border-slate-50 transition-transform group-hover:scale-110">
                         <span className="material-symbols-outlined font-bold text-2xl" style={{ transform: 'rotate(90deg)' }}>unfold_more</span>
                     </div>
                 </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
