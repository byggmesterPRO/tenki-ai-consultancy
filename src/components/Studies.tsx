"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const STUDIES = [
  {
    stat: '40%',
    label: 'raskere oppgavegjennomføring',
    source: 'MIT Economics',
    detail: 'Arbeidere som bruker AI til skriveoppgaver fullførte dem 40 % raskere med 18 % høyere kvalitet.',
    url: 'https://news.mit.edu/2023/study-finds-chatgpt-boosts-worker-productivity-writing-0714',
  },
  {
    stat: '14.2%',
    label: 'økning i produktivitet',
    source: 'MDPI Sustainability',
    detail: 'En 1 % økning i AI-adopsjon korrelerte med en 14,2 % økning i total faktorproduktivitet på bedriftsnivå.',
    url: 'https://www.mdpi.com/2071-1050/15/11/8934',
  },
  {
    stat: '4×',
    label: 'produktivitetsvekst',
    source: 'PwC Global AI Barometer',
    detail: 'Bransjer mest eksponert for AI opplevde opptil 4× høyere produktivitetsvekst og høyere inntekt per ansatt.',
    url: 'https://www.pwc.com/id/en/media-centre/press-release/2025/english/ai-linked-to-fourfold-productivity-growth-and-56-percent-wage-premium-jobs-grow-despite-automation-pwc-2025-global-ai-jobs-barometer.html',
  },
  {
    stat: '6.5%',
    label: 'økning i utviklerresultat',
    source: 'GitHub Copilot Research',
    detail: 'AI-kodegenerering økte prosjektproduktiviteten med 6,5 % og individuell utviklerytelse med 5,5 %.',
    url: 'https://arxiv.org/abs/2410.02091',
  },
];

const Studies: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-tenki-accent" strokeWidth={1.5} />
            <span className="text-tenki-accent font-sans uppercase tracking-widest text-xs font-semibold">
              Bevisene
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-tenki-text mb-6">
            AI fungerer. Her er bevisene.
          </h2>
          <p className="font-sans text-tenki-muted text-lg max-w-2xl mb-16">
            Uavhengig forskning fra ledende institusjoner bekrefter det våre kunder opplever direkte.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIES.map((study, i) => (
            <Reveal key={study.stat} delay={i * 0.1}>
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-stone-200 rounded-2xl p-8 hover:border-tenki-accent/40 hover:shadow-md transition-all duration-300 h-full"
              >
                <div className="text-5xl font-serif text-tenki-accent mb-2 font-bold">
                  {study.stat}
                </div>
                <p className="font-sans text-tenki-text font-medium mb-4 text-sm uppercase tracking-wide">
                  {study.label}
                </p>
                <p className="text-tenki-muted text-sm leading-relaxed mb-6">
                  {study.detail}
                </p>
                <div className="flex items-center gap-2 text-xs text-tenki-accent font-sans font-medium">
                  {study.source}
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
