"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <p className="hero-animate text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium" style={{ animationDelay: '0s' }}>
          Juridisk
        </p>
        <h1 className="hero-animate font-serif text-5xl md:text-7xl leading-[1.1] text-tenki-text mb-8" style={{ animationDelay: '0.15s' }}>
          Terms of Service
        </h1>
        <p className="hero-animate font-sans text-tenki-muted text-sm" style={{ animationDelay: '0.3s' }}>
          Sist oppdatert: Januar 2025
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="prose prose-stone max-w-none space-y-12">
          {[
            {
              title: '1. Aksept av vilkår',
              content: 'Ved å få tilgang til og bruke tjenestene levert av Tenki («vi», «oss», «vår») gjennom nettstedet tenki.no, godtar du og samtykker til å være bundet av disse vilkårene for bruk. Hvis du ikke godtar disse vilkårene, vennligst ikke bruk våre tjenester. Disse vilkårene utgjør en juridisk bindende avtale mellom deg og Tenki, etablert i 2025 og underlagt norsk lov.',
            },
            {
              title: '2. Beskrivelse av tjenester',
              content: 'Tenki leverer AI-rådgivningstjenester, inkludert, men ikke begrenset til, strategisk veiledning for AI-implementering, teknisk rådgivning, opplæring og relaterte profesjonelle tjenester. Det spesifikke omfanget, leveransene og tidslinjen for hvert oppdrag vil bli definert i separate tjenesteavtaler eller arbeidsbeskrivelser. Vi forbeholder oss retten til å endre, suspendere eller avvikle enhver del av våre tjenester når som helst.',
            },
            {
              title: '3. Immaterielle rettigheter',
              content: 'Alt innhold på tenki.no, inkludert tekst, grafikk, logoer, design og programvare, er eiendommen til Tenki eller dets lisensgivere og er beskyttet av norsk og internasjonal opphavsrett, varemerkerett og andre immaterielle rettigheter. Eventuelle leveranser som er spesifikt opprettet for kunder under en tjenesteavtale vil være regulert av vilkårene i den avtalen. Du kan ikke reprodusere, distribuere eller lage avledede verk fra innholdet på nettstedet vårt uten uttrykkelig skriftlig tillatelse.',
            },
            {
              title: '4. Brukerens ansvar',
              content: 'Du samtykker til å oppgi nøyaktig og fullstendig informasjon når du benytter våre tjenester eller kommuniserer med oss. Du er ansvarlig for å opprettholde konfidensialiteten til eventuelle kontolegitimasjoner og for all aktivitet som skjer under din konto. Du samtykker til å ikke bruke våre tjenester til ulovlige formål eller på en måte som kan skade, deaktivere eller svekke våre systemer eller forstyrre andre brukere.',
            },
            {
              title: '5. Ansvarsbegrensning',
              content: 'I den grad norsk lov tillater det, skal Tenki ikke være ansvarlig for indirekte, tilfeldige, spesielle, følgeskader eller straffeerstatning, inkludert tap av fortjeneste, data eller forretningsmuligheter, som følge av din bruk av våre tjenester eller nettsted. Vårt totale ansvar for eventuelle krav som oppstår fra våre tjenester skal ikke overstige honorarene betalt av deg for de spesifikke tjenestene i de 12 månedene før kravet. Noen jurisdiksjoner tillater ikke begrensninger på underforståtte garantier eller ansvar, så noen av disse begrensningene gjelder kanskje ikke for deg.',
            },
            {
              title: '6. Konfidensialitet',
              content: 'Begge parter samtykker til å opprettholde konfidensialiteten til eventuell proprietær eller sensitiv informasjon som avsles i løpet av vårt profesjonelle forhold. Denne forpliktelsen vedvarer etter opphør av våre tjenester. Spesifikke konfidensialitetsvilkår for individuelle prosjekter vil bli beskrevet i separate taushetserklæringer eller tjenestekontrakter etter behov.',
            },
            {
              title: '7. Gjeldende lov og tvister',
              content: 'Disse vilkårene for bruk skal være underlagt og tolkes i samsvar med norsk lov, uten hensyn til lovvalgsregler. Eventuelle tvister som oppstår fra disse vilkårene eller våre tjenester skal være underlagt norske domstolers eksklusive jurisdiksjon. Vi oppfordrer kunder til å kontakte oss først for å løse eventuelle bekymringer uformelt før formelle rettslige skritt.',
            },
            {
              title: '8. Oppsigelse',
              content: 'Begge parter kan avslutte et tjenesteoppdrag i henhold til vilkårene spesifisert i den relevante tjenesteavtalen. Vi forbeholder oss retten til å nekte tjenester eller avslutte vårt forhold til enhver kunde etter eget skjønn, med eller uten grunn. Ved oppsigelse må du slutte all bruk av våre proprietære materialer og konfidensiell informasjon. Bestemmelser om konfidensialitet, immaterielle rettigheter og ansvarsbegrensning vedvarer etter oppsigelse.',
            },
            {
              title: '9. Endringer i vilkårene',
              content: 'Vi forbeholder oss retten til å endre disse vilkårene for bruk når som helst. Endringer trår i kraft umiddelbart ved publisering på nettstedet vårt med oppdatert revisjonsdato. Din fortsatte bruk av våre tjenester etter slike endringer utgjør aksept av de endrede vilkårene. For vesentlige endringer vil vi gjøre rimelige anstrengelser for å varsle eksisterende kunder via e-post på hei@tenki.no.',
            },
            {
              title: '10. Kontaktinformasjon',
              content: 'Har du spørsmål om disse vilkårene for bruk, ta kontakt med oss på hei@tenki.no. For generelle henvendelser om våre tjenester kan du nå oss gjennom nettstedet vårt på tenki.no eller via e-post. Vi har som mål å svare på alle henvendelser innen 2 virkedager.',
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

export default TermsPage;
