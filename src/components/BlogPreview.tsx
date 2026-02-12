import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, Newspaper } from 'lucide-react';
import { getPosts } from '@/lib/db';

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('nb-NO', { month: 'short', year: 'numeric' });
}

const BlogPreview = async () => {
  const { posts } = await getPosts({ published: true, limit: 3 });

  return (
    <section className="py-24 md:py-32 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="w-5 h-5 text-tenki-accent" strokeWidth={1.5} />
                <span className="text-tenki-accent font-sans uppercase tracking-widest text-xs font-semibold">
                  Fra bloggen
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
              Se alle innlegg
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl p-8 border border-stone-100 hover:border-tenki-accent/30 hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4 text-xs font-sans">
                  <span className="text-tenki-accent font-medium uppercase tracking-widest">{post.categoryName}</span>
                  <span className="text-tenki-muted">{post.publishedAt ? formatDate(post.publishedAt) : ''}</span>
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
              Se alle innlegg
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BlogPreview;
