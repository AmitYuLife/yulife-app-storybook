import { Page, expect } from "@playwright/test";

const WEB_URL = process.env.WEB_URL || "http://localhost:3000";

/**
 * Navigate to the web app and wait for it to load past the splash screen.
 */
export async function loadApp(page: Page) {
  await page.goto(WEB_URL, { waitUntil: "networkidle" });
  // Wait for the app to boot past splash into the login screen
  await page.waitForTimeout(5000);
}

/**
 * Wait for text to be visible on the page.
 */
export async function waitForText(page: Page, text: string, timeout = 10_000) {
  await expect(page.getByText(text, { exact: false }).first()).toBeVisible({ timeout });
}

/**
 * Tap a button or link by its visible text.
 */
export async function tapText(page: Page, text: string, timeout = 5_000) {
  const el = page.getByText(text, { exact: false }).first();
  await expect(el).toBeVisible({ timeout });
  await el.click();
}

/**
 * Tap an element by test ID (maps to RN's testID / accessibilityLabel).
 */
export async function tapTestId(page: Page, testId: string, timeout = 5_000) {
  const el = page.getByTestId(testId).first();
  await expect(el).toBeVisible({ timeout });
  await el.click();
}

/**
 * Type into a text input by test ID.
 */
export async function typeIntoTestId(page: Page, testId: string, value: string, timeout = 5_000) {
  const el = page.getByTestId(testId).first();
  await expect(el).toBeVisible({ timeout });
  await el.click();
  await el.fill(value);
}

/**
 * Take a screenshot for debugging.
 */
export async function screenshot(page: Page, name: string) {
  await page.screenshot({ path: `vibes/screenshots/${name}.png`, fullPage: true });
}

/**
 * Pipe browser console errors/warnings + uncaught page errors to the test's
 * stdout so a white-screen crash isn't invisible. Call this immediately after
 * the test gets `page`, before any navigation. No-op for log/info noise.
 */
export function attachBrowserLogs(page: Page): void {
  page.on("pageerror", (err) => {
    console.error("[browser:pageerror]", err.message, err.stack?.split("\n").slice(0, 5).join("\n"));
  });
  page.on("console", (msg) => {
    const type = msg.type();
    if (type === "error" || type === "warning") {
      console.log(`[browser:${type}]`, msg.text());
    }
  });
  page.on("requestfailed", (req) => {
    const failure = req.failure()?.errorText;
    if (failure && !failure.includes("ERR_ABORTED")) {
      console.warn("[browser:requestfailed]", req.method(), req.url(), failure);
    }
  });
}
