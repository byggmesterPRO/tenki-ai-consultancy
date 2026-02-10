"use client";

import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, Newspaper } from 'lucide-react';

const BlogPreview: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="w-5 h-5 text-tenki-accent" strokeWidth={1.5} />
                <span className="text-tenki-accent font-sans uppercase tracking-widest text-xs font-semibold">
                  From the Blog
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-tenki-text">
                Latest insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-2 text-sm font-sans text-tenki-text hover:text-tenki-accent transition-colors group"
            >
              View all posts
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'How AI is Reshaping Knowledge Work',
              excerpt: 'MIT researchers found that AI-assisted workers complete writing tasks 40% faster. Here\'s what that means for your team.',
              category: 'Research',
              date: 'Jan 2025',
            },
            {
              title: 'The Real ROI of AI Integration',
              excerpt: 'Beyond the hype: practical frameworks for measuring the actual return on your AI investments.',
              category: 'Strategy',
              date: 'Dec 2024',
            },
            {
              title: 'Building AI Systems That Last',
              excerpt: 'Why sustainable AI infrastructure matters more than rapid deployment, and how to get it right from day one.',
              category: 'Engineering',
              date: 'Nov 2024',
            },
          ].map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <Link href="/blog" className="group block bg-white rounded-2xl p-8 border border-stone-100 hover:border-tenki-accent/30 hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4 text-xs font-sans">
                  <span className="text-tenki-accent font-medium uppercase tracking-widest">{post.category}</span>
                  <span className="text-tenki-muted">{post.date}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-tenki-text mb-3 group-hover:text-tenki-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-tenki-muted text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-sans text-tenki-text hover:text-tenki-accent transition-colors"
            >
              View all posts
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BlogPreview;
