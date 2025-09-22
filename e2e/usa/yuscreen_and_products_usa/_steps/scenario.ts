import { dataManager } from "@yu-life/yulife-bdd-framework";
import { startWithoutLaunch } from "@navigation";
import * as dataToInsert from "../../_data";
import {
  triggerGenerateBattlePassSeason,
  triggerCreateRandomChestPool,
} from "../../../battle_pass/_common/given";

beforeAll(async () => {
  const API_URL = `http://localhost:5001/`;

  console.log("Adding data...", Object.values(dataToInsert).length);

  dataManager.addData(dataToInsert as any);
  await dataManager.connect(API_URL, true);
  await dataManager.reseed();
});

export const start = startWithoutLaunch("en-US");

export const withBattlePassRewards = (businessIds: string[]) => {
  return async () => {
    await triggerGenerateBattlePassSeason(businessIds)();
    await triggerCreateRandomChestPool();
    await startWithoutLaunch("en-US")();
  };
};
