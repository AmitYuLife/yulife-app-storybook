import { dataManager } from "@yu-life/yulife-bdd-framework";
import { startWithoutLaunch } from "@navigation";
import * as dataToInsert from "../_data";

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

beforeAll(async () => {
  const API_URL = (process.env.API_URL as string) || `http://localhost:5000/`;

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

export const start = startWithoutLaunch();
