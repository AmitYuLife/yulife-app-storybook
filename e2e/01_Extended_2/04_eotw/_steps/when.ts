import { screens } from "@appScreens"
import { navigation, QUESTS_SCREEN_YUNIVERSAL, MALE_BODY, navigateViaID, CHALLENGE_TILE } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";
import { sendSteps, sendMindfulnessData, sendReduxEvent } from "@socket"

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
    scrollFromID,
    swipeFromText
} = navigation.scrolling

export const selectAndCompleteWalkingChallenge = (challengeType: string, steps: number) => async () => {
    await startChallenge(challengeType)()
    await sendSteps(steps, 45000)()
}

export const selectAndCompleteMeditationChallenge = (mindfulnessData: number) => async () => {
    await navigateViaID(CHALLENGE_TILE("meditation"))
    await navigateViaText("Take challenge")
    await tapText("Use a different app")()
    await tapText("maybe later")()
    await sendMindfulnessData(mindfulnessData, 80000)()
}

export const selectAndCompleteMeditationChallengeWithoutMedia = (mindfulnessData: number) => async () => {
    await navigateViaID(CHALLENGE_TILE("meditation"))
    await navigateViaText("Take challenge")
    await tapText("maybe later")()
    await sendMindfulnessData(mindfulnessData, 80000)()
}

export const tapYuniverseLevelForFirstTime = (questScreen: number, xCoordinate: number, yCoordinate: number, yCordinateIphoneSe?: number) => async () => {
    // the Y coordinate is different on separate screen sizes, so where necessary, give both Y-coordinate arguments
    if (device.name.includes("(iPhone SE (3rd generation))") && yCordinateIphoneSe) {
        await element(by.id(QUESTS_SCREEN_YUNIVERSAL(questScreen))).tap({x: xCoordinate, y: yCordinateIphoneSe});
    } else {
        await element(by.id(QUESTS_SCREEN_YUNIVERSAL(questScreen))).tap({x: xCoordinate, y: yCoordinate});
    }
}

export const tapYuniverseLevelAfterFirstTime = (x: number, y: number) => async () => {
    await element(by.id(QUESTS_SCREEN_YUNIVERSAL(2))).tapAtPoint({x:x, y:y});
}

export const triggerAppUpdateState = async (): Promise<void> => {
    await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: "active" });
}

export const createDefaultYumoji = async () => {
    await tapID(MALE_BODY)()
    await tapText("Continue")()
    await tapText("Save")()
    await tapText("Save changes")()
    await tapText("Done")()
}

export const tapIllDoThisLater = async () => {
    await tapText("I'll do this later")()
}

export const tapWeeklyChallenge = (amount: string) => async () => {
    await tapText(`${amount} coins`)()
}
