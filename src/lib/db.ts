import { db } from "./firebase-admin";
import type { BlogPost, Category, Tag, BlogUser } from "@/types/blog";

// ─── Users ───────────────────────────────────────────────

export async function getUserByEmail(email: string): Promise<BlogUser | null> {
  const snapshot = await db
    .collection("users")
    .where("email", "==", email)
    .limit(1)
    .get();

  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as BlogUser;
}

export async function getUserById(id: string): Promise<BlogUser | null> {
  const doc = await db.collection("users").doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as BlogUser;
}

// ─── Posts ───────────────────────────────────────────────

export async function getPosts(options?: {
  published?: boolean;
  categorySlug?: string;
  tagSlug?: string;
  limit?: number;
  offset?: number;
}): Promise<{ posts: BlogPost[]; total: number }> {
  let query: FirebaseFirestore.Query = db.collection("posts");

  if (options?.published !== undefined) {
    query = query.where("published", "==", options.published);
  }

  if (options?.categorySlug) {
    query = query.where("categorySlug", "==", options.categorySlug);
  }

  // Get total count
  const countSnapshot = await query.count().get();
  const total = countSnapshot.data().count;

  // Apply ordering and pagination
  query = query.orderBy("createdAt", "desc");

  if (options?.offset) {
    // For Firestore pagination we use limit + offset approach
    // In production, use cursor-based pagination for better performance
    const skipSnapshot = await query.limit(options.offset).get();
    if (!skipSnapshot.empty) {
      const lastDoc = skipSnapshot.docs[skipSnapshot.docs.length - 1];
      query = query.startAfter(lastDoc);
    }
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const snapshot = await query.get();
  let posts = snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as BlogPost
  );

  // Filter by tag slug (post-query since Firestore can't query array of objects)
  if (options?.tagSlug) {
    posts = posts.filter((post) =>
      post.tags?.some((tag) => tag.slug === options.tagSlug)
    );
  }

  return { posts, total };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const snapshot = await db
    .collection("posts")
    .where("slug", "==", slug)
    .limit(1)
    .get();

  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as BlogPost;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const doc = await db.collection("posts").doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as BlogPost;
}

export async function createPost(
  data: Omit<BlogPost, "id" | "createdAt" | "updatedAt">
): Promise<BlogPost> {
  const now = new Date().toISOString();
  const postData = {
    ...data,
    publishedAt: data.published ? now : null,
    createdAt: now,
    updatedAt: now,
  };

  const docRef = await db.collection("posts").add(postData);
  return { id: docRef.id, ...postData } as BlogPost;
}

export async function updatePost(
  id: string,
  data: Partial<BlogPost>
): Promise<BlogPost | null> {
  const docRef = db.collection("posts").doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return null;

  const existing = doc.data() as BlogPost;
  const updateData = {
    ...data,
    updatedAt: new Date().toISOString(),
    // Set publishedAt when first published
    publishedAt:
      data.published && !existing.publishedAt
        ? new Date().toISOString()
        : existing.publishedAt,
  };

  // Remove id from update data
  const { id: _id, ...cleanData } = updateData;
  await docRef.update(cleanData);

  const updated = await docRef.get();
  return { id: updated.id, ...updated.data() } as BlogPost;
}

export async function deletePost(id: string): Promise<boolean> {
  const docRef = db.collection("posts").doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return false;
  await docRef.delete();
  return true;
}

// ─── Categories ──────────────────────────────────────────

export async function getCategories(): Promise<Category[]> {
  const snapshot = await db
    .collection("categories")
    .orderBy("name", "asc")
    .get();
  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Category
  );
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const snapshot = await db
    .collection("categories")
    .where("slug", "==", slug)
    .limit(1)
    .get();

  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Category;
}

export async function createCategory(data: {
  name: string;
  slug: string;
}): Promise<Category> {
  const docRef = await db.collection("categories").add(data);
  return { id: docRef.id, ...data };
}

export async function deleteCategory(id: string): Promise<boolean> {
  const docRef = db.collection("categories").doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return false;
  await docRef.delete();
  return true;
}

// ─── Tags ────────────────────────────────────────────────

export async function getTags(): Promise<Tag[]> {
  const snapshot = await db.collection("tags").orderBy("name", "asc").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Tag);
}

export async function createTag(data: {
  name: string;
  slug: string;
}): Promise<Tag> {
  const docRef = await db.collection("tags").add(data);
  return { id: docRef.id, ...data };
}

export async function deleteTag(id: string): Promise<boolean> {
  const docRef = db.collection("tags").doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return false;
  await docRef.delete();
  return true;
}
