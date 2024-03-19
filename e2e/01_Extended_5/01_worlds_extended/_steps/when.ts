import { screens } from "@appScreens"
import { navigation } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";
import { sendSteps, fitKitAddSampleQueries, sendMindfulnessData } from "@socket"
import moment = require("moment");
import { getLocalisedString as t } from "@i18n"
import * as ids from "@ids"

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait,
    booleanTextVisible,
    tapIDAtPoint,
    navigateViaID,
    textVisible
} = navigation.common

export const {
    startChallenge,
    startChallengeFromQuests,
} = screens.challenges

export const {
    scrollFromID,
    swipeFromText
} = navigation.scrolling



export const completeNewWorldShortStroll = (levelNumber: number) => async () => {
    await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber))
    await textVisible(t("Almost there! Take a challenge to unlock your reward."))()
    await textVisible(t("later"))()
    await navigateViaText(t("Let's do it"))
    await startChallenge("Short Stroll")()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text(t("Collect")))).toBeVisible().withTimeout(5000)
    await navigateViaText(t("Collect"))
    await wait(3000)()
    await navigateViaText(t("Done"))
    await navigateViaText(t("Collect"))
    await wait(1000)()
}

export const completeNewWorldMeditation = (levelNumber: number) => async () => {
    const record = [{
        startTime: moment().add(20, "seconds").toDate().toString(),
        endTime: moment().add(60, "seconds").toDate().toString(),
        value: 180,
        type: "MindfulSession"
    }]
    const chestCTAVisible = await booleanTextVisible("Let's do it")
    const collectCTAVIsible = await booleanTextVisible("Collect")
    await fitKitAddSampleQueries(record)
    await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber))

    if (chestCTAVisible === true) {
        await navigateViaText("Let's do it")
    }

    await startChallenge("Meditation")()
    await navigateViaText("I'm using a different app")
    await wait(78000)()
    await navigateViaText("Collect")
    if (collectCTAVIsible === true) {
        await navigateViaText("Collect")
    }

}

export const completYuniversWorldShortStroll = async () => {
    await startChallenge("Short Stroll")()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
    await waitFor(element(by.text("Done"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Done")
}

export const tapExploreYuniverse = async () => {
    await tapText("Explore the Yuniverse", 2000)
}

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

export const selectAndCompleteWalkingChallenge = (challengeType: string, steps: number) => async () => {
    await startChallenge(challengeType)()
    await sendSteps(steps, 35000)()
    await waitFor(element(by.text(t("Collect")))).toBeVisible().withTimeout(5000)
    await navigateViaText(t("Collect"))
}

export const tapYuniverseLevelForFirstTime = (x: number, y: number) => async () => {
    await element(by.id(ids.QUESTS_SCREEN_YUNIVERSAL(1))).tap({x:x, y:y});
}

export const tapYuniverseLevelAfterFirstTime = (x: number, y: number) => async () => {
    await element(by.id(ids.QUESTS_SCREEN_YUNIVERSAL(2))).tap({x:x, y:y});
}

export const selectAndCompleteMeditationChallengeWithoutMedia = (mindfulnessdata: number) => async () => { 
    await navigateViaID(ids.CHALLENGE_TILE("Meditation"))
    await navigateViaText(t("Take challenge"))
    await tapText(t("maybe later"))()
    await sendMindfulnessData(mindfulnessdata, 75000)()
    await waitFor(element(by.text(t("Collect")))).toBeVisible().withTimeout(5000)
    await navigateViaText(t("Collect"))
}

export const selectAndCompleteMeditationChallengeWithMedia = (mindfulnessdata: number) => async () => {
    await navigateViaID(ids.CHALLENGE_TILE("Meditation"))
    await navigateViaText(t("Take challenge"))
    await swipeFromText(t("Or use an app"), "up", "slow")()
    await tapText(t("Use a different app"))()
    await tapText(t("maybe later"))()
    await sendMindfulnessData(mindfulnessdata, 75000)()
    await waitFor(element(by.text(t("Collect")))).toBeVisible().withTimeout(5000)
    await navigateViaText(t("Collect"))
}
