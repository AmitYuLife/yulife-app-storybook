import { multipleTextVisible, navigation } from "@utils"
import { screens } from "@appScreens"
import { EVENT_PROGRESS_BAR, REFERRALS_INVITE_BUTTON, TODAYS_EARNINGS, YUCOIN_POWER, NEW_EVENT_ICON, LEADERBOARD_NAME, RADIO_ICON_COLOUR, CLAIM_BUTTON, ANIMATED_CIRCLE, NUM_OF_STARS, CHALLENGE_REWARD, EVENT_DIALOG_SCREEN_SCROLL } from "@ids"
import { GOALS_2 } from "@data"
import { buttonVisible } from "_utils/appScreens/challenges"


export const {
    idVisible,
    textVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    textVisibleAtIndex,
    idVisibleAtIndex
} = navigation.common

export const {
} = screens.streaks

export const {
    onChallengeComplete,
} = screens.challenges

export const {
    scrollUntilTextVisible,
    swipeFromText,
    swipeToText
} = navigation.scrolling

export const isOnInivteColleaguePage = async () => {
    await expect(element(by.id(REFERRALS_INVITE_BUTTON))).toBeVisible
    await expect(element(by.text("Your referrals"))).toBeVisible()
}

export const onTodaysEarnings = (steps = 0, cycling: string, mindfulness = 0, yuCoinPowerEarnRate: string) => async () => {
    await expectIsVisibleViaID(TODAYS_EARNINGS)
    await textVisible("earned today")()
    await textVisible("200 YuCoin")()
    await idVisible(YUCOIN_POWER("13"))()
    await expectIsVisibleViaText(`${steps} / 12000 steps`)
    await expectIsVisibleViaText(`${cycling}`)
    await expectIsVisibleViaText(`${mindfulness} / 30 mindful mins`)
    await textVisibleAtIndex(`0/${yuCoinPowerEarnRate}`,0)()
    await textVisibleAtIndex(`0/${yuCoinPowerEarnRate}`,1)()
    await textVisibleAtIndex(`0/${yuCoinPowerEarnRate}`,2)()
    await expectIsVisibleViaText("Today's challenges (0/1)")
    await scrollUntilTextVisible(TODAYS_EARNINGS,"No challenge done","down")()
    await scrollUntilTextVisible(TODAYS_EARNINGS,"Take a challenge (1 left)","down")()
}

export const yuCoinPowerInfo = (yuCoinPower: number) => async () => {

    const baseYucoinPower = "Equipping yourself with policies boosts your YuCoin Power in the Yuniverse."
    const yuCoinPowerTitle = "YuCoin\nPower"
    const powerBoost = `For every 1 YuCoin you would\nhave earned, you now earn ${yuCoinPower}!`

    await expect(element(by.text(yuCoinPowerTitle))).toBeVisible();
    await expect(element(by.text(baseYucoinPower))).toBeVisible()
    await expect(element(by.text(powerBoost))).toBeVisible()
}

export const eventToBeCompletedVisible = (numberOfProfiles: number, progressWidth: number) => async () => {
    const description = `${numberOfProfiles} / 5 profiles viewed`
    const eventTimeframe = GOALS_2.data.title

    await textVisible(description)()
    await idVisible(EVENT_PROGRESS_BAR(progressWidth))()
    await textVisible(eventTimeframe)()
    await idVisible(NEW_EVENT_ICON)()
}

export const eventCompletedVisible = (numberOfProfiles: number, progressWidth: number) => async () => {
    const description = `${numberOfProfiles} / 5 profiles viewed`
    const eventTimeframe = GOALS_2.data.title

    await textVisible(eventTimeframe)()
    await textVisible(description)()
    await idVisible(EVENT_PROGRESS_BAR(progressWidth))()
}

export const onEventDetailsScreen = async () => {
    const eventTimeframe = GOALS_2.data.title
    const eventDescriptionTitle = GOALS_2.data.descriptionTitle
    const eventDescription = GOALS_2.data.description

    await multipleTextVisible([eventTimeframe, eventDescriptionTitle, eventDescription])()

    await swipeFromText(eventDescriptionTitle, "up", "fast")()
    for (const info of GOALS_2.data.info) {
        await textVisible(info.title)();
        await textVisible(info.description)();
    }
    await scrollUntilTextVisible(EVENT_DIALOG_SCREEN_SCROLL, eventDescriptionTitle, "up")()
    await swipeFromText(eventDescriptionTitle, "down", "fast")()

}

export const leaderboardVisible = (customers: any[], steps?: any[]) => async () => {
    let i = 0

    for(const customer of customers){
        const name = customer.data.firstName + " " + customer.data.lastName
        await expect(element(by.id(LEADERBOARD_NAME(name)))).toBeVisible()
        const stepCount = steps?.[i]
        if(stepCount){
            await expect(element(by.text(stepCount.toString()))).toBeVisible()
        }
        i++
    }
}

export const personalDataVisible = (name: string,  world: string) => async () => {
    await textVisibleAtIndex((name), 0)()
    await textVisible(world)()
}

export const yuCoinPageEventDataCorrect = (numberOfProfiles: number, progressWidth: number) => async () => {
    const description = `${numberOfProfiles} / 5 profiles viewed`
    await textVisible(description)();
    await idVisible(EVENT_PROGRESS_BAR(progressWidth))()
}

export const claimVisible = (numOfStars: number) => async () => {
    await textVisible("Claim")()
    await idVisible(CLAIM_BUTTON)()
    await idVisible(ANIMATED_CIRCLE("#F43E8E"))()
    await idVisible(NUM_OF_STARS(numOfStars))()
}

export const onCompletedEventMilestonePage = (event: string, yuCoin: string, numOfStars: number, challengeType: string) => async () => {
    const eventTitle = `${event} event`

    await textVisible(eventTitle)()
    await textVisible("Great job!")()
    await textVisible("You have reached the event milestone!\nCongratulations. Claim your rewards")()
    await textVisible(`${yuCoin} YuCoin`)() 
    await idVisible(ANIMATED_CIRCLE("#F43E8E"))()
    await idVisible(NUM_OF_STARS(numOfStars))()
    await textVisible(challengeType)()
    await buttonVisible("Claim")()
}

export const milestoneComplete = (index: number) => async () => {
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), index)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), index)()
}

export const onCompletedEventPage = (event: string, challengeType1: string, challengeType2: string, challengeType3: string, yuCoin: string) => async () => {
    const eventTitle = `${event} event`

    await textVisible(eventTitle)()
    await textVisible("Great job!")()
    await textVisible("You have reached the event milestone!\nCongratulations. Claim your rewards")()
    await textVisible(challengeType1)()
    await textVisibleAtIndex(`${yuCoin} YuCoin`, 0)() 
    await idVisible(ANIMATED_CIRCLE("#F43E8E"))()
    await idVisible(NUM_OF_STARS(3))()
    await textVisible(challengeType2)()
    await textVisibleAtIndex(`${yuCoin} YuCoin`, 1)() 
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 0)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 0)()
    await swipeFromText(challengeType2, "left", "fast")()
    await textVisibleAtIndex(`${yuCoin} YuCoin`, 2)() 
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 1)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 1)()
    await textVisible(challengeType3)()
    await swipeFromText(challengeType2, "right", "fast")()
    await buttonVisible("Claim")()
}

export const challengeComplete = async () => {
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 0)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 0)()
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 1)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 1)()
    await swipeFromText("1 Profile viewed", "left", "fast")()
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 2)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 2)()
    await textVisible("5 / 5 profiles viewed")()
    await idVisible(EVENT_PROGRESS_BAR(1))()
}

export const yuCoinEarnedFromEvent = (yuCoinPower: number, rewardValue: number, milestone: number) => async () => {
    const yuCoinDownload = 200
    const yuCoinTotal = (yuCoinPower * rewardValue * milestone + yuCoinDownload).toLocaleString("en-US")    
    await textVisible(`${yuCoinTotal} YuCoin today`)()
}

export const challengeRewardVisible = (yuCoinPower: number, rewardValue: number) => async () => {
    const yuCoinTotal = (yuCoinPower * rewardValue).toString()
    await idVisibleAtIndex(CHALLENGE_REWARD(yuCoinTotal), 0)()
    await idVisibleAtIndex(CHALLENGE_REWARD(yuCoinTotal), 1)()
}
