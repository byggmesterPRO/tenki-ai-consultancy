"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { marked } from "marked";
import type { BlogPost, Category, Tag } from "@/types/blog";
import { Save, Eye, Upload, ChevronDown, ChevronUp, X } from "lucide-react";

interface PostFormProps {
  post?: BlogPost;
  isEditing?: boolean;
}

const PostForm: React.FC<PostFormProps> = ({ post, isEditing = false }) => {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");
  const [showSeo, setShowSeo] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [allTags, setAllTags] = useState<Tag[]>([]);

  const [form, setForm] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    coverImage: post?.coverImage || "",
    published: post?.published || false,
    categoryId: post?.categoryId || "",
    tagIds: post?.tags?.map((t) => t.id) || ([] as string[]),
    metaTitle: post?.metaTitle || "",
    metaDescription: post?.metaDescription || "",
  });

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
    fetch("/api/tags")
      .then((r) => r.json())
      .then(setAllTags)
      .catch(() => {});
  }, []);

  // Auto-generate slug from title
  const handleTitleChange = (title: string) => {
    setForm((f) => ({
      ...f,
      title,
      slug:
        !isEditing || !f.slug
          ? title
              .toLowerCase()
              .replace(/[^a-z0-9\s-]/g, "")
              .replace(/\s+/g, "-")
              .replace(/-+/g, "-")
              .substring(0, 200)
          : f.slug,
    }));
  };

  const handlePreview = async () => {
    if (!preview) {
      const html = await marked(form.content);
      setPreviewHtml(html);
    }
    setPreview(!preview);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (res.ok) {
      const { url } = await res.json();
      setForm((f) => ({ ...f, coverImage: url }));
    }
  };

  const handleSubmit = async (publish?: boolean) => {
    setSaving(true);

    const data = {
      ...form,
      published: publish !== undefined ? publish : form.published,
    };

    const url = isEditing ? `/api/posts/${post?.id}` : "/api/posts";
    const method = isEditing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/admin/posts");
      router.refresh();
    } else {
      const err = await res.json();
      alert(err.error?.fieldErrors ? JSON.stringify(err.error.fieldErrors) : "Failed to save");
    }

    setSaving(false);
  };

  return (
    <div className="max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Post title"
              className="w-full text-3xl font-serif text-tenki-text bg-transparent border-0 border-b border-stone-200 pb-3 focus:outline-none focus:border-tenki-accent placeholder:text-stone-300"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="text-xs uppercase tracking-widest text-tenki-muted font-sans block mb-2">
              Slug
            </label>
            <div className="flex items-center gap-2 text-sm text-tenki-muted font-sans">
              <span>/blog/</span>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className="flex-1 bg-stone-50 border border-stone-200 rounded px-3 py-1.5 text-tenki-text focus:outline-none focus:border-tenki-accent"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="text-xs uppercase tracking-widest text-tenki-muted font-sans block mb-2">
              Excerpt
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              rows={2}
              placeholder="Brief description for previews..."
              className="w-full bg-stone-50 border border-stone-200 rounded-lg p-4 text-tenki-text focus:outline-none focus:border-tenki-accent resize-none font-sans text-sm"
            />
          </div>

          {/* Content Editor */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs uppercase tracking-widest text-tenki-muted font-sans">
                Content (Markdown)
              </label>
              <button
                onClick={handlePreview}
                className="inline-flex items-center gap-1.5 text-xs font-sans text-tenki-muted hover:text-tenki-accent transition-colors"
              >
                <Eye size={14} />
                {preview ? "Edit" : "Preview"}
              </button>
            </div>

            {preview ? (
              <div
                className="prose prose-stone max-w-none bg-white border border-stone-200 rounded-lg p-8 min-h-[400px] prose-headings:font-serif"
                dangerouslySetInnerHTML={{ __html: previewHtml }}
              />
            ) : (
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={20}
                placeholder="Write your post in Markdown..."
                className="w-full bg-white border border-stone-200 rounded-lg p-4 text-tenki-text focus:outline-none focus:border-tenki-accent resize-y font-mono text-sm leading-relaxed"
              />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
          <div className="bg-white p-6 rounded-xl border border-stone-100 space-y-3">
            <button
              onClick={() => handleSubmit(false)}
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 bg-stone-100 text-tenki-text py-2.5 rounded-lg font-sans text-sm hover:bg-stone-200 transition-colors disabled:opacity-50"
            >
              <Save size={16} />
              Save Draft
            </button>
            <button
              onClick={() => handleSubmit(true)}
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 bg-tenki-text text-white py-2.5 rounded-lg font-sans text-sm hover:bg-tenki-accent transition-colors disabled:opacity-50"
            >
              <Eye size={16} />
              {form.published ? "Update & Publish" : "Publish"}
            </button>
          </div>

          {/* Cover Image */}
          <div className="bg-white p-6 rounded-xl border border-stone-100">
            <label className="text-xs uppercase tracking-widest text-tenki-muted font-sans block mb-3">
              Cover Image
            </label>
            {form.coverImage ? (
              <div className="relative mb-3">
                <img
                  src={form.coverImage}
                  alt="Cover"
                  className="w-full rounded-lg object-cover aspect-video"
                />
                <button
                  onClick={() => setForm({ ...form, coverImage: "" })}
                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-red-50"
                >
                  <X size={14} />
                </button>
              </div>
            ) : null}
            <label className="flex items-center justify-center gap-2 py-3 border border-dashed border-stone-200 rounded-lg cursor-pointer hover:border-tenki-accent transition-colors text-sm text-tenki-muted hover:text-tenki-accent">
              <Upload size={16} />
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Category */}
          <div className="bg-white p-6 rounded-xl border border-stone-100">
            <label className="text-xs uppercase tracking-widest text-tenki-muted font-sans block mb-3">
              Category
            </label>
            <select
              value={form.categoryId}
              onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
              className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-sm font-sans text-tenki-text focus:outline-none focus:border-tenki-accent"
            >
              <option value="">No category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="bg-white p-6 rounded-xl border border-stone-100">
            <label className="text-xs uppercase tracking-widest text-tenki-muted font-sans block mb-3">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      tagIds: f.tagIds.includes(tag.id)
                        ? f.tagIds.filter((id) => id !== tag.id)
                        : [...f.tagIds, tag.id],
                    }))
                  }
                  className={`text-xs font-sans px-3 py-1.5 rounded-full border transition-colors ${
                    form.tagIds.includes(tag.id)
                      ? "bg-tenki-accent/10 text-tenki-accent border-tenki-accent/30"
                      : "border-stone-200 text-tenki-muted hover:border-tenki-accent/30"
                  }`}
                >
                  {tag.name}
                </button>
              ))}
              {allTags.length === 0 && (
                <p className="text-xs text-tenki-muted">No tags created yet</p>
              )}
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white p-6 rounded-xl border border-stone-100">
            <button
              onClick={() => setShowSeo(!showSeo)}
              className="flex items-center justify-between w-full text-xs uppercase tracking-widest text-tenki-muted font-sans font-medium"
            >
              SEO Settings
              {showSeo ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {showSeo && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-xs text-tenki-muted font-sans block mb-1">
                    Meta Title ({form.metaTitle?.length || 0}/70)
                  </label>
                  <input
                    type="text"
                    value={form.metaTitle}
                    onChange={(e) =>
                      setForm({ ...form, metaTitle: e.target.value })
                    }
                    maxLength={70}
                    className="w-full bg-stone-50 border border-stone-200 rounded px-3 py-2 text-sm text-tenki-text focus:outline-none focus:border-tenki-accent"
                  />
                </div>
                <div>
                  <label className="text-xs text-tenki-muted font-sans block mb-1">
                    Meta Description ({form.metaDescription?.length || 0}/160)
                  </label>
                  <textarea
                    value={form.metaDescription}
                    onChange={(e) =>
                      setForm({ ...form, metaDescription: e.target.value })
                    }
                    maxLength={160}
                    rows={3}
                    className="w-full bg-stone-50 border border-stone-200 rounded px-3 py-2 text-sm text-tenki-text focus:outline-none focus:border-tenki-accent resize-none"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
