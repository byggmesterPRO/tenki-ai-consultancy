"use client";

import React from 'react';
import { SERVICES } from '@/constants';
import { Reveal } from '@/components/ui/Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-tenki-bg">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-20 max-w-2xl">
            <span className="text-tenki-accent font-sans uppercase tracking-widest text-xs font-semibold block mb-4">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl text-tenki-text">
              Precision tools for <br /> modern challenges.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {SERVICES.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group hover:bg-white transition-colors duration-500 p-8 -mx-8 rounded-2xl">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-stone-200/50 text-tenki-text group-hover:bg-tenki-accent/10 group-hover:text-tenki-accent transition-colors duration-300">
                  <service.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-tenki-text mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-tenki-muted leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
