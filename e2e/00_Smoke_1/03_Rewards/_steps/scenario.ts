import { startWithoutLaunch, restart} from "@navigation"
import { dataManager } from "@yu-life/yulife-bdd-framework";

export const start = startWithoutLaunch()

export const startUS = async () => {
    await dataManager.reseed();
    await restart("en-US");
};