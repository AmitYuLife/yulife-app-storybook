import { dataManager } from "@yu-life/yulife-bdd-framework";
import { startWithoutLaunch } from "@navigation";
import * as dataToInsert from "../_data";
import { triggerSearchTokens } from "../../_utils/appScreens/leaderboard";

beforeAll(async () => {
  const API_URL = (process.env.API_URL as string) || `http://localhost:5000/`;

  console.log("Adding data...", Object.values(dataToInsert).length);

  dataManager.addData(dataToInsert as any);
  await dataManager.connect(API_URL, true);
  await dataManager.reseed();
});

export const start = startWithoutLaunch();
export const startUS = startWithoutLaunch("en-US");

export const withSearchToken = (userCount: number) => async () => {
  await triggerSearchTokens(userCount)();
  await startWithoutLaunch()();
};
