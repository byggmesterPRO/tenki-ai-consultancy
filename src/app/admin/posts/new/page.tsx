import PostForm from "@/components/admin/PostForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewPostPage() {
  return (
    <div>
      <Link
        href="/admin/posts"
        className="inline-flex items-center gap-2 text-tenki-muted hover:text-tenki-accent transition-colors text-sm font-sans mb-6"
      >
        <ArrowLeft size={16} />
        Back to Posts
      </Link>
      <h1 className="font-serif text-3xl text-tenki-text mb-8">New Post</h1>
      <PostForm />
    </div>
  );
}
