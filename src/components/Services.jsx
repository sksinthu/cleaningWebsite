import React from 'react';

const Services = () => {
  const desktopServices = [
    {
      icon: 'home',
      title: 'Home Cleaning',
      desc: 'Comprehensive upkeep for your living space, focusing on hygiene and detail.',
      offset: false,
    },
    {
      icon: 'business',
      title: 'Office Cleaning',
      desc: 'Boost productivity with a sanitized, professional workspace environment.',
      offset: true,
    },
    {
      icon: 'cleaning_services',
      title: 'Deep Cleaning',
      desc: 'Going beyond the surface to eliminate hidden allergens and persistent grime.',
      offset: false,
    },
    {
      icon: 'local_shipping',
      title: 'Move-in/Move-out',
      desc: 'Seamless transitions with a spotless start for your new beginning.',
      offset: true,
    },
  ];

  const mobileServices = [
    { icon: 'home', title: 'Home', desc: 'Routine cleaning for daily comfort.' },
    { icon: 'business', title: 'Office', desc: 'Productive spaces, sanitized daily.' },
    { icon: 'cleaning_services', title: 'Deep', desc: 'Meticulous detail for every corner.' },
    { icon: 'local_shipping', title: 'Move In/Out', desc: 'Starting fresh with total purity.' },
  ];

  return (
    <section id="services" className="py-12 md:py-24 px-6 md:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Heading */}
        <div className="md:hidden">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Excellence</h2>
          <h3 className="text-3xl font-extrabold font-headline mb-8">Premium Services</h3>
        </div>
        {/* Desktop Heading */}
        <div className="hidden md:block mb-16">
          <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-headline font-extrabold text-on-surface">Tailored Cleaning Solutions</h3>
        </div>

        {/* Mobile Bento Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {mobileServices.map((service, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-5 rounded-3xl shadow-sm flex flex-col gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
              <div>
                <h4 className="font-bold text-on-surface">{service.title}</h4>
                <p className="text-xs text-on-surface-variant mt-1">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Asymmetric Cards */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {desktopServices.map((service, index) => (
            <div key={index} className={`group p-8 rounded-[2rem] bg-surface-container-lowest air-shadow hover:bg-primary transition-all duration-500 ${service.offset ? 'mt-8' : ''}`}>
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary-container">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container">{service.icon}</span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-on-primary">{service.title}</h4>
              <p className="text-on-surface-variant group-hover:text-primary-fixed leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
