import { navigateViaText, navigateViaID, CHALLENGE_TILE, idVisible, CHALLENGE_PROGRESS_BAR, expectIsVisibleViaText, QUESTS_SCREEN, wait, LEVEL_CHALLENGE_BUTTON, expectIsVisibleViaID, textVisible, CALM_BUTTON, HEADSPACE_BUTTON } from "@navigation"
import { sendSteps } from "@socket"


export const onChallengeComplete = (stepCount: number, level = 1) => async () => {
    const steps = `${stepCount} steps`
    const challengeLevel = `level ${level}`

    const screenCopy = ["well done!", "collect", steps, challengeLevel]


    for (const i of screenCopy) {
        await waitFor(element(by.text(i))).toBeVisible().withTimeout(10000)
        await expect(element(by.text(i))).toBeVisible()
    };
}

export const onMeditationChallengeComplete = (minutes: number, level: number) => async () => {
    const challengeLevel = `level ${level}`

    let timeSpent = `${minutes} minute`
    if (minutes > 1) {
        timeSpent = `${minutes} minutes`
    }

    const screenCopy = ["well done!", "collect", timeSpent, challengeLevel]

    for (const i of screenCopy) {
        await waitFor(element(by.text(i))).toBeVisible().withTimeout(10000)
        await expect(element(by.text(i))).toBeVisible()
    };

}

export const meditationAppModalVisible = () => async () => {
    await textVisible("Choose an app to start")
    await idVisible(CALM_BUTTON)
    await idVisible(HEADSPACE_BUTTON)
}

export const startChallenge = (challengeTile: string, ) => async () => {
    await navigateViaID(CHALLENGE_TILE(challengeTile))
    await navigateViaText("Take challenge")
    try {
        await navigateViaText("maybe later")
    } catch (e) {
        await idVisible(CHALLENGE_PROGRESS_BAR)()
    }
}

export const dismissChestUnlock = (streakDay = 1) => async () => {
    await navigateViaText("collect", 2500)
    try {
        await expectIsVisibleViaText(`Completed streak day ${streakDay}`, 2500)
        await navigateViaText("done")
    } catch (e) {
        await expectIsVisibleViaID(QUESTS_SCREEN(0))
    }
}

export const startChallengeFromQuests = (levelButton: number, challengeName: string) => async () => {
    await navigateViaID(LEVEL_CHALLENGE_BUTTON(levelButton))
    await navigateViaID(CHALLENGE_TILE(challengeName))
    await navigateViaText("Take challenge")

    if(challengeName === "meditation"){
        await wait(5000)()
    }
    
    try {
        await navigateViaText("maybe later")
    } catch (e) {
        await idVisible(CHALLENGE_PROGRESS_BAR)()
    }
}

export const completeShortStroll = (steps: number, waitTime: number) => async () => {
    await navigateViaID(CHALLENGE_TILE("short stroll"))
    await navigateViaText("Take challenge")
    await navigateViaText("maybe later")
    await sendSteps(steps, waitTime)()
}