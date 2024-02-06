import {expect} from 'detox'




export const onStartStreak = async () => {
    const title = `Start your streak`
    const challengeCTA = "Take a challenge"
    const laterCTA = "Later"

    const texts = [title, challengeCTA, laterCTA]

    for (const i of texts) {
        await expect(element(by.text(i))).toBeVisible()
    };
}

export const onStartStreakFromHome = async () => {
    const title = `Start your streak`
    const challengeCTA = "Take a challenge"
    const texts = [title, challengeCTA]

    for (const i of texts) {
        await expect(element(by.text(i))).toBeVisible()
    };
}
