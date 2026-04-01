import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-primary text-white md:rounded-[3rem] rounded-t-[3rem] max-w-7xl mx-auto md:mb-12">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 md:px-12">
        
        {/* Left Side: Info */}
        <div className="flex-1">
          <h3 className="text-3xl md:text-6xl font-extrabold font-headline mb-4 md:mb-8 leading-tight">Get In Touch</h3>
          <p className="text-blue-100 mb-8 md:mb-16 md:text-xl font-light">Ready for a pristine home? Send us a message and we'll get back to you within 24 hours.</p>
          
          <div className="space-y-6 md:space-y-8 text-sm md:text-base text-blue-50">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-white/10 rounded-full flex justify-center items-center group-hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined">call</span>
              </div>
              <span className="font-medium tracking-wide">(555) 000-Pristine</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-white/10 rounded-full flex justify-center items-center group-hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span className="font-medium tracking-wide">hello@pristinesanctuary.com</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-white/10 rounded-full flex justify-center items-center group-hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <span className="font-medium tracking-wide">123 Cleanliness Blvd, Eco City</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 bg-white/10 p-8 md:p-10 rounded-[2rem] border border-white/20 backdrop-blur-sm">
          <form className="space-y-5">
            <div>
              <label className="block text-xs md:text-sm font-bold uppercase mb-2 ml-1 tracking-wider text-blue-100">Full Name</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/40 focus:ring-secondary focus:border-secondary focus:bg-white/10 transition-all outline-none" 
                placeholder="Enter your name" 
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-bold uppercase mb-2 ml-1 tracking-wider text-blue-100">Email Address</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/40 focus:ring-secondary focus:border-secondary focus:bg-white/10 transition-all outline-none" 
                placeholder="you@example.com" 
                type="email"
              />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-bold uppercase mb-2 ml-1 tracking-wider text-blue-100">Your Message</label>
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/40 focus:ring-secondary focus:border-secondary focus:bg-white/10 transition-all outline-none" 
                placeholder="How can we help?" 
                rows="4"
              ></textarea>
            </div>
            <button 
              className="w-full bg-secondary text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-emerald-600 active:scale-95 transition-all mt-4" 
              type="button"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
