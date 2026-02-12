"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <p className="hero-animate text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium" style={{ animationDelay: '0s' }}>
          Juridisk
        </p>
        <h1 className="hero-animate font-serif text-5xl md:text-7xl leading-[1.1] text-tenki-text mb-8" style={{ animationDelay: '0.15s' }}>
          Personvernerklæring
        </h1>
        <p className="hero-animate font-sans text-tenki-muted text-sm" style={{ animationDelay: '0.3s' }}>
          Sist oppdatert: Januar 2025
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="prose prose-stone max-w-none space-y-12">
          {[
            {
              title: '1. Innledning',
              content: 'Tenki Consulting (\u00ABvi\u00BB, \u00ABoss\u00BB, \u00ABv\u00E5r\u00BB) er forpliktet til \u00E5 beskytte ditt personvern. Denne personvernerkl\u00E6ringen forklarer hvordan vi samler inn, bruker, utleverer og beskytter informasjonen din n\u00E5r du bes\u00F8ker nettsiden v\u00E5r eller benytter v\u00E5re tjenester.',
            },
            {
              title: '2. Informasjon vi samler inn',
              content: 'Vi kan samle inn personopplysninger som du frivillig oppgir, inkludert navn, e-postadresse, bedriftsnavn, telefonnummer og eventuelle detaljer du inkluderer i meldinger gjennom kontaktskjemaet v\u00E5rt. Vi samler ogs\u00E5 automatisk inn visse tekniske data som IP-adresse, nettlesertype og bes\u00F8kte sider.',
            },
            {
              title: '3. Hvordan vi bruker informasjonen din',
              content: 'Vi bruker innsamlet informasjon til \u00E5 svare p\u00E5 henvendelser, levere v\u00E5re r\u00E5dgivningstjenester, forbedre nettsiden v\u00E5r, sende relevante kommunikasjoner (med ditt samtykke) og overholde lovp\u00E5lagte forpliktelser. Vi selger ikke dine personopplysninger til tredjeparter.',
            },
            {
              title: '4. Datalagring og sikkerhet',
              content: 'Dine data lagres p\u00E5 sikre servere innenfor EU. Vi benytter bransjestandard kryptering, tilgangskontroller og overv\u00E5king for \u00E5 beskytte informasjonen din. Til tross for v\u00E5re anstrengelser er ingen metode for elektronisk overf\u00F8ring eller lagring 100 % sikker.',
            },
            {
              title: '5. Informasjonskapsler',
              content: 'Nettsiden v\u00E5r bruker n\u00F8dvendige informasjonskapsler for \u00E5 sikre riktig funksjonalitet. Vi kan ogs\u00E5 bruke analysekapsler (med ditt samtykke) for \u00E5 forst\u00E5 hvordan bes\u00F8kende samhandler med nettstedet v\u00E5rt. Du kan administrere innstillinger for informasjonskapsler gjennom nettleseren din.',
            },
            {
              title: '6. Dine rettigheter (GDPR)',
              content: 'I henhold til personvernforordningen (GDPR) har du rett til innsyn, retting, sletting, begrensning av behandling og dataportabilitet. Du har ogs\u00E5 rett til \u00E5 trekke tilbake samtykke og klage til en tilsynsmyndighet. For \u00E5 ut\u00F8ve disse rettighetene, kontakt oss p\u00E5 hei@tenki.no.',
            },
            {
              title: '7. Tredjepartstjenester',
              content: 'Vi kan bruke tredjeparts analyse- og kommunikasjonsverkt\u00F8y. Disse tjenestene har egne personvernerkl\u00E6ringer som regulerer bruken av din informasjon. Vi sikrer at alle tredjepartsbehandlere overholder GDPR-kravene.',
            },
            {
              title: '8. Dataoppbevaring',
              content: 'Vi oppbevarer personopplysninger kun s\u00E5 lenge det er n\u00F8dvendig for form\u00E5lene beskrevet i denne erkl\u00E6ringen, eller s\u00E5 lenge loven krever det. Innsendte kontaktskjemaer oppbevares i 24 m\u00E5neder med mindre du ber om tidligere sletting.',
            },
            {
              title: '9. Endringer i denne erkl\u00E6ringen',
              content: 'Vi kan oppdatere denne personvernerkl\u00E6ringen fra tid til annen. Endringer publiseres p\u00E5 denne siden med oppdatert revisjonsdato. Vi oppfordrer deg til \u00E5 gjennomg\u00E5 denne erkl\u00E6ringen jevnlig.',
            },
            {
              title: '10. Kontakt',
              content: 'For personvernrelaterte henvendelser, kontakt oss p\u00E5 hei@tenki.no.',
            },
          ].map((section, i) => (
            <Reveal key={section.title} delay={Math.min(i * 0.05, 0.3)}>
              <div>
                <h2 className="font-serif text-2xl text-tenki-text mb-4">{section.title}</h2>
                <p className="text-tenki-muted leading-relaxed">{section.content}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
