"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

const PhilosophyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <p
          className="hero-animate text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
          style={{ animationDelay: '0s' }}
        >
          Vår filosofi
        </p>
        <h1
          className="hero-animate font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8 max-w-4xl"
          style={{ animationDelay: '0.15s' }}
        >
          Utover <br className="hidden md:block" />
          <span className="italic text-tenki-accent">Algoritmen.</span>
        </h1>
        <p
          className="hero-animate font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed"
          style={{ animationDelay: '0.3s' }}
        >
          Vi tror kunstig intelligens ikke er en tryllestav, men et lag med infrastruktur. Som elektrisitet eller internett ligger verdien ikke i dens eksistens, men i dens anvendelse.
        </p>
      </section>

      {/* Core Beliefs */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-tenki-accent font-sans uppercase tracking-widest text-xs font-semibold block mb-4">Kjerneverdier</span>
            <h2 className="font-serif text-4xl md:text-5xl text-tenki-text mb-16">
              What drives every decision.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: 'Human-Centric',
                body: 'Automatisering skal frigjøre, ikke erstatte. Vi designer systemer som fjerner repetitivt slit, slik at dine menneskelige talenter kan fokusere på strategi, kreativitet og relasjoner. Hver arbeidsflyt vi bygger starter med menneskene som skal bruke den.',
              },
              {
                title: 'Transparent Systems',
                body: 'Svarte bokser er en forretningsrisiko. Vi prioriterer forklarbar AI og tydelig dokumentasjon, slik at du alltid forstår hvordan beslutningene dine støttes. Ingen skjulte lag, ingen uforklarlige resultater.',
              },
              {
                title: 'Sustainable Innovation',
                body: 'Vi bygger for lang sikt. Hver løsning er designet for å skalere elegant, tilpasse seg endrede krav og forbli vedlikeholdbar av ditt eget team lenge etter at oppdraget er avsluttet.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.15}>
                <div className="border-t-2 border-tenki-accent/20 pt-8">
                  <h3 className="font-sans font-semibold text-xl mb-4 text-tenki-text">{item.title}</h3>
                  <p className="text-tenki-muted leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Tenki Difference */}
      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl text-tenki-text mb-6">
                The Tenki Difference
              </h2>
              <div className="w-12 h-[2px] bg-tenki-text/10 mb-6"></div>
              <p className="font-sans text-sm tracking-widest uppercase text-tenki-muted">
                Etablert 2025
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-8">
            <Reveal delay={0.2}>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-tenki-text">
                De fleste konsulentselskaper selger AI som et produkt. Vi behandler det som et håndverk. Teamet vårt kombinerer dyp teknisk ekspertise med genuin forretningsforståelse for å levere resultater, ikke bare leveranser.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-tenki-muted leading-relaxed text-lg">
                Vi fordyper oss i din organisasjon. Vi sitter med teamene dine, forstår deres daglige utfordringer, og designer først da løsninger som føles naturlige fremfor påtvungne. Derfor har våre implementeringer en adopsjonsrate på 94 % i første kvartal.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-stone-900 text-stone-100 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50 mb-20">Våre verdier</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { num: '01', title: 'Integrity Over Speed', desc: 'Vi anbefaler alltid den riktige løsningen, selv om det betyr et mindre oppdrag. Tillit er grunnlaget for varige partnerskap.' },
              { num: '02', title: 'Clarity Over Complexity', desc: 'Vi kommuniserer på et klart språk. Hvis vi ikke kan forklare løsningen vår enkelt, har vi ikke forstått problemet godt nok.' },
              { num: '03', title: 'Ownership Over Dependency', desc: 'Vi trener teamene dine til å eie sine AI-systemer. Vårt mål er din uavhengighet, ikke dine gjentakende fakturaer.' },
              { num: '04', title: 'Evidence Over Hype', desc: 'Hver anbefaling er forankret i data og velprøvde metoder. Vi implementerer aldri teknologi for teknologiens skyld.' },
            ].map((v, i) => (
              <Reveal key={v.num} delay={i * 0.12}>
                <div className="border-t border-stone-700 pt-8 group">
                  <span className="block font-sans text-tenki-accent text-sm font-medium mb-4">{v.num}</span>
                  <h3 className="font-serif text-2xl mb-4 text-stone-200 group-hover:text-tenki-accent transition-colors duration-300">{v.title}</h3>
                  <p className="font-sans text-stone-400 leading-relaxed">{v.desc}</p>
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
            Ready to work differently?
          </h2>
          <p className="text-tenki-muted text-lg max-w-xl mx-auto mb-12">
            La oss vise deg hvordan AI kan styrke teamets evner uten å forstyrre det som allerede fungerer.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-tenki-text text-white px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all hover:bg-tenki-accent hover:shadow-lg"
          >
            Start samtalen
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </section>
    </div>
  );
};

export default PhilosophyPage;
