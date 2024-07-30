import { dataManager } from "@yu-life/yulife-bdd-framework";

import { navigation } from "@navigation"

export const {
    logInAndGoToTab,
    loginAsUser,
} = navigation.login


export const archiveCustomerBusinessProductsByDate = (date: string) => async () => {
    await dataManager.triggerWorkerTask("MemberData.Lifecycle.ArchiveCustomerBusinessProductsByDate", {
		  date: date,
    })
}

export const synchroniseProductGoalParticipants = (prod: string) => async () => {
  await dataManager.triggerWorkerTask("Game.Goals.SynchroniseProductGoalParticipants", {
    businessProductId: prod,
  })
}

export const createNextSeasonParticipations = async () => {
  await dataManager.triggerWorkerTask("Game.Goals.CreateNextSeasonParticipations", {
  })
}

export const archiveAndCreateNextSeason = (date: string) => async ()=>{
  await archiveCustomerBusinessProductsByDate(date)()
  await createNextSeasonParticipations()
}