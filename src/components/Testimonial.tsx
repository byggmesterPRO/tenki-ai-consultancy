"use client";

import React from 'react';
import { TESTIMONIAL } from '@/constants';
import { Reveal } from '@/components/ui/Reveal';
import { Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex justify-center items-center">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <Reveal>
          <div className="mb-8 flex justify-center">
             <Quote className="text-tenki-accent/20 w-16 h-16 rotate-180" />
          </div>
          <blockquote className="font-serif text-3xl md:text-5xl text-tenki-text leading-tight mb-12">
            "{TESTIMONIAL.quote}"
          </blockquote>
          <div className="flex flex-col items-center">
            <cite className="not-italic font-sans font-semibold text-tenki-text tracking-wide">
              {TESTIMONIAL.author}
            </cite>
            <span className="font-sans text-tenki-muted text-sm mt-1">
              {TESTIMONIAL.role}, {TESTIMONIAL.company}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialSection;
