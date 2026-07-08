import type { APIRoute } from "astro";
import { buildLlmsTxt } from "@/data/geo";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://lijianblades.com");

  return new Response(buildLlmsTxt(base), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
