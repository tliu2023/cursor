import { NextResponse } from "next/server";

import { contactRoles } from "@/lib/data";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  role?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = readString(body.name);
  const email = readString(body.email).toLowerCase();
  const role = readString(body.role);
  const subject = readString(body.subject);
  const message = readString(body.message);

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email so we can reply." },
      { status: 400 },
    );
  }

  if (role && !contactRoles.includes(role as (typeof contactRoles)[number])) {
    return NextResponse.json(
      { ok: false, error: "Please choose how you play the game." },
      { status: 400 },
    );
  }

  if (subject.length < 2 || subject.length > 120) {
    return NextResponse.json(
      { ok: false, error: "Please add a short subject." },
      { status: 400 },
    );
  }

  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      { ok: false, error: "Please write a little more in your message." },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
