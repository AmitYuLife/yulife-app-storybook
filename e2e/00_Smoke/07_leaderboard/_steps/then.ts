import { navigation, LEADERBOARD_NAME, LEADERBOARD_TOP_SCREEN, LEADERBOARD_SCREEN, LEADERBOARD_PEDESTAL, LEADERBOARD_STATUS } from "@utils"

export const {
    textVisible,
    idVisible,
    multipleIDVisible,
    multipleTextVisible,
    textNotVisible
} = navigation.common

export const {
    scrollFromID,
    scrollFromText
} = navigation.scrolling

export const onLeaderboardConsent = async () => {
    const subHeading = "This will let us share details about your activity with other members on this leaderboard. If you change your mind, you can opt out at any point in settings. Ready to compete?"
    const copy = ["Turn on Leaderboard?", subHeading, "yes please!"]

    for (const i of copy) {
        await expect(element(by.text(i))).toBeVisible()
    }

}

export const leaderboardVisible = (customers: any[], steps?: number[], scrollToTop = true) => async () => {
    for (const i of customers) {
        const name = i.data.firstName + " " + i.data.lastName
        try {
            await expect(element(by.id(LEADERBOARD_NAME(name)))).toBeVisible()
        } catch (e) {
            await scrollFromID(LEADERBOARD_PEDESTAL, "up", "fast")()
            await expect(element(by.id(LEADERBOARD_NAME(name)))).toBeVisible()
        }
    }

    if (steps) {
        for (const i of steps) {
            try {
                await expect(element(by.text(i.toString()))).toBeVisible()
            } catch (e) {
                await scrollFromID(LEADERBOARD_PEDESTAL, "up", "fast")()
                await expect(element(by.text(i.toString()))).toBeVisible()
            }
        }
    }

    if (scrollToTop === true) {
        await scrollFromID(LEADERBOARD_PEDESTAL, "down", "fast")()
    }
}

export const leaderboardStatus = (leaderboardName: string, status: "active" | "inactive") => async () => {
    try {
        await expect(element(by.id(LEADERBOARD_STATUS(leaderboardName, status)))).toBeVisible()
    } catch (e) {
        await scrollFromText("connections", "up", "fast")()
        await expect(element(by.id(LEADERBOARD_STATUS(leaderboardName, status)))).toBeVisible()
    }
}