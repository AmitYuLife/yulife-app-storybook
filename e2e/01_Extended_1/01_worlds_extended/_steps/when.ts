import { screens } from "@appScreens"
import { navigation, navigateViaID, LEVEL_CHALLENGE_BUTTON, QUESTS_SCREEN_YUNIVERSAL, textVisible, CHALLENGE_TILE } from "@utils"
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
    await textVisible("Take a challenge to unlock the chest")()
    await textVisible("later")()
    await navigateViaText("Let's do it")
    await startChallenge("short stroll")()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
    await wait(3000)()
    await navigateViaText("Done")
    await navigateViaText("Collect")
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

export const completeChallenge = (levelNumber: number, challengeType: string) => async () => {
    await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelNumber))
    await startChallenge(challengeType)()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
    await navigateViaText("Done")
}

export const completeSecondChallenge = (levelNumber: number, challengeType: string) => async () => {
    await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelNumber))
    await startChallenge(challengeType)()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
}

export const selectAndCompleteWalkingChallenge = (challengeType: string, steps: number) => async () => {
    await startChallenge(challengeType)()
    await sendSteps(steps, 35000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
}

export const tapYuniverseLevelForFirstTime = (x: number, y: number) => async () => {
    await element(by.id(QUESTS_SCREEN_YUNIVERSAL(1))).tapAtPoint({x:x, y:y});
}

export const tapYuniverseLevelAfterFirstTime = (x: number, y: number) => async () => {
    await element(by.id(QUESTS_SCREEN_YUNIVERSAL(2))).tapAtPoint({x:x, y:y});
}

export const selectAndCompleteMeditationChallengeWithoutMedia = (mindfulnessdata: number) => async () => { 
    await navigateViaID(CHALLENGE_TILE("meditation"))
    await navigateViaText("Take challenge")
    await tapText("maybe later")()
    await sendMindfulnessData(mindfulnessdata, 75000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
}

export const selectAndCompleteMeditationChallengeWithMedia = (mindfulnessdata: number) => async () => { 
    await navigateViaID(CHALLENGE_TILE("meditation"))
    await navigateViaText("Take challenge")
    await tapText("Use a different app")()
    // 4th may fix - 'maybe later' after 'use a different app'
    await tapText("maybe later")()
    await sendMindfulnessData(mindfulnessdata, 75000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
}
