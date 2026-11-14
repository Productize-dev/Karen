import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/business";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  propertyType?: string;
  size?: string;
  service?: string;
  frequency?: string;
  notes?: string;
  website?: string; // honeypot
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function required(value: unknown) {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuotePayload;

    // Silent success for bots filling the honeypot
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const name = required(body.name);
    const phone = required(body.phone);
    const email = required(body.email);
    const city = required(body.city);
    const propertyType = required(body.propertyType);
    const size = required(body.size);
    const service = required(body.service);
    const frequency = required(body.frequency);
    const notes = typeof body.notes === "string" ? body.notes.trim() : "";

    if (
      !name ||
      !phone ||
      !email ||
      !city ||
      !propertyType ||
      !size ||
      !service ||
      !frequency
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const from =
      process.env.RESEND_FROM_EMAIL ??
      "Grace Living Cleaning <onboarding@resend.dev>";
    const to = process.env.QUOTE_TO_EMAIL ?? business.email;

    const resend = new Resend(apiKey);
    const rows = [
      ["Name", name],
      ["Phone", phone],
      ["Email", email],
      ["City", city],
      ["Property type", propertyType],
      ["Size / beds & baths", size],
      ["Service", service],
      ["Frequency", frequency],
      ["Notes", notes || "—"],
    ];

    const html = `
      <div style="font-family: Georgia, serif; color: #1a1a1a; line-height: 1.5;">
        <h1 style="font-size: 22px; margin: 0 0 12px;">New quote request</h1>
        <p style="margin: 0 0 16px; color: #555;">
          Submitted via the ${escapeHtml(business.shortName)} website.
        </p>
        <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
          ${rows
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 8px 12px 8px 0; vertical-align: top; font-weight: 600; white-space: nowrap;">
                ${escapeHtml(label)}
              </td>
              <td style="padding: 8px 0; vertical-align: top;">
                ${escapeHtml(value).replaceAll("\n", "<br />")}
              </td>
            </tr>`
            )
            .join("")}
        </table>
      </div>
    `;

    const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Quote request — ${name} (${city})`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Unable to send your request right now. Please call or text us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us." },
      { status: 500 }
    );
  }
}
