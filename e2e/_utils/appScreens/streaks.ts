
export const onStartStreak = (day = 1) => async () => {
    const title = `Start streak day ${day}`
    const subtitle = `Do 5 challenges in a row to earn 2500 yucoin.`
    const challengeCTA = "take a challenge"
    const laterCTA = "later"

    const texts = [title, subtitle, challengeCTA, laterCTA]

    for (const i of texts) {
        await expect(element(by.text(i))).toBeVisible()
    };
}
