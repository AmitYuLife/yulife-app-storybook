import { navigation } from "@navigation"
import { dataManager } from "@yu-life/yulife-bdd-framework"

export const {
    logInAndGoToTab,
    loginAsUser,
} = navigation.login


export const triggerGiveMissingYumojiItems =  (userIds:string[]) => async ()=> {
  await dataManager.triggerWorkerTask('Migrations.GiveMissingYumojiItems', {userIds, execute:true})
}