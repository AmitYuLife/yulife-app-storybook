import { screens } from "@appScreens"
import { navigation, navigateViaID, LEVEL_CHALLENGE_BUTTON, QUESTS_SCREEN_YUNIVERSAL } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";
import { sendSteps, fitKitAddSampleQueries, sendMindfulnessData } from "@socket"
import moment = require("moment");
export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait,
    booleanTextVisible,
    tapIDAtPoint
} = navigation.common

export const {
    startChallenge,
    startChallengeFromQuests,
} = screens.challenges

export const {
    scrollFromID
} = navigation.scrolling



export const completeNewWorldShortStroll = (levelNumber: number) => async () => {

    await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelNumber))
    await navigateViaText("Let's do it")
    await startChallenge("short stroll")()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
    await waitFor(element(by.text("Done"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Done")
    await navigateViaText("Collect")
    await wait(10000)()
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
    await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelNumber))

    if (chestCTAVisible === true) {
        await navigateViaText("Let's do it")
    }

    await startChallenge("meditation")()
    await navigateViaText("I'm using a different app")
    await wait(78000)()
    await navigateViaText("Collect")
    if (collectCTAVIsible === true) {
        await navigateViaText("Collect")
    }

}

export const completYuniversWorldShortStroll = async () => {
    await startChallenge("short stroll")()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
    await waitFor(element(by.text("Done"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Done")
}

export const tapExploreYuniverse = async () => {
    await tapText("Explore the Yuniverse", 2000)
}