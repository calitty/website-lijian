import type { APIRoute } from "astro";
import { buildAiSummary } from "@/data/geo";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://lijianblades.com");

  return new Response(
    JSON.stringify(
      {
        generatedAt: new Date().toISOString().slice(0, 10),
        defaultLanguage: "en",
        summaries: {
          en: buildAiSummary("en", base),
          zh: buildAiSummary("zh", base),
        },
      },
      null,
      2,
    ),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
};
