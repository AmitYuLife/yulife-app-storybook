import { navigateViaText, navigateViaID, CHALLENGE_TILE, idVisible, CHALLENGE_PROGRESS_BAR, expectIsVisibleViaText, QUESTS_SCREEN, wait } from "@navigation"

export const onChallengeComplete = (stepCount: number, level = 1) => async () => {
    const steps = `${stepCount} steps`
    const challengeLevel = `level ${level}`

    const screenCopy = ["well done!", "collect", steps, challengeLevel]


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
    await navigateViaText("collect")
    try {
        await expectIsVisibleViaText(`Completed streak day ${streakDay}`, 2500)
        await navigateViaText("done")
    } catch (e) {
        console.log(`Error on dismissChestUnlocked`, e);
        await expectIsVisibleViaText(QUESTS_SCREEN(0))
    }
}