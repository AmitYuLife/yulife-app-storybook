
export const onStartStreak = async () => {
    const title = `Start your Streak`
    const challengeCTA = "Take a challenge"
    const laterCTA = "Later"

    const texts = [title, challengeCTA, laterCTA]

    for (const i of texts) {
        await expect(element(by.text(i))).toBeVisible()
    };
}
