import { navigation, navigateViaText, completeOnboardingIntro } from "@navigation"
import { CUSTOMER_43, AUTH_43 } from "../../_data"
import { dataManager } from "@yu-life/yulife-bdd-framework"
import moment from "moment"

export const {
    logInAndGoToTab
} = navigation.login

export const loginToYuScreen = (skipIntro = true, customer = CUSTOMER_43, auth = AUTH_43) => async () => {
    await logInAndGoToTab("yu", customer, auth, true)()
    if (skipIntro === true) {
        await completeOnboardingIntro()
    }
}

export const productStartDateNotificationWorker = () => async () => {
    await dataManager.triggerWorkerTask("Business.ProductStartDateNotificationTask", {})
}