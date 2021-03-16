import { navigation, LEADERBOARD_NAME, LEADERBOARD_TOP_SCREEN, LEADERBOARD_SCREEN, LEADERBOARD_PEDESTAL, LEADERBOARD_STATUS, LEADERBOARD_SCROLL_LIST } from "@utils"

export const {
    textVisible,
    idVisible,
    multipleIDVisible,
    multipleTextVisible,
    textNotVisible
} = navigation.common

export const {
    scrollFromID,
    scrollFromText,
    scrollUntilIdVisible
} = navigation.scrolling

export const onLeaderboardConsent = async () => {
    const firstParagraph = "By joining the leaderboard, you are consenting to share details about your activity with other members of this leaderboard."
    const secondParagraph ="You can opt out at any time by tapping the name of the leaderboard and adjusting your settings."
    const copy = ["Join the Leaderboard?", firstParagraph,secondParagraph, "Yes"]

    for (const i of copy) {
        await expect(element(by.text(i))).toBeVisible()
    }

}

export const leaderboardVisible = (customers: any[], steps?: number[], scrollToTop = true) => async () => {
    let i = 0

    for(const customer of customers){
        const name = customer.data.firstName + " " + customer.data.lastName
        await scrollUntilIdVisible(LEADERBOARD_SCROLL_LIST, LEADERBOARD_NAME(name), "down")()
        await expect(element(by.id(LEADERBOARD_NAME(name)))).toBeVisible()
        const stepCount = steps?.[i]
        if(stepCount){
            await expect(element(by.text(stepCount.toString()))).toBeVisible()
        }
        i++
    }
}

export const leaderboardStatus = (leaderboardName: string, status: "active" | "inactive") => async () => {
    await expect(element(by.id(LEADERBOARD_STATUS(leaderboardName, status)))).toBeVisible()
}