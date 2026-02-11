"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 lg:pb-0 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-200/30 to-transparent -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-tenki-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Text content */}
          <div>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium"
            >
              Intelligent Automation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-tenki-text mb-8"
            >
              Unlocking <br className="hidden md:block" />
              intelligence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-sans text-lg md:text-xl text-tenki-muted max-w-2xl leading-relaxed mb-12"
            >
              Tenki helps forward-thinking companies build resilience through practical AI integration. We replace hype with systems that work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              <a
                href="/contact"
                className="group flex items-center gap-3 bg-tenki-text text-white px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all hover:bg-tenki-accent hover:shadow-lg"
              >
                Start the Conversation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-tenki-muted text-sm font-sans">
                Established 2025 · Accepting new partnerships
              </span>
            </motion.div>
          </div>

          {/* Lottie Animation — equal height to text column, visible on all screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div
              className="w-full scale-[1.8] sm:scale-[1.9] lg:scale-[1.875] origin-center [&_canvas]:!bg-transparent"
            >
              <DotLottieReact
                src="/lottie/education.lottie"
                loop
                autoplay
                speed={0.25}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-tenki-muted/50">Scroll</span>
        <div className="w-[1px] h-12 bg-tenki-muted/20"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
