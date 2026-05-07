import { defineConfig } from "@playwright/test";
import * as path from "path";

require("dotenv").config({ path: path.resolve(__dirname, "..", ".env.e2e") });

const WEB_URL = process.env.WEB_URL || "http://localhost:3000";
const SEED = process.env.VIBES_SEED !== "false" && !process.env.VIBES_SKIP_SEED;

export default defineConfig({
  testDir: ".",
  testMatch: "**/*.spec.ts",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: [["list"]],
  use: {
    baseURL: WEB_URL,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    viewport: { width: 414, height: 896 },
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        viewport: { width: 414, height: 896 },
        isMobile: true,
        hasTouch: true,
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) YuLife-Web-Vibes",
        // Disable web security so the RN web app can hit localhost:5000 directly
        // without the api-server having to send CORS headers. Vibe-only — never
        // ship a real client this way.
        launchOptions: {
          args: ["--disable-web-security", "--disable-site-isolation-trials"],
        },
      },
    },
  ],
  // Tests handle their own data seeding in beforeAll/afterAll
  // Use globalSetup/globalTeardown only if you need shared data across all tests
});
