import { Page } from "@playwright/test";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { loadApp } from "./index";
import axios from "axios";

const API_URL = process.env.API_URL_UK || process.env.API_URL || "http://localhost:5000";

/**
 * Login by calling the LoginUser GraphQL mutation directly (same as Detox),
 * then injecting the token into localStorage before loading the app.
 */
export async function loginAsUser(
  page: Page,
  customer: IDatabaseItem,
  auth: IDatabaseItem,
) {
  const email = customer.data.email;
  const password = auth.data.password;

  console.log("[vibes] Logging in as", email, "via GraphQL mutation...");

  // Call the LoginUser mutation — same as detox.sagas.e2e.ts
  const { data } = await axios.post(`${API_URL}/graphql`, {
    query: `mutation LoginUser($email: String!, $password: String!, $method: LoginMethod!) {
      loginUser(email: $email, password: $password, method: $method) {
        token
      }
    }`,
    variables: {
      email,
      password,
      method: "PASSWORD",
    },
  });

  const token = data?.data?.loginUser?.token;

  if (!token) {
    console.error("[vibes] Login failed. Response:", JSON.stringify(data));
    throw new Error(`[vibes] Failed to get auth token for ${email}`);
  }

  console.log("[vibes] Got auth token, injecting into app");

  // Navigate to the app first (need a page context for localStorage)
  await page.goto("http://localhost:3000", { waitUntil: "commit" });

  // Inject the token into localStorage where expo-secure-store reads from
  await page.evaluate((t) => {
    localStorage.setItem("__secure_store___Store_token", t);
  }, token);

  // Reload — the app will find the token and boot into authenticated state
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(8000);
}

/**
 * Login and navigate to a specific tab.
 */
export async function loginAndNavigateToTab(
  page: Page,
  tab: "yucoin" | "quests" | "yu" | "leaderboard" | "rewards",
  customer: IDatabaseItem,
  auth: IDatabaseItem,
) {
  await loginAsUser(page, customer, auth);

  const tabMap: Record<string, string> = {
    yucoin: "Steps",
    quests: "Quests",
    yu: "YuScreen",
    leaderboard: "Leaderboard",
    rewards: "Rewards",
  };

  const tabLabel = tabMap[tab];
  if (tabLabel) {
    const tabBtn = page.getByText(tabLabel, { exact: true }).first();
    if (await tabBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await tabBtn.click();
      await page.waitForTimeout(2000);
    }
  }
}
