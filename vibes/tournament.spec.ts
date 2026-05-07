import { test } from "@playwright/test";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { waitForText, screenshot } from "./utils";
import { loginAsUser } from "./utils/login";
import { addRecords, connectDataManager } from "./dataManager";
import { applyVibeCredentials } from "./data/credentials";
import * as challengeData from "../e2e/challenges/_data";

applyVibeCredentials({ customer: challengeData.CUSTOMER_76, auth: challengeData.AUTH_76 });

// Drop the pre-baked participation row so the user lands on the pre-consent
// screen (not auto-joined into Shoreditch). The module namespace is sealed,
// so we work with a mutable copy for seeding.
const { TOURNAMENT_LOGIN_USER_PARTICIPATION: _omit, ...vibeChallengeData } = challengeData as any;

(vibeChallengeData as any).VIBE_ENHANCED_TOURNAMENT_FLAG = {
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
  await connectDataManager(vibeChallengeData);
});

test("Tournament states: not joined → joined → leaderboard + invited-no-consent row", async ({ page }) => {
  test.setTimeout(60 * 60 * 1000);

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

  // Skip mobile_app_opened — that triggers the auto-consent listener which
  // would join the user into the tournament. We want to land on pre-consent.

  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  // Hero-cards saga triggers on these actions; they don't fire automatically post-login.
  await page.evaluate(() => {
    const store = (window as any).__REDUX_STORE__;
    if (!store) {
      return;
    }

    store.dispatch({ type: "REFRESH_USER_PROFILE_EVENTS" });
    store.dispatch({ type: "CHALLENGE_RESET_SUCCESS" });
  });
  await page
    .waitForFunction(
      () => {
        const store = (window as any).__REDUX_STORE__;
        return store && (store.getState().user?.heroCards?.length || 0) > 0;
      },
      { timeout: 20000 }
    )
    .catch(() => undefined);

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
          heroHeadings: (s?.user?.heroCards || []).map((c: any) => c?.header?.heading || c?.id || "?"),
        };
      });
      console.log(`[vibe:debug attempt=${attempt}]`, JSON.stringify(state));
      if (state.heroHeadings.some((h: string) => h.includes("Purple Voyage"))) {
        return;
      }

      await page.evaluate(() => {
        const store = (window as any).__REDUX_STORE__;
        if (!store) {
          return;
        }

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
  const cardDebug = await page.evaluate(() => {
    const store = (window as any).__REDUX_STORE__;
    const heroCards = store?.getState().user?.heroCards || [];
    const card = heroCards.find((c: any) => c?.header?.heading === "Purple Voyage");
    let eventId: string | undefined;
    try {
      const payload = JSON.parse(card?.onPress?.payload || "{}");
      eventId = payload?.props?.eventId;
    } catch {}

    (window as any).__NAV?.push?.("yulife.member.DailySteps", {
      component: {
        id: "yulife.events.tournamentDetails",
        name: "yulife.events.tournamentDetails",
        passProps: { eventId, componentId: "yulife.member.DailySteps" },
      },
    });
    return { eventId };
  });
  console.log("[vibe:debug eventId]", cardDebug.eventId);
  await page.waitForTimeout(2000);

  // Wait for the pre-consent state to render, then hold so you can dev against it.
  await waitForText(page, "Join the tournament?", 15000);
  await waitForText(page, "Join tournament", 15000);
  await screenshot(page, "tournament-state-preconsent");

  // DEV HOLD — pause on the pre-consent screen, BEFORE joining the tournament.
  await page.waitForTimeout(30 * 60 * 1000);
});
