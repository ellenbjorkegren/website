import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "survey_auth";

export function middleware(req: NextRequest) {
  const secret = process.env.SURVEY_RESULTS_KEY;

  // Fail closed: if the secret isn't configured, nobody gets in.
  if (!secret) {
    return new NextResponse("Not found", { status: 404 });
  }

  if (req.cookies.get(COOKIE_NAME)?.value === secret) {
    return NextResponse.next();
  }

  const key = req.nextUrl.searchParams.get("key");
  if (key === secret) {
    const cleanUrl = req.nextUrl.clone();
    cleanUrl.searchParams.delete("key");
    const res = NextResponse.redirect(cleanUrl);
    res.cookies.set(COOKIE_NAME, secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/survey-results",
      maxAge: 60 * 60 * 24 * 90, // 90 days
    });
    return res;
  }

  return new NextResponse("Not found", { status: 404 });
}

export const config = {
  matcher: "/survey-results/:path*",
};
