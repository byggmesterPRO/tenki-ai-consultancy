"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';

const steps = [
  { id: '01', title: 'Discovery', desc: 'Vi reviderer ditt nåværende datalandskap og identifiserer flaskehalser med stor innvirkning.' },
  { id: '02', title: 'Strategy', desc: 'Vi designer et veikart som prioriterer avkastning og minimal operasjonell forstyrrelse.' },
  { id: '03', title: 'Implementation', desc: 'Våre ingeniører distribuerer sikre, skalerbare modeller tilpasset din infrastruktur.' },
  { id: '04', title: 'Enablement', desc: 'Vi trener teamet ditt til å eie systemet, og sikrer langsiktig uavhengighet.' },
];

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 md:py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <Reveal>
             <h2 className="font-serif text-4xl md:text-5xl text-stone-50">
              The Tenki Method.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-sans text-stone-400 max-w-md">
              Et disiplinert rammeverk i fire faser, designet for å redusere risiko og maksimere verdileveranse.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.15}>
              <div className="border-t border-stone-700 pt-8 group">
                <span className="block font-sans text-tenki-accent text-sm font-medium mb-4">{step.id}</span>
                <h3 className="font-serif text-2xl mb-4 text-stone-200 group-hover:text-tenki-accent transition-colors duration-300">{step.title}</h3>
                <p className="font-sans text-stone-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
