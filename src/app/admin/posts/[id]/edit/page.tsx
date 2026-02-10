import { getPostById } from "@/lib/db";
import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let post;

  try {
    post = await getPostById(id);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <div>
      <Link
        href="/admin/posts"
        className="inline-flex items-center gap-2 text-tenki-muted hover:text-tenki-accent transition-colors text-sm font-sans mb-6"
      >
        <ArrowLeft size={16} />
        Back to Posts
      </Link>
      <h1 className="font-serif text-3xl text-tenki-text mb-8">Edit Post</h1>
      <PostForm post={post} isEditing />
    </div>
  );
}
