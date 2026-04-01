import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Pricing from './components/Pricing';
import BeforeAfter from './components/BeforeAfter';
import WinterService from './components/WinterService';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-surface font-body text-on-surface antialiased pb-20 md:pb-0">
        <Navbar />
        <main className="pt-24">
          <Hero />
          <Services />
          <Achievements />
          <Pricing />
          <BeforeAfter />
          <WinterService />
          <ServiceArea />
          <Contact />
        </main>
        <Footer />
        <BottomNav />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

export default App;
