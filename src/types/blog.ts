export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  published: boolean;
  publishedAt: string | null;
  authorId: string;
  authorName?: string;
  categoryId: string | null;
  categoryName?: string;
  categorySlug?: string;
  tags: { id: string; name: string; slug: string }[];
  metaTitle: string | null;
  metaDescription: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface BlogUser {
  id: string;
  email: string;
  name: string;
  role: string;
  password?: string;
  createdAt: string;
}
