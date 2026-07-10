import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://lijianblades.com");
  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      "# AI answer engines and China search crawlers are explicitly welcome.",
      ...[
        "GPTBot",
        "OAI-SearchBot",
        "ChatGPT-User",
        "ClaudeBot",
        "Claude-Web",
        "PerplexityBot",
        "Google-Extended",
        "Applebot-Extended",
        "Amazonbot",
        "Bytespider",
        "Baiduspider",
        "Sogou web spider",
        "360Spider",
        "YisouSpider",
        "PetalBot",
      ].flatMap((agent) => [`User-agent: ${agent}`, "Allow: /", ""]),
      "# AI-readable summaries",
      `# ${new URL("llms.txt", base).href}`,
      `# ${new URL("ai-summary.json", base).href}`,
      "",
      `Sitemap: ${new URL("sitemap-index.xml", base).href}`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};
