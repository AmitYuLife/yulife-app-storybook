import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import { BATTLE_PASS_DONATIONS } from "../_data";

export const { logInAndGoToTab, loginAsUser, loginOnly } = navigation.login;

export const triggerGenerateBattlePassSeason = async () => {
    await dataManager.triggerWorkerTask("GENERATE_DONATIONS_BATTLE_PASS_SEASON", {
        battlePassId: BATTLE_PASS_DONATIONS.data._id,
        seasonNumber: 1,
        execute: 1,
        purgeExisting: false,
        targetMultiplier: 0.375,
        limitMilestones: 3,
        seasonName: "Season of Harmony",
    });
};

export const triggerCreateRandomChestPool = async () => {
    await dataManager.triggerWorkerTask("SCHEDULE_RANDOM_CHEST_POOL_REWARD_LINKING", {});
};