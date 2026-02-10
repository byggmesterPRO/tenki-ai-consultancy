"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

          <div className="md:col-span-4">
             <Reveal>
               <h2 className="font-serif text-3xl md:text-4xl text-tenki-text mb-6">
                 Beyond the <br />
                 <span className="italic text-tenki-accent">Algorithm.</span>
               </h2>
             </Reveal>
             <Reveal delay={0.2}>
               <div className="w-12 h-[2px] bg-tenki-text/10 mb-6"></div>
               <p className="font-sans text-sm tracking-widest uppercase text-tenki-muted">
                 Established 2025
               </p>
             </Reveal>
          </div>

          <div className="md:col-span-8 space-y-8">
            <Reveal delay={0.3}>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-tenki-text">
                We believe Artificial Intelligence is not a magic wand, but a layer of infrastructure. Like electricity or the internet, its value lies not in its existence, but in its application.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div>
                  <h3 className="font-sans font-medium text-lg mb-4 text-tenki-text">Human-Centric</h3>
                  <p className="text-tenki-muted leading-relaxed">
                    Automation should liberate, not replace. We design systems that remove repetitive drudgery, allowing your human talent to focus on strategy, creativity, and connection.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-4 text-tenki-text">Transparent Systems</h3>
                  <p className="text-tenki-muted leading-relaxed">
                    Black boxes are a business risk. We prioritize explainable AI models and clear documentation, ensuring you always understand how your decisions are being supported.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
