"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { Network, Cpu, LineChart, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const services = [
  {
    icon: Network,
    title: 'Workflow Architecture',
    tagline: 'Map, optimize, automate.',
    description: 'We map your existing processes to identify friction points where AI can introduce fluidity and speed without disrupting your core culture.',
    details: [
      'End-to-end process mapping and bottleneck analysis',
      'Custom automation pipeline design',
      'Integration with existing tools and systems',
      'Change management and team adoption planning',
      'Measurable KPI tracking and optimization loops',
    ],
  },
  {
    icon: Cpu,
    title: 'Custom AI Agents',
    tagline: 'Intelligent assistants, built for you.',
    description: 'Bespoke large language models tuned to your internal data, creating tireless assistants for customer support, legal analysis, or creative drafting.',
    details: [
      'Fine-tuned LLMs trained on your proprietary data',
      'Multi-modal agents (text, vision, structured data)',
      'Secure deployment within your infrastructure',
      'Continuous learning and model improvement cycles',
      'Human-in-the-loop quality assurance systems',
    ],
  },
  {
    icon: LineChart,
    title: 'Data Intelligence',
    tagline: 'Turn dormant data into foresight.',
    description: 'Turning dormant data into decision-making power. We build predictive pipelines that give your leadership team a view around the corner.',
    details: [
      'Data lake architecture and governance',
      'Predictive analytics and forecasting models',
      'Real-time dashboard and reporting systems',
      'Natural language querying for non-technical stakeholders',
      'Anomaly detection and automated alerting',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Governance & Security',
    tagline: 'Innovation without risk.',
    description: 'We implement rigid security protocols and ethical guidelines to ensure your AI adoption is safe, compliant, and sustainable.',
    details: [
      'AI ethics framework development',
      'GDPR and regulatory compliance audits',
      'Model bias detection and mitigation',
      'Data privacy and encryption architecture',
      'Incident response and monitoring protocols',
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <motion.p
          initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
        >
          Our Expertise
        </motion.p>
        <motion.h1
          initial="hidden" animate="visible" custom={1} variants={fade}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8 max-w-4xl"
        >
          Precision tools for <br className="hidden md:block" />
          modern challenges.
        </motion.h1>
        <motion.p
          initial="hidden" animate="visible" custom={2} variants={fade}
          className="font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed"
        >
          We offer a focused set of services, each refined through hundreds of enterprise engagements. No bloated portfolios. Just deep expertise where it matters.
        </motion.p>
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
                    <h3 className="font-sans font-semibold text-lg text-tenki-text mb-8">What's included</h3>
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
              Most engagements combine multiple services. Tell us about your challenge and we'll design a custom approach.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-tenki-text px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all hover:bg-tenki-accent hover:text-white hover:shadow-lg"
            >
              Schedule a Discovery Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
