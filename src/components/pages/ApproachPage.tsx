"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const steps = [
  {
    id: '01',
    title: 'Discovery',
    subtitle: 'Weeks 1-2',
    description: 'We audit your current data landscape and identify high-impact bottlenecks.',
    details: [
      'Stakeholder interviews across departments',
      'Current technology stack assessment',
      'Data quality and availability audit',
      'Competitive landscape analysis',
      'Quick-win identification report',
    ],
  },
  {
    id: '02',
    title: 'Strategy',
    subtitle: 'Weeks 3-4',
    description: 'We design a roadmap prioritizing ROI and minimal operational disruption.',
    details: [
      'Prioritized opportunity matrix',
      'Technical architecture blueprint',
      'Risk assessment and mitigation plan',
      'Resource allocation and timeline',
      'Executive-ready business case',
    ],
  },
  {
    id: '03',
    title: 'Implementation',
    subtitle: 'Weeks 5-12',
    description: 'Our engineers deploy secure, scalable models tailored to your infrastructure.',
    details: [
      'Agile sprint-based development',
      'Continuous integration and testing',
      'Security-first deployment pipeline',
      'Stakeholder demos every two weeks',
      'Performance benchmarking against targets',
    ],
  },
  {
    id: '04',
    title: 'Enablement',
    subtitle: 'Weeks 12-16',
    description: 'We train your team to own the system, ensuring long-term independence.',
    details: [
      'Comprehensive team training workshops',
      'Technical documentation and runbooks',
      'Handoff to internal champions',
      '90-day post-launch support window',
      'Quarterly check-ins for continuous improvement',
    ],
  },
];

const ApproachPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <motion.p
          initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
        >
          Our Method
        </motion.p>
        <motion.h1
          initial="hidden" animate="visible" custom={1} variants={fade}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8 max-w-4xl"
        >
          The Tenki Method.
        </motion.h1>
        <motion.p
          initial="hidden" animate="visible" custom={2} variants={fade}
          className="font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed"
        >
          A disciplined, four-phase framework designed to mitigate risk and maximize value delivery. Every engagement follows this proven path from insight to independence.
        </motion.p>
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
              { stat: '94%', label: 'Adoption rate in Q1 post-launch' },
              { stat: '3.2x', label: 'Average ROI within 12 months' },
              { stat: '40+', label: 'Enterprise engagements delivered' },
              { stat: '<6mo', label: 'Average time to measurable impact' },
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
            Every company's path is unique. Let's map yours together.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-tenki-text text-white px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all hover:bg-tenki-accent hover:shadow-lg"
          >
            Book a Discovery Session
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </section>
    </div>
  );
};

export default ApproachPage;
