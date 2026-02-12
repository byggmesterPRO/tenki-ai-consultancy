"use client";

import React, { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, Loader2, Mail, Phone, MapPin } from 'lucide-react';

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
        <p
          className="hero-animate text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
          style={{ animationDelay: '0s' }}
        >
          Ta kontakt
        </p>
        <h1
          className="hero-animate font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8 max-w-4xl"
          style={{ animationDelay: '0.15s' }}
        >
          Ready to optimize?
        </h1>
        <p
          className="hero-animate font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed"
          style={{ animationDelay: '0.3s' }}
        >
          Bestill en uforpliktende samtale. Vi diskuterer dine nåværende flaskehalser og kartlegger hvor AI kan gi høyest avkastning.
        </p>
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
                    <h3 className="font-sans font-semibold text-tenki-text mb-1">E-post</h3>
                    <p className="text-tenki-muted"><a href="mailto:hei@tenki.no" className="hover:text-tenki-accent transition-colors">hei@tenki.no</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-tenki-accent/10 text-tenki-accent">
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-tenki-text mb-1">Telefon</h3>
                    <p className="text-tenki-muted"><a href="tel:+4746135537" className="hover:text-tenki-accent transition-colors">+47 461 35 537</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-tenki-accent/10 text-tenki-accent">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-tenki-text mb-1">Web</h3>
                    <p className="text-tenki-muted"><a href="https://tenki.no" target="_blank" rel="noopener noreferrer" className="hover:text-tenki-accent transition-colors">tenki.no</a></p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl text-stone-50 mb-4">Hva du kan forvente</h3>
                  <ol className="space-y-4 text-stone-400">
                    <li className="flex gap-3">
                      <span className="text-tenki-accent font-semibold">1.</span>
                      <span>Send din henvendelse via skjemaet</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tenki-accent font-semibold">2.</span>
                      <span>En rådgiver svarer innen 24 timer</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tenki-accent font-semibold">3.</span>
                      <span>30 minutters uforpliktende samtale når det passer deg</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tenki-accent font-semibold">4.</span>
                      <span>Skreddersydd forslag innen én uke</span>
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
                    <h3 className="font-serif text-3xl text-tenki-text mb-4">Melding sendt</h3>
                    <p className="text-tenki-muted">Takk. En av våre rådgivere tar kontakt innen 24 timer.</p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="mt-8 text-tenki-accent underline hover:text-tenki-text transition-colors"
                    >
                      Send en ny melding
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs uppercase tracking-widest text-tenki-muted">Navn</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
                          placeholder="Ola Nordmann"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-xs uppercase tracking-widest text-tenki-muted">Bedrift</label>
                        <input
                          type="text"
                          id="company"
                          className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
                          placeholder="Bedrift AS"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-tenki-muted">Jobb-e-post</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
                        placeholder="ola@bedrift.no"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-xs uppercase tracking-widest text-tenki-muted">Tjeneste av interesse</label>
                      <select
                        id="service"
                        className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
                      >
                        <option value="">Velg en tjeneste...</option>
                        <option value="workflow">Arbeidsflytarkitektur</option>
                        <option value="agents">Skreddersydde AI-agenter</option>
                        <option value="data">Dataintelligens</option>
                        <option value="governance">Styring og sikkerhet</option>
                        <option value="unsure">Usikker ennå</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs uppercase tracking-widest text-tenki-muted">Utfordring / Mål</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text resize-none"
                        placeholder="Vi ønsker å automatisere vår kundemottaksprosess..."
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
                          Be om konsultasjon
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
