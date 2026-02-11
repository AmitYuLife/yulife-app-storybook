import { dataManager, DataManager, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as surgeStubs from "../_data";
import * as dataToInsert from "../../_data";
import { launchApp } from "@navigation";

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const getApiUrl = () => (process.env.API_URL as string) || `http://localhost:5000/`;

beforeAll(async () => {
  const API_URL = getApiUrl();

  console.log("Connecting to API:", API_URL);

  dataManager.addData(dataToInsert as any);

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      await dataManager.connect(API_URL, true);
      await dataManager.reseed();
      return;
    } catch (error) {
      console.error(`Data manager setup failed (attempt ${attempt}/${MAX_RETRIES}):`, error);

      if (attempt === MAX_RETRIES) {
        console.error("API_URL:", API_URL);
        throw error;
      }

      console.log(`Retrying in ${RETRY_DELAY_MS * attempt}ms...`);
      await sleep(RETRY_DELAY_MS * attempt);
    }
  }
});

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
  // Allow app to fully initialize after fresh launch
  await sleep(3000);
};
