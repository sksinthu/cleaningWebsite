import React from 'react';

const Testimonials = () => {
  const desktopReviews = [
    { name: 'Sarah Jenkins', role: 'Homeowner', quote: 'Pristine Sanctuary completely transformed my living space. Highly recommend their eco-friendly approach.' },
    { name: 'Michael Chen', role: 'Office Manager', quote: 'Our team productivity went up after we switched to Pristine. The air even feels cleaner!' },
    { name: 'Emily Thorne', role: 'AirBnB Host', quote: 'I rely on them for all my turnovers. Five-star cleanliness every single time without fail.' },
  ];

  return (
    <section id="reviews" className="px-6 py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Single Review */}
        <div className="md:hidden">
          <h3 className="text-3xl font-extrabold font-headline mb-10 text-center">What They Say</h3>
          <div className="bg-white p-8 rounded-3xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-primary/10 text-6xl">format_quote</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img alt="Customer avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzN_E9U7wKITeMdLTVT7Ek9BIeGCAUbBTlFOsM2gmlOfvlcrj3Tk6NWKZrhWitITfLXwP1MEbbxlQ9B8c94Z7f683jmT74zFnR9BhvEbRZNY49EB_c1n0yaTM1jnZDrPjeTv9EDR3GH-Ml0z6SmTzylECFNqJdoSHcAHtIHxCXItt0yzkiGr5a5RH4pKPOmgfUhTj-C-fO35R31h5MHocPf9Fp9QxweHKvpkE4XF3whumodW2Ducun5AGOC4shnLOcpC752jr3lgTQ" />
              </div>
              <div>
                <div className="font-bold">Sarah Jenkins</div>
                <div className="text-xs text-on-surface-variant">Home Owner</div>
              </div>
            </div>
            <p className="text-on-surface font-body leading-relaxed italic">
              "I've tried many services, but Pristine Sanctuary is on another level. Their attention to detail and eco-friendly approach makes my home feel truly safe and fresh."
            </p>
            <div className="mt-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid Reviews */}
        <div className="hidden md:block">
          <div className="text-center mb-16">
            <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-5xl font-headline font-extrabold text-on-surface">Client Stories</h3>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {desktopReviews.map((review, idx) => (
              <div key={idx} className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm relative group hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined absolute top-8 right-8 text-primary opacity-10 text-6xl group-hover:opacity-20 transition-all">format_quote</span>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-yellow-400 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                </div>
                <p className="text-on-surface-variant italic mb-8 relative z-10 leading-relaxed text-lg tracking-tight">"{review.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-fixed rounded-full flex justify-center items-center font-bold text-primary font-headline">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-on-surface font-headline">{review.name}</h5>
                    <p className="text-sm text-on-surface-variant">{review.role}</p>
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
