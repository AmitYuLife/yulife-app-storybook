import { navigation } from "@utils"
import { screens } from "@appScreens"
import { formatNumber } from "../_resources/helpers"
import * as ids from "@ids"
import { expect } from 'detox'

export const {
    textVisible,
    idVisible,
    multipleIDVisible,
    multipleTextVisible,
    textNotVisible,
    idNotVisible,
    expectIsVisibleViaText,
    textVisibleAtIndex,
    idVisibleAtIndex
} = navigation.common

export const {
    scrollFromID,
    scrollFromText,
    scrollUntilIdVisible,
    scrollUntilTextVisible,
    swipeFromText,
    activityHistoryScrollStepDataCorrect,
    activityHistoryScrollCyclingDataCorrect,
    activityHistoryScrollMinsDataCorrect,
    scrollUntilIdVisibleAtIndex,
    scrollUntilTextVisibleAtIndex
} = navigation.scrolling

export const {
    onDailySteps,
} = screens.dailySteps


export const onLeaderboardConsent = async () => {
    const firstParagraph = "By joining the leaderboard, you are consenting to share details about your activity with other members of this leaderboard."
    const secondParagraph ="You can opt out at any time by tapping the name of the leaderboard and adjusting your settings."
    const copy = ["Join the Leaderboard?", firstParagraph,secondParagraph, "Yes"]

    await swipeFromText("Yes", "up", "slow")()
    for (const i of copy) {
        await expect(element(by.text(i))).toBeVisible()
    }

}

export const leaderboardStatus = (leaderboardName: string, status: "active" | "inactive") => async () => {
    await expect(element(by.id(ids.LEADERBOARD_STATUS(leaderboardName, status)))).toBeVisible()
}

export const {
    menuItemsVisible,
} = screens.menu

export const canSeeYesterdaysSteps = async () => {
    await textVisible("75,500 Steps", 3000)()
}

export const canSeeHistoricalSteps = (days: number, steps: number) => async () => {
    for (let i = 0; i < days; i++) {
    await scrollUntilIdVisibleAtIndex(ids.ACTIVITY_HISTORY_SCREEN, ids.ACTIVITY_HISTORY_CHALLENGE_VALUE(`${formatNumber(steps, 0)} Steps`), "down", 0)
    }
}