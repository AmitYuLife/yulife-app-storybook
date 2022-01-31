import { screens } from "@appScreens"
import { navigation, STATS_TITLE, STATS_SCREEN, booleanIdVisible, booleanTextVisible, STATS_VALUE, CHALLENGE_HISTORY_THIS_WEEK, CHALLENGE_HISTORY_LAST_WEEK } from "@utils"
import moment = require("moment")
import { scrollUntilIdVisible, scrollUntilTextVisible } from "_utils/navigation/scrolling"

export const {
    menuItemsVisible,
} = screens.menu

export const {
    scrollFromID
} = navigation.scrolling

export const userStatsVisible = async () => {
    const titles = ["your yucoin", "challenges", "steps", "mindfulness"]
    const subtitles = ["total earned", "total redeemed", "total challenges completed", "challenge history", "average daily steps", "most steps in a day", "steps this week", "average mindful minutes per day", "mindful minutes on your best week", "mindful minutes this week", "see activity history"]
    const mostStepsDate = moment().subtract(7, "days").format("DD/MM/YYYY").toString()
    const mindfulWeekBeginningDate = "27/04/2020"
    const valueIDs = ["940", "0", "3", "917", "2,500", mostStepsDate, "5", "167", mindfulWeekBeginningDate]
    const challengeHistory = [1, 1]
    
    for(let i=0; i>challengeHistory.length;i++){
        if(i=0){
            await scrollUntilIdVisible(STATS_SCREEN, CHALLENGE_HISTORY_THIS_WEEK(challengeHistory[i]), "down")()
            await expect(element(by.id(CHALLENGE_HISTORY_THIS_WEEK(challengeHistory[i])))).toBeVisible()
        }else{
            await scrollUntilIdVisible(STATS_SCREEN, CHALLENGE_HISTORY_LAST_WEEK(challengeHistory[i]), "down")()
            await expect(element(by.id(CHALLENGE_HISTORY_LAST_WEEK(challengeHistory[i])))).toBeVisible()
        }
    }

    await scrollFromID(STATS_SCREEN, "down", "fast")()
    await scrollFromID(STATS_SCREEN, "down", "fast")()
    
    for (const i of valueIDs) {
        await scrollUntilIdVisible(STATS_SCREEN, STATS_VALUE(i), "down")()
        await expect(element(by.id(STATS_VALUE(i)))).toBeVisible()
    };
    
    await scrollFromID(STATS_SCREEN, "down", "fast")()
    await scrollFromID(STATS_SCREEN, "down", "fast")()

    for (const i of titles) {
        await scrollUntilIdVisible(STATS_SCREEN, STATS_TITLE(i), "down")()
        await expect(element(by.id(STATS_TITLE(i)))).toBeVisible()
    };

    await scrollFromID(STATS_SCREEN, "down", "fast")()
    await scrollFromID(STATS_SCREEN, "down", "fast")()

    for (const i of subtitles) {
        await scrollUntilTextVisible(STATS_SCREEN, i, "down")()
        await expect(element(by.text(i))).toBeVisible()
    };

}
