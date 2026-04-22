import { createCustomerRecords } from "@yu-life/yulife-bdd-framework";

/**
 * Standalone seed member for vibe specs that don't need the full tournament
 * fixture graph. Built with `createCustomerRecords` so every related record
 * (customer, auth, users, gameState, onboarding, employment) stays consistent.
 *
 * Use `VIBE_MEMBER.customer` + the framework's default `LetmeinNow1!` password
 * to log in (see `vibes/data/credentials.ts`).
 */
export const VIBE_MEMBER = createCustomerRecords({
  firstName: "Vibes",
  lastName: "Tester",
  status: "onboarded",
  userOnboarding: {
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      referralsPopover: true,
    },
  },
});
