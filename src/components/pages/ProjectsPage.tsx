"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sanntids klasse- og timeplanadministrasjon",
    client: "EdTech",
    link: "https://klasseplanen.no/",
    description:
      "Utviklet en svært responsiv webapplikasjon for timeplanstyring, elevadministrasjon og undervisningsplanlegging, optimalisert for hastighet, brukervennlighet og skalerbarhet på tvers av utdanningsinstitusjoner.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    results: [
      "Lynraske sidelastinger med server-side rendering",
      "Mobil-først, fullt responsivt UI for daglig lærerbruk",
      "Skalerbar arkitektur klargjort for flerskoleutbredelse",
    ],
  },
  {
    title: "Høyytelses netthandelsplattform for lokal mathandel",
    client: "E-Commerce",
    link: "https://viltbutikken.no/",
    description:
      "Bygget en moderne, ytelsesoptimalisert netthandelsløsning med fokus på rask utsjekking, responsivt design og sømløs produktadministrasjon.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    results: [
      "Forbedret konverteringsrate gjennom rask, friksjonsløs UX",
      "Fullt responsiv butikkfront på alle enheter",
      "Skalerbar betalings- og bestillingsinfrastruktur",
    ],
  },
  {
    title: "Moderne studie- og produktivitetsplattform",
    client: "EdTech",
    link: "https://studdy.no/",
    description:
      "Laget en responsiv, app-lignende læringsplattform designet for å hjelpe studenter med å strukturere studieøkter, spore fremgang og få tilgang til læringsverktøy på tvers av enheter.",
    technologies: ["Vite", "React", "TypeScript", "IndexedDB", "Tailwind CSS"],
    results: [
      "Umiddelbar UI-respons med klient-side rendering",
      "Offline-vennlig design for fleksibel studering",
      "Høyt engasjement gjennom rent, distraksjonsfritt UX",
    ],
  },
  {
    title: "Høyytelses personlig nettsted og portefølje",
    client: "Personlig merkevare / Portefølje",
    link: "https://eirikfjelde.no/",
    description:
      "Designet og bygget et lynraskt personlig nettsted med fokus på ytelse, tilgjengelighet og moderne frontend-beste praksis.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    results: [
      "Under ett sekund lastetid globalt",
      "Fullt responsivt og tilgjengelighetsoptimalisert",
      "SEO-optimalisert arkitektur med moderne verktøy",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-tenki-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-tenki-accent font-sans text-sm uppercase tracking-wider mb-4">
              Prosjekter
            </p>
            <h1 className="text-tenki-text font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Våre prosjekter
            </h1>
            <p className="text-tenki-muted font-sans text-lg md:text-xl max-w-3xl mx-auto">
              Oppdag hvordan vi har hjulpet organisasjoner på tvers av bransjer
              med å utnytte teknologi for å løse komplekse utfordringer og levere
              målbare resultater.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors duration-300"
              >
                {/* Client Badge */}
                <div className="inline-block bg-tenki-accent/10 border border-tenki-accent/30 rounded-full px-4 py-1 mb-4">
                  <span className="text-tenki-accent font-sans text-xs uppercase tracking-wider">
                    {project.client}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="text-tenki-text font-serif text-3xl mb-4">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-tenki-muted font-sans text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-tenki-text font-sans text-sm uppercase tracking-wider mb-3">
                    Teknologier
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/5 border border-white/10 rounded px-3 py-1 text-tenki-muted font-sans text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h3 className="text-tenki-text font-sans text-sm uppercase tracking-wider mb-3">
                    Resultater
                  </h3>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="text-tenki-muted font-sans text-sm flex items-start"
                      >
                        <span className="text-tenki-accent mr-2 mt-1">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-tenki-accent font-sans text-sm hover:underline transition-colors duration-300"
                >
                  Besøk prosjektet
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal>
          <div
            className="text-center mt-20 p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
          >
            <h2 className="text-tenki-text font-serif text-4xl mb-4">
              Klar for å starte ditt prosjekt?
            </h2>
            <p className="text-tenki-muted font-sans text-lg mb-8 max-w-2xl mx-auto">
              La oss diskutere hvordan vi kan hjelpe deg med å utnytte teknologi
              for å transformere din virksomhet.
            </p>
            <a
              href="/contact"
              className="inline-block bg-tenki-accent hover:bg-tenki-accent/90 text-tenki-bg font-sans font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Ta kontakt
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
