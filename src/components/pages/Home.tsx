"use client";

import React from 'react';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';
import Studies from '@/components/Studies';
import Approach from '@/components/Approach';
import TestimonialSection from '@/components/Testimonial';
import PricingPromise from '@/components/PricingPromise';
import Contact from '@/components/Contact';

const Home: React.FC<{ blogPreview?: React.ReactNode }> = ({ blogPreview }) => {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <Studies />
      <Approach />
      <TestimonialSection />
      <PricingPromise />
      {blogPreview}
      <Contact />
    </>
  );
};

export default Home;
