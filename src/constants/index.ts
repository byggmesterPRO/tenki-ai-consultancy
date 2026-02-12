import { NavItem, Service, Testimonial } from '@/types';
import { Network, Cpu, LineChart, ShieldCheck } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Filosofi', href: '/philosophy' },
  { label: 'Tjenester', href: '/services' },
  { label: 'Prosjekter', href: '/projects' },
  { label: 'Blogg', href: '/blog' },
  { label: 'Kontakt', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Arbeidsflytarkitektur',
    description: 'Vi kartlegger dine eksisterende prosesser for å identifisere friksjonspunkter der AI kan introdusere flyt og hastighet uten å forstyrre din kjernekultur.',
    icon: Network,
  },
  {
    title: 'Skreddersydde AI-agenter',
    description: 'Skreddersydde store språkmodeller tilpasset dine interne data, som skaper utrettelige assistenter for kundeservice, juridisk analyse eller kreativ utforming.',
    icon: Cpu,
  },
  {
    title: 'Dataintelligens',
    description: 'Vi gjør sovende data om til beslutningskraft. Vi bygger prediktive rørledninger som gir ledergruppen din et blikk rundt hjørnet.',
    icon: LineChart,
  },
  {
    title: 'Styring og sikkerhet',
    description: 'Innovasjon uten risiko. Vi implementerer strenge sikkerhetsprotokoller og etiske retningslinjer for å sikre at din AI-adopsjon er trygg, regelverkskonform og bærekraftig.',
    icon: ShieldCheck,
  },
];

export const TESTIMONIAL: Testimonial = {
  quote: "Tenki solgte oss ikke bare et verktøy. De redesignet hvordan teamene våre kommuniserer, fjernet slitet og etterlot oss med arbeidet som virkelig betyr noe.",
  author: "Elena Visser",
  role: "Driftssjef",
  company: "Nordic Logistics Group",
};
