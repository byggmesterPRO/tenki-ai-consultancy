import { getPosts, getCategories, getTags } from "@/lib/db";
import Link from "next/link";
import { FileText, FolderOpen, Tag, Plus } from "lucide-react";

export default async function AdminDashboard() {
  let stats = { total: 0, published: 0, drafts: 0, categories: 0, tags: 0 };

  try {
    const [allPosts, publishedPosts, categories, tags] = await Promise.all([
      getPosts(),
      getPosts({ published: true }),
      getCategories(),
      getTags(),
    ]);

    stats = {
      total: allPosts.total,
      published: publishedPosts.total,
      drafts: allPosts.total - publishedPosts.total,
      categories: categories.length,
      tags: tags.length,
    };
  } catch {
    // Firestore not configured yet — show empty state
  }

  const statCards = [
    {
      label: "Total Posts",
      value: stats.total,
      icon: FileText,
      href: "/admin/posts",
    },
    {
      label: "Published",
      value: stats.published,
      icon: FileText,
      href: "/admin/posts",
    },
    {
      label: "Drafts",
      value: stats.drafts,
      icon: FileText,
      href: "/admin/posts",
    },
    {
      label: "Categories",
      value: stats.categories,
      icon: FolderOpen,
      href: "/admin/categories",
    },
    { label: "Tags", value: stats.tags, icon: Tag, href: "/admin/posts" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-tenki-text">Dashboard</h1>
          <p className="text-tenki-muted text-sm font-sans mt-1">
            Content overview
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 bg-tenki-text text-white px-5 py-2.5 rounded-lg font-sans text-sm hover:bg-tenki-accent transition-colors"
        >
          <Plus size={16} />
          New Post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {statCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white p-6 rounded-xl border border-stone-100 hover:border-tenki-accent/20 transition-colors group"
          >
            <card.icon
              size={20}
              className="text-tenki-muted group-hover:text-tenki-accent transition-colors mb-3"
              strokeWidth={1.5}
            />
            <p className="font-serif text-3xl text-tenki-text">{card.value}</p>
            <p className="text-tenki-muted text-xs font-sans mt-1">
              {card.label}
            </p>
          </Link>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl border border-stone-100">
        <h2 className="font-serif text-xl text-tenki-text mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/posts/new"
            className="text-sm font-sans px-4 py-2 rounded-lg border border-stone-200 text-tenki-text hover:border-tenki-accent hover:text-tenki-accent transition-colors"
          >
            Write a new post
          </Link>
          <Link
            href="/admin/categories"
            className="text-sm font-sans px-4 py-2 rounded-lg border border-stone-200 text-tenki-text hover:border-tenki-accent hover:text-tenki-accent transition-colors"
          >
            Manage categories
          </Link>
          <a
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans px-4 py-2 rounded-lg border border-stone-200 text-tenki-text hover:border-tenki-accent hover:text-tenki-accent transition-colors"
          >
            View blog
          </a>
        </div>
      </div>
    </div>
  );
}
