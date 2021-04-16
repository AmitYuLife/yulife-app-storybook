import { screens } from "@appScreens"
import { navigation, expectIsVisibleViaText } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait
} = navigation.common

export const {
    completeIntro,
    dismissStreakIfVisible
} = navigation.login

export const {
    startChallenge,
    dismissChestUnlock,
} = screens.challenges

export const finishIntro = async () => {
    await navigateViaText("let’s begin")
    await completeIntro()
}
