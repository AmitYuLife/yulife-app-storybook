import { navigation } from "@navigation"
export { sendSteps, addSteps3DaysHistoricalData, addStepsHistoricalData, addSteps28DaysHistoricalData, addCycling28DaysHistoricalData, addMins28DaysHistoricalData, addMindfulnessHistoricalData} from "@socket";
import { screens } from "@appScreens"
import moment from "moment";

export const {
    tapID,
    tapText,
    replaceTextByID,
    restartWithData,
    reloadAppToTab,
    minimiseAndReopenApp,
    wait
} = navigation.common

export const {
    loginAsUser,
    loginAndCollectSignupBonus,
    continueLogin,
    continueLoginAfterSignupBonus,
    loginOnly,
    loginToYuScreen
} = navigation.login

export const {
    scrollFromID,
    swipeFromText,
    scrollUntilTextVisible,
    scrollUntilIdVisible,
    swipeToText,
    swipeToID
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

export const tapPreviousMonth = () => async () => {
    const previousMonth = moment().subtract(1, 'months').format('MMMM');
    await tapText(previousMonth)();
}