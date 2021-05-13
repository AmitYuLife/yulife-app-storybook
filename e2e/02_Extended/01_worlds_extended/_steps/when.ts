import { screens } from "@appScreens"
import { navigation, navigateViaID, LEVEL_CHALLENGE_BUTTON } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";
import { sendSteps, fitKitAddSampleQueries } from "@socket"
import moment = require("moment");
export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait,
    booleanTextVisible,
} = navigation.common

export const {
    startChallenge,
    startChallengeFromQuests,
    dismissChestUnlock,
} = screens.challenges

export const {
    scrollFromID
} = navigation.scrolling



export const completeNewWorldShortStroll = (levelNumber: number) => async () => {

    await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelNumber))
    await navigateViaText("let's do it")
    await startChallenge("short stroll")()
    await sendSteps(400, 35000)()
    await waitFor(element(by.text("collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("collect")
    await waitFor(element(by.text("Done"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Done")
    await navigateViaText("collect")
}

export const completeNewWorldMeditation = (levelNumber: number) => async () => {
    const record = [{
        startTime: moment().add(20, "seconds").toDate().toString(),
        endTime: moment().add(60, "seconds").toDate().toString(),
        value: 180,
        type: "MindfulSession"
    }]
    const chestCTAVisible = await booleanTextVisible("let's do it")
    const collectCTAVIsible = await booleanTextVisible("collect")
    await fitKitAddSampleQueries(record)
    await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelNumber))

    if (chestCTAVisible === true) {
        await navigateViaText("let's do it")
    }

    await startChallenge("meditation")()
    await navigateViaText("I'm using a different app")
    await wait(70000)()
    await navigateViaText("collect")
    if (collectCTAVIsible === true) {
        await navigateViaText("collect")
    }


}