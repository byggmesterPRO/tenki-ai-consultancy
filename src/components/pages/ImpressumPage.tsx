"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const ImpressumPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <motion.p
          initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
        >
          Legal
        </motion.p>
        <motion.h1
          initial="hidden" animate="visible" custom={1} variants={fade}
          className="font-serif text-5xl md:text-7xl leading-[1.1] text-tenki-text mb-8"
        >
          Impressum
        </motion.h1>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="space-y-12">
          <Reveal>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Company Information</h2>
              <div className="text-tenki-muted leading-relaxed space-y-1">
                <p className="font-semibold text-tenki-text">Tenki Consulting GmbH</p>
                <p>Friedrichstraße 12</p>
                <p>10117 Berlin</p>
                <p>Germany</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Contact</h2>
              <div className="text-tenki-muted leading-relaxed space-y-1">
                <p>Phone: +49 (0) 30 1234 5678</p>
                <p>Email: hello@tenki.ai</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Represented by</h2>
              <p className="text-tenki-muted leading-relaxed">
                Managing Director: [Name of Managing Director]
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Registration</h2>
              <div className="text-tenki-muted leading-relaxed space-y-1">
                <p>Registered at: Amtsgericht Charlottenburg, Berlin</p>
                <p>Registration Number: HRB [Number]</p>
                <p>VAT ID: DE [Number]</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Responsible for Content</h2>
              <p className="text-tenki-muted leading-relaxed">
                [Name of Responsible Person]<br />
                Friedrichstraße 12, 10117 Berlin<br />
                (according to &sect; 55 Abs. 2 RStV)
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Dispute Resolution</h2>
              <p className="text-tenki-muted leading-relaxed">
                The European Commission provides a platform for online dispute resolution (OS):
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-tenki-accent hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>
                <br /><br />
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Liability for Content</h2>
              <p className="text-tenki-muted leading-relaxed">
                As a service provider, we are responsible for our own content on these pages in accordance with &sect; 7 Abs. 1 TMG. According to &sect;&sect; 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Liability for Links</h2>
              <p className="text-tenki-muted leading-relaxed">
                Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for the content of those pages.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ImpressumPage;
