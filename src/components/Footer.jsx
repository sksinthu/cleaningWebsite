import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 py-12 md:py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center space-y-6 text-center w-full mb-24">
          <div className="text-lg font-bold text-blue-700">Pristine Sanctuary</div>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-blue-600 font-plus-jakarta text-sm underline transition-all" href="#">Privacy</a>
            <a className="text-slate-500 hover:text-blue-600 font-plus-jakarta text-sm underline transition-all" href="#">Terms</a>
            <a className="text-slate-500 hover:text-blue-600 font-plus-jakarta text-sm underline transition-all" href="#">Support</a>
          </div>
          <div className="text-slate-500 font-plus-jakarta text-sm">© 2024 Pristine Sanctuary. Eco-Friendly Excellence.</div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row justify-between w-full border-t border-outline-variant/20 pt-10">
          <div>
            <div className="text-2xl font-extrabold text-primary font-headline tracking-tighter mb-4">Pristine Sanctuary</div>
            <p className="text-slate-500 max-w-sm mb-6">Delivering unparalleled eco-friendly cleaning experiences for homes and offices nationwide.</p>
            <div className="text-slate-400 font-plus-jakarta text-sm">© 2024 Pristine Sanctuary.<br/>All rights reserved.</div>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-on-surface">Company</h4>
              <a className="text-slate-500 hover:text-primary transition-all" href="#">About Us</a>
              <a className="text-slate-500 hover:text-primary transition-all" href="#">Careers</a>
              <a className="text-slate-500 hover:text-primary transition-all" href="#">Contact</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-on-surface">Legal</h4>
              <a className="text-slate-500 hover:text-primary transition-all" href="#">Privacy Policy</a>
              <a className="text-slate-500 hover:text-primary transition-all" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
