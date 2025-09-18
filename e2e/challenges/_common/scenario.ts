import { dataManager } from "@yu-life/yulife-bdd-framework";
import { startWithoutLaunch } from "@navigation";
import * as dataToInsert from "../_data";

beforeAll(async () => {
  const API_URL = `http://localhost:5000/`;

  dataManager.addData(dataToInsert as any);
  await dataManager.connect(API_URL, true);
});

export const start = startWithoutLaunch();
