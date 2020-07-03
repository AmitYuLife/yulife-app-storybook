import { navigation, multipleTextVisible, Then, expectIsVisibleViaText, CHALLENGE_HISTORY_STARS } from "@utils"
import { screens } from "@appScreens"

export const {
    idVisible,
    textVisible,
} = navigation.common

export const {
} = screens.streaks

export const {
    onChallengeComplete,
    onMeditationChallengeComplete
} = screens.challenges

export const onChallengeHistory = (challengeType: string, levelNum: number, yucoinNum: number, starCount: number, timeSpent?: number, steps?: number) => async () => {
    const fullHistory = "full history"
    const level = `level ${levelNum}`
    const yuCoin = `${yucoinNum} yucoin`

    let values = [challengeType, level, yuCoin, fullHistory]


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
