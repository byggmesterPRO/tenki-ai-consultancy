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
                 Utover <br />
                 <span className="italic text-tenki-accent">Algoritmen.</span>
               </h2>
             </Reveal>
             <Reveal delay={0.2}>
               <div className="w-12 h-[2px] bg-tenki-text/10 mb-6"></div>
               <p className="font-sans text-sm tracking-widest uppercase text-tenki-muted">
                 Etablert 2025
               </p>
             </Reveal>
          </div>

          <div className="md:col-span-8 space-y-8">
            <Reveal delay={0.3}>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-tenki-text">
                Vi tror kunstig intelligens ikke er en tryllestav, men et lag med infrastruktur. Som elektrisitet eller internett ligger verdien ikke i dens eksistens, men i dens anvendelse.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div>
                  <h3 className="font-sans font-medium text-lg mb-4 text-tenki-text">Menneskesentrert</h3>
                  <p className="text-tenki-muted leading-relaxed">
                    Automatisering skal frigjøre, ikke erstatte. Vi designer systemer som fjerner repetitivt arbeid, slik at dine menneskelige talenter kan fokusere på strategi, kreativitet og relasjoner.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-4 text-tenki-text">Transparente systemer</h3>
                  <p className="text-tenki-muted leading-relaxed">
                    Svarte bokser er en forretningsrisiko. Vi prioriterer forklarbar AI og tydelig dokumentasjon, slik at du alltid forstår hvordan beslutningene dine støttes.
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
