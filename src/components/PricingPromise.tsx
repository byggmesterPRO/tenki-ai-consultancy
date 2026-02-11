"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import revenueLottie from '@/assets/lottie/revenue.lottie';
import Link from 'next/link';

const PricingPromise: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="bg-tenki-text text-white rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                  You don&apos;t pay if you don&apos;t save.
                </h2>

                <p className="font-sans text-stone-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
                  Our goal is to make you money, not take it. We&apos;re so confident in our work that we tie our fees to your results. No measurable savings? No charge.
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-tenki-accent text-white px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all hover:bg-tenki-accent/90 hover:shadow-lg"
                >
                  Start a Risk-Free Conversation
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex items-center justify-center"
                style={{ filter: 'brightness(1.1) saturate(0.8)' }}
              >
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full scale-150 sm:scale-125 md:scale-110 lg:scale-110 origin-center">
                  <DotLottieReact
                    src={revenueLottie}
                    loop
                    autoplay
                    speed={0.5}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PricingPromise;
