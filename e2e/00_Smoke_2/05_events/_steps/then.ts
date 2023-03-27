import { multipleTextVisible, navigation } from "@utils"
import { screens } from "@appScreens"
import { EVENT_PROGRESS_BAR, REFERRALS_INVITE_BUTTON, NEW_EVENT_ICON, RADIO_ICON_COLOUR, CLAIM_BUTTON, ANIMATED_CIRCLE, NUM_OF_STARS, CHALLENGE_SET, CHALLENGE_TILE, CHALLENGE_STARS, CHALLENGE_HISTORY_STARS } from "@ids"
import { GOALS_4, GOAL_REWARD_MILESTONE_9, GOAL_REWARD_MILESTONE_10, GOAL_REWARD_MILESTONE_11 } from "@data"
import { buttonVisible } from "_utils/appScreens/challenges"
import { addCommasToNumber } from "_utils/appScreens/rewards"

export const {
    idVisible,
    textVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    textVisibleAtIndex,
    idVisibleAtIndex,
    idNotVisible,
    textNotVisible
} = navigation.common

export const {
} = screens.streaks

export const {
    onChallengeComplete,
} = screens.challenges

export const {
    scrollUntilTextVisible,
    swipeFromText
} = navigation.scrolling

export const isOnInivteColleaguePage = async () => {
    await expect(element(by.id(REFERRALS_INVITE_BUTTON))).toBeVisible
    await expect(element(by.text("Your referrals"))).toBeVisible()
}

export const eventCompletedVisible = (numberOfChallenges: number, progressWidth: number) => async () => {
    const description = `${numberOfChallenges} / 4 perfect challenges`
    const eventTimeframe = GOALS_4.data.title

    await textVisible(eventTimeframe)()
    await textVisible(description)()
    await idVisible(EVENT_PROGRESS_BAR(progressWidth))()
}

export const yuCoinPageEventDataCorrect = (numberOfChallenges: number, progressWidth: number) => async () => {
    const description = `${numberOfChallenges} / 4 perfect challenges`
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

export const onCompletedAllEventMilestonesPage = (event: string, challengeType1: string, challengeType2: string, challengeType3: string, yuCoin1: string, yuCoin2: string, yuCoin3: string) => async () => {
    const eventTitle = `${event} event`

    await textVisible(eventTitle)()
    await textVisible("Great job!")()
    await textVisible("You have reached the event milestone!\nCongratulations. Claim your rewards")()
    await textVisible(challengeType1)()
    await textVisible(yuCoin1)() 
    await idVisible(ANIMATED_CIRCLE("#F43E8E"))()
    await idVisible(NUM_OF_STARS(3))()
    await textVisible(challengeType2)()
    await textVisible(yuCoin2)() 
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 0)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 0)()
    await swipeFromText(challengeType2, "left", "fast")()
    await textVisible(yuCoin3)() 
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 1)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 1)()
    await textVisible(challengeType3)()
    await swipeFromText(challengeType2, "right", "fast")()
    await buttonVisible("Claim")()
}

export const threeStarEventToBeCompletedVisible = (numberOf3StarChallenges: number, progressWidth: number) => async () => {
    const description = `${numberOf3StarChallenges} / 4 perfect challenges`
    const eventTimeframe = GOALS_4.data.title

    await textVisible(description)()
    await idVisible(EVENT_PROGRESS_BAR(progressWidth))()
    await textVisible(eventTimeframe)()
    await idVisible(NEW_EVENT_ICON)()
}

export const eventScreenDetailsAreCorrect = (goal: typeof GOALS_4) => async () => {
    const eventTitle = goal.data.title
    const eventDescriptionTitle = goal.data.descriptionTitle
    const eventDescription = goal.data.description

    await multipleTextVisible([eventTitle, eventDescriptionTitle])()
    
    await swipeFromText(eventDescriptionTitle, "up", "fast")()
    await textVisible(eventDescription)()
    for (const info of goal.data.info) {
        await textVisible(info.title)();
        await textVisible(info.description)();
    }
    await swipeFromText("Task", "down", "fast")()
}

export const allMilestonesVisible = async () => {
    await textVisible(GOAL_REWARD_MILESTONE_9.data.rewardTitle)()
    await textVisible(GOAL_REWARD_MILESTONE_9.data.rewardDescription)()
    await idVisibleAtIndex(ANIMATED_CIRCLE("#E7E7EB"), 0)()
    await idVisible(NUM_OF_STARS(1))()
    await textVisible(GOAL_REWARD_MILESTONE_10.data.rewardTitle)()
    await textVisible(GOAL_REWARD_MILESTONE_10.data.rewardDescription)()
    await idVisibleAtIndex(ANIMATED_CIRCLE("#E7E7EB"), 1)()
    await idVisible(NUM_OF_STARS(2))()
    await swipeFromText(GOAL_REWARD_MILESTONE_10.data.rewardTitle, "left", "fast")()
    await textVisible(GOAL_REWARD_MILESTONE_11.data.rewardTitle)()
    await textVisible(GOAL_REWARD_MILESTONE_11.data.rewardDescription)()
    await idVisibleAtIndex(ANIMATED_CIRCLE("#E7E7EB"), 2)()
    await idVisible(NUM_OF_STARS(3))()
}

export const allChallengesVisible = async () => {
    await idVisible(CHALLENGE_SET)()
    await idVisible(CHALLENGE_TILE("short stroll"))()
    await idVisible(CHALLENGE_TILE("brisk walk"))()
    await idVisible(CHALLENGE_TILE("long walk"))()
    await idVisible(CHALLENGE_TILE("meditation"))()
    await swipeFromText("meditation", "up", "fast")()
    await idVisible(CHALLENGE_TILE("fiit class"))()
    await swipeFromText("fiit class", "down", "fast")()
}

export const challengesYuCoinValuesCorrect = (earnRate: number) => async () => {
    await textVisible("10 YuCoin")()
    await textVisible("10 - 60 YuCoin")()
    await textVisibleAtIndex("20 - 60 YuCoin", 0)()
    await textVisibleAtIndex("20 - 60 YuCoin", 1)()
    await swipeFromText("meditation", "up", "fast")()
    await textVisible("60 YuCoin")()
    await swipeFromText("fiit class", "down", "fast")()
}

export const stepsChallengeDataCorrect = (level: number, yucoinEarned: number, steps: number) =>  async () => {
    await textVisible(`Level ${level}`)()
    await textVisible(`${yucoinEarned}`)()
    await textVisible(`${steps} steps`)()
    await idVisible(CHALLENGE_STARS(true, true, true))()
}

export const firstChallengeClaimedVisible = async () => {
    await textVisible(GOAL_REWARD_MILESTONE_9.data.rewardTitle)()
    await textVisible(GOAL_REWARD_MILESTONE_9.data.rewardDescription)()
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 0)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 0)()
    await textVisible(GOAL_REWARD_MILESTONE_10.data.rewardTitle)()
    await textVisible(GOAL_REWARD_MILESTONE_10.data.rewardDescription)()
    await idVisibleAtIndex(ANIMATED_CIRCLE("#E7E7EB"), 0)()
    await idVisible(NUM_OF_STARS(2))()
    await swipeFromText(GOAL_REWARD_MILESTONE_10.data.rewardTitle, "left", "fast")()
    await textVisible(GOAL_REWARD_MILESTONE_11.data.rewardTitle)()
    await textVisible(GOAL_REWARD_MILESTONE_11.data.rewardDescription)()
    await idVisibleAtIndex(ANIMATED_CIRCLE("#E7E7EB"), 1)()
    await idVisible(NUM_OF_STARS(3))()
    await idVisible(EVENT_PROGRESS_BAR(0.25))()
    await textVisible("1 / 4 perfect challenges")()
}

export const firstAndSecondChallengeClaimedVisible = async () => {
    await textVisible(GOAL_REWARD_MILESTONE_9.data.rewardTitle)()
    await textVisible(GOAL_REWARD_MILESTONE_9.data.rewardDescription)()
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 0)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 0)()
    await textVisible(GOAL_REWARD_MILESTONE_10.data.rewardTitle)()
    await textVisible(GOAL_REWARD_MILESTONE_10.data.rewardDescription)()
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 1)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 1)()
    await swipeFromText(GOAL_REWARD_MILESTONE_10.data.rewardTitle, "left", "fast")()
    await textVisible(GOAL_REWARD_MILESTONE_11.data.rewardTitle)()
    await textVisible(GOAL_REWARD_MILESTONE_11.data.rewardDescription)()
    await idVisible(ANIMATED_CIRCLE("#E7E7EB"))()
    await idVisible(NUM_OF_STARS(3))()
    await idVisible(EVENT_PROGRESS_BAR(0.75))()
    await textVisible("3 / 4 perfect challenges")()
}

export const yuCoinTodayEarned = (challengeTotals: number[], milestoneTotal = 0) => async () => {
    const sum = challengeTotals.reduce((acc, val) => acc + val, 0)
    const yuCoinToday = `${addCommasToNumber(sum + (milestoneTotal * 10))} YuCoin today`
    await textVisible(yuCoinToday)()
  }

export const meditationChallengeDataCorrect = (stage: number, yucoinEarned: number, mins: number) =>  async () => {
    await textVisible(`Stage ${stage}`)()
    await textVisible(`${yucoinEarned}`)()
    await textVisible(`${mins} minutes`)()
}

export const challengeStarsCorrect = (starCount: number, challengeType: string, ) => async () => {
    for (let i = 0; i < starCount; i += 1) {
        await expect(element(by.id(CHALLENGE_HISTORY_STARS(i, challengeType)))).toBeVisible()
    }
}

export const allChallengesAndYuCoinsAwardedVisible = async () => {
    await textVisible("short stroll")()
    await textVisibleAtIndex("0 min", 0)()
    await textVisible("10 yucoin")()
    await challengeStarsCorrect(3, "short stroll")()
    await textVisible("brisk walk")()
    await textVisibleAtIndex("0 min", 1)()
    await textVisibleAtIndex("60 yucoin", 0)()
    await challengeStarsCorrect(3, "brisk walk")()
    await textVisible("long walk")()
    await textVisibleAtIndex("0 min", 2)()
    await textVisibleAtIndex("60 yucoin", 1)()
    await challengeStarsCorrect(3, "long walk")()
    await textVisible("meditation")()
    await textVisible("10 mins")()
    await textVisibleAtIndex("60 yucoin", 2)()
    await challengeStarsCorrect(3, "meditation")()
}

export const canSeeYesterdaysSteps = () => async () => {
    await textVisible("4,000 steps", 3000)()
}

export const onEventDetailsScreen = (goal: typeof GOALS_4) => async () => {
    const eventTitle = goal.data.title
    const eventDescriptionTitle = goal.data.descriptionTitle

    await multipleTextVisible([eventTitle, eventDescriptionTitle])()

}