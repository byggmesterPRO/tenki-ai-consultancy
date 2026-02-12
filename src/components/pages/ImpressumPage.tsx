"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';

const ImpressumPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <p className="hero-animate text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium" style={{ animationDelay: '0s' }}>
          Juridisk
        </p>
        <h1 className="hero-animate font-serif text-5xl md:text-7xl leading-[1.1] text-tenki-text mb-8" style={{ animationDelay: '0.15s' }}>
          Impressum
        </h1>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="space-y-12">
          <Reveal>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Selskapsinformasjon</h2>
              <div className="text-tenki-muted leading-relaxed space-y-1">
                <p className="font-semibold text-tenki-text">Tenki Consulting GmbH</p>
                <p>Friedrichstraße 12</p>
                <p>10117 Berlin</p>
                <p>Tyskland</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Kontakt</h2>
              <div className="text-tenki-muted leading-relaxed space-y-1">
                <p>Telefon: +49 (0) 30 1234 5678</p>
                <p>E-post: hello@tenki.ai</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Representert av</h2>
              <p className="text-tenki-muted leading-relaxed">
                Daglig leder: [Navn på daglig leder]
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Registrering</h2>
              <div className="text-tenki-muted leading-relaxed space-y-1">
                <p>Registrert hos: Amtsgericht Charlottenburg, Berlin</p>
                <p>Registreringsnummer: HRB [Nummer]</p>
                <p>MVA-ID: DE [Nummer]</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Ansvarlig for innhold</h2>
              <p className="text-tenki-muted leading-relaxed">
                [Navn på ansvarlig person]<br />
                Friedrichstraße 12, 10117 Berlin<br />
                (according to &sect; 55 Abs. 2 RStV)
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Tvisteløsning</h2>
              <p className="text-tenki-muted leading-relaxed">
                EU-kommisjonen tilbyr en plattform for nettbasert tvisteløsning (OS):
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-tenki-accent hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>
                <br /><br />
                Vi er ikke villige til eller forpliktet til å delta i tvisteløsningsprosedyrer for en forbrukervoldgiftsnemnd.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Ansvar for innhold</h2>
              <p className="text-tenki-muted leading-relaxed">
                Som tjenesteleverandør er vi ansvarlige for eget innhold på disse sidene i henhold til § 7 Abs. 1 TMG. I henhold til §§ 8 til 10 TMG er vi imidlertid ikke forpliktet til å overvåke overført eller lagret tredjepartsinformasjon eller å undersøke omstendigheter som indikerer ulovlig aktivitet.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div>
              <h2 className="font-serif text-2xl text-tenki-text mb-4">Ansvar for lenker</h2>
              <p className="text-tenki-muted leading-relaxed">
                Nettstedet vårt inneholder lenker til eksterne tredjepartsnettsteder som vi ikke har innflytelse over innholdet til. Vi kan derfor ikke påta oss noe ansvar for dette tredjepartsinnholdet. Den respektive leverandøren eller operatøren av de lenkede sidene er alltid ansvarlig for innholdet på disse sidene.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ImpressumPage;
