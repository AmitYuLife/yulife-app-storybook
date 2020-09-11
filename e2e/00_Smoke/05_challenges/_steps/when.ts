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
} = navigation.login

export const {
    startChallenge,
    dismissChestUnlock,
} = screens.challenges

export const finishIntro = async () => {
    await navigateViaText("let’s begin")
    await completeIntro()
}

export const dismissStreakIfVisible = (streakDay=1) => async()=>{
    try {
        await expectIsVisibleViaText(`Completed streak day ${streakDay}`, 2500)
        await navigateViaText("done")
    } catch (e) {
        return true
    }

}