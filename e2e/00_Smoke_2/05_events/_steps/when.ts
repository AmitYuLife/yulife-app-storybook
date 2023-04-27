import { screens,  } from "@appScreens"
import { CHALLENGE_TILE, navigateViaID, navigation } from "@utils"
export { authoriseFitkit, sendSteps, addStepsHistoricalData } from "@socket";
import { sendSteps, sendMindfulnessData, sendReduxEvent} from "@socket"

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait
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
    scrollFromText,
    swipeFromText
} = navigation.scrolling

export const selectAndCompleteWalkingChallenge = (challengeType: string, steps: number) => async () => {
    await startChallenge(challengeType)()
    await sendSteps(steps, 45000)()
}

export const selectAndCompleteMeditationChallenge = (mindfulnessdata: number) => async () => {
    await navigateViaID(CHALLENGE_TILE("meditation"))
    await navigateViaText("Take challenge")

    await waitFor(element(by.text("Use a different app")))
    .toBeVisible()
    .whileElement(by.text("Or use an app"))
    .swipe("up", "slow");

    await tapText("Use a different app")()
    await tapText("maybe later")()
    await tapText("I'm using a different app")()
    await sendMindfulnessData(mindfulnessdata, 75000)()
    await waitFor(element(by.text("Collect"))).toBeVisible().withTimeout(5000)
    await navigateViaText("Collect")
    await triggerAppUpdateState()
}

export const triggerAppUpdateState = async (): Promise<void> => {
    await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: "active" });
}

export const {
    tapMenuItem
} = screens.menu