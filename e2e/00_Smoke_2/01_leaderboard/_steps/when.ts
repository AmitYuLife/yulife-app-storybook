import { navigation } from "@navigation"
import * as ids from "@ids"
export { addStepsHistoricalData, addCyclingHistoricalData, addMindfulnessHistoricalData } from "@socket";
import { getLocalisedString as t } from "@i18n";
import { CUSTOMER_1 } from "@data";

export const {
    tapID,
    tapText,
    replaceTextByID,
    restartWithData,
    navigateViaText,
    wait,
    navigateViaID
} = navigation.common

export const {
    loginAsUser,
    loginAndCollectSignupBonus,
    continueLogin,
    continueLoginAfterSignupBonus,
    loginOnly,
} = navigation.login

export const {
    scrollFromID,
    scrollUntilIdVisible,
    swipeFromText,
    scrollUntilTextVisible
} = navigation.scrolling

export const turnOffLeaderboard = (leaderboardID: string) => async () => {
    const leaderboard = element(by.id(leaderboardID))
    const offButton = element(by.text(t("Turn it off")))

    await leaderboard.tap()
    await offButton.tap()
}

export const clickUser = (user: typeof CUSTOMER_1) => async () => {
    await tapText(`${user.data.firstName} ${user.data.lastName}`)()
}

export const wait3secs = async () => {
    await wait(3000)()
}

export const tapTab = (tabName: string) => async () => {
    const tab = element(by.id(ids.CATEGORY_TYPE(tabName)))
    await tab.tap()
}

export const tapItem = (partID: string) => async () => {
    await scrollUntilIdVisible(ids.AVATAR_BUILDER_LIST, ids.YUMOJI_PART_ID(partID), "down")()
    const item = element(by.id(ids.YUMOJI_PART_ID(partID)))
    await item.tap()
}

export const tapColour = (hexValue: string) => async () => {
    await scrollUntilIdVisible(ids.AVATAR_BUILDER_LIST, ids.COLOUR(hexValue), "down")()
    const colour = element(by.id(ids.COLOUR(hexValue)))
    await colour.tap()
}

export const clickChallengeSomebodyButton = async () => {
    await navigateViaText(t("Challenge somebody"), 1000)
}

export const clickNext = async () => {
    await navigateViaText("Next")
}

export const clickLetsGo = async () => {
    await navigateViaText(t("Let's go"))
}

export const clickDuelButton = async () => {
    await navigateViaText(t("Challenge to duel"), 1000)
}