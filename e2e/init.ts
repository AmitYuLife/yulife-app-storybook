import * as path from "path";
import { socketServer } from "./_utils/socket";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import { takeLocalisedScreenshots } from "@i18n";

require("dotenv").config({ path: path.resolve(__dirname, "..", ".env.e2e") });

beforeAll(async () => {
  await socketServer.startServer();
});

afterEach(async () => {
  if (process.env.LOCALISED_SCREENSHOTS) {
    await takeLocalisedScreenshots(["ja-JP"]);
  }
});

// Comment out for detox debugging/dev
afterAll(async () => {
  await socketServer.close();
  await dataManager.resetData();
});
