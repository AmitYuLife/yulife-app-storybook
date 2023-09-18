import { navigation, navigateViaText, wait } from "@utils"
import { screens } from "@appScreens"
import { USER_1 } from "@data"
import * as ids from "@ids"
import { briskWalkMaxReward, fiitMaxReward, longWalkMaxReward, meditationMaxReward, shortStrollMaxReward } from "../_resources/constants"


export const {
    idVisible,
    textVisible,
    textNotVisible,
    idExist,
    textVisibleAtIndex
} = navigation.common

export const {
    onChallengeComplete,
    onMeditationChallengeComplete
} = screens.challenges

export const {
    swipeFromText,
    scrollUntilIdVisible
} = navigation.scrolling

export const {

    onCreateAvatarScreen,
} = screens.yuscreen


export const mountainChestMessageVisible = async () => {
    textVisible("You have earned Yunity Mountain Chest", 3000)
}

export const yunityCorrect = (worldType: "Forest" | "Ocean" |"Desert" |"Mountain") => async()=>{
    await wait(5000)()
    let label = ""
    let subheading = ""

    switch(worldType){
        case "Forest":
            label = "You’ve achieved Yunity with the Forest"
            subheading = "Take a deep, celebratory breath.\nYou earned a Yunity forest chest!"
            break 
        case "Ocean":
            label = "You’ve achieved Yunity with the Ocean"
            subheading = "You took the plunge and ascended victorious. You earned a Yunity ocean chest!"
            break 
        case "Desert":
            label = "You’ve achieved Yunity with the Desert"
            subheading = "You are your own wellbeing oasis and earned a Yunity desert chest!"
            break
        case "Mountain":
            label = "You've achieved Yunity with the Mountain..."
            subheading = "You’re ready to explore the Yuniverse in your enlightened state. Enjoy your Yunity Mountain Chest and floating through the cosmos."
    }
    await textVisible(label, 3000)()
    await navigateViaText("Continue", 3000)
    mountainChestMessageVisible()
    await navigateViaText("Open the chest", 3000)
}

export const mountainTwoRewardsVisible = (level400 = false) => async () => {
    await textVisible("6 Levels\nBoost")()
    await textVisible("The Yuniversal\nReflection")()
    if (level400) {
        await textVisible("500\nYuCoin")()
    }
}

export const isOnExploreYuniverseScreen = async () => {
    await textVisible("Now is a time for reflection and gratitude as\nyou drift amongst the stars. Familiar friends\nwill guide you on your path towards the\nCelestial Chest", 3000)()
}

export const yuniverseChallengesVisible = async () => {
    await idVisible(ids.CHALLENGE_SET)()
    await idVisible(ids.CHALLENGE_TILE("Short Stroll"))()
    await idVisible(ids.CHALLENGE_TILE("Brisk Walk"))()
    await idVisible(ids.CHALLENGE_TILE("Long Walk"))()
    await idVisible(ids.CHALLENGE_TILE("Meditation"))()
    await swipeFromText("Meditation", "up", "fast")()
    await idVisible(ids.CHALLENGE_TILE("Fiit Class"))()
    await swipeFromText("Fiit Class", "down", "fast")()
}

export const yuniverseChallengesYuCoinTilesCorrect = (earnRate: number) => async () => {
    const shortStrollBonused = (shortStrollMaxReward * earnRate) * 2
    const briskWalkBonused = (briskWalkMaxReward * earnRate) * 2
    const longWalkBonused = (longWalkMaxReward * earnRate) * 2
    const meditationBonused = (meditationMaxReward * earnRate) * 2
    const fiitBonused = (fiitMaxReward * earnRate) * 2

    await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Short Stroll", shortStrollBonused.toString(), true))()
    await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Brisk Walk", briskWalkBonused.toString(), true))()
    await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Long Walk", longWalkBonused.toString(), true))()
    await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Meditation", meditationBonused.toString(), true))()
    await scrollUntilIdVisible(ids.CHALLENGE_SET_SCROLL, ids.CHALLENGE_TILE_BOOST_TAG("Fiit Class", fiitBonused.toString(), true), "down")()
    await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Fiit Class", fiitBonused.toString(), true))()
}

export const yucoinTodayEarnedWithSurge = (yucoinStart: number, yucoinEarned: number) => async () => {
    const totalYuCoin = (yucoinStart + yucoinEarned)
    await textVisible(`${totalYuCoin} YuCoin today`)()
}


export function addCommasToNumber(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const stepsDoneToday = (steps: number) => async () => {
    const stepsComma = addCommasToNumber(steps)
    await textVisible(`${stepsComma} steps`)()
}

export const iCanSeeSurgeIcon = (multiplier: string, expireDate: string) => async () => {
    await idVisible(ids.TEXT_TEMPLATE(multiplier))()
    await idVisible(ids.TEXT_TEMPLATE(expireDate))()
    await idVisible(ids.SURGE_ICON)()
}

export const stepsChallengeDataCorrect = (stage: number, yucoinEarned: number, steps: number) =>  async () => {
    await textVisible(`Stage ${stage}`)()
    await textVisible(`${yucoinEarned}`)()
    await textVisible(`${steps} steps`)()
}

export const meditationChallengeDataCorrect = (stage: number, yucoinEarned: number, mins: number) =>  async () => {
    await textVisible(`Stage ${stage}`)()
    await textVisible(`${yucoinEarned}`)()
    await textVisible(`${mins} minutes`)()
}

export const celestialChestEarned = async () => {
    await wait(2000)()
    await idVisible(ids.CELESTIAL_CHEST_SCREEN)()
    await textVisible("You've earned the\nCelestial Chest!")() 
} 

export const celestialChestAwardsVisible = (user: typeof USER_1) => async () => {
    const yuCoinEarnt = user.data.earnRate * 100

    await textVisible("You have earned")()
    await idVisible(ids.CELESTIAL_CARD("25\nDonations"))() 
    await idVisible(ids.CELESTIAL_CARD(`${yuCoinEarnt}\nYuCoin`))() 
}

export const challengesAvailableVisible = async () => {
    await idVisible(ids.CHALLENGE_SET)()
    await idVisible(ids.CHALLENGE_TILE("Short Stroll"))()
    await idVisible(ids.CHALLENGE_TILE("Brisk walk"))()
    await idVisible(ids.CHALLENGE_TILE("Long Walk"))()
    await idVisible(ids.CHALLENGE_TILE("Meditation"))()
    await swipeFromText("Meditation", "up", "fast")()
    await idVisible(ids.CHALLENGE_TILE("Fiit Class"))()
    await swipeFromText("Fiit Class", "down", "fast")()
}

export const challengeStarsCorrect = (starCount: number, challengeType: string, ) => async () => {
    for (let i = 0; i < starCount; i += 1) {
        await expect(element(by.id(ids.CHALLENGE_HISTORY_STARS(i, challengeType)))).toBeVisible()
    }
}

export const challengesAndYuCoinsAwardedVisible = async () => {
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Short Stroll", "6", 3))()
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Brisk walk", "30", 3))()
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Long Walk", "24", 2))()
    await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Meditation", "12", 1))()
}

export const weeklyChallengeIsVisible = (amount: string) => async () => {
    await textVisible(`${amount} coins`)()
    await textVisible(amount)()
}

export const weeklyQuestsPopUpVisible = async () => {
    await textVisible("Weekly quest", 1000)()
    await textVisible("Pick your challenge.")()
    await weeklyChallengeIsVisible("100")()
    await textVisible("Let's go")()
}

export const challengeSelectedModalVisible = (amount: string, challengeAmount: string) => async () => {
    await textVisible("Reward", 500)()
    await textVisible(amount)()
    await textVisible(`0 / ${challengeAmount} challenges`)()
    await textVisible("Close")()
}

export const challengeProgressShown = (progress: number, max: number, color: string) => async () => {
    await idVisible(ids.WEEKLY_PROGRESS_BAR(progress, max, color), 1000)()
    await textVisible(`${progress} / ${max} challenges`)()
}

export const completedChallengeModalVisible = async () => {
    await textVisible("Done! Claim your reward.", 1000)()
    await textVisible("Claim")()
}

export const challengeIsClaimed = (progress: number, max: number) => async () => {
    await textVisible("Good job! Be sure to return next week.", 750)()
    await textVisible("Claimed")()
    await idVisible(ids.WEEKLY_PROGRESS_BAR(progress, max, "#40C057"))()
}