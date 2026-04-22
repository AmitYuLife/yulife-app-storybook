import type { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

/**
 * Single source of truth for the vibe test user.
 *
 * Tests call `applyVibeCredentials(challengeData)` before seeding; it mutates
 * whatever login customer + auth the test relies on so they match these values.
 * No spec should be poking `.data.email` or `.data.password` directly.
 */
export const VIBE_EMAIL = "vibe@code.com";
export const VIBE_PASSWORD = "letmein";

type CredentialTargets = {
  customer?: IDatabaseItem;
  auth?: IDatabaseItem;
};

export function applyVibeCredentials({ customer, auth }: CredentialTargets): void {
  if (customer?.data) {
    customer.data.email = VIBE_EMAIL;
  }
  if (auth?.data) {
    auth.data.password = VIBE_PASSWORD;
  }
}
