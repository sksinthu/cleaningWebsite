import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      <main className="pt-16 max-w-7xl mx-auto">
        <Hero />
        <Services />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
