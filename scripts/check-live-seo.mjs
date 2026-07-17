const base = (process.env.SITE_URL || "https://lijianblades.com").replace(/\/$/, "");

const checks = [];

function pass(label) {
  checks.push({ label, ok: true });
  console.log(`PASS ${label}`);
}

function fail(label, detail = "") {
  checks.push({ label, ok: false, detail });
  console.error(`FAIL ${label}${detail ? `: ${detail}` : ""}`);
}

async function fetchText(path) {
  const response = await fetch(`${base}${path}`, {
    headers: {
      "user-agent": "LijianSEOCheck/1.0",
    },
  });
  const text = await response.text();
  return { response, text };
}

function getMeta(html, name) {
  return html.match(new RegExp(`<meta name="${name}" content="([^"]*)"`, "i"))?.[1] || "";
}

function getTitle(html) {
  return html.match(/<title>(.*?)<\/title>/i)?.[1] || "";
}

function getHtmlLang(html) {
  return html.match(/<html lang="([^"]+)"/i)?.[1] || "";
}

function getJsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => {
      try {
        return JSON.parse(match[1]);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

function assert(condition, label, detail = "") {
  if (condition) pass(label);
  else fail(label, detail);
}

async function checkZhHome() {
  const { response, text } = await fetchText("/zh/");
  assert(response.ok, "zh homepage returns 2xx", `${response.status}`);
  assert(getHtmlLang(text) === "zh-CN", "zh html lang is zh-CN", getHtmlLang(text));
  assert(getTitle(text).includes("利坚食品机械刀片厂"), "zh title contains short factory name", getTitle(text));
  assert(!getTitle(text).startsWith("马鞍山市"), "zh title omits city-prefixed company name", getTitle(text));
  assert(getMeta(text, "description").includes("中国食品机械刀片制造商"), "zh meta description contains category phrase");
  assert(text.includes("利坚食品机械刀片厂"), "zh visible/html text contains short brand keyword");

  const jsonLd = getJsonLd(text);
  const page = jsonLd.find((item) => item["@type"] === "WebPage");
  const org = jsonLd.find((item) => item["@type"] === "Organization");
  const faq = jsonLd.find((item) => item["@type"] === "FAQPage");
  const terms = jsonLd.find((item) => item["@type"] === "DefinedTermSet");
  assert(page?.inLanguage === "zh-CN", "zh WebPage JSON-LD inLanguage is zh-CN", page?.inLanguage);
  assert(org?.knowsAbout?.includes("食品机械刀片"), "zh Organization knowsAbout includes food machinery blade term");
  assert(terms?.name === "食品机械刀片知识图谱", "zh DefinedTermSet is localized", terms?.name);
  assert(Array.isArray(faq?.mainEntity) && faq.mainEntity.length >= 5, "zh FAQPage JSON-LD is present");
}

async function checkPtHome() {
  const { response, text } = await fetchText("/pt/");
  assert(response.ok, "pt homepage returns 2xx", `${response.status}`);
  assert(getHtmlLang(text) === "pt-BR", "pt html lang is pt-BR", getHtmlLang(text));

  const jsonLd = getJsonLd(text);
  const page = jsonLd.find((item) => item["@type"] === "WebPage");
  const org = jsonLd.find((item) => item["@type"] === "Organization");
  const faq = jsonLd.find((item) => item["@type"] === "FAQPage");
  assert(page?.inLanguage === "pt-BR", "pt WebPage JSON-LD inLanguage is pt-BR", page?.inLanguage);
  assert(org?.knowsAbout?.includes("lâminas para máquinas alimentícias"), "pt Organization knowsAbout is localized");
  assert(!faq, "pt homepage has no mixed-language FAQPage");
  assert(!text.includes("Food machinery blade buying answers"), "pt homepage has no English GEO heading");
}

async function checkMachineReadableFiles() {
  const llms = await fetchText("/llms.txt");
  assert(llms.response.ok, "llms.txt returns 2xx", `${llms.response.status}`);
  assert(llms.response.ok && llms.text.includes("Maanshan Lijian Food Machinery Blade Factory"), "llms.txt contains English entity name");
  assert(llms.response.ok && llms.text.includes("利坚食品机械刀片厂"), "llms.txt contains Chinese entity name");

  const summary = await fetchText("/ai-summary.json");
  assert(summary.response.ok, "ai-summary.json returns 2xx", `${summary.response.status}`);
  if (summary.response.ok) {
    try {
    const data = JSON.parse(summary.text);
    assert(data?.summaries?.zh?.category === "食品机械刀片制造商", "ai-summary zh category is correct");
    assert(data?.summaries?.en?.category === "Food machinery blade manufacturer", "ai-summary en category is correct");
    } catch (error) {
      fail("ai-summary.json parses as JSON", error.message);
    }
  } else {
    fail("ai-summary.json parses as JSON", `HTTP ${summary.response.status}`);
  }
}

async function checkCrawlFiles() {
  const robots = await fetchText("/robots.txt");
  assert(robots.response.ok, "robots.txt returns 2xx", `${robots.response.status}`);
  assert(robots.text.includes("Sitemap: https://lijianblades.com/sitemap-index.xml"), "robots.txt points to sitemap");
  assert(robots.text.includes("/llms.txt") && robots.text.includes("/ai-summary.json"), "robots.txt mentions AI summaries");

  const sitemap = await fetchText("/sitemap-index.xml");
  assert(sitemap.response.ok, "sitemap-index.xml returns 2xx", `${sitemap.response.status}`);
  assert(sitemap.text.includes("https://lijianblades.com/sitemap-0.xml"), "sitemap index links sitemap-0.xml");
}

async function main() {
  console.log(`Checking live SEO at ${base}`);
  await checkZhHome();
  await checkPtHome();
  await checkMachineReadableFiles();
  await checkCrawlFiles();

  const failed = checks.filter((item) => !item.ok);
  console.log(`\n${checks.length - failed.length}/${checks.length} checks passed.`);
  if (failed.length) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
