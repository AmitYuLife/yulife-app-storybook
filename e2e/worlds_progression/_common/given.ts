import { navigation } from "@navigation"
import { dataManager } from "@yu-life/yulife-bdd-framework"

export const {
    loginAsUser,
} = navigation.login


export const triggerGiveMissingYumojiItems =  (userIds:string[]) => async ()=> {
  await dataManager.triggerWorkerTask('GIVE_MISSING_YUMOJI_ITEMS', {userIds, execute:true})
}