import { wait } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const levelUpForBattlePasses =
  (userId: string, incrementValue: number, waitTime = 1000) =>
  async () => {
    await dataManager.triggerEvent("user_levelled_up", {
      userId,
      userTime: moment().format(),
      __bpProgressIncValue: incrementValue,
      newLevel: incrementValue,
    });

    await wait(waitTime)();
  };
