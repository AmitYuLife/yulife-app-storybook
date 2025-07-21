import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";

export const { loginAsUser, logInAndGoToTab, selectRegionIfVisible } = navigation.login;

export const { wait } = navigation.common;

export const triggerawardReferralYucoin = (userId: string) => async () => {
  await dataManager.triggerWorkerTask("AWARD_REFERRAL_YUCOIN", {
    userId,
  });
};
