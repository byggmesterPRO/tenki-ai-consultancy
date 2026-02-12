"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import LazyLottie from '@/components/ui/LazyLottie';
import educationLottie from '@/assets/lottie/education.lottie';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 lg:pb-0 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroScaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero-scale {
          opacity: 0;
          animation: heroScaleIn 1.2s cubic-bezier(0.16,1,0.3,1) 0.6s forwards;
        }
      `}} />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-200/30 to-transparent -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-tenki-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Text content */}
          <div>
            <p
              className="hero-animate text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
              style={{ animationDelay: '0.2s' }}
            >
              Intelligent Automatisering
            </p>

            <h1
              className="hero-animate font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8"
              style={{ animationDelay: '0.4s' }}
            >
              Unlocking <br className="hidden md:block" />
              intelligence.
            </h1>

            <p
              className="hero-animate font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed mb-12"
              style={{ animationDelay: '0.6s' }}
            >
              Tenki hjelper fremtidsrettede selskaper med å bygge motstandsdyktighet gjennom praktisk AI-integrasjon. Vi erstatter hype med systemer som fungerer.
            </p>

            <div
              className="hero-animate flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              style={{ animationDelay: '0.8s' }}
            >
              <a
                href="/contact"
                className="group flex items-center gap-3 bg-tenki-text text-white px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all hover:bg-tenki-accent hover:shadow-lg"
              >
                Start samtalen
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-tenki-muted text-sm font-sans">
                Etablert 2025 · Tar imot nye samarbeid
              </span>
            </div>
          </div>

          {/* Lottie Animation — equal height to text column, visible on all screens */}
          <div className="hero-scale flex items-center justify-center lg:justify-end">
            <div
              className="w-full scale-[1.8] sm:scale-[1.9] lg:scale-[1.875] origin-center [&_canvas]:!bg-transparent"
            >
              <LazyLottie
                src={educationLottie}
                loop
                autoplay
                speed={0.25}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-animate absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        style={{ animationDelay: '1.5s' }}
      >
        <span className="text-[10px] uppercase tracking-widest text-tenki-muted/50">Bla ned</span>
        <div className="w-[1px] h-12 bg-tenki-muted/20"></div>
      </div>
    </section>
  );
};

export default Hero;
