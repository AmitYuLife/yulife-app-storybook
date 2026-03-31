import { dataManager } from "@yu-life/yulife-bdd-framework";
import { startWithoutLaunch } from "@navigation";
import { connectDataManager } from "../../dataManager";
import * as dataToInsert from "../_data";
export { restartWithoutWBHub } from "@navigation";

beforeAll(() => connectDataManager(dataToInsert));

afterAll(async () => {
  await dataManager.rerunMongoTestMigrations();
});

export const start = startWithoutLaunch();
