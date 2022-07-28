import { navigation } from "@navigation"
export { sendSteps, addSteps3DaysHistoricalData, addStepsHistoricalData } from "@socket";
import { screens } from "@appScreens"



export const {
    tapID,
    tapText,
    replaceTextByID,
    restartWithData,
    reloadAppToTab
} = navigation.common

export const {
    loginAsUser,
    loginAndCollectSignupBonus,
    continueLogin,
    continueLoginAfterSignupBonus,
    loginOnly
} = navigation.login

export const {
    scrollFromID,
    swipeFromText
} = navigation.scrolling

export const turnOffLeaderboard = (leaderboardID: string) => async () => {
    const leaderboard = element(by.id(leaderboardID))
    const offButton = element(by.text("Turn it off"))

    await leaderboard.tap()
    await offButton.tap()
}

export const {
    tapMenuItem
} = screens.menu

