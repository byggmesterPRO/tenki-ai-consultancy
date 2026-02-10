"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";
import type { Category } from "@/types/blog";

interface CategoriesManagerProps {
  initialCategories: Category[];
}

const CategoriesManager: React.FC<CategoriesManagerProps> = ({
  initialCategories,
}) => {
  const router = useRouter();
  const [categories, setCategories] = useState(initialCategories);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [creating, setCreating] = useState(false);

  const handleNameChange = (value: string) => {
    setName(value);
    setSlug(
      value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
    );
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !slug) return;
    setCreating(true);

    const res = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, slug }),
    });

    if (res.ok) {
      const cat = await res.json();
      setCategories([...categories, cat]);
      setName("");
      setSlug("");
    }

    setCreating(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this category?")) return;

    const res = await fetch(`/api/categories`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="max-w-2xl">
      {/* Create form */}
      <form
        onSubmit={handleCreate}
        className="bg-white p-6 rounded-xl border border-stone-100 mb-8"
      >
        <h2 className="font-sans font-medium text-tenki-text mb-4">
          Add Category
        </h2>
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Category name"
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm font-sans text-tenki-text focus:outline-none focus:border-tenki-accent"
            />
            {slug && (
              <p className="text-xs text-tenki-muted mt-1 px-1">
                Slug: {slug}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={creating || !name}
            className="inline-flex items-center gap-2 bg-tenki-text text-white px-5 py-2.5 rounded-lg font-sans text-sm hover:bg-tenki-accent transition-colors disabled:opacity-50 self-start"
          >
            <Plus size={16} />
            Add
          </button>
        </div>
      </form>

      {/* Categories list */}
      <div className="bg-white rounded-xl border border-stone-100 overflow-hidden">
        {categories.length === 0 ? (
          <div className="p-8 text-center text-tenki-muted text-sm font-sans">
            No categories yet
          </div>
        ) : (
          <ul>
            {categories.map((cat) => (
              <li
                key={cat.id}
                className="flex items-center justify-between p-4 border-b border-stone-50 last:border-0 hover:bg-stone-50 transition-colors"
              >
                <div>
                  <p className="font-sans font-medium text-tenki-text text-sm">
                    {cat.name}
                  </p>
                  <p className="text-xs text-tenki-muted">/{cat.slug}</p>
                </div>
                <button
                  onClick={() => handleDelete(cat.id)}
                  className="p-2 rounded-lg hover:bg-red-50 text-tenki-muted hover:text-red-600 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoriesManager;
