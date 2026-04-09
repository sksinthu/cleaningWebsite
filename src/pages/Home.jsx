import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WinterService from '../components/WinterService';
import ServiceArea from '../components/ServiceArea';
import Achievements from '../components/Achievements';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="pt-0">
      <Hero />
      <Services />
      <div className="py-12 bg-slate-50">
        <WinterService />
      </div>
      <BeforeAfter />
      <ServiceArea />
      <Achievements />
      <Testimonials />
    </div>
  );
};

export default Home;
