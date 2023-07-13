import { restart } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";

export const start = async () => {
    await dataManager.reseed();
    await restart(process.env.TARGET_LOCALE || "en-GB");
};
