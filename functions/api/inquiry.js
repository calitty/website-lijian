const TO_EMAIL = "yijiangyaoqu@gmail.com";
const FROM_EMAIL = "Website Inquiry <inquiry@send.lijianblades.com>";
const MAX_FIELD_LENGTH = 1200;
const MAX_BODY_LENGTH = 20000;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

const clean = (value, limit = MAX_FIELD_LENGTH) =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);

const escapeHtml = (value) =>
  clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const emailFromText = (value) => {
  const match = clean(value).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : "";
};

const row = (label, value) => {
  if (!clean(value)) return "";
  return `<tr><td style="padding:8px 12px;border:1px solid #d9dee5;background:#f5f7fa;font-weight:700;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #d9dee5;">${escapeHtml(value)}</td></tr>`;
};

export async function onRequestOptions() {
  return json({ ok: true });
}

export async function onRequestPost({ request, env }) {
  try {
    const contentLength = Number(request.headers.get("content-length") || "0");
    if (contentLength > MAX_BODY_LENGTH) {
      return json({ ok: false, error: "Payload too large" }, 413);
    }

    const data = await request.json();
    if (clean(data.website)) {
      return json({ ok: true });
    }

    const inquiry = {
      lang: clean(data.lang, 20),
      source: clean(data.source, 500),
      name: clean(data.name),
      country: clean(data.country),
      contact: clean(data.contact),
      product: clean(data.product),
      equipment: clean(data.equipment),
      size: clean(data.size),
      quantity: clean(data.quantity),
      message: clean(data.message, 4000),
    };

    if (!inquiry.name || !inquiry.country || !inquiry.contact || !inquiry.message) {
      return json({ ok: false, error: "Missing required fields" }, 400);
    }

    const apiKey = env.RESEND_API_KEY;
    const from = env.INQUIRY_FROM_EMAIL || FROM_EMAIL;
    const to = env.INQUIRY_TO_EMAIL || TO_EMAIL;
    if (!apiKey || !from) {
      return json({ ok: false, error: "Email service is not configured" }, 500);
    }

    const subjectName = inquiry.name || "New inquiry";
    const subject = `[Lijian Website Inquiry] ${subjectName}`;
    const receivedAt = new Date().toISOString();
    const html = `
      <div style="font-family:Arial,sans-serif;color:#171a1f;">
        <h2 style="margin:0 0 12px;">New website inquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:760px;font-size:14px;line-height:1.5;">
          ${row("Name / Company", inquiry.name)}
          ${row("Country", inquiry.country)}
          ${row("Email / WhatsApp / WeChat", inquiry.contact)}
          ${row("Request details", inquiry.message)}
          ${row("Blade type", inquiry.product)}
          ${row("Machine model", inquiry.equipment)}
          ${row("Size / material / hardness", inquiry.size)}
          ${row("Quantity / delivery time", inquiry.quantity)}
          ${row("Language", inquiry.lang)}
          ${row("Source page", inquiry.source)}
          ${row("Received at", receivedAt)}
        </table>
      </div>
    `;
    const text = [
      "New website inquiry",
      `Name / Company: ${inquiry.name}`,
      `Country: ${inquiry.country}`,
      `Email / WhatsApp / WeChat: ${inquiry.contact}`,
      `Request details: ${inquiry.message}`,
      `Blade type: ${inquiry.product}`,
      `Machine model: ${inquiry.equipment}`,
      `Size / material / hardness: ${inquiry.size}`,
      `Quantity / delivery time: ${inquiry.quantity}`,
      `Language: ${inquiry.lang}`,
      `Source page: ${inquiry.source}`,
      `Received at: ${receivedAt}`,
    ]
      .filter((line) => !line.endsWith(": "))
      .join("\n");

    const replyTo = emailFromText(inquiry.contact);
    const body = {
      from,
      to: [to],
      subject,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend failed", response.status, detail);
      return json({ ok: false, error: "Email provider failed" }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    console.error("Inquiry failed", error);
    return json({ ok: false, error: "Invalid request" }, 400);
  }
}
