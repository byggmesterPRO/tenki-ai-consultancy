"use client";

import React, { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-tenki-bg border-t border-stone-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <div>
            <Reveal>
              <h2 className="font-serif text-4xl md:text-6xl text-tenki-text mb-8">
                Ready to optimize?
              </h2>
              <p className="font-sans text-tenki-muted text-lg mb-12 max-w-md">
                Schedule a discovery call. We'll discuss your current bottlenecks and outline where AI can deliver the highest ROI.
              </p>

              <div className="space-y-4 font-sans text-tenki-text">
                <p>hello@tenki.ai</p>
                <p>+49 (0) 30 1234 5678</p>
                <p className="text-tenki-muted">Friedrichstraße 12, Berlin</p>
              </div>
            </Reveal>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            {formState === 'success' ? (
              <Reveal>
                <div className="h-full flex flex-col justify-center items-center text-center min-h-[400px]">
                  <h3 className="font-serif text-3xl text-tenki-text mb-4">Message Sent</h3>
                  <p className="text-tenki-muted">Thank you. One of our strategists will be in touch within 24 hours.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-tenki-accent underline hover:text-tenki-text transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Reveal delay={0.1}>
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
                </Reveal>

                <Reveal delay={0.2}>
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
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-tenki-muted">Challenge / Goal</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text resize-none"
                      placeholder="We are looking to automate our customer intake process..."
                    ></textarea>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
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
                </Reveal>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
