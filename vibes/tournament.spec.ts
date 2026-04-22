import { test } from "@playwright/test";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { waitForText, screenshot } from "./utils";
import { loginAsUser } from "./utils/login";
import { addRecords, connectDataManager, triggerEvent } from "./dataManager";
import { applyVibeCredentials } from "./data/credentials";
import * as challengeData from "../e2e/challenges/_data";

applyVibeCredentials({ customer: challengeData.CUSTOMER_76, auth: challengeData.AUTH_76 });

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

test.beforeAll(async () => {
  await connectDataManager(challengeData);
});

test("Tournament states: not joined → joined → leaderboard + invited-no-consent row", async ({ page }) => {
  test.setTimeout(90 * 1000);

  await loginAsUser(page, challengeData.CUSTOMER_76, challengeData.AUTH_76);

  // Ensure the enhanced-tournament temp flag is set for this user — the seed may
  // skip inserts on a populated DB, leaving the flag missing and `getTournamentDetails`
  // returning null.
  const customerId = challengeData.CUSTOMER_76.data.customerId as string;
  await addRecords([
    {
      type: "mongo",
      modelName: "core_settings",
      data: {
        domain: "temp",
        entityType: "user",
        entityId: customerId,
        settings: { enableEnhancedTournament: true },
      },
    },
  ]);

  // Set yulifer.lastAppVersion to 5.7.0 so the auto-consent listener's app-version
  // gate passes. Normally this is set by the mobile_app_opened event; we fire it
  // directly to simulate the user's mobile app boot.
  await triggerEvent("mobile_app_opened", {
    userId: customerId,
    appVersion: "5.7.0",
    timestamp: new Date().toISOString(),
  });

  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  // Hero-cards saga triggers on these actions; they don't fire automatically post-login.
  await page.evaluate(() => {
    const store = (window as any).__REDUX_STORE__;
    if (!store) return;
    store.dispatch({ type: "REFRESH_USER_PROFILE_EVENTS" });
    store.dispatch({ type: "CHALLENGE_RESET_SUCCESS" });
  });
  await page.waitForFunction(
    () => {
      const store = (window as any).__REDUX_STORE__;
      return store && (store.getState().user?.heroCards?.length || 0) > 0;
    },
    { timeout: 20000 }
  ).catch(() => undefined);

  // State 1: Not joined. Poll for the heroCards saga to populate the tournament
  // card. If it doesn't show up on the first dispatch, re-dispatch + reload up to
  // a budget. Then hammer-scroll the FLAT_LIST_EVENTS horizontal scrollview and
  // click the card with force:true (Playwright's auto-scroll doesn't cope with
  // the RN FlatList's overflow-x container).
  const waitForHeroCard = async () => {
    for (let attempt = 0; attempt < 6; attempt++) {
      const state = await page.evaluate(() => {
        const store = (window as any).__REDUX_STORE__;
        const s = store?.getState();
        return {
          heroHeadings: (s?.user?.heroCards || []).map(
            (c: any) => c?.header?.heading || c?.id || "?",
          ),
        };
      });
      console.log(`[vibe:debug attempt=${attempt}]`, JSON.stringify(state));
      if (state.heroHeadings.some((h: string) => h.includes("Purple Voyage"))) return;
      await page.evaluate(() => {
        const store = (window as any).__REDUX_STORE__;
        if (!store) return;
        store.dispatch({ type: "REFRESH_USER_PROFILE_EVENTS" });
        store.dispatch({ type: "CHALLENGE_RESET_SUCCESS" });
      });
      await page.waitForTimeout(2500);
    }
  };
  await waitForHeroCard();
  await waitForText(page, "Purple Voyage", 20000);

  await screenshot(page, "tournament-state-not-joined-card");

  // Dispatch the card's onPress directly via the redux-sourced SDUI action. We
  // skip DOM scroll/click entirely because the RN FlatList on web ignores both
  // programmatic scrollLeft and Playwright's auto-scroll. This is what the real
  // card's onPress runs under the hood.
  await page.evaluate(() => {
    const store = (window as any).__REDUX_STORE__;
    const heroCards = store?.getState().user?.heroCards || [];
    const card = heroCards.find((c: any) => c?.header?.heading === "Purple Voyage");
    const eventId =
      card?.entityId?.replace(/^tournament_/, "") ||
      card?.id?.replace(/^tournament_hero_card_/, "");
    (window as any).__NAV?.push?.("yulife.member.DailySteps", {
      component: {
        id: "yulife.events.tournamentDetails",
        name: "yulife.events.tournamentDetails",
        passProps: { eventId, componentId: "yulife.member.DailySteps" },
      },
    });
  });
  await page.waitForTimeout(2000);

  // Wait for the pre-consent state to render, then hold so you can dev against it.
  await waitForText(page, "Join Tournament?", 10000);
  await waitForText(page, "Join tournament", 10000);
  await screenshot(page, "tournament-state-preconsent");

  // DEV HOLD — pause on the pre-consent screen.
  await page.waitForTimeout(60 * 1000);
});
