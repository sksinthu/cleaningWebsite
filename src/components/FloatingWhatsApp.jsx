import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/41797811400"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[60] bottom-24 md:bottom-8 right-4 md:right-8 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="WhatsApp Chat"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-full h-full relative z-10 drop-shadow-lg"
      />
    </a>
  );
};

export default FloatingWhatsApp;
