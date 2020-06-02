import { navigation, multipleTextVisible, Then, expectIsVisibleViaText } from "@utils"
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

export const onMeditation = async () => {
    const copy = ["Choose", "and app to start", "Or use any meditation app that", "integrates with", "apple health", "Results will be shown here"]
    for (const i of copy) {
        await expect(element(by.text(i))).toBeVisible()
    }
}
export const stepsAndCoinsVisible = (steps: number, coins: number) => async () => {
    await expectIsVisibleViaText(`${steps} steps`)
    await expectIsVisibleViaText(`${coins} yucoin today`)

}