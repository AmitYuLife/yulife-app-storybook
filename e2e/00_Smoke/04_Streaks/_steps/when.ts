import { screens } from "@appScreens"
import { navigation } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText
} = navigation.common

export const {
    completeIntro,
} = navigation.login

export const {
    startChallenge,
} = screens.challenges

export const finishIntro = async () => {
    await navigateViaText("let’s begin")
    await completeIntro()
}
