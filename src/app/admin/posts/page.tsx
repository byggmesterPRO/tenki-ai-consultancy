import { getPosts } from "@/lib/db";
import Link from "next/link";
import { Plus } from "lucide-react";
import PostsTable from "@/components/admin/PostsTable";

export default async function AdminPostsPage() {
  let posts: any[] = [];

  try {
    const result = await getPosts({ limit: 100 });
    posts = result.posts;
  } catch {
    // Firestore not configured
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-tenki-text">Posts</h1>
          <p className="text-tenki-muted text-sm font-sans mt-1">
            Manage your blog posts
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

      <PostsTable posts={posts} />
    </div>
  );
}
