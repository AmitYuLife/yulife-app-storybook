import { navigation } from "@navigation"
export { quitAndReopenApp } from "@socket";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const {
    navigateTo,
} = navigation.common

export const triggerSetUserQuestProgress =  (userId: string, currentLevel: number, ) => async ()=> {
    await dataManager.triggerWorkerTask('Game.Quests.SetUserQuestProgress', {
        userId,
        currentLevel,
        userTime: moment().format(),
        appVersion: "4.30.0",
    })
}