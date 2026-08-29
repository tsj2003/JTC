import { chromium } from "playwright";

const BASE = process.env.BASE_URL || "http://localhost:3000";

const routes = [
  "/",
  "/shop",
  "/shop/festive-lights",
  "/shop/earbuds",
  "/shop/electrical",
  "/search?search=oneplus",
  "/about",
  "/contact",
  "/cart",
  "/wishlist",
  "/product/oneplus-buds-pro-3",
  "/product/realme-buds-wireless-3-neo",
  "/product/lantern-string-lights",
];

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1280, height: 800 },
];

async function main() {
  const browser = await chromium.launch({
    channel: "chrome",
    headless: true,
  });
  const results = [];
  let failed = false;

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport,
      locale: "en-IN",
    });
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") pageErrors.push(msg.text());
    });

    for (const route of routes) {
      const url = `${BASE}${route}`;
      pageErrors.length = 0;
      let status = 0;
      let overflow = false;
      let badText = [];
      try {
        const response = await page.goto(url, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });
        status = response?.status() || 0;
        await page.waitForTimeout(800);
        const body = await page.locator("body").innerText();
        overflow = await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 4
        );
        for (const needle of ["fetch failed", "TypeError", "Application error", "Singitronic"]) {
          if (body.toLowerCase().includes(needle.toLowerCase())) badText.push(needle);
        }
      } catch (err) {
        failed = true;
        results.push({ viewport: viewport.name, route, error: String(err) });
        continue;
      }
      const ok = status < 400 && !overflow && badText.length === 0;
      if (!ok) failed = true;
      results.push({
        viewport: viewport.name,
        route,
        status,
        overflow,
        badText,
        pageErrors: pageErrors.slice(0, 5),
        ok,
      });
    }
    await context.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
  const summary = results.filter((r) => r.ok === false || r.error);
  if (failed) {
    console.error("PLAYWRIGHT_FAIL", summary.length, "issues");
    process.exit(1);
  }
  console.log("PLAYWRIGHT_OK", results.length, "checks");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
