import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getTags, createTag } from "@/lib/db";
import { tagSchema } from "@/lib/validators";

export async function GET() {
  const tags = await getTags();
  return NextResponse.json(tags);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parsed = tagSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const tag = await createTag(parsed.data);
  return NextResponse.json(tag, { status: 201 });
}
