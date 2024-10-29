import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import { BATTLE_PASS_DONATIONS } from "../_data";

export const { logInAndGoToTab, loginAsUser, loginOnly } = navigation.login;

export const triggerGenerateBattlePassSeason = async () => {
    await dataManager.triggerWorkerTask("Game.BattlePass.GenerateBattlePassSeason", {
        battlePassId: BATTLE_PASS_DONATIONS.data._id,
        seasonNumber: 1,
        execute: 1,
        purgeExisting: true,
        targetMultiplier: 0.375,
        limitMilestones: 3,
        seasonName: "Season of Harmony",
    });
};

export const triggerCreateRandomChestPool = async () => {
    await dataManager.triggerWorkerTask("Game.BattlePass.CreateRandomChestPool", {
        execute: true,
        label: "EVERYONE",
        pricingRate: 10,
        pricingType: "PEPY",
        battlePassPoolType: "business_product",
        cycleDuration: 1,
        cycleDurationUnit: "week",
        activeLives: 1000,
        location: "GB",
        maxDenomination: 2.5,
    });
};