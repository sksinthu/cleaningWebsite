import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = ['services', 'why-us', 'reviews', 'pricing'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClass = (section) => {
    return `transition-colors pb-1 ${
      activeSection === section 
        ? 'text-primary border-b-2 border-primary' 
        : 'text-slate-600 hover:text-primary border-b-2 border-transparent'
    }`;
  };

  const getMobileLinkClass = (section) => {
    return `block py-4 text-xl font-bold border-b border-surface-dim ${
      activeSection === section ? 'text-primary' : 'text-on-surface'
    }`;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 w-full z-50 glass-nav shadow-sm bg-white/80 backdrop-blur-md">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-extrabold font-headline text-primary">Pristine Sanctuary</div>
          <div className="flex items-center space-x-8 font-headline tracking-tight font-bold text-sm">
            <a className={getLinkClass('services')} href="#services">Services</a>
            <a className={getLinkClass('why-us')} href="#why-us">Why Us</a>
            <a className={getLinkClass('reviews')} href="#reviews">Reviews</a>
            <a className={getLinkClass('pricing')} href="#pricing">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-5 py-2.5 rounded-full text-primary font-bold text-sm bg-surface-container-lowest transition-all active:scale-95 border border-primary/20">Get a Quote</button>
            <button className="px-5 py-2.5 rounded-full bg-secondary text-on-secondary font-bold text-sm hover:bg-on-secondary-container transition-all active:scale-95">Book Now</button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(0,88,191,0.06)] flex justify-between items-center px-6 h-16">
        <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tighter font-manrope">
          Pristine
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="material-symbols-outlined active:scale-95 duration-200" 
            style={{ color: '#2A7FFF' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'close' : 'menu_open'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-surface pt-20 px-6 pb-24 h-screen overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <a className={getMobileLinkClass('services')} href="#services" onClick={closeMenu}>Services</a>
            <a className={getMobileLinkClass('why-us')} href="#why-us" onClick={closeMenu}>Why Us</a>
            <a className={getMobileLinkClass('reviews')} href="#reviews" onClick={closeMenu}>Reviews</a>
            <a className={getMobileLinkClass('pricing')} href="#pricing" onClick={closeMenu}>Pricing</a>
          </div>
          <div className="mt-8 flex flex-col space-y-4">
            <button className="w-full py-4 rounded-full text-primary font-bold bg-white shadow-sm border border-primary/10 active:scale-95 transition-all">Get a Quote</button>
            <button className="w-full py-4 rounded-full bg-secondary text-white font-bold shadow-lg active:scale-95 transition-all">Book Now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
