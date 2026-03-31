import { startWithoutLaunch } from "@navigation";
import { connectDataManager } from "../../dataManager";
import { triggerSearchTokens } from "../../_utils/appScreens/leaderboard";
import * as dataToInsert from "../_data";

beforeAll(() => connectDataManager(dataToInsert));

export const start = startWithoutLaunch();
export const startUS = startWithoutLaunch("en-US");

export const withSearchToken = (userCount: number) => async () => {
  await triggerSearchTokens(userCount)();
  await startWithoutLaunch()();
};
