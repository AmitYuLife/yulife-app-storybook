import { dataManager } from "@yu-life/yulife-bdd-framework";
import { startWithoutLaunch, startWithoutWBHub } from "@navigation";
import * as dataToInsert from "../_data";

beforeAll(async () => {
  const API_URL = (process.env.API_URL as string) || `http://localhost:5000/`;

  console.log("Adding data...", Object.values(dataToInsert).length);

  dataManager.addData(dataToInsert as any);
  await dataManager.connect(API_URL, true);
  await dataManager.reseed();
});

afterAll(async () => {
  await dataManager.rerunMongoTestMigrations();
});

export const start = startWithoutLaunch();

export const startWithoutWBHItems = startWithoutWBHub();
