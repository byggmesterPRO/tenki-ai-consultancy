"use client";

import React from 'react';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import TestimonialSection from '@/components/Testimonial';
import Contact from '@/components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <Approach />
      <TestimonialSection />
      <Contact />
    </>
  );
};

export default Home;
