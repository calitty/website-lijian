import { onRequestOptions, onRequestPost } from "../functions/api/inquiry.js";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.lijianblades.com" && (request.method === "GET" || request.method === "HEAD") && !url.pathname.startsWith("/api/")) {
      url.hostname = "lijianblades.com";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/api/inquiry") {
      if (request.method === "OPTIONS") {
        return onRequestOptions({ request, env });
      }

      if (request.method === "POST") {
        return onRequestPost({ request, env });
      }

      return json({ ok: false, error: "Method not allowed" }, 405);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Frame-Options", "SAMEORIGIN");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
