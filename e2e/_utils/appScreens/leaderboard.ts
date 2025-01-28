import { clearFieldByID, tapID, tapIDAtIndex, tapText, typeViaID } from "@navigation"
import * as ids from "@ids"
import { expect } from 'detox'
import { dataManager } from "@yu-life/yulife-bdd-framework"

export const searchLeaderboard = (user: string) => async () => {
    await clearFieldByID(ids.INPUT_FIELD)()
    await typeViaID(ids.INPUT_FIELD, user)()
}

export const checkCopyNoLeaderboard = async () => {
    const copy = "Sit tight, while we set up your leaderboard";
    await expect(element(by.text(copy))).toBeVisible(45)
}

export const switchLeaderboard = (leaderboardName:string, waitTime=0) => async()=> {
    await tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1, waitTime)()
    await tapID(ids.COMMUNITY_LIST_ITEM(leaderboardName))()
    await tapText("View Leaderboard")()
}

export const triggerSearchTokens =  (userCount:number) => async ()=> {
  await dataManager.triggerWorkerTask('CREATE_USER_SEARCH_TOKENS', {execute:true, batchSize:userCount})
}