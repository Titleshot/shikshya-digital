import { NextResponse } from "next/server";

type LeadBody = {
  school?: string;
  contact?: string;
  phone?: string;
  email?: string;
  hasWebsite?: string;
  features?: string;
  source?: string;
};

export async function POST(request: Request) {
  let body: LeadBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const school = body.school?.trim();
  const contact = body.contact?.trim();
  const phone = body.phone?.trim();

  if (!school || !contact || !phone) {
    return NextResponse.json(
      { error: "Required fields missing" },
      { status: 400 }
    );
  }

  const payload = {
    school,
    contact,
    phone,
    email: body.email?.trim() || "",
    hasWebsite: body.hasWebsite || "",
    features: body.features?.trim() || "",
    source: body.source || "everest-demo",
    submittedAt: new Date().toISOString(),
  };

  const formspreeId = process.env.FORMSPREE_FORM_ID;
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;

  // Prefer Formspree (email inbox) if configured
  if (formspreeId) {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _subject: `New school website lead: ${school}`,
        ...payload,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  // Optional Zapier / Make / Google Sheets webhook
  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  // Dev / not configured yet — accept so UI works; log server-side
  console.log("[lead]", payload);

  return NextResponse.json({
    ok: true,
    warning:
      "Lead accepted but no CRM destination configured. Set FORMSPREE_FORM_ID or LEADS_WEBHOOK_URL.",
  });
}
