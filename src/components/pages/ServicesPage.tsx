"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { Network, Cpu, LineChart, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Network,
    title: 'Workflow Architecture',
    tagline: 'Kartlegg, optimaliser, automatiser.',
    description: 'Vi kartlegger dine eksisterende prosesser for å identifisere friksjonspunkter der AI kan introdusere flyt og hastighet uten å forstyrre din kjernekultur.',
    details: [
      'Ende-til-ende prosesskartlegging og flaskehalsanalyse',
      'Skreddersydd design av automatiseringspipeline',
      'Integrasjon med eksisterende verktøy og systemer',
      'Endringsledelse og planlegging for teamadopsjon',
      'Målbar KPI-sporing og optimaliseringsløkker',
    ],
  },
  {
    icon: Cpu,
    title: 'Custom AI Agents',
    tagline: 'Intelligente assistenter, bygget for deg.',
    description: 'Skreddersydde store språkmodeller tilpasset dine interne data, som skaper utrettelige assistenter for kundeservice, juridisk analyse eller kreativ utforming.',
    details: [
      'Finjusterte LLM-er trent på dine proprietære data',
      'Multimodale agenter (tekst, bilde, strukturerte data)',
      'Sikker distribusjon innenfor din infrastruktur',
      'Kontinuerlig læring og modellforbedringsykluser',
      'Kvalitetssikringssystemer med menneske i løkken',
    ],
  },
  {
    icon: LineChart,
    title: 'Data Intelligence',
    tagline: 'Gjør sovende data til framsyn.',
    description: 'Vi gjør sovende data om til beslutningskraft. Vi bygger prediktive rørledninger som gir ledergruppen din et blikk rundt hjørnet.',
    details: [
      'Datainnsjøarkitektur og styring',
      'Prediktiv analyse og prognosemodeller',
      'Sanntids dashbord og rapporteringssystemer',
      'Naturlig språk-spørringer for ikke-tekniske interessenter',
      'Anomalideteksjon og automatisk varsling',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Governance & Security',
    tagline: 'Innovasjon uten risiko.',
    description: 'Vi implementerer strenge sikkerhetsprotokoller og etiske retningslinjer for å sikre at din AI-adopsjon er trygg, regelverkskonform og bærekraftig.',
    details: [
      'Utvikling av etisk rammeverk for AI',
      'GDPR- og regelverksrevisjoner',
      'Deteksjon og reduksjon av modellskjevhet',
      'Arkitektur for personvern og kryptering',
      'Hendelsesrespons og overvåkingsprotokoller',
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <p
          className="hero-animate text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
          style={{ animationDelay: '0s' }}
        >
          Vår ekspertise
        </p>
        <h1
          className="hero-animate font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8 max-w-4xl"
          style={{ animationDelay: '0.15s' }}
        >
          Precision tools for <br className="hidden md:block" />
          modern challenges.
        </h1>
        <p
          className="hero-animate font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed"
          style={{ animationDelay: '0.3s' }}
        >
          Vi tilbyr et fokusert sett med tjenester, hver foredlet gjennom hundrevis av bedriftsoppdrag. Ingen oppblåste porteføljer. Bare dyp ekspertise der det betyr noe.
        </p>
      </section>

      {/* Services Detail */}
      {services.map((service, idx) => (
        <section
          key={service.title}
          className={`py-24 md:py-32 ${idx % 2 === 0 ? 'bg-white' : 'bg-tenki-bg'}`}
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-tenki-accent/10 text-tenki-accent">
                    <service.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-tenki-text mb-4">
                    {service.title}
                  </h2>
                  <p className="font-sans text-tenki-accent text-lg font-medium mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-tenki-muted leading-relaxed text-lg">
                    {service.description}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.2}>
                  <div className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100">
                    <h3 className="font-sans font-semibold text-lg text-tenki-text mb-8">Hva som er inkludert</h3>
                    <ul className="space-y-5">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-5 h-5 text-tenki-accent mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-tenki-text leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 md:py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50 mb-8">
              Not sure which service fits?
            </h2>
            <p className="text-stone-400 text-lg max-w-xl mx-auto mb-12">
              De fleste oppdrag kombinerer flere tjenester. Fortell oss om din utfordring, så designer vi en skreddersydd tilnærming.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-tenki-text px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all hover:bg-tenki-accent hover:text-white hover:shadow-lg"
            >
              Bestill en uforpliktende samtale
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
