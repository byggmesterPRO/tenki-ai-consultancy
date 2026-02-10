import { getPosts, getCategories } from "@/lib/db";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Tenki AI Consultancy",
  description:
    "Insights on AI integration, workflow automation, and digital transformation from the Tenki team.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; tag?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const category = params.category;
  const tag = params.tag;

  const limit = 10;
  const [postsResult, categories] = await Promise.all([
    getPosts({
      published: true,
      categorySlug: category,
      tagSlug: tag,
      limit,
      offset: (page - 1) * limit,
    }).catch(() => ({ posts: [] as any[], total: 0 })),
    getCategories().catch(() => []),
  ]);

  const { posts, total } = postsResult;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-tenki-accent font-sans uppercase tracking-widest text-sm mb-6 font-medium">
            Blog
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-tenki-text mb-6">
            Insights & Ideas
          </h1>
          <p className="font-sans text-lg text-tenki-muted max-w-2xl">
            Perspectives on AI integration, automation strategy, and the future
            of enterprise technology.
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href="/blog"
              className={`text-sm font-sans px-4 py-2 rounded-full border transition-colors ${
                !category
                  ? "bg-tenki-text text-white border-tenki-text"
                  : "border-stone-200 text-tenki-muted hover:border-tenki-accent hover:text-tenki-accent"
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${cat.slug}`}
                className={`text-sm font-sans px-4 py-2 rounded-full border transition-colors ${
                  category === cat.slug
                    ? "bg-tenki-text text-white border-tenki-text"
                    : "border-stone-200 text-tenki-muted hover:border-tenki-accent hover:text-tenki-accent"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}

        {/* Active filter indicator */}
        {(category || tag) && (
          <div className="mb-8 flex items-center gap-2 text-sm text-tenki-muted">
            <span>Filtering by:</span>
            {category && (
              <span className="bg-tenki-accent/10 text-tenki-accent px-3 py-1 rounded-full font-medium">
                {category}
              </span>
            )}
            {tag && (
              <span className="bg-tenki-accent/10 text-tenki-accent px-3 py-1 rounded-full font-medium">
                #{tag}
              </span>
            )}
            <Link
              href="/blog"
              className="text-tenki-accent underline hover:text-tenki-text ml-2"
            >
              Clear
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h2 className="font-serif text-2xl text-tenki-text mb-4">
              No posts yet
            </h2>
            <p className="text-tenki-muted">
              Check back soon for new insights.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-16">
            {page > 1 && (
              <Link
                href={`/blog?page=${page - 1}${category ? `&category=${category}` : ""}${tag ? `&tag=${tag}` : ""}`}
                className="px-5 py-2 rounded-full border border-stone-200 text-tenki-text hover:border-tenki-accent hover:text-tenki-accent transition-colors text-sm"
              >
                Previous
              </Link>
            )}
            <span className="px-5 py-2 text-tenki-muted text-sm">
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link
                href={`/blog?page=${page + 1}${category ? `&category=${category}` : ""}${tag ? `&tag=${tag}` : ""}`}
                className="px-5 py-2 rounded-full border border-stone-200 text-tenki-text hover:border-tenki-accent hover:text-tenki-accent transition-colors text-sm"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
