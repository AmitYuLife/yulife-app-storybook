import { startWithoutLaunch } from "@navigation";
import { connectDataManager } from "../../../dataManager";
import {
  triggerGenerateBattlePassSeason,
  triggerCreateRandomChestPool,
} from "../../../battle_pass/_common/given";
import * as dataToInsert from "../../_data";

beforeAll(() => connectDataManager(dataToInsert, { port: 5001 }));

export const start = startWithoutLaunch("en-US");

export const withBattlePassRewards = (businessIds: string[]) => {
  return async () => {
    await triggerGenerateBattlePassSeason(businessIds)();
    await triggerCreateRandomChestPool();
    await startWithoutLaunch("en-US")();
  };
};
