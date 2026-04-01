import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/41000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[60] bottom-24 md:bottom-8 right-4 md:right-8 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="WhatsApp Chat"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 duration-1000 z-0"></div>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-full h-full relative z-10 drop-shadow-lg" 
      />
    </a>
  );
};

export default FloatingWhatsApp;
