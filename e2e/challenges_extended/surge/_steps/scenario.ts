import { DataManager, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { connectDataManager } from "../../../dataManager";
import * as surgeStubs from "../_data";
import * as dataToInsert from "../../_data";
import { launchApp } from "@navigation";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const getApiUrl = () => (process.env.API_URL as string) || `http://localhost:5000/`;

beforeAll(() => connectDataManager(dataToInsert));

export const start = async () => {
  const API_URL = getApiUrl();
  const surgeDataManager = new DataManager();
  await surgeDataManager.connect(API_URL, true);
  surgeDataManager.clearData();
  await device.clearKeychain();
  await sleep(500);
  surgeDataManager.addData(surgeStubs as Record<string, IDatabaseItem>);
  surgeDataManager.addData(dataToInsert as any);
  await device.terminateApp();
  await sleep(1000);
  await surgeDataManager.reseed();
  await launchApp({ delete: true });
  await sleep(3000);
};
