import { getCategories } from "@/lib/db";
import CategoriesManager from "@/components/admin/CategoriesManager";

export default async function AdminCategoriesPage() {
  let categories: any[] = [];

  try {
    categories = await getCategories();
  } catch {
    // Firestore not configured
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-tenki-text">Categories</h1>
        <p className="text-tenki-muted text-sm font-sans mt-1">
          Organize your blog posts
        </p>
      </div>

      <CategoriesManager initialCategories={categories} />
    </div>
  );
}
