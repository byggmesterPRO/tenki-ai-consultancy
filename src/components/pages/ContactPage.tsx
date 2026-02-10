"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, Loader2, Mail, Phone, MapPin } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <motion.p
          initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
        >
          Get in Touch
        </motion.p>
        <motion.h1
          initial="hidden" animate="visible" custom={1} variants={fade}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8 max-w-4xl"
        >
          Ready to optimize?
        </motion.h1>
        <motion.p
          initial="hidden" animate="visible" custom={2} variants={fade}
          className="font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed"
        >
          Schedule a discovery call. We'll discuss your current bottlenecks and outline where AI can deliver the highest ROI.
        </motion.p>
      </section>

      {/* Contact Info + Form */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left - Contact Details */}
          <div>
            <Reveal>
              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-tenki-accent/10 text-tenki-accent">
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-tenki-text mb-1">Email</h3>
                    <p className="text-tenki-muted">hello@tenki.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-tenki-accent/10 text-tenki-accent">
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-tenki-text mb-1">Phone</h3>
                    <p className="text-tenki-muted">+49 (0) 30 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-tenki-accent/10 text-tenki-accent">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-tenki-text mb-1">Office</h3>
                    <p className="text-tenki-muted">Friedrichstraße 12<br />10117 Berlin, Germany</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl text-stone-50 mb-4">What to expect</h3>
                  <ol className="space-y-4 text-stone-400">
                    <li className="flex gap-3">
                      <span className="text-tenki-accent font-semibold">1.</span>
                      <span>Submit your inquiry via the form</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tenki-accent font-semibold">2.</span>
                      <span>A strategist responds within 24 hours</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tenki-accent font-semibold">3.</span>
                      <span>30-minute discovery call at your convenience</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tenki-accent font-semibold">4.</span>
                      <span>Custom proposal within one week</span>
                    </li>
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right - Form */}
          <div>
            <Reveal>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                {formState === 'success' ? (
                  <div className="h-full flex flex-col justify-center items-center text-center min-h-[500px]">
                    <h3 className="font-serif text-3xl text-tenki-text mb-4">Message Sent</h3>
                    <p className="text-tenki-muted">Thank you. One of our strategists will be in touch within 24 hours.</p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="mt-8 text-tenki-accent underline hover:text-tenki-text transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs uppercase tracking-widest text-tenki-muted">Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-xs uppercase tracking-widest text-tenki-muted">Company</label>
                        <input
                          type="text"
                          id="company"
                          className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-tenki-muted">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-xs uppercase tracking-widest text-tenki-muted">Service of Interest</label>
                      <select
                        id="service"
                        className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
                      >
                        <option value="">Select a service...</option>
                        <option value="workflow">Workflow Architecture</option>
                        <option value="agents">Custom AI Agents</option>
                        <option value="data">Data Intelligence</option>
                        <option value="governance">Governance & Security</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs uppercase tracking-widest text-tenki-muted">Challenge / Goal</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text resize-none"
                        placeholder="We are looking to automate our customer intake process..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full bg-tenki-text text-white py-5 rounded-lg font-medium hover:bg-tenki-accent transition-colors duration-300 flex justify-center items-center gap-2 group"
                    >
                      {formState === 'loading' ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <>
                          Request Consultation
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
