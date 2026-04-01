import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Mobile Hero View */}
      <section id="home" className="md:hidden px-6 pt-12 pb-16 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold font-headline tracking-tight text-primary mb-6 leading-[1.1]">
          Professional Cleaning Services You Can Trust
        </h1>
        <p className="text-on-surface-variant text-lg font-body mb-10 max-w-sm">
          Experience the serenity of a perfectly maintained home with our eco-friendly touch.
        </p>
        <div className="flex flex-col items-center gap-8 w-full">
          <button className="bg-secondary text-white font-bold py-4 px-10 rounded-full shadow-lg active:scale-95 transition-all text-lg w-full max-w-xs">
            Book Now
          </button>
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img 
              alt="Professional cleaner in uniform" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHYW17EP5kM8o3wrgoa3H8FAi8qVP3IK6jae9ckiRq7DN7EMiFh1U2UQwUQ43rbl4y6a1HlpjVPHbggYNm-Vg3TJ8qBA1ZXJHCc82z-QHvUB-_jqcw6nC6j8MiaHO-LBZTpR-QuMeqNfvbaDlC5pnQnhZXbb0x-dBqrW3KS0A1ZctwJL_ltjcMDfd8XeUoVfvIZh9Lzy4fSG7iZbHPttjJQF2KcWimQ6O-hVFpez-kfZMbKNaL59pOTpVlzkik1Ts0IhtOn3suXjKk"
            />
          </div>
        </div>
      </section>

      {/* Desktop Hero View */}
      <section className="hidden md:block pt-32 pb-20 px-8 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Professional Cleaning Services <span className="text-primary">You Can Trust</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Experience the ultimate tranquility of a perfectly maintained space. Our eco-friendly approach combines precision cleaning with professional reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-secondary text-on-secondary rounded-full font-bold text-lg hover:shadow-lg transition-all active:scale-95">Book Now</button>
              <button className="px-8 py-4 bg-surface-container-lowest text-primary border border-outline-variant/20 rounded-full font-bold text-lg air-shadow active:scale-95">Get a Quote</button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed opacity-20 blur-3xl rounded-full"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden air-shadow aspect-square md:aspect-auto md:h-[600px] w-full bg-surface-container-high">
              <img 
                alt="Professional cleaner in a bright modern apartment" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHYW17EP5kM8o3wrgoa3H8FAi8qVP3IK6jae9ckiRq7DN7EMiFh1U2UQwUQ43rbl4y6a1HlpjVPHbggYNm-Vg3TJ8qBA1ZXJHCc82z-QHvUB-_jqcw6nC6j8MiaHO-LBZTpR-QuMeqNfvbaDlC5pnQnhZXbb0x-dBqrW3KS0A1ZctwJL_ltjcMDfd8XeUoVfvIZh9Lzy4fSG7iZbHPttjJQF2KcWimQ6O-hVFpez-kfZMbKNaL59pOTpVlzkik1Ts0IhtOn3suXjKk"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
