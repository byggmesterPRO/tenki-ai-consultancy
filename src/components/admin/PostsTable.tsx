"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Edit, Trash2, Eye, EyeOff } from "lucide-react";
import type { BlogPost } from "@/types/blog";

interface PostsTableProps {
  posts: BlogPost[];
}

const PostsTable: React.FC<PostsTableProps> = ({ posts: initialPosts }) => {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    setDeleting(id);

    const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts(posts.filter((p) => p.id !== id));
    }
    setDeleting(null);
  };

  const handleTogglePublish = async (post: BlogPost) => {
    const res = await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !post.published }),
    });

    if (res.ok) {
      setPosts(
        posts.map((p) =>
          p.id === post.id ? { ...p, published: !p.published } : p
        )
      );
    }
  };

  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-stone-100 p-12 text-center">
        <p className="text-tenki-muted font-sans mb-4">No posts yet</p>
        <Link
          href="/admin/posts/new"
          className="text-tenki-accent hover:underline text-sm font-sans"
        >
          Create your first post
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-stone-100 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-stone-100">
            <th className="text-left p-4 text-xs uppercase tracking-widest text-tenki-muted font-sans font-medium">
              Title
            </th>
            <th className="text-left p-4 text-xs uppercase tracking-widest text-tenki-muted font-sans font-medium hidden md:table-cell">
              Category
            </th>
            <th className="text-left p-4 text-xs uppercase tracking-widest text-tenki-muted font-sans font-medium hidden md:table-cell">
              Status
            </th>
            <th className="text-left p-4 text-xs uppercase tracking-widest text-tenki-muted font-sans font-medium hidden lg:table-cell">
              Date
            </th>
            <th className="text-right p-4 text-xs uppercase tracking-widest text-tenki-muted font-sans font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className="border-b border-stone-50 hover:bg-stone-50 transition-colors"
            >
              <td className="p-4">
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="font-sans font-medium text-tenki-text hover:text-tenki-accent transition-colors"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-tenki-muted mt-1">/{post.slug}</p>
              </td>
              <td className="p-4 hidden md:table-cell">
                <span className="text-sm text-tenki-muted font-sans">
                  {post.categoryName || "—"}
                </span>
              </td>
              <td className="p-4 hidden md:table-cell">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-sans font-medium px-2.5 py-1 rounded-full ${
                    post.published
                      ? "bg-green-50 text-green-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {post.published ? (
                    <>
                      <Eye size={12} /> Published
                    </>
                  ) : (
                    <>
                      <EyeOff size={12} /> Draft
                    </>
                  )}
                </span>
              </td>
              <td className="p-4 hidden lg:table-cell">
                <span className="text-sm text-tenki-muted font-sans">
                  {post.createdAt
                    ? format(new Date(post.createdAt), "MMM d, yyyy")
                    : "—"}
                </span>
              </td>
              <td className="p-4 text-right">
                <div className="flex items-center gap-2 justify-end">
                  <button
                    onClick={() => handleTogglePublish(post)}
                    className="p-2 rounded-lg hover:bg-stone-100 text-tenki-muted hover:text-tenki-text transition-colors"
                    title={post.published ? "Unpublish" : "Publish"}
                  >
                    {post.published ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className="p-2 rounded-lg hover:bg-stone-100 text-tenki-muted hover:text-tenki-text transition-colors"
                  >
                    <Edit size={16} />
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deleting === post.id}
                    className="p-2 rounded-lg hover:bg-red-50 text-tenki-muted hover:text-red-600 transition-colors disabled:opacity-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
