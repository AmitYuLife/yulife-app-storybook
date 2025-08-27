import { dataManager } from "@yu-life/yulife-bdd-framework";
import * as navigation from "@navigation";
import * as dataToInsert from "../_data";

export const { start } = navigation;

beforeAll(async () => {
  const API_URL = (process.env.API_URL as string) || `http://localhost:5000/`;

  console.log("Adding data...", Object.values(dataToInsert).length);

  dataManager.addData(dataToInsert as any);
  await dataManager.connect(API_URL, true);
  await dataManager.reseed();
});
