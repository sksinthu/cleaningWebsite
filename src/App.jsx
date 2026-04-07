import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { LanguageProvider } from './LanguageContext';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-surface font-body text-on-surface antialiased pb-20 md:pb-0 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </main>
          <Footer />
          <BottomNav />
          <FloatingWhatsApp />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
