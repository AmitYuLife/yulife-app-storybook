import { navigation } from "@navigation"
export { quitAndReopenApp } from "@socket";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const {
    navigateTo,
    tapID,
} = navigation.common

export const triggerSetUserQuestProgress =  (userId: string, currentLevel: number, ) => async ()=> {
    await dataManager.triggerWorkerTask('SET_USER_QUEST_PROGRESS', {
        userId,
        currentLevel,
        userTime: moment().format(),
        appVersion: "4.30.0",
    })
}