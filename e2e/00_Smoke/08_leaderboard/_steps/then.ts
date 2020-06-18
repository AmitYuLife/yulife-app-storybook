import { navigation, LEADERBOARD_NAME } from "@utils"

export const {
    textVisible,
    idVisible,
    multipleIDVisible,
    multipleTextVisible,
    textNotVisible
} = navigation.common

export const {
    scrollFromID
} = navigation.scrolling

export const onLeaderboardConsent = async () => {
    const subHeading = "This will let us share details about your activity with other members on this leaderboard. If you change your mind, you can opt out at any point in settings. Ready to compete?"
    const copy = ["Turn on Leaderboard?", subHeading, "yes please!"]

    for (const i of copy) {
        await expect(element(by.text(i))).toBeVisible()
    }

}

// note, not working for current user, I think the bold text is an issue
export const leaderboardVisible = (customers: any[], steps?: number[]) => async () => {
    for (const i of customers) {
        const name = i.data.firstName + " " + i.data.lastName
        try {
            await expect(element(by.id(LEADERBOARD_NAME(name)))).toBeVisible()
        } catch (e) {
            await expect(element(by.id(LEADERBOARD_NAME(name.bold())))).toBeVisible()
        }
    }

    if (steps) {
        for (const i of steps) {
            try {
                await expect(element(by.text(i.toString()))).toBeVisible()
            } catch (e) {
                await expect(element(by.text(i.toString().bold()))).toBeVisible()
            }
        }
    }
}