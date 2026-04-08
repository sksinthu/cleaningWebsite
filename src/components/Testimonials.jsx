import React from 'react';
import { useLanguage } from '../LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Sabrina M.",
      role: t("Wohnungsabgabe", "Tenancy Cleaning"),
      text: t("Absolut fantastische Arbeit! Die Wohnung wurde im ersten Anlauf von der Verwaltung abgenommen. Das Team war pünktlich, freundlich und extrem gründlich.", "Absolutely fantastic work! The apartment was accepted by the management on the first try. The team was punctual, friendly, and extremely thorough.")
    },
    {
      name: "Thomas W.",
      role: t("Büroreinigung", "Office Cleaning"),
      text: t("Seit SwissClean unsere Büros reinigt, ist die Mitarbeiterzufriedenheit gestiegen. Sehr diskret und zuverlässig. Kann ich nur wärmstens empfehlen.", "Since SwissClean started cleaning our offices, employee satisfaction has increased. Very discreet and reliable. I can highly recommend them.")
    },
    {
      name: "Elena K.",
      role: t("Frühjahrsputz", "Tenancy Cleaning"),
      text: t("Ich habe noch nie gesehen, dass meine Fenster so sauber sein können! Tolles Preis-Leistungs-Verhältnis und super sympathisches Personal.", "I've never seen my windows this clean! Great value for money and super incredibly friendly staff.")
    },
    {
      name: "Markus R.",
      role: t("Umzugsreinigung", "Apartment Cleaning"),
      text: t("Perfekter Service! Nach dem Baustress war die Reinigung durch die Profis eine enorme Erleichterung. Jeder Rappen hat sich gelohnt.", "Perfect service! After the stress of moving, having the pros clean was a huge relief. Worth every penny.")
    },
    {
      name: "Julia S.",
      role: t("Abo-Reinigung", "Tenancy Cleaning"),
      text: t("Meine Wohnung glänzt jede Woche aufs Neue. Ein absolut vertrauenswürdiges Team, dem ich problemlos meinen Schlüssel überlasse.", "My apartment shines anew every week. An absolutely trustworthy team that I gladly give my keys to without hesitation.")
    }
  ];

  // Duplicate the reviews array to seamlessly loop the marquee
  const extendedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 md:py-24 bg-surface-variant relative overflow-hidden" id="bewertungen">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="mx-auto text-center relative z-10 w-full">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary px-4 md:px-8 mb-4">{t('Das sagen unsere Kunden', 'What Our Clients Say')}</h2>
        <p className="text-on-surface-variant px-4 md:px-8 mb-10 md:mb-16 max-w-2xl mx-auto">{t('Ihre Zufriedenheit ist unser grösstes Lob.', 'Your satisfaction is our greatest praise.')}</p>

        {/* Outer scroll wrapper with absolute fading edges for smooth enter/exit */}
        <div className="relative w-full overflow-hidden flex items-center py-4">
          <div className="absolute top-0 left-0 w-16 md:w-32 lg:w-48 h-full bg-gradient-to-r from-surface-variant to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 lg:w-48 h-full bg-gradient-to-l from-surface-variant to-transparent z-20 pointer-events-none"></div>

          {/* Marquee track */}
          <div className="flex w-max animate-marquee gap-4 md:gap-6 hover:[animation-play-state:paused] px-4 md:px-6">
            {extendedReviews.map((review, idx) => (
              <div 
                key={idx}
                className="w-[85vw] md:w-[400px] lg:w-[350px] shrink-0"
              >
                <div className="bg-surface-container-lowest h-full rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-outline-variant/20 flex flex-col items-start text-left hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all cursor-default">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-secondary text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-sm md:text-base font-serif italic text-on-surface mb-8 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-sm md:text-base text-primary leading-tight">{review.name}</p>
                    <p className="text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-wider mt-1">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
