import { navigateViaText, navigateViaID, CHALLENGE_TILE, tapText, tapID, idVisible, CHALLENGE_PROGRESS_BAR } from "@navigation"

export const onChallengeComplete = (stepCount: number, level = 1) => async () => {
    const steps = `${stepCount} steps`
    const challengeLevel = `level ${level}`

    const screenCopy = ["well done!", "collect", steps, challengeLevel]

    screenCopy.forEach(async i => {
        await expect(element(by.text(i))).toBeVisible()
    });
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