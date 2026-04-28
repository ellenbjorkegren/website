import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { firstName, email } = await req.json();

  if (!firstName || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const res = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, email }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
