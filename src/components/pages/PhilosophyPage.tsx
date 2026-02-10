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

const PhilosophyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <motion.p
          initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
        >
          Our Philosophy
        </motion.p>
        <motion.h1
          initial="hidden" animate="visible" custom={1} variants={fade}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8 max-w-4xl"
        >
          Beyond the <br className="hidden md:block" />
          <span className="italic text-tenki-accent">Algorithm.</span>
        </motion.h1>
        <motion.p
          initial="hidden" animate="visible" custom={2} variants={fade}
          className="font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed"
        >
          We believe Artificial Intelligence is not a magic wand, but a layer of infrastructure. Like electricity or the internet, its value lies not in its existence, but in its application.
        </motion.p>
      </section>

      {/* Core Beliefs */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-tenki-accent font-sans uppercase tracking-widest text-xs font-semibold block mb-4">Core Beliefs</span>
            <h2 className="font-serif text-4xl md:text-5xl text-tenki-text mb-16">
              What drives every decision.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: 'Human-Centric',
                body: 'Automation should liberate, not replace. We design systems that remove repetitive drudgery, allowing your human talent to focus on strategy, creativity, and connection. Every workflow we build starts with the people who will use it.',
              },
              {
                title: 'Transparent Systems',
                body: 'Black boxes are a business risk. We prioritize explainable AI models and clear documentation, ensuring you always understand how your decisions are being supported. No hidden layers, no unexplainable outputs.',
              },
              {
                title: 'Sustainable Innovation',
                body: 'We build for the long term. Every solution is designed to scale gracefully, adapt to changing requirements, and remain maintainable by your own team long after our engagement ends.',
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
                Established 2025
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-8">
            <Reveal delay={0.2}>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-tenki-text">
                Most consultancies sell AI as a product. We treat it as a craft. Our team combines deep technical expertise with genuine business understanding to deliver outcomes, not just outputs.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-tenki-muted leading-relaxed text-lg">
                We immerse ourselves in your organization. We sit with your teams, understand their daily challenges, and only then design solutions that feel natural rather than imposed. This is why our implementations have a 94% adoption rate within the first quarter.
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
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50 mb-20">Our Values</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { num: '01', title: 'Integrity Over Speed', desc: 'We will always recommend the right solution, even if it means a smaller engagement. Trust is the foundation of lasting partnerships.' },
              { num: '02', title: 'Clarity Over Complexity', desc: 'We communicate in plain language. If we cannot explain our solution simply, we have not understood the problem well enough.' },
              { num: '03', title: 'Ownership Over Dependency', desc: 'We train your teams to own their AI systems. Our goal is your independence, not your recurring invoices.' },
              { num: '04', title: 'Evidence Over Hype', desc: 'Every recommendation is grounded in data and proven methodologies. We never deploy technology for its own sake.' },
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
            Let us show you how AI can enhance your team's capabilities without disrupting what already works.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-tenki-text text-white px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all hover:bg-tenki-accent hover:shadow-lg"
          >
            Start the Conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </section>
    </div>
  );
};

export default PhilosophyPage;
