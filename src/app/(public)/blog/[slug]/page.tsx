import { getPostBySlug, getPosts } from "@/lib/db";
import { renderMarkdown } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import TagBadge from "@/components/blog/TagBadge";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    return { title: "Post Not Found | Tenki Blog" };
  }

  return {
    title: post.metaTitle || `${post.title} | Tenki Blog`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt || undefined,
      authors: [post.authorName || "Tenki"],
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post || !post.published) {
    notFound();
  }

  const htmlContent = await renderMarkdown(post.content);

  return (
    <article className="pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-tenki-muted hover:text-tenki-accent transition-colors text-sm font-sans mb-12"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 text-sm font-sans mb-6">
            {post.categoryName && (
              <Link
                href={`/blog?category=${post.categorySlug}`}
                className="text-tenki-accent font-medium uppercase tracking-widest text-xs hover:underline"
              >
                {post.categoryName}
              </Link>
            )}
            {post.publishedAt && (
              <span className="text-tenki-muted">
                {format(new Date(post.publishedAt), "MMMM d, yyyy")}
              </span>
            )}
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-tenki-text leading-tight mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="font-sans text-xl text-tenki-muted leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-stone-200">
            <div>
              <p className="font-sans font-medium text-tenki-text text-sm">
                {post.authorName || "Tenki Team"}
              </p>
              {post.publishedAt && (
                <p className="font-sans text-tenki-muted text-xs">
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")} &middot;{" "}
                  {Math.ceil(post.content.split(/\s+/).length / 200)} min read
                </p>
              )}
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="max-w-4xl mb-12">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-stone prose-lg max-w-3xl prose-headings:font-serif prose-headings:text-tenki-text prose-a:text-tenki-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-tenki-accent prose-blockquote:font-serif prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="max-w-3xl mt-12 pt-8 border-t border-stone-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <TagBadge key={tag.id} tag={tag} linked />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
