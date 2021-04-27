import { navigateViaText, navigateViaID, CHALLENGE_TILE, idVisible, CHALLENGE_PROGRESS_BAR, expectIsVisibleViaText, QUESTS_SCREEN, wait, LEVEL_CHALLENGE_BUTTON, expectIsVisibleViaID } from "@navigation"

export const onChallengeComplete = (stepCount: number, level = 1) => async () => {
    const steps = `${stepCount} steps`
    const challengeLevel = `level ${level}`

    const screenCopy = ["well done!", "collect", steps, challengeLevel]


    for (const i of screenCopy) {
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
        await expect(element(by.text(i))).toBeVisible()
    };

}

export const startChallenge = (challengeTile: string, ) => async () => {
    await navigateViaID(CHALLENGE_TILE(challengeTile))
    await navigateViaText("take challenge")
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
    await navigateViaText("take challenge")
    try {
        await navigateViaText("maybe later")
    } catch (e) {
        await idVisible(CHALLENGE_PROGRESS_BAR)()
    }
}