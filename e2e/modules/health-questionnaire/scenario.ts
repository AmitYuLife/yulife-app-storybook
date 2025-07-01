import { dataManager } from "@yu-life/yulife-bdd-framework";
import seed from "./_data";

beforeAll(async () => {
  dataManager.addData(seed as any);
  await dataManager.connect(process.env.API_URL, true);
});

export const start = async () => {
  await device.terminateApp();
  await dataManager.reseed();
  await device.clearKeychain();
  await device.launchApp({
    delete: true,
    languageAndLocale: {
      language: "en-GB",
      locale: "en-GB",
    },
  });
};
