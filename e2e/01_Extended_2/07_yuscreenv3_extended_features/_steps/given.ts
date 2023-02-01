import { navigation, completeOnboardingIntro, tapText, navigateViaText } from "@navigation"
import { CUSTOMER_1, AUTH_1 } from "@data"
import { navigateViaButton } from "01_Extended_1/02_wellbeing_hub/_steps/when"

export const {
    logInAndGoToTab
} = navigation.login

export const loginToYuScreen = (skipIntro = true, customer = CUSTOMER_1, auth = AUTH_1) => async () => {
    await logInAndGoToTab("yu", customer, auth, true)()
    if (skipIntro === true) {
        await completeOnboardingIntro()
    }
}