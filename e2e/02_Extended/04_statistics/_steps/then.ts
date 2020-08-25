import { screens } from "@appScreens"
import { navigation, STATS_TITLE, STATS_SCREEN, booleanIdVisible, booleanTextVisible, STATS_VALUE, STATS_CHALLENGE_HISTORY } from "@utils"
import moment = require("moment")

export const {
    menuItemsVisible,
} = screens.menu

export const {
    scrollFromID
} = navigation.scrolling

export const userStatsVisible = async () => {
    const titles = [STATS_TITLE("your yucoin"), STATS_TITLE("challenges"), STATS_TITLE("steps"), STATS_TITLE("mindfulness")]
    const subtitles = ["total earned", "total redeemed", "total challenges completed", "challenge history", "average daily steps", "most steps in a day", "steps this week", "average mindful minutes per day", "mindful minutes on your best week", "mindful minutes this week", "see activity history"]
    const mostStepsDate = moment().subtract(7, "days").format("DD/MM/YYYY").toString()
    const mindfulWeekBeginningDate = "27/04/2020"
    const valueIDs = [STATS_VALUE("940"), STATS_VALUE("0"), STATS_VALUE("3"), STATS_CHALLENGE_HISTORY(1), STATS_CHALLENGE_HISTORY(1), STATS_VALUE("917"), STATS_VALUE("2,500"), STATS_VALUE(mostStepsDate), STATS_VALUE("57"), STATS_VALUE("167"), STATS_VALUE(mindfulWeekBeginningDate)]

    const maxAttempts = 25

    for (const i of valueIDs) {
        let currentAttempt = 0
        let valueVisible = await booleanTextVisible(i)

        while (valueVisible === false && currentAttempt < maxAttempts) {

            try {
                await expect(element(by.id(i))).toBeVisible()
                valueVisible = await booleanIdVisible(i)
                currentAttempt += 1
            } catch (e) {
                await scrollFromID(STATS_SCREEN, "up", "slow")()
                await expect(element(by.id(i))).toBeVisible()
                valueVisible = await booleanIdVisible(i)
                currentAttempt += 1
            }

        }
    };
    await scrollFromID(STATS_SCREEN, "down", "fast")()
    await scrollFromID(STATS_SCREEN, "down", "fast")()

    for (const i of titles) {
        let currentAttempt = 0
        let isTitleVisible = await booleanIdVisible(i)
        while (isTitleVisible === false && currentAttempt < maxAttempts) {

            await scrollFromID(STATS_SCREEN, "up", "slow")()
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

            await scrollFromID(STATS_SCREEN, "up", "slow")()
            isSubTitleVisible = await booleanTextVisible(i);

            currentAttempt += 1
        }


        await expect(element(by.text(i))).toBeVisible()
    };

}
