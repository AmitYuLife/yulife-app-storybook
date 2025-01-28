import { dataManager } from "@yu-life/yulife-bdd-framework";

import { navigation } from "@navigation"

export const {
    logInAndGoToTab,
    loginAsUser,
} = navigation.login


export const archiveCustomerBusinessProductsByDate = (date: string) => async () => {
    await dataManager.triggerWorkerTask("ARCHIVE_CUSTOMER_BUSINESS_PRODUCTS_BY_DATE", {
		  date: date,
    })
}

export const synchroniseProductGoalParticipants = (prod: string) => async () => {
  await dataManager.triggerWorkerTask("SYNCHRONISE_PRODUCT_GOAL_PARTICIPANTS", {
    businessProductId: prod,
  })
}

export const createNextSeasonParticipations = async () => {
  await dataManager.triggerWorkerTask("CREATE_NEXT_SEASON_PARTICIPATIONS", {
  })
}

export const archiveAndCreateNextSeason = (date: string) => async ()=>{
  await archiveCustomerBusinessProductsByDate(date)()
  await createNextSeasonParticipations()
}