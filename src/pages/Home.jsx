import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Achievements from '../components/Achievements';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div className="pt-0">
      <Hero />
      <WhyChooseUs />
      <Achievements />
      <BeforeAfter />
      {/* <Gallery /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
