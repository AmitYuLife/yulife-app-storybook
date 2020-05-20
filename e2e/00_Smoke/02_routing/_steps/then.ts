import { screens } from "@appScreens"
import { navigation, expectIsVisibleViaID, expectIsVisibleViaText, STATS_TITLE, Then } from "@utils"

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
    multipleTextVisible
} = navigation.common

export const {
    scrollFromText,
    scrollFromID
} = navigation.scrolling


export const statsCorrect = async () => {
    const titles = [STATS_TITLE("your yucoin"), STATS_TITLE("challenges"), STATS_TITLE("steps"), STATS_TITLE("mindfulness"), STATS_TITLE("cycling")]
    const subtitles = ["total earned", "total redeemed", "total challenges completed", "challenge history", "average daily steps", "most steps in a day", "steps this week", "average mindful minutes per day", "mindful minutes on your best week", "mindful minutes this week", "average cycling distance per day", "cycling distance on your best week", "cycling distance this week"]

    // your yucoin
    await expectIsVisibleViaID(titles[0])
    await expectIsVisibleViaText(subtitles[0])
    await expectIsVisibleViaText(subtitles[1])

    await scrollFromText(subtitles[0], "up", "slow")()

    // challenges
    await expectIsVisibleViaID(titles[1])
    await expectIsVisibleViaText(subtitles[2])
    await expectIsVisibleViaText(subtitles[3])


    await scrollFromID(titles[1], "up", "slow")()

    // steps
    await expectIsVisibleViaID(titles[2])
    await expectIsVisibleViaText(subtitles[4])
    await expectIsVisibleViaText(subtitles[5])
    await scrollFromID(titles[2], "up", "slow")()
    await expectIsVisibleViaText(subtitles[6])

    // mindfulness
    await expectIsVisibleViaID(titles[3])
    await scrollFromText(subtitles[6], "up", "slow")()
    await expectIsVisibleViaText(subtitles[7])
    await expectIsVisibleViaText(subtitles[8])
    await expectIsVisibleViaText(subtitles[9])

    //cycling
    await scrollFromText(subtitles[7], "up", "slow")()
    await expectIsVisibleViaID(titles[4])
    await expectIsVisibleViaText(subtitles[10])
    await expectIsVisibleViaText(subtitles[11])
    await scrollFromText(subtitles[11], "up", "slow")()
    await expectIsVisibleViaText(subtitles[12])
    await expectIsVisibleViaText("see activity history")
}