import { dataManager } from "@yu-life/yulife-bdd-framework";

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2000;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function connectDataManager(
  data: Record<string, unknown>,
  options?: { port?: number; skipReseed?: boolean }
) {
  const port = options?.port ?? 5000;
  const API_URL = (process.env.API_URL as string) || `http://localhost:${port}/`;
  console.log("Connecting to API:", API_URL);

  dataManager.addData(data as any);

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      await dataManager.connect(API_URL, true);

      if (!options?.skipReseed) {
        await dataManager.reseed();
      }

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
}
