import { screens } from "@appScreens"
import { navigation } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";
import * as ids from "@ids"
import { sendSteps } from "@socket";
import { getLocalisedString as t } from "@i18n"

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait,
    dismissNotificationScreenIfVisible,
    navigateViaID
} = navigation.common

export const {
    dismissStreakIfVisible
} = navigation.login

export const {
    startChallenge,
} = screens.challenges

export const tapChallenge = (challenge: string) => async () => {
    await tapText(challenge)()
}

export const {
    scrollFromID,
    scrollUntilIdVisible,
    scrollUntilTextVisible,
    scrollFromText
} = navigation.scrolling

export const completeChallenge = (levelNumber: number, challengeType: string) => async () => {
    await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber))
    await startChallenge(challengeType)()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
    await navigateViaText("Done")
}

export const completeSecondChallenge = (levelNumber: number, challengeType: string) => async () => {
    await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber))
    await startChallenge(challengeType)()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text(t("Collect")))).toBeVisible().withTimeout(5000)
    await navigateViaText(t("Collect"))
}