import { dataManager } from "@yu-life/yulife-bdd-framework";

export default async function globalTeardown() {
  console.log("[vibes] Global teardown — cleaning up test data...");
  if (!process.env.SKIP_RESET) {
    await dataManager.resetData();
  }
  console.log("[vibes] Global teardown complete");
}
