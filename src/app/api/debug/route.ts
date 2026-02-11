import { NextResponse } from "next/server";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

export async function GET() {
  const cwd = process.cwd();
  const checks = {
    cwd,
    dirname: __dirname,
    publicExists: existsSync(join(cwd, "public")),
    publicImagesExists: existsSync(join(cwd, "public", "images")),
    publicLogoExists: existsSync(join(cwd, "public", "images", "logo.svg")),
    publicLottieExists: existsSync(join(cwd, "public", "lottie")),
    cwdContents: [] as string[],
    publicContents: [] as string[],
  };

  try {
    checks.cwdContents = readdirSync(cwd);
  } catch (e) {
    checks.cwdContents = [`ERROR: ${e}`];
  }

  try {
    if (checks.publicExists) {
      checks.publicContents = readdirSync(join(cwd, "public"));
    }
  } catch (e) {
    checks.publicContents = [`ERROR: ${e}`];
  }

  return NextResponse.json(checks, { status: 200 });
}
