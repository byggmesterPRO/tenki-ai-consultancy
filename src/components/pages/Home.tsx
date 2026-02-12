"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

const Philosophy = dynamic(() => import('@/components/Philosophy'));
const Services = dynamic(() => import('@/components/Services'));
const Studies = dynamic(() => import('@/components/Studies'));
const Approach = dynamic(() => import('@/components/Approach'));
const TestimonialSection = dynamic(() => import('@/components/Testimonial'));
const PricingPromise = dynamic(() => import('@/components/PricingPromise'));
const Contact = dynamic(() => import('@/components/Contact'));

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
