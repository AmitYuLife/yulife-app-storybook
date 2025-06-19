import { dataManager, DataManager, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as surgeStubs from "../_data";
import * as dataToInsert from "../../_data";

beforeAll(async () => {
  const API_URL = (process.env.API_URL as string) || `http://localhost:5000/`;

  console.log("Adding data...", Object.values(dataToInsert).length);

  dataManager.addData(dataToInsert as any);
  await dataManager.connect(API_URL, true);
  await dataManager.reseed();
});

export const start = async () => {
  const surgeDataManager = new DataManager();
  surgeDataManager.connect(`http://localhost:5000/`, true);
  surgeDataManager.clearData();
  await device.clearKeychain();
  surgeDataManager.addData(surgeStubs as Record<string, IDatabaseItem>);
  surgeDataManager.addData(dataToInsert as any);
  await device.terminateApp();
  await surgeDataManager.reseed();
  await device.launchApp({ delete: true });
};
