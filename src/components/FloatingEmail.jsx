import React from 'react';

const FloatingEmail = () => {
  return (
    <a
      href="mailto:pktopclean99@gmail.com"
      className="fixed z-[60] bottom-[160px] md:bottom-28 right-4 md:right-8 w-14 h-14 rounded-full flex items-center justify-center bg-[#EA4335] hover:scale-110 transition-transform shadow-xl editorial-shadow group overflow-hidden"
      aria-label="Send Email"
    >
      <span className="material-symbols-outlined text-white text-3xl relative z-10 group-hover:rotate-12 transition-transform">
        mail
      </span>
    </a>
  );
};

export default FloatingEmail;
