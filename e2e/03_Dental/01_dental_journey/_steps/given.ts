import { navigation } from "@navigation"
import { dataManager } from "@yu-life/yulife-bdd-framework";

export const {
    loginAsUser,
    logInAndGoToTab,
    loginToYuScreen,
    loginAsPLIUser
} = navigation.login


export const deactivateGDentWorker = (execute:boolean, date: string) => async () => {
    await dataManager.triggerWorkerTask("Enrolment.EndOfGDentEnrolment", {
		execute: execute,
		date: date,
    })
}

export const cancelPersonalDentalWorker = (date: string) => async () => {
  await dataManager.triggerWorkerTask("PersonalProducts.CancelBupaPolicyByEndDate", {
  date: date,
  })
}

export const sunsetPersonalDentalWorker = (date: string) => async () => {
  await dataManager.triggerWorkerTask("PersonalProducts.SunsetBupaPolicies", {
  date: date,
  test: false,
  cancelStripeSubscription: false
  })
}