import { navigation, expectIsVisibleViaText, expectIsVisibleViaID, CHALLENGE_HISTORY_STARS, STEPS_COUNT } from "@utils"
import { screens } from "@appScreens"
import { addCommasToNumber } from "_utils/appScreens/rewards"

export const {
    idVisible,
    textVisible,
    multipleIDVisible,
    completedTodayStreakCopyVisible,
    textNotVisible
} = navigation.common

export const {
} = screens.streaks

export const {
    onChallengeComplete,
    onMeditationChallengeComplete,
    meditationAppModalVisible
} = screens.challenges

export const onMeditation = async () => {
    const copy = ["Choose", "and app to start", "Or use any meditation app that", "integrates with", "apple health", "Results will be shown here"]
    for (const i of copy) {
        await expect(element(by.text(i))).toBeVisible()
    }
}
export const stepsAndCoinsVisible = (steps: number, coins: number) => async () => {
    await expectIsVisibleViaID(STEPS_COUNT(steps))
    await expectIsVisibleViaText(`${addCommasToNumber(coins)} YuCoin today`)
}

export const onChallengeHistory = (challengeType: string, levelNum: number, yucoinNum: number, starCount: number, timeSpent?: number, steps?: number) => async () => {
    const fullHistory = "Full history"
    const yuCoin = `${yucoinNum} yucoin`

    let values = [challengeType, yuCoin, fullHistory]


    if (timeSpent > 1) {
        values.push(`${timeSpent} mins`)
    } else if (timeSpent === 1) {
        values.push(`${timeSpent} mins`)
    }

    if (steps > 1) {
        const stepCount = `${steps} steps`
        values.push(stepCount)
    }

    for (const value of values) {
        await expect(element(by.text(value))).toBeVisible()
    }

    for (let i = 0; i < starCount; i += 1) {
        await expect(element(by.id(CHALLENGE_HISTORY_STARS(i, challengeType)))).toBeVisible()
    }

}