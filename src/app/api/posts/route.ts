import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getPosts, createPost } from "@/lib/db";
import { createPostSchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const category = searchParams.get("category") || undefined;
  const tag = searchParams.get("tag") || undefined;
  const all = searchParams.get("all") === "true";

  const { posts, total } = await getPosts({
    published: all ? undefined : true,
    categorySlug: category,
    tagSlug: tag,
    limit,
    offset: (page - 1) * limit,
  });

  return NextResponse.json({
    posts,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parsed = createPostSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { tagIds, ...data } = parsed.data;

  const post = await createPost({
    ...data,
    coverImage: data.coverImage || null,
    categoryId: data.categoryId || null,
    categoryName: undefined,
    categorySlug: undefined,
    authorId: session.user.id,
    authorName: session.user.name || "Admin",
    tags: [],
    metaTitle: data.metaTitle || null,
    metaDescription: data.metaDescription || null,
    published: data.published,
    publishedAt: data.published ? new Date().toISOString() : null,
  });

  return NextResponse.json(post, { status: 201 });
}
