import React from 'react';

const Features = () => {
  const desktopFeatures = [
    { icon: 'groups', iconColor: 'text-primary', title: 'Experienced Staff', desc: 'Vetted professionals with hundreds of hours of certified cleaning training.' },
    { icon: 'eco', iconColor: 'text-secondary', title: 'Eco-Friendly Products', desc: 'Strictly non-toxic, plant-based solutions safe for your family and pets.' },
    { icon: 'payments', iconColor: 'text-primary', title: 'Affordable Pricing', desc: 'Premium results delivered at transparent, competitive market rates.' },
    { icon: 'schedule', iconColor: 'text-primary', title: 'Reliable Service', desc: 'Punctuality is our promise. We respect your time as much as your space.' },
  ];

  const mobileFeatures = [
    { icon: 'verified_user', title: 'Experienced Staff', desc: 'Vetted professionals with years of training in specialized cleaning methods.', bg: 'bg-primary/10', iconColor: 'text-primary', titleClass: 'font-bold text-lg' },
    { icon: 'eco', title: 'Eco-Friendly', desc: 'We use 100% biodegradable and non-toxic products safe for pets and children.', bg: 'bg-secondary/10', iconColor: 'text-secondary', titleClass: 'font-bold text-lg text-secondary' },
    { icon: 'payments', title: 'Affordable', desc: 'Transparent pricing with no hidden fees, tailored to your budget requirements.', bg: 'bg-primary/10', iconColor: 'text-primary', titleClass: 'font-bold text-lg' },
    { icon: 'event_available', title: 'Reliable', desc: 'We respect your time. Always on schedule, always delivering excellence.', bg: 'bg-primary/10', iconColor: 'text-primary', titleClass: 'font-bold text-lg' },
  ];

  return (
    <section id="why-us" className="px-6 py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Layout */}
        <div className="md:hidden">
          <h3 className="text-3xl font-extrabold font-headline mb-10 text-center">Why Pristine?</h3>
          <div className="space-y-8">
            {mobileFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className={`${feature.bg} p-3 rounded-2xl`}>
                  <span className={`material-symbols-outlined ${feature.iconColor}`}>{feature.icon}</span>
                </div>
                <div>
                  <h4 className={feature.titleClass}>{feature.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row gap-8">
          <div className="w-1/3 bg-primary rounded-[2.5rem] p-12 text-on-primary flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-headline font-extrabold mb-6 leading-tight">Why Choose Our Sanctuary?</h2>
              <p className="text-primary-fixed/80 leading-relaxed">We don't just clean; we restore peace of mind through meticulously designed cleaning protocols.</p>
            </div>
            <div className="mt-8">
              <span className="material-symbols-outlined text-6xl text-primary-fixed">verified_user</span>
            </div>
          </div>
          <div className="w-2/3 grid grid-cols-2 gap-8">
            {desktopFeatures.map((feature, index) => (
              <div key={index} className="bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/10">
                <span className={`material-symbols-outlined text-4xl mb-4 ${feature.iconColor}`}>{feature.icon}</span>
                <h4 className="text-xl font-headline font-bold mb-2">{feature.title}</h4>
                <p className="text-on-surface-variant text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
