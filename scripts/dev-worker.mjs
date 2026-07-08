import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import worker from "../src/worker.js";

const root = path.resolve("dist");
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 8788);

function loadDotEnv() {
  const envPath = path.resolve(".env");
  if (!existsSync(envPath)) return;

  const text = statSync(envPath).isFile() ? readFileSync(envPath, "utf8") : "";
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    if (process.env[key] !== undefined) continue;

    process.env[key] = rawValue.replace(/^["']|["']$/g, "");
  }
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".txt": "text/plain; charset=utf-8",
    ".webp": "image/webp",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".xml": "application/xml; charset=utf-8",
  }[ext] || "application/octet-stream";
}

function fileForPath(urlPathname) {
  const pathname = decodeURIComponent(urlPathname);
  const normalized = pathname.endsWith("/") ? `${pathname}index.html` : pathname;
  const direct = path.resolve(root, `.${normalized}`);

  if (!direct.startsWith(root)) return null;
  if (existsSync(direct) && statSync(direct).isFile()) return { file: direct, status: 200 };

  const nestedIndex = path.resolve(root, `.${pathname}/index.html`);
  if (nestedIndex.startsWith(root) && existsSync(nestedIndex) && statSync(nestedIndex).isFile()) {
    return { file: nestedIndex, status: 200 };
  }

  const notFound = path.resolve(root, "404.html");
  return existsSync(notFound) ? { file: notFound, status: 404 } : null;
}

function assetBinding() {
  return {
    async fetch(request) {
      const url = new URL(request.url);
      const match = fileForPath(url.pathname);
      if (!match) return new Response("Not found", { status: 404 });

      const headers = {
        "content-type": contentType(match.file),
        "cache-control": "no-store",
      };

      if (request.method === "HEAD") {
        return new Response(null, { status: match.status, headers });
      }

      return new Response(await readFile(match.file), { status: match.status, headers });
    },
  };
}

async function requestFromNode(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);

  const body = chunks.length ? Buffer.concat(chunks) : undefined;
  const headers = new Headers();
  Object.entries(req.headers).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => headers.append(key, item));
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  });

  const init = {
    method: req.method,
    headers,
  };
  if (body && req.method !== "GET" && req.method !== "HEAD") {
    init.body = body;
  }

  return new Request(`http://${req.headers.host}${req.url}`, {
    ...init,
  });
}

async function writeNodeResponse(res, response, method) {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (method === "HEAD" || !response.body) {
    res.end();
    return;
  }

  Readable.fromWeb(response.body).pipe(res);
}

loadDotEnv();

const env = {
  ASSETS: assetBinding(),
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  INQUIRY_FROM_EMAIL: process.env.INQUIRY_FROM_EMAIL,
  INQUIRY_TO_EMAIL: process.env.INQUIRY_TO_EMAIL,
};

const server = createServer(async (req, res) => {
  try {
    const request = await requestFromNode(req);
    const response = await worker.fetch(request, env);
    await writeNodeResponse(res, response, req.method);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ ok: false, error: "Local worker failed" }));
  }
});

server.listen(port, host, () => {
  console.log(`Local Worker preview: http://${host}:${port}/`);
  console.log("API route: POST /api/inquiry");
});
