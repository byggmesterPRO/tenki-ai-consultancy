"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discovery',
    subtitle: 'Uke 1–2',
    description: 'Vi reviderer ditt nåværende datalandskap og identifiserer flaskehalser med stor innvirkning.',
    details: [
      'Interessentintervjuer på tvers av avdelinger',
      'Vurdering av nåværende teknologistabel',
      'Revisjon av datakvalitet og tilgjengelighet',
      'Analyse av konkurranselandskapet',
      'Rapport over raske gevinster',
    ],
  },
  {
    id: '02',
    title: 'Strategy',
    subtitle: 'Uke 3–4',
    description: 'Vi designer et veikart som prioriterer avkastning og minimal operasjonell forstyrrelse.',
    details: [
      'Prioritert mulighetsmatrise',
      'Teknisk arkitekturtegning',
      'Risikovurdering og tiltaksplan',
      'Ressursallokering og tidsplan',
      'Forretningscase klart for ledelsen',
    ],
  },
  {
    id: '03',
    title: 'Implementation',
    subtitle: 'Uke 5–12',
    description: 'Våre ingeniører distribuerer sikre, skalerbare modeller tilpasset din infrastruktur.',
    details: [
      'Smidig sprintbasert utvikling',
      'Kontinuerlig integrasjon og testing',
      'Sikkerhet-først distribusjonspipeline',
      'Interessentdemoer annenhver uke',
      'Ytelsesmåling mot fastsatte mål',
    ],
  },
  {
    id: '04',
    title: 'Enablement',
    subtitle: 'Uke 12–16',
    description: 'Vi trener teamet ditt til å eie systemet, og sikrer langsiktig uavhengighet.',
    details: [
      'Omfattende opplæringsworkshops for teamet',
      'Teknisk dokumentasjon og driftshåndbøker',
      'Overlevering til interne nøkkelpersoner',
      '90 dagers støtte etter lansering',
      'Kvartalsvise oppfølgingsmøter for kontinuerlig forbedring',
    ],
  },
];

const ApproachPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <p
          className="hero-animate text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
          style={{ animationDelay: '0s' }}
        >
          Vår metode
        </p>
        <h1
          className="hero-animate font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8 max-w-4xl"
          style={{ animationDelay: '0.15s' }}
        >
          The Tenki Method.
        </h1>
        <p
          className="hero-animate font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed"
          style={{ animationDelay: '0.3s' }}
        >
          Et disiplinert rammeverk i fire faser, designet for å redusere risiko og maksimere verdileveranse. Hvert oppdrag følger denne velprøvde veien fra innsikt til uavhengighet.
        </p>
      </section>

      {/* Timeline Steps */}
      {steps.map((step, idx) => (
        <section
          key={step.id}
          className={`py-24 md:py-28 ${idx % 2 === 0 ? 'bg-white' : 'bg-tenki-bg'}`}
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-4">
                <Reveal>
                  <span className="block font-sans text-tenki-accent text-6xl md:text-8xl font-bold mb-4 opacity-20">
                    {step.id}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-tenki-text mb-2">
                    {step.title}
                  </h2>
                  <p className="font-sans text-tenki-accent text-sm font-medium uppercase tracking-widest mb-6">
                    {step.subtitle}
                  </p>
                  <p className="text-tenki-muted leading-relaxed text-lg">
                    {step.description}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                <Reveal delay={0.2}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-stone-50 border border-stone-100">
                        <span className="text-tenki-accent font-sans font-semibold text-sm mt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-tenki-text leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Metrics */}
      <section className="bg-stone-900 text-stone-100 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50 mb-20 text-center">
              Results that speak.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { stat: '94%', label: 'Adopsjonsrate i Q1 etter lansering' },
              { stat: '3.2x', label: 'Gjennomsnittlig avkastning innen 12 måneder' },
              { stat: '40+', label: 'Bedriftsoppdrag levert' },
              { stat: '<6mnd', label: 'Gjennomsnittlig tid til målbar effekt' },
            ].map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.1}>
                <div>
                  <span className="block font-serif text-5xl md:text-6xl text-tenki-accent mb-4">{item.stat}</span>
                  <p className="font-sans text-stone-400 text-sm">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl text-tenki-text mb-8">
            See the method in action.
          </h2>
          <p className="text-tenki-muted text-lg max-w-xl mx-auto mb-12">
            Hver bedrifts vei er unik. La oss kartlegge din sammen.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-tenki-text text-white px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all hover:bg-tenki-accent hover:shadow-lg"
          >
            Bestill en uforpliktende samtale
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </section>
    </div>
  );
};

export default ApproachPage;
