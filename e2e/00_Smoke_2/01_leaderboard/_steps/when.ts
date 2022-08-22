import { navigation } from "@navigation"
import { AVATAR_BUILDER_LIST, YUMOJI_PART_ID, CATEGORY_TYPE, COLOUR } from "@ids"
export { addStepsHistoricalData, addCyclingHistoricalData, addMindfulnessHistoricalData} from "@socket";


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
} = navigation.scrolling

export const turnOffLeaderboard = (leaderboardID: string) => async () => {
    const leaderboard = element(by.id(leaderboardID))
    const offButton = element(by.text("Turn it off"))

    await leaderboard.tap()
    await offButton.tap()
}

export const clickUser= (user: string) => async () => {
    await tapText(user)()
}

export const wait3secs = async () => {
    await wait(3000)()
}

export const tapTab = (tabName: string) => async () => {
    const tab = element(by.id(CATEGORY_TYPE(tabName)))
    await tab.tap()
}

export const tapItem = (partID: string) => async () => {
    await scrollUntilIdVisible(AVATAR_BUILDER_LIST, YUMOJI_PART_ID(partID), "down")()
    const item = element(by.id(YUMOJI_PART_ID(partID)))
    await item.tap()
}

export const tapColour = (hexValue: string) => async () => {
    await scrollUntilIdVisible(AVATAR_BUILDER_LIST, COLOUR(hexValue), "down")()
    const colour = element(by.id(COLOUR(hexValue)))
    await colour.tap()
}

export const clickChallengeSomebodyButton = async () => {
    await navigateViaText("Challenge somebody", 1000)
}

export const clickNext = async () => {
    await navigateViaText("Next")
}

export const clickLetsGo = async () => {
    await navigateViaText("Let's go")
}

export const clickDuelButton = async () => {
    await navigateViaText("Challenge to duel", 1000)
}