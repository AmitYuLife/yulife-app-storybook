import { dataManager } from "@yu-life/yulife-bdd-framework";

export { logInAndGoToTab } from "../../_common/given"

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
