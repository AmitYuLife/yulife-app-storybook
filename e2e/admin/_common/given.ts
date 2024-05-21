import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";

export const {
    loginOnly,
    loginAsUser,
    logInAndGoToTab,
    loginAndCollectSignupBonus,
    selectRegionIfVisible,
} = navigation.login

export const {
    wait,
} = navigation.common

export const triggerawardReferralYucoin = (userId:string) => async () => {
    await dataManager.triggerWorkerTask("Game.Awards.AwardReferralYucoin", {
        userId
    })
}