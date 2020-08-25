import { screens } from "@appScreens"
import { navigation, STATS_TITLE, Then, STATS_SCREEN, expectDoesNotExistViaText } from "@utils"
import detoxExport = require("detox")
import { promises } from "dns"

export const {
    onDailySteps,
    onTodaysYucoin
} = screens.dailySteps


export const {
    menuItemsVisible,
} = screens.menu

export const {
    rewardVisible,
    specialRewardVisible,
    onSpecialRewardScreen,
    lockedRewardVisible,
} = screens.rewards

export const {
    idVisible,
    textVisible,
    multipleTextVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    booleanIdVisible,
    booleanTextVisible
} = navigation.common

export const {
    scrollFromText,
    scrollFromID
} = navigation.scrolling


export const statsCorrect = async () => {
    await expect(element(by.text("statistics"))).toBeVisible()
    const titles = [STATS_TITLE("your yucoin"), STATS_TITLE("challenges"), STATS_TITLE("steps"), STATS_TITLE("mindfulness"), STATS_TITLE("cycling")]
    const subtitles = ["total earned", "total redeemed", "total challenges completed", "challenge history", "average daily steps", "most steps in a day", "steps this week", "average mindful minutes per day", "mindful minutes on your best week", "mindful minutes this week", "average cycling distance per day", "cycling distance on your best week", "cycling distance this week", "see activity history"]

    const maxAttempts = 35

    for (const i of titles) {
        let currentAttempt = 0
        let isTitleVisible = await booleanIdVisible(i)
        while (isTitleVisible === false && currentAttempt < maxAttempts) {
            
            await scrollFromID(STATS_SCREEN, "up", "slow", 0.2)()
            isTitleVisible = await booleanIdVisible(i)
            currentAttempt += 1
        }
        await expect(element(by.id(i))).toBeVisible()
    }

    await scrollFromID(STATS_SCREEN, "down", "fast")()
    await scrollFromID(STATS_SCREEN, "down", "fast")()

    for (const i of subtitles) {
        let currentAttempt = 0
        let isSubTitleVisible = await booleanTextVisible(i)
        while (isSubTitleVisible === false && currentAttempt < maxAttempts) {

            await scrollFromID(STATS_SCREEN, "up", "slow", 0.2)()
            isSubTitleVisible = await booleanTextVisible(i);

            currentAttempt += 1
        }

        await expect(element(by.text(i))).toBeVisible()
    };
}