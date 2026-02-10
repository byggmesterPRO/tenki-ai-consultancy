"use client";

import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import type { BlogPost } from "@/types/blog";
import TagBadge from "./TagBadge";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        {post.coverImage && (
          <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 bg-stone-100">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm font-sans">
            {post.categoryName && (
              <span className="text-tenki-accent font-medium uppercase tracking-widest text-xs">
                {post.categoryName}
              </span>
            )}
            {post.publishedAt && (
              <span className="text-tenki-muted">
                {format(new Date(post.publishedAt), "MMM d, yyyy")}
              </span>
            )}
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-tenki-text group-hover:text-tenki-accent transition-colors duration-300 leading-tight">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="font-sans text-tenki-muted leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags?.map((tag) => (
              <TagBadge key={tag.id} tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
