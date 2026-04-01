import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$89',
      popular: false,
      features: ['2 Bedrooms', 'Dusting & Vacuuming', 'Kitchen Sanitizing'],
      buttonStyle: 'border border-primary text-primary active:scale-95 hover:bg-primary/5',
      buttonText: 'Select Basic',
      containerStyle: 'bg-surface-container-lowest shadow-sm',
    },
    {
      name: 'Standard',
      price: '$149',
      popular: true,
      features: ['3-4 Bedrooms', 'Interior Windows', 'Bed Linen Change'],
      buttonStyle: 'bg-secondary text-white shadow-lg active:scale-95 hover:bg-secondary/90',
      buttonText: 'Choose Standard',
      containerStyle: 'bg-white shadow-[0_20px_50px_rgba(0,88,191,0.1)] relative border-2 border-primary transform md:-translate-y-4',
      featureStyle: 'font-semibold',
    },
    {
      name: 'Premium',
      price: '$249',
      popular: false,
      features: ['Deep Scrub All Rooms', 'Oven & Fridge Interior', 'Carpet Steam Cleaning'],
      buttonStyle: 'border border-primary text-primary active:scale-95 hover:bg-primary/5',
      buttonText: 'Select Premium',
      containerStyle: 'bg-surface-container-lowest shadow-sm',
    },
  ];

  return (
    <section id="pricing" className="px-6 py-16 md:py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="hidden md:block text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Pricing Plans</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-headline mb-4 md:mb-6 text-on-surface">Simple Pricing</h3>
          <p className="hidden md:block text-on-surface-variant max-w-2xl mx-auto text-lg">Choose a plan that fits your space. No hidden fees, just immaculate results.</p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 items-center md:items-stretch">
          {plans.map((plan, idx) => (
            <div key={idx} className={`${plan.containerStyle} p-8 md:p-10 rounded-[2.5rem] w-full flex flex-col`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="text-on-surface-variant font-bold mb-2 uppercase tracking-wide text-sm">{plan.name}</div>
              <div className="text-4xl md:text-5xl font-black mb-6 text-primary">
                {plan.price}<span className="text-base font-normal text-on-surface-variant">/visit</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={`flex items-center gap-3 text-sm md:text-base ${plan.featureStyle || 'text-on-surface'}`}>
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 md:py-3 rounded-2xl font-bold transition-all ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
