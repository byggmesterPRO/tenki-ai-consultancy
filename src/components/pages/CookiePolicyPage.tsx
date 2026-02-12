"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <p className="hero-animate text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium" style={{ animationDelay: '0s' }}>
          Juridisk
        </p>
        <h1 className="hero-animate font-serif text-5xl md:text-7xl leading-[1.1] text-tenki-text mb-8" style={{ animationDelay: '0.15s' }}>
          Cookie Policy
        </h1>
        <p className="hero-animate font-sans text-tenki-muted text-sm" style={{ animationDelay: '0.3s' }}>
          Sist oppdatert: Januar 2025
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="prose prose-stone max-w-none space-y-12">
          {[
            {
              title: '1. Hva er informasjonskapsler',
              content: 'Informasjonskapsler er små tekstfiler som plasseres på enheten din (datamaskin, smarttelefon eller nettbrett) når du besøker et nettsted. De brukes i stor utstrekning for å få nettsteder til å fungere mer effektivt, gi en bedre brukeropplevelse og levere informasjon til nettstedets eiere. Informasjonskapsler kan være "vedvarende" eller "sesjonbaserte". Vedvarende kapsler forblir på enheten din etter at du lukker nettleseren, mens sesjonskapsler slettes når du lukker nettleseren.',
            },
            {
              title: '2. Hvordan vi bruker informasjonskapsler',
              content: 'Tenki bruker informasjonskapsler på tenki.no for å forbedre din nettleseropplevelse, forstå hvordan besøkende samhandler med nettstedet vårt og forbedre våre tjenester. Vi bruker informasjonskapsler for å huske dine preferanser, analysere nettstedstrafikk og ytelse, og sikre plattformens sikkerhet. Vi bruker ikke informasjonskapsler til å identifisere deg personlig eller spore aktivitetene dine på andre nettsteder uten ditt uttrykkelige samtykke.',
            },
            {
              title: '3. Typer informasjonskapsler vi bruker',
              content: 'Vi bruker flere kategorier av informasjonskapsler på nettstedet vårt. Nødvendige kapsler er påkrevd for at nettstedet skal fungere korrekt og kan ikke deaktiveres. Disse inkluderer kapsler som gjør det mulig å navigere på nettstedet og bruke dets funksjoner. Analysekapsler hjelper oss å forstå hvordan besøkende bruker nettstedet vårt ved å samle inn anonym informasjon om besøkte sider, tid brukt på nettstedet og eventuelle feil. Preferansekapsler husker dine innstillinger og valg for å gi en mer personlig opplevelse ved fremtidige besøk.',
            },
            {
              title: '4. Nødvendige informasjonskapsler',
              content: 'Nødvendige informasjonskapsler er strengt nødvendige for å gi deg tjenester tilgjengelig gjennom nettstedet vårt og for å bruke noen av funksjonene. Disse kapslene muliggjør kjernefunksjonalitet som sikkerhet, nettverksadministrasjon og tilgjengelighet. Uten disse kapslene kan ikke tjenester du har bedt om leveres. Nødvendige kapsler krever ikke ditt samtykke og plasseres automatisk når du besøker nettstedet vårt.',
            },
            {
              title: '5. Analysekapsler',
              content: 'Med ditt samtykke bruker vi analysekapsler for å samle inn informasjon om hvordan besøkende bruker tenki.no. Disse kapslene samler inn anonyme data som antall besøkende, hvor besøkende kommer fra og hvilke sider de besøker. Vi bruker denne informasjonen til å forbedre nettstedet vårt, forstå brukeratferd og måle effektiviteten av innholdet vårt. Analysekapsler samler ikke inn personopplysninger som direkte identifiserer deg.',
            },
            {
              title: '6. Preferansekapsler',
              content: 'Preferansekapsler, også kjent som funksjonalitetskapsler, gjør at nettstedet vårt kan huske valg du tar og gi forbedrede, mer personlige funksjoner. Disse kan inkludere dine språkpreferanser, region eller visningsinnstillinger. Informasjonen disse kapslene samler inn kan være anonymisert, og de kan ikke spore nettleseraktiviteten din på andre nettsteder. Disse kapslene krever ditt samtykke før de plasseres på enheten din.',
            },
            {
              title: '7. Tredjepartskapsler',
              content: 'Noen informasjonskapsler på tenki.no kan settes av tredjepartstjenester som vises på sidene våre. Disse tredjepartskapslene er underlagt de respektive personvern- og informasjonskapselretningslinjene til disse eksterne tjenestene. Vi velger våre tredjepartsleverandører nøye og sikrer at de overholder gjeldende personvernregelverk, inkludert GDPR. Vi kontrollerer ikke disse tredjepartskapslene og anbefaler å gjennomgå personvernretningslinjene til disse tjenestene.',
            },
            {
              title: '8. Hvordan administrere informasjonskapsler',
              content: 'De fleste nettlesere lar deg kontrollere informasjonskapsler gjennom innstillingene. Du kan stille inn nettleseren til å avvise kapsler eller slette bestemte kapsler. Vær oppmerksom på at hvis du deaktiverer nødvendige kapsler, kan noen funksjoner på tenki.no slutte å fungere korrekt. Nettleserinnstillinger lar deg vanligvis se hvilke kapsler som er lagret, slette dem enkeltvis eller alle på en gang, og blokkere kapsler fra spesifikke eller alle nettsteder. Se nettleserens hjelpedokumentasjon for spesifikke instruksjoner.',
            },
            {
              title: '9. Samtykke for informasjonskapsler',
              content: 'Når du første gang besøker tenki.no, vil du bli presentert med et samtykkebanner som forklarer vår bruk av informasjonskapsler. Du kan velge å godta eller avvise ikke-nødvendige kapsler. Du kan trekke tilbake eller endre samtykket når som helst gjennom innstillingene for informasjonskapsler på nettstedet vårt. Dine samtykkevalg lagres i en informasjonskapsel slik at vi kan huske preferansene dine ved fremtidige besøk.',
            },
            {
              title: '10. Kontakt oss',
              content: 'Har du spørsmål om vår bruk av informasjonskapsler eller denne retningslinjen, ta kontakt med oss på hei@tenki.no. Vi er forpliktet til åpenhet og hjelper gjerne med ytterligere informasjon om hvordan vi bruker informasjonskapsler på nettstedet vårt. For generelle personvernhenvendelser, se vår personvernerklæring eller ta direkte kontakt med oss.',
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

export default CookiePolicyPage;
