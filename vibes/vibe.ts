/**
 * Vibes interactive session.
 *
 * Opens a browser, seeds data, logs in automatically, and keeps alive.
 *
 * Usage: npx tsx vibes/vibe.ts
 */
import { chromium, Browser, Page } from "playwright";
import { connectDataManager } from "./dataManager";
import { loginAsUser } from "./utils/login";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as challengeData from "../e2e/challenges/_data";

const WEB_URL = process.env.WEB_URL || "http://localhost:3000";

// Fix email/password
challengeData.CUSTOMER_76.data.email = "vibe@code.com";
challengeData.AUTH_76.data.password = "letmein";

// Enable enhanced tournament flag for the vibe user
(challengeData as any).VIBE_ENHANCED_TOURNAMENT_FLAG = {
  type: "mongo",
  modelName: "core_settings",
  data: {
    _id: generateRandomMongoId(),
    domain: "temp",
    entityType: "user",
    entityId: challengeData.CUSTOMER_76.data.customerId,
    settings: { enableEnhancedTournament: true },
  },
};

export let browser: Browser;
export let page: Page;

async function main() {
  console.log("[vibe] Seeding data...");
  await connectDataManager(challengeData);

  console.log("[vibe] Launching browser...");
  browser = await chromium.launch({ headless: false, slowMo: 50 });
  page = await browser.newPage({ viewport: { width: 414, height: 896 } });

  console.log("[vibe] Logging in...");
  await loginAsUser(page, challengeData.CUSTOMER_76, challengeData.AUTH_76);

  console.log("[vibe] Session is live at", WEB_URL);
  console.log("[vibe] Keeping browser open — press Ctrl+C to close.");

  // Keep alive
  await new Promise(() => {});
}

main().catch(console.error);
