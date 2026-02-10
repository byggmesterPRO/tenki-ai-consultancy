import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getCategories, createCategory } from "@/lib/db";
import { categorySchema } from "@/lib/validators";

export async function GET() {
  const categories = await getCategories();
  return NextResponse.json(categories);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parsed = categorySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const category = await createCategory(parsed.data);
  return NextResponse.json(category, { status: 201 });
}
